import{d as E,o as w,c as C,g as o,w as s,b as e,a as l,t as u,aj as D,U as P,S as k,ad as x}from"./vendor.530941a1.js";/* empty css               *//* empty css              */import{_ as b}from"./Card.6a87bafe.js";import{s as r,R as d}from"./index.123e8d2f.js";const $={class:"path"},B={class:"space-10 flex ai-center"},j={class:"space-10 flex ai-center"},N=E({setup(S){const h=require("path"),a=r.system,{shell:i}=require("electron");console.log(r);const c=d.app.call("getAppPath");console.log("appPath",c);const _=d.app.call("getPath","exe");console.log("exePath",_);const m=h.resolve(h.join(a.path.userData,"./config.json"));console.log("configPath",m);function g(f){r.system.path[f]=d.dialog.call("showOpenDialogSync",{properties:["openDirectory"],multiSelections:!1,defaultPath:r.system.path[f]}).pop()}return(f,t)=>{const y=D,p=P,F=k,v=x;return w(),C("div",null,[o(b,{bordered:!1,color:"blue",title:"\u7CFB\u7EDF\u8BBE\u7F6E"},{body:s(()=>[o(F,{column:1,labelStyle:{fontWeight:"bold"}},{default:s(()=>[o(p,{label:"\u7A97\u53E3\u7F6E\u9876"},{default:s(()=>[o(y,{checked:e(a).win.isAlwaysOnTop,"onUpdate:checked":t[0]||(t[0]=n=>e(a).win.isAlwaysOnTop=n),onChange:t[1]||(t[1]=n=>e(d).win.call("setAlwaysOnTop",e(a).win.isAlwaysOnTop))},null,8,["checked"])]),_:1})]),_:1})]),_:1}),o(b,{bordered:!1,color:"blue",title:"\u8DEF\u5F84\u8BBE\u7F6E"},{body:s(()=>[o(F,{column:1,labelStyle:{fontWeight:"bold"}},{default:s(()=>[o(p,{label:"\u8F6F\u4EF6\u8DEF\u5F84"},{default:s(()=>[l("span",{class:"path",onClick:t[2]||(t[2]=n=>e(i).openPath(e(c)))},u(e(c)),1)]),_:1}),o(p,{label:"\u53EF\u6267\u884C\u6587\u4EF6"},{default:s(()=>[l("span",{class:"path",onClick:t[3]||(t[3]=n=>e(i).showItemInFolder(e(_)))},u(e(_)),1)]),_:1}),o(p,{label:"\u914D\u7F6E\u6587\u4EF6",onClick:t[4]||(t[4]=n=>e(i).showItemInFolder(e(m)))},{default:s(()=>[l("span",$,u(e(m)),1)]),_:1}),o(p,{label:"\u7528\u6237\u6570\u636E"},{default:s(()=>[l("div",B,[l("span",{class:"path",onClick:t[5]||(t[5]=n=>e(i).openPath(e(a).path.userData))},u(e(a).path.userData),1),o(v,{onClick:t[6]||(t[6]=n=>g("userData"))})])]),_:1}),o(p,{label:"\u65E5\u5FD7\u5B58\u50A8"},{default:s(()=>[l("div",j,[l("span",{class:"path",onClick:t[7]||(t[7]=n=>e(i).openPath(e(a).path.logs))},u(e(a).path.logs),1),o(v,{onClick:t[8]||(t[8]=n=>g("logs"))})])]),_:1})]),_:1})]),_:1})])}}});export{N as default};