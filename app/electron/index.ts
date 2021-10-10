
import { info, log, error } from "console";
import { app, protocol, BrowserWindow, BrowserWindow as BW, shell, ipcMain } from "electron";
import path from "path";
import { getChromePath } from "../puppeteer";
import { Setting } from "../types";


import { BrowserConfig } from "./config";
import { RemoteRouter } from "./router/remote";
import { ScriptsRouter } from "./router/scripts";
import { UpdateRouter } from "./router/update";
import { StoreGet, StoreSet } from "./setting";

const t = Date.now()

// 判断开发环境
var mode = app.isPackaged ? 'prod' : 'dev'

info("开发环境:" + mode);


export let CurrentWindow: BW | undefined = undefined

app.disableHardwareAcceleration()
app.whenReady().then(async () => {
    // 注册协议
    protocol.registerFileProtocol('app', (req: any, callback: any) => {
        const url = req.url.replace('app://', '')
        const resolve = path.normalize(path.resolve(`./resources/app/public`, url))
        info({ path: resolve });
        callback({ path: resolve })
    })


    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })

    app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') app.quit()
    })


    initSetting()
    CurrentWindow = await createWindow()

    UpdateRouter()
    ScriptsRouter()
    RemoteRouter()

})






async function createWindow() {
    const win: any = new BrowserWindow(BrowserConfig)

    load()


    function load() {

        // Load a remote URL  
        const promise = mode === 'dev' ? win.loadURL('http://localhost:3000') : win.loadURL('app://./index.html')

        promise.then((result: any) => {
            win.show()
            win.webContents.openDevTools()
            log('启动用时:' + (Date.now() - t))
            // 拦截页面跳转
            win.webContents.on('will-navigate', (e: { preventDefault: () => void; }, url: any) => {
                e.preventDefault()
                shell.openExternal(url)
            })
            win.webContents.setWindowOpenHandler((data: { url: any; }) => {
                shell.openExternal(data.url)
                return {
                    action: 'deny'
                }
            })

        }).catch((err: any) => {

            setTimeout(() => {
                log('reloading!')
                load()
            }, 2000);
            error(err);
        });
    }


    return win

}


function initSetting() {

    const setting: Setting = StoreGet('setting')
    if (setting) {
        const { path, win } = setting.system
        if (path) {

            for (const key in path) {
                log('设置路径:' + key, (path as any)[key])
                app.setPath(key, (path as any)[key])

            }
        }

        if (win) {
            CurrentWindow?.setAlwaysOnTop(win.isAlwaysOnTop)
        }
    } else {

        const initSetting: Setting = {
            update: {
                autoUpdate: true,
                hour: 1,
                lastTime: 0
            },
            common: {
                task: {
                    maxTasks: 4,
                },

            },
            script: {
                // 启动设置
                launch: {
                    // 浏览器执行路径
                    binaryPath: getChromePath() || '',
                },
                // 脚本设置
                script: {
                    // 看视频
                    video: true,
                    // 做题
                    qa: true
                },
                // 信息设置
                account: {
                    // 查题码
                    queryToken: '',
                    // ocr 设置
                    ocr: {
                        username: '',
                        password: ''
                    }
                }
            },
            system: {
                win: {
                    isAlwaysOnTop: CurrentWindow?.isAlwaysOnTop() || true,
                },
                path: {
                    userData: app.getPath("userData"),
                    logs: app.getPath("logs"),
                },
            }
        }

        StoreSet('setting', initSetting)
    }

    if (!StoreGet('task')) {
        StoreSet('task', [])
    }
    if (!StoreGet('users')) {
        StoreSet('users', [])
    }
}



