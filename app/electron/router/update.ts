import { ipcMain, IpcMain } from "electron"
import { log } from "electron-log"
import path from "path"

import { IPCEventTypes } from "../../types"
import { StoreGet, StoreSet } from "../setting"
import { Updater } from "../updater"
import { JSDelivrUpdater } from "../updater/jsdelivr.updater"

 
let interval: NodeJS.Timeout
const updater: Updater = new JSDelivrUpdater(path.resolve('./resources/resource.zip'))
export async function UpdateRouter() {
    const setting = StoreGet('setting')
    if (setting.update) {
    
        start()
        // 注册服务
        ipcMain
            .on(IPCEventTypes.APP_UPDATE, async (e: Electron.IpcMainEvent, tag?: string) => {

                const need = await updater.needUpdate()
                log("APP_UPDATE", "needUpdate : " + need)
                if (need) {
                    updater.tag = tag
                    await updater.update()
                } else {
                    updater.APP_UPDATE.warn('已经是最新版本无需更新')
                }
            }).on(IPCEventTypes.IS_NEED_UPDATE, async (e: Electron.IpcMainEvent, tag?: string) => {
                updater.tag = tag
                e.returnValue = await updater.needUpdate()
            }).on(IPCEventTypes.CANCEL_APP_UPDATE, (e: Electron.IpcMainEvent) => {
                updater.APP_UPDATE.emit(IPCEventTypes.CANCEL_APP_UPDATE)
            })



    }
    // 开启自动更新
    function start() {
        const ms = setting.update.hour * 60 * 60 * 1000
        // 如果已经到达需要启动更新的时间
        if (Date.now() - setting.update.lastTime > ms) {
            check()
        }
        // 开始轮询更新
        interval = setInterval(check, ms)
    }

    async function check() {
        const setting = StoreGet('setting')
        if (setting.update.autoUpdate) {
            if (await updater.needUpdate()) {
                updater.APP_UPDATE.info('检测到新版本正在更新')
                const data = await updater.update()
                if (data) {
                    data.on('close', () => {
                        // 更新检测时间
                        const setting = StoreGet('setting')
                        setting.update.lastTime = Date.now()
                        StoreSet('setting', setting)
                    })
                }
            } else {
                // 更新检测时间
                const setting = StoreGet('setting')
                setting.update.lastTime = Date.now()
                StoreSet('setting', setting)
            }
        } else {
            // 如果自动更新关闭，则清除轮询器
            if (interval) clearInterval(interval)
        }
    }
}
