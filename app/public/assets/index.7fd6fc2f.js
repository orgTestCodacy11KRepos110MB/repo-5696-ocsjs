import{d as E,a2 as T,g as j,o as r,j as A,w as o,b as e,u as n,c,P as g,k as v,t as U,ae as L,ak as G,al as Q,am as X,$ as q,an as z,r as $,a as D,m as C,a1 as x,ao as H,ap as J,X as K,aq as W,ar as Y,as as Z,at as ee,au as ne,f as P,av as te,h as oe,Q as ue,R as le,aw as ae,ax as se}from"./vendor.b84abdcd.js";import{t as S}from"./task.2d154237.js";/* empty css               */import{t as ie,a as de,I as re,s as h}from"./index.247909bd.js";/* empty css               */const pe=v("\u8D85\u661F\u8D26\u53F7\u767B\u5F55"),_e=v("\u8D85\u661F\u624B\u673A\u53F7\u7801\u767B\u5F55"),fe=v("\u8D85\u661F\u673A\u6784\u767B\u5F55"),ce=v("\u8D85\u661F\u624B\u52A8\u767B\u5F55"),ve=v("\u667A\u6167\u6811\u624B\u673A\u53F7\u767B\u5F55"),me=v("\u667A\u6167\u6811\u5B66\u53F7\u767B\u5F55"),ge=v("\u667A\u6167\u6811\u624B\u52A8\u767B\u5F55"),Fe=v(" \u6682\u65E0\u8FD9\u79CD\u767B\u5F55\u65B9\u5F0F "),R=E({props:{btnText:{type:String,required:!0},user:{type:null,required:!1}},emits:["ok"],setup(k,{emit:I}){const p=k,F=require("uuid"),{btnText:d,user:m}=T(p),t=j((m==null?void 0:m.value)||b());function b(){return{uid:F.v4().replace(/-/g,""),name:"",loginTime:0,delete:!1,updateTime:Date.now(),createTime:Date.now(),loginInfo:{type:1,phone:"",password:""}}}return(w,u)=>{const l=L,a=G,i=Q,_=X,y=q,f=z;return r(),A(f,{model:n(t),"label-col":{span:6},"wrapper-col":{span:14}},{default:o(()=>[e(a,{label:"\u540D\u5B57/\u5907\u6CE8"},{default:o(()=>[e(l,{value:n(t).name,"onUpdate:value":u[0]||(u[0]=s=>n(t).name=s)},null,8,["value"])]),_:1}),e(a,{label:"\u767B\u5F55\u7C7B\u578B"},{default:o(()=>[e(_,{value:n(t).loginInfo.type,"onUpdate:value":u[1]||(u[1]=s=>n(t).loginInfo.type=s)},{default:o(()=>[e(i,{value:1},{default:o(()=>[pe]),_:1}),e(i,{value:2},{default:o(()=>[_e]),_:1}),e(i,{value:3},{default:o(()=>[fe]),_:1}),e(i,{value:4},{default:o(()=>[ce]),_:1}),e(i,{value:5},{default:o(()=>[ve]),_:1}),e(i,{value:6},{default:o(()=>[me]),_:1}),e(i,{value:7},{default:o(()=>[ge]),_:1})]),_:1},8,["value"])]),_:1}),n(t).loginInfo.type===1?(r(),c(g,{key:0},[e(a,{label:"\u8D26\u53F7"},{default:o(()=>[e(l,{value:n(t).loginInfo.phone,"onUpdate:value":u[2]||(u[2]=s=>n(t).loginInfo.phone=s)},null,8,["value"])]),_:1}),e(a,{label:"\u5BC6\u7801"},{default:o(()=>[e(l,{value:n(t).loginInfo.password,"onUpdate:value":u[3]||(u[3]=s=>n(t).loginInfo.password=s)},null,8,["value"])]),_:1})],64)):n(t).loginInfo.type===2?(r(),A(a,{key:1,label:"\u624B\u673A\u53F7"},{default:o(()=>[e(l,{value:n(t).loginInfo.phone,"onUpdate:value":u[4]||(u[4]=s=>n(t).loginInfo.phone=s)},null,8,["value"])]),_:1})):n(t).loginInfo.type===3?(r(),c(g,{key:2},[e(a,{label:"\u5B66\u6821/\u5355\u4F4D"},{default:o(()=>[e(l,{value:n(t).loginInfo.unitname,"onUpdate:value":u[5]||(u[5]=s=>n(t).loginInfo.unitname=s)},null,8,["value"])]),_:1}),e(a,{label:"\u5DE5\u53F7/\u5B66\u53F7"},{default:o(()=>[e(l,{value:n(t).loginInfo.uname,"onUpdate:value":u[6]||(u[6]=s=>n(t).loginInfo.uname=s)},null,8,["value"])]),_:1}),e(a,{label:"\u5BC6\u7801"},{default:o(()=>[e(l,{value:n(t).loginInfo.password,"onUpdate:value":u[7]||(u[7]=s=>n(t).loginInfo.password=s)},null,8,["value"])]),_:1})],64)):n(t).loginInfo.type===4?(r(),c(g,{key:3},[],64)):n(t).loginInfo.type===5?(r(),c(g,{key:4},[e(a,{label:"\u624B\u673A\u53F7"},{default:o(()=>[e(l,{value:n(t).loginInfo.phone,"onUpdate:value":u[8]||(u[8]=s=>n(t).loginInfo.phone=s)},null,8,["value"])]),_:1}),e(a,{label:"\u5BC6\u7801"},{default:o(()=>[e(l,{value:n(t).loginInfo.password,"onUpdate:value":u[9]||(u[9]=s=>n(t).loginInfo.password=s)},null,8,["value"])]),_:1})],64)):n(t).loginInfo.type===6?(r(),c(g,{key:5},[e(a,{label:"\u5B66\u6821\u540D"},{default:o(()=>[e(l,{value:n(t).loginInfo.school,"onUpdate:value":u[10]||(u[10]=s=>n(t).loginInfo.school=s)},null,8,["value"])]),_:1}),e(a,{label:"\u5B66\u53F7"},{default:o(()=>[e(l,{value:n(t).loginInfo.studentId,"onUpdate:value":u[11]||(u[11]=s=>n(t).loginInfo.studentId=s)},null,8,["value"])]),_:1}),e(a,{label:"\u5BC6\u7801"},{default:o(()=>[e(l,{value:n(t).loginInfo.password,"onUpdate:value":u[12]||(u[12]=s=>n(t).loginInfo.password=s)},null,8,["value"])]),_:1})],64)):n(t).loginInfo.type===7?(r(),c(g,{key:6},[],64)):(r(),c(g,{key:7},[Fe],64)),e(a,{"wrapper-col":{span:4,offset:16}},{default:o(()=>[e(y,{type:"primary",onClick:u[13]||(u[13]=s=>I("ok",n(t)))},{default:o(()=>[v(U(n(d)),1)]),_:1})]),_:1})]),_:1},8,["model"])}}}),ye={class:"user-info"},Ie={class:"font-v4"},Be=E({props:{user:{type:null,required:!0}},emits:["delete","modify"],setup(k,{emit:I}){const p=k,{ipcRenderer:F}=require("electron"),{user:d}=T(p),m=$(!1);function t(){m.value=!1,I("modify",d.value)}function b(){m.value=!0}function w(){var a,i,_;const u=d.value,l=ie(((a=u.loginInfo)==null?void 0:a.type)||-1);if(l){const y=l+((i=u.loginInfo)==null?void 0:i.type)?"-"+((_=u.loginInfo)==null?void 0:_.type):"-"+u.uid;if(S.find(f=>f.name===y))C.warn("\u8BE5\u8D26\u53F7\u5DF2\u7ECF\u542F\u52A8!");else{const f={name:y,script:l,user:x(u),ocrOptions:x(de.script.account.ocr),pasue:!1};S.push(f),console.log(x(f)),F.send(re.SCRIPT_LOGIN,x(f)),C.success("\u5DF2\u6DFB\u52A0\u81F3\u4EFB\u52A1\u5217\u8868!")}}else C.error("\u4EFB\u52A1\u542F\u52A8\u5931\u8D25, \u672A\u77E5\u7684\u767B\u5F55\u7C7B\u578B")}return(u,l)=>{const a=H,i=J,_=K,y=W,f=Y,s=Z,B=ee,N=ne,M=P,V=te;return r(),A(V,{hoverable:"",style:{width:"210px",margin:"8px"},bodyStyle:{padding:"12px",display:"flex",alignItems:"baseline"}},{actions:o(()=>[e(_,{content:"\u5220\u9664"},{default:o(()=>[e(i,{title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u8D26\u53F7\u5417","ok-text":"\u786E\u5B9A","cancel-text":"\u53D6\u6D88",onConfirm:l[0]||(l[0]=O=>I("delete",n(d)))},{default:o(()=>[e(a)]),_:1})]),_:1}),e(_,{content:"\u4FEE\u6539"},{default:o(()=>[e(y,{onClick:b})]),_:1}),e(_,{content:"\u542F\u52A8"},{default:o(()=>[e(f,{onClick:w})]),_:1})]),default:o(()=>[e(N,null,{title:o(()=>[D("span",ye,[v(U(n(d).name)+" ",1),D("span",Ie,U(n(d).loginInfo.phone||n(d).loginInfo.uname||n(d).loginInfo.studentId),1)])]),avatar:o(()=>[e(B,null,{icon:o(()=>[e(s)]),_:1})]),_:1}),e(M,{visible:m.value,"onUpdate:visible":l[1]||(l[1]=O=>m.value=O),title:"\u4FEE\u6539\u7528\u6237",footer:null,width:"400px",destroyOnClose:!0},{default:o(()=>[e(R,{onOk:t,btnText:"\u4FEE\u6539",user:n(d)},null,8,["user"])]),_:1},8,["visible"])]),_:1})}}});const xe={style:{"text-align":"center",padding:"0px 50px",height:"100%"}},be={key:0,style:{width:"100%",height:"100%"},class:"flex jc-center ac-center ai-center"},De=v(" \u6DFB\u52A0\u8D26\u53F7 "),ke={style:{margin:"18px auto",width:"420px"}},we={class:"flex wrap"},Ae={style:{width:"210px",height:"100px"},class:"flex ac-center ai-center jc-center add-card"},Oe=E({setup(k){const I=h.get("users");I||h.set("users",[]);const p=j(I||[]),F=$(!1),d=$(""),m=l=>{F.value=!1,p.push(l),console.log("add-user",l),C.success("\u521B\u5EFA\u6210\u529F!")};function t(l){return l.filter(i=>{if(i.name.indexOf(d.value)!==-1)return i;for(const _ in i.loginInfo)if(i.loginInfo[_].toString().indexOf(d.value)!==-1)return i})}function b(l){p.splice(p.findIndex(a=>a.uid===l.uid),1)}function w(l){Object.assign(p,p.map(a=>a.uid===l.uid?l:a))}function u(){F.value=!0}return oe(p,()=>{console.log(x(p)),h.set("users",x(p))}),(l,a)=>{const i=se,_=q,y=le,f=ae,s=P;return r(),c("div",xe,[n(p).length===0?(r(),c("div",be,[e(y,{description:""},{default:o(()=>[e(_,{type:"primary",shape:"round",onClick:u},{icon:o(()=>[e(i)]),default:o(()=>[De]),_:1})]),_:1})])):(r(),c(g,{key:1},[D("div",ke,[e(f,{value:d.value,"onUpdate:value":a[0]||(a[0]=B=>d.value=B),placeholder:"\u8F93\u5165\u540D\u5B57\uFF0C\u6216\u8005\u5176\u4ED6\u4FE1\u606F\u7247\u6BB5","enter-button":"",style:{"border-radius":"12px"}},null,8,["value"])]),D("div",we,[(r(!0),c(g,null,ue(t(n(p)),B=>(r(),A(Be,{user:B,onDelete:b,onModify:w},null,8,["user"]))),256)),D("div",Ae,[e(_,{type:"primary",shape:"circle",onClick:u},{icon:o(()=>[e(i)]),_:1})])])],64)),e(s,{visible:F.value,"onUpdate:visible":a[1]||(a[1]=B=>F.value=B),title:"\u6DFB\u52A0\u7528\u6237",footer:null,width:"400px",destroyOnClose:!0},{default:o(()=>[e(R,{onOk:m,btnText:"\u6DFB\u52A0"})]),_:1},8,["visible"])])}}});export{Oe as default};