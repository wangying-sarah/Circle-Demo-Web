(self.webpackChunkcircle=self.webpackChunkcircle||[]).push([[384],{5360:function(e,n,t){"use strict";t.d(n,{Z:function(){return Z}});var i=t(9439),s=t(2791),a=t(3020),r="index_emojiWrap__+lPp+",o="index_emojiContentWrap__zujpz",c="index_allEmojiContent__aY3Jk",l="index_emojiItemWrap__z1+MV",d="index_emoji__aahSe",u="index_emojiContent__HfKOK",m="index_freEmojiWrap__T4bju",v="index_title__igdQH",f="index_emojiPopover__kwwu8",h="index_active__cyF3v",p="index_normal__mwGUf",_="index_icon__Hes4J",x="index_emojiIconCon__pF6Ey",j=t(1091),g=t(3692),N=t(8406),C=t(184),y=function(e){var n=e.onSelect,t=e.showFrequently,i=JSON.parse(localStorage.getItem("frequentlyEmoji"))||[];return(0,C.jsx)("div",{className:o,children:(0,C.jsxs)("div",{className:u,children:[i.length?t&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("div",{className:v,children:"\u5e38\u7528"}),(0,C.jsx)("div",{className:m,children:i.map((function(e){return(0,C.jsx)("div",{className:l,children:(0,C.jsx)("img",{className:d,width:20,height:20,src:g.A.get(e),alt:e,onClick:function(){n({id:e})}},e)},e)}))}),(0,C.jsx)("div",{className:v,children:"\u5168\u90e8\u8868\u60c5"})]}):(0,C.jsx)(C.Fragment,{}),(0,C.jsx)("div",{className:c,children:g.h.emojis.map((function(e){return(0,C.jsx)("div",{className:l,children:(0,C.jsx)("img",{className:d,width:20,height:20,src:e.src,alt:e.id,onClick:function(){n(e)}},e.id)},e.id)}))})]})})},I=function(e){var n=(0,s.useState)(!1),t=(0,i.Z)(n,2),o=t[0],c=t[1],l=e.showFrequently,d=void 0!==l&&l,u=e.emojiIcon,m=void 0===u?"emoji_plus":u,v=(0,s.useRef)();return(0,s.useEffect)((function(){var e=function(e){var n=v.current;n&&(n.contains(e.target)||c(!1))};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[]),(0,C.jsx)("div",{ref:v,className:r,children:(0,C.jsx)("div",{children:(0,C.jsx)(a.Z,{content:(0,C.jsx)(y,{showFrequently:d,onSelect:function(n){d&&(0,N.Jm)(n.id),null===e||void 0===e||e.onEmojiSelect(n),c(!1)}}),trigger:"click",visible:o,destroyTooltipOnHide:{keepParent:!1},overlayClassName:f,placement:"bottomRight",children:(0,C.jsx)("div",{className:x,onClick:function(){c(!o)},children:e.children||(0,C.jsx)(j.Z,{size:"emoji_plus"===m?"22px":"30px",iconClass:o?"".concat(_," ").concat(h):"".concat(_," ").concat(p),name:m})})})})})},Z=(0,s.memo)(I)},4760:function(e,n,t){"use strict";t.d(n,{Z:function(){return E}});var i=t(4165),s=t(1413),a=t(5861),r=t(9439),o=t(2791),c=t(6059),l=t.n(c),d="index_controlWrap__X1y6N",u="index_IconCon__ANkvM",m="index_icon__d8ooF",v="index_editableContainer__UzgCM",f="index_optWrap__7iLim",h="index_emojiMsg__v0p+F",p="index_inputWrap__khdCG",_="index_upload__6a2vq",x=t(6014),j=t(9553),g=t(3695),N=t(7382),C=t(8406),y=t(7196),I=t(8687),Z=t(1091),b=t(5360),k=t(7411),w=t(184),T=function(){setTimeout((function(){(0,C.Og)(document.getElementById(y.jZ))}),300)},E=(0,o.memo)((0,I.$j)((function(e){e.channel;var n=e.thread;return{currentThreadInfo:n.currentThreadInfo,isCreatingThread:n.isCreatingThread}}),(function(e){return{insertChatMessage:function(n){return e({type:"app/insertChatMessage",payload:n})},setThreadMessage:function(n){return e({type:"thread/setThreadMessage",payload:n})}}}))((function(e){var n,t=e.insertChatMessage,c=e.fromId,y=e.chatType,I=e.isThread,E=e.isCreatingThread,U=e.threadName,S=e.currentThreadInfo,M=e.setThreadMessage,D=(0,o.useState)(""),O=(0,r.Z)(D,2),z=O[0],R=O[1],L=(0,o.useRef)(""),F=(0,o.useRef)(),P=(0,o.useRef)(c),A=function(){var e=getSelection();F.current=e.getRangeAt(0)},B=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(a){var r,o;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=a,o=function(n){return(0,C.bD)({chatType:y,type:"img",to:n,isChatThread:e.isThread,file:(0,C.Ai)(r),onFileUploadError:function(){console.log("onFileUploadError")},onFileUploadProgress:function(e){console.log(e)},onFileUploadComplete:function(){console.log("onFileUploadComplete")}})},q().then((function(e){var n=o(e);(0,C.j5)(n).then((function(i){n.isChatThread?M({message:(0,s.Z)((0,s.Z)({},n),{},{from:k.Z.conn.user}),fromId:e}):(t({chatType:y,fromId:e,messageInfo:{list:[(0,s.Z)((0,s.Z)({},n),{},{from:k.Z.conn.user})]}}),T())}))}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),J=(0,w.jsx)(x.Z,{items:[{key:"img",label:(0,w.jsx)(j.Z,{beforeUpload:B,accept:"image/*",maxCount:1,showUploadList:!1,className:_,children:(0,w.jsxs)("div",{className:"circleDropItem",children:[(0,w.jsx)(Z.Z,{name:"img",size:"24px",iconClass:"circleDropMenuIcon"}),(0,w.jsx)("span",{className:"circleDropMenuOp",children:"\u53d1\u9001\u56fe\u7247"})]})})},{key:"file",label:(0,w.jsx)(j.Z,{beforeUpload:function(n){q().then((function(i){var a=function(t){return(0,C.bD)({chatType:y,type:"file",to:t,isChatThread:e.isThread,file:(0,C.Ai)(n),filename:n.name,ext:{file_length:n.size,file_type:n.type},onFileUploadError:function(){console.log("onFileUploadError")},onFileUploadProgress:function(e){console.log(e)},onFileUploadComplete:function(){console.log("onFileUploadComplete")}})}(i);(0,C.j5)(a).then((function(){a.isChatThread?M({message:(0,s.Z)((0,s.Z)({},a),{},{from:k.Z.conn.user}),fromId:i}):(t({chatType:y,fromId:i,messageInfo:{list:[(0,s.Z)((0,s.Z)({},a),{},{from:k.Z.conn.user})]}}),T())}))}))},accept:"*",maxCount:1,showUploadList:!1,className:_,children:(0,w.jsxs)("div",{className:"circleDropItem",children:[(0,w.jsx)(Z.Z,{name:"clip",size:"24px",iconClass:"circleDropMenuIcon"}),(0,w.jsx)("span",{className:"circleDropMenuOp",children:"\u53d1\u9001\u9644\u4ef6"})]})})}]}),q=(0,o.useCallback)((function(){return new Promise((function(e,n){if(E&&I){if(!U)return void g.ZP.warn({content:"\u5b50\u533a\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01"});var t={name:U.replace(/(^\s*)|(\s*$)/g,""),messageId:S.parentMessage.id,parentId:P.current};k.Z.conn.createChatThread(t).then((function(n){var t,i=null===(t=n.data)||void 0===t?void 0:t.chatThreadId;e(i)}))}else e(I?S.id:P.current)}))}),[null===S||void 0===S?void 0:S.id,null===S||void 0===S||null===(n=S.parentMessage)||void 0===n?void 0:n.id,E,I,U]),H=(0,o.useCallback)((function(){z&&q().then((function(n){var i=(0,C.bD)({chatType:y,type:"txt",to:n,msg:(0,C.a9)(L.current.innerHTML),isChatThread:e.isThread});(0,C.j5)(i).then((function(){R(""),i.isChatThread?M({message:(0,s.Z)((0,s.Z)({},i),{},{from:k.Z.conn.user}),fromId:n}):(t({chatType:y,fromId:n,messageInfo:{list:[(0,s.Z)((0,s.Z)({},i),{},{from:k.Z.conn.user})]}}),T())}))}))}),[z,e,q,y,M,t]),W=(0,o.useCallback)((function(e){13===e.keyCode&&(e.preventDefault(),H())}),[H]),K=function(e){(0,C.sK)(e,null===F||void 0===F?void 0:F.current)},G=(0,o.useCallback)((function(e){var n=(e.clipboardData||window.clipboardData).getData("text/plain");L.current.focus();var t=(0,C.OT)(n);K(t),A(),R(L.current.innerHTML),e.preventDefault()}),[]);return(0,o.useEffect)((function(){return L.current.addEventListener("keydown",W),function(){var e;L&&(null===L||void 0===L||null===(e=L.current)||void 0===e||e.removeEventListener("keydown",W))}}),[W]),(0,o.useEffect)((function(){P.current=c}),[c]),(0,o.useEffect)((function(){var e=null===L||void 0===L?void 0:L.current;return null===L||void 0===L||L.current.addEventListener("paste",G),function(){e.removeEventListener("paste",G)}}),[G]),(0,w.jsxs)("div",{className:d,children:[(0,w.jsx)("div",{className:v,children:(0,w.jsx)(l(),{innerRef:L,className:p,html:z,disabled:!1,onDrop:function(e){e.preventDefault()},onClick:function(){A()},onKeyUp:function(){A()},placeholder:"\u53d1\u9001\u6d88\u606f",contentEditable:"true",onChange:function(e){R(e.target.value)}})}),(0,w.jsxs)("div",{className:f,children:[(0,w.jsx)(b.Z,{onEmojiSelect:function(e){L.current.focus(),document.createElement("img").src=e.src,K((0,C.Jn)({src:e.src,dataKey:e.id,alt:e.id,className:h})),A(),R(L.current.innerHTML)},emojiIcon:"emoji"}),(0,w.jsx)(N.Z,{overlay:J,placement:"top",overlayClassName:"circleDropDown",trigger:"click",children:(0,w.jsx)("div",{className:u,children:(0,w.jsx)(Z.Z,{iconClass:m,name:"add_in_circle"})})})]})]})})))},7115:function(e,n,t){"use strict";t.d(n,{Z:function(){return Qe}});var i=t(9439),s=t(2718),a="index_layout__wV4Cl",r="index_selected__LKQMj",o="index_message__wCmJ1",c="index_messageInfo__WnNgs",l="index_bar__edY7S",d="index_operation__kRa9d",u="index_avatar__L5R3k",m="index_l__kW+f8",v="index_name__od6cM",f="index_date__+1qeD",h="index_content__Urdez",p="index_channelUserInfo__QU-b4",_=t(2791),x="index_main__lsgSD",j="index_txt__mOpQN",g=t(8406),N=t(184),C=function(e){var n=e.message;return(0,N.jsx)("div",{className:x,children:(0,N.jsx)("div",{className:j,children:(0,g.BV)(n.msg)})})},y=(0,_.memo)(C),I="index_main__8fbAr",Z="index_fileCon__KNt8J",b="index_flag__YdeOp",k="index_info__xXsPq",w="index_fileName__jN2to",T="index_more__3GKss",E="index_size__yJ0F8",U="index_download__J33wJ",S="index_iconColor__tJudW",M=t(1091),D=t(9205),O=t.n(D),z=function(e){var n,t,i=e.message;return(0,N.jsx)("div",{className:I,children:(0,N.jsxs)("div",{className:Z,children:[(0,N.jsx)("div",{className:b,children:(0,N.jsx)(M.Z,{name:"file",size:"42px"})}),(0,N.jsxs)("div",{className:k,children:[(0,N.jsx)("div",{className:w,children:i.filename}),(0,N.jsxs)("div",{className:T,children:[(null===i||void 0===i||null===(n=i.ext)||void 0===n?void 0:n.file_length)&&(0,N.jsx)("span",{className:E,children:Math.floor((null===i||void 0===i||null===(t=i.ext)||void 0===t?void 0:t.file_length)/1024)+"KB"}),(0,N.jsx)("span",{className:U,onClick:function(){fetch(i.url).then((function(e){return e.blob()})).then((function(e){O()(e,i.filename)})).catch((function(e){return console.log(e),!1})).finally((function(e){return!0}))},children:(0,N.jsx)(M.Z,{name:"arrow_down_in_box",size:"14px",iconClass:S})})]})]})]})})},R=(0,_.memo)(z),L="index_main__pP9Ot",F="index_imgCon__gMxNI",P=t(1992),A=function(e){var n=e.message;return(0,N.jsx)("div",{className:L,children:(0,N.jsx)("div",{className:F,children:(0,N.jsx)(P.Z,{src:"".concat(n.url,"?thumbnail=true"),placeholder:!0,preview:{src:n.url}})})})},B=(0,_.memo)(A),J="index_main__1FFLF",q="index_txt__vSko8",H=function(e){var n=e.message;return(0,N.jsx)("div",{className:J,children:(0,N.jsx)("div",{className:q,children:n.msg})})},W=(0,_.memo)(H),K=t(1413),G="index_main__Y2Q+W",Q="index_canHover__RxuBe",V="index_custom__mtuBw",Y="index_iconCon__88MpN",$="index_infoCon__WUEG-",X="index_inviteInfo__ba1HK",ee="index_serverName__uI+F9",ne="index_channelName__FVLpy",te="index_customCon__NuY3u",ie=t(7196),se=t(7411),ae=t(3695),re=t(5873),oe=t(7459),ce=t(8687),le=(0,_.memo)((0,ce.$j)((function(e){return{appUserInfo:e.app.appUserInfo}}),(function(e){return{insertChatMessage:function(n){return e({type:"app/insertChatMessage",payload:n})},setServerRole:function(n){return e({type:"app/setServerRole",payload:n})}}}))((function(e){var n,t,i,a=e.message,r=e.insertChatMessage,o=e.appUserInfo,c=e.setServerRole,l=a.customEvent===ie.ET.inviteServer,d=a.customEvent===ie.qm.acceptInviteServer||a.customEvent===ie.qm.acceptInviteChannel,u="";d&&(u=a.customEvent===ie.qm.acceptInviteServer?"\u5df2\u52a0\u5165\u793e\u533a ".concat(null===(t=a.customExts)||void 0===t?void 0:t.server_name):"\u5df2\u52a0\u5165\u9891\u9053".concat(null===(i=a.customExts)||void 0===i?void 0:i.server_name,"-#").concat(a.customExts.channel_name));var m,v,f,h,p=l?"":(null===(n=a.customExts)||void 0===n?void 0:n.channel_name)||"",_=l?"\u9080\u8bf7\u60a8\u52a0\u5165\u793e\u533a":"\u9080\u8bf7\u60a8\u52a0\u5165\u9891\u9053",x=a.to===se.Z.conn.user;return d?(0,N.jsxs)("div",{className:te,children:[a.from===se.Z.conn.user?"\u6211":(null===(m=o[a.from])||void 0===m?void 0:m.nickname)||a.from,u]}):(0,N.jsx)("div",{className:G,children:(0,N.jsxs)("div",{className:"".concat(V," ").concat(x?Q:null),onClick:function(){if(x){var e,n=(0,g.OK)({title:(0,N.jsx)("div",{style:{color:"#fff"},children:_}),okText:"\u7acb\u5373\u52a0\u5165",cancelText:"\u6682\u4e0d\u52a0\u5165",content:(0,N.jsx)(oe.Z,{serverId:null===(e=a.customExts)||void 0===e?void 0:e.server_id,isServerInvite:l,channelName:p}),onOk:function(){return function(){var e,n,t;l?se.Z.conn.acceptServerInvite({serverId:null===(e=a.customExts)||void 0===e?void 0:e.server_id,inviter:a.from}).then((function(e){var n,t;(0,g.w7)(null===(n=a.customExts)||void 0===n?void 0:n.server_id);var i=(0,g.bD)({chatType:ie.zi.groupChat,type:"custom",to:e.data.defaultChannelId,customEvent:ie.qm.acceptInviteServer,customExts:{server_name:null===(t=a.customExts)||void 0===t?void 0:t.server_name}});(0,g.j5)(i).then((function(){var e;r({chatType:i.chatType,fromId:i.to,messageInfo:{list:[(0,K.Z)((0,K.Z)({},i),{},{from:se.Z.conn.user})]}});var n=(null===(e=a.customExts)||void 0===e?void 0:e.server_id)||"";se.Z.conn.getServerRole({serverId:n}).then((function(e){c({serverId:n,role:e.data.role})}))}))})).catch((function(e){"User is already in server."===e.message?ae.ZP.warn({content:"\u5df2\u7ecf\u5728\u793e\u533a\u4e86\uff01"}):ae.ZP.warn({content:"\u52a0\u5165\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\uff01"})})):se.Z.conn.acceptChannelInvite({serverId:null===(n=a.customExts)||void 0===n?void 0:n.server_id,channelId:null===(t=a.customExts)||void 0===t?void 0:t.channel_id,inviter:a.from}).then((function(e){var n,t,i,s,o;(0,g.MD)(null===(n=a.customExts)||void 0===n?void 0:n.server_id,null===(t=a.customExts)||void 0===t?void 0:t.channel_id,e.data);var c=(0,g.bD)({chatType:ie.zi.groupChat,type:"custom",to:null===(i=a.customExts)||void 0===i?void 0:i.channel_id,customEvent:ie.qm.acceptInviteChannel,customExts:{server_name:null===(s=a.customExts)||void 0===s?void 0:s.server_name,channel_name:null===(o=a.customExts)||void 0===o?void 0:o.channel_name}});(0,g.j5)(c).then((function(){r({chatType:c.chatType,fromId:c.to,messageInfo:{list:[(0,K.Z)((0,K.Z)({},c),{},{from:se.Z.conn.user})]}})}))})).catch((function(e){"User is already in channel."===e.message?ae.ZP.warn({content:"\u5df2\u7ecf\u5728\u9891\u9053\u4e86\uff01"}):ae.ZP.warn({content:"\u52a0\u5165\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\uff01"})}))}()},onCancel:function(){return function(){var e,n,t;l?se.Z.conn.rejectServerInvite({serverId:null===(e=a.customExts)||void 0===e?void 0:e.server_id,inviter:a.from}):se.Z.conn.rejectChannelInvite({serverId:null===(n=a.customExts)||void 0===n?void 0:n.server_id,channelId:null===(t=a.customExts)||void 0===t?void 0:t.channel_id,inviter:a.from})}()}});re.Z.confirm(n)}},children:[(0,N.jsx)("div",{className:Y,children:(0,N.jsx)(s.Z,{size:48,src:null===(v=a.customExts)||void 0===v?void 0:v.icon,shape:"square",isServer:!0})}),(0,N.jsxs)("div",{className:$,children:[(0,N.jsx)("div",{className:X,children:_}),(0,N.jsx)("div",{className:ee,children:null===(f=a.customExts)||void 0===f?void 0:f.server_name}),!l&&(0,N.jsxs)("div",{className:ne,children:["#",null===(h=a.customExts)||void 0===h?void 0:h.channel_name]})]})]})})}))),de="index_main__Nzbwt",ue="index_list__6TCpR",me="index_iconItem__4dr5F",ve=t(6014),fe=t(6573),he=t(7382),pe=t(5360),_e=t(8029),xe=(ae.ZP,function(e){var n=e.type,t=e.canCreateThread,i=e.parent,s=e.operation,a=e.message,r=e.source,o={1:"recall",2:"copy"},c=function(e){var n=e.key;s(o[n])},l=(0,_.createRef)(),d="txt"===a.type||"txt"!==a.type&&a.from===se.Z.conn.user;return(0,N.jsx)("div",{className:de,children:(0,N.jsxs)("div",{className:ue,children:[(0,N.jsx)("div",{className:me,ref:l,children:(0,N.jsx)(pe.Z,{showFrequently:!0,onEmojiSelect:function(e){var n;n=e.id,(0,g.UT)({messageId:a.id,reaction:n})},children:(0,N.jsx)(fe.Z,{title:"\u6d88\u606f\u56de\u5e94",overlayClassName:"toolTip",getPopupContainer:function(){return l.current},children:(0,N.jsx)("div",{children:(0,N.jsx)(M.Z,{name:"emoji_plus",size:"20px"})})})})}),"groupChat"===r&&(0,N.jsx)(fe.Z,{title:t?"\u521b\u5efa\u5b50\u533a":"\u663e\u793a\u5b50\u533a",overlayClassName:"toolTip",children:(0,N.jsx)("div",{className:me,onClick:function(){return s(t?"createThread":"openThreadPanel")},children:(0,N.jsx)(M.Z,{name:"message_on_message",size:"20px"})})}),d&&(0,N.jsx)(he.Z,{overlay:function(e){var n=[];return a.from===se.Z.conn.user&&n.push({key:"1",label:(0,N.jsxs)("div",{className:"circleDropItem",children:[(0,N.jsx)(M.Z,{name:"arrow_back",size:"24px",iconClass:"circleDropMenuIcon"}),(0,N.jsx)("span",{className:"circleDropMenuOp",children:"\u64a4\u56de"})]})}),"txt"===e&&n.push({key:"2",label:(0,N.jsx)(_e.CopyToClipboard,{text:a.msg,onCopy:function(){return console.log("\u5df2\u590d\u5236")},children:(0,N.jsxs)("div",{className:"circleDropItem",children:[(0,N.jsx)(M.Z,{name:"square_2-01",size:"24px",iconClass:"circleDropMenuIcon"}),(0,N.jsx)("span",{className:"circleDropMenuOp",children:"\u590d\u5236"})]})})}),(0,N.jsx)(ve.Z,{items:n,onClick:c})}(n),placement:"bottomRight",trigger:["click"],overlayClassName:"circleDropDown",getPopupContainer:function(){return i.current?i.current:document.body},children:(0,N.jsx)("div",{className:me,children:(0,N.jsx)(M.Z,{name:"ellipsis",size:"20px"})})})]})})}),je=(0,_.memo)(xe),ge="index_main__jxWYa",Ne="index_flag__HHrlG",Ce="index_thread__poQA6",ye="index_layout__r6S6k",Ie="index_info__Xyrl9",Ze="index_infoLeft__iOBgS",be="index_icon__EK71Z",ke="index_threadName__C4jrN",we="index_count__6Q47n",Te="index_messageCount__xBOzW",Ee="index_content__NNoiE",Ue="index_avatar__5vUZt",Se="index_message__nc05T",Me="index_messageInfo__mYHU-",De="index_sender__tIfpu",Oe="index_time__6PQra",ze="index_text__3RX0N",Re=(0,_.memo)((0,ce.$j)((function(e){return{appUserInfo:e.app.appUserInfo}}),null)((function(e){var n,t,i=e.thread,a=e.clickCount,r=e.appUserInfo;return(0,N.jsxs)("div",{className:ge,children:[(0,N.jsx)("div",{className:Ne,children:(0,N.jsx)(M.Z,{name:"bend_line_big",size:"20px",color:"#767676"})}),(0,N.jsx)("div",{className:Ce,onClick:a,children:(0,N.jsxs)("div",{className:ye,children:[(0,N.jsxs)("div",{className:Ie,children:[(0,N.jsxs)("div",{className:Ze,children:[(0,N.jsx)("span",{className:be,children:(0,N.jsx)(M.Z,{name:"hashtag_message",size:"18px"})}),(0,N.jsx)("span",{className:ke,children:i.name})]}),(0,N.jsxs)("div",{className:we,children:[(0,N.jsx)("span",{className:Te,children:i.messageCount?i.messageCount<100?i.messageCount:"99+":0}),(0,N.jsx)(M.Z,{name:"shevron_right",size:"12px",color:"#27AE60"})]})]}),i.lastMessage&&"{}"!==JSON.stringify(i.lastMessage)?(0,N.jsxs)("div",{className:Ee,children:[(0,N.jsx)("div",{className:Ue,children:(0,N.jsx)(s.Z,{size:24,src:null===(n=r[i.lastMessage.from])||void 0===n?void 0:n.avatarurl})}),(0,N.jsxs)("div",{className:Se,children:[(0,N.jsxs)("div",{className:Me,children:[(0,N.jsx)("span",{className:De,children:(null===(t=r[i.lastMessage.from])||void 0===t?void 0:t.nickname)||i.lastMessage.from}),(0,N.jsx)("span",{className:Oe,children:(0,g.og)(i.lastMessage.time)})]}),(0,N.jsx)("div",{className:ze,children:function(e){var n="";switch(e.type){case"txt":n=(0,g.BV)(e.msg);break;case"file":n="/\u6587\u4ef6/";break;case"img":n="/\u56fe\u7247\u6d88\u606f/"}return n}(i.lastMessage)})]})]}):(0,N.jsx)("div",{className:Ee,children:"\u6682\u65e0\u6d88\u606f"})]})})]})}))),Le="index_main__SLJOW",Fe="index_con__S4DlV",Pe="index_active__ZI3c9",Ae="index_add__pK4Cf",Be=function(e){var n=e.reaction,t=e.msgId,i=(0,_.useMemo)((function(){return n.filter((function(e){return e.count>0}))}),[n]),s=function(e){var n=e.info;return(0,N.jsxs)("div",{onClick:function(){n.isAddedBySelf?r(n):a(n)},className:"".concat(Fe," ").concat(n.isAddedBySelf?Pe:""),children:[(0,N.jsx)("span",{children:(0,g.BV)(n.reaction)}),(0,N.jsx)("span",{children:n.count})]})},a=function(e){var n=e.reaction;(0,g.UT)({messageId:t,reaction:n})},r=function(e){var n=e.reaction;(0,g.Di)({messageId:t,reaction:encodeURIComponent(n)})};return(0,N.jsxs)("div",{className:Le,children:[i.map((function(e){return(0,N.jsx)(s,{info:e},e.reaction)})),(null===i||void 0===i?void 0:i.length)>0&&(0,N.jsx)("div",{className:"".concat(Fe," ").concat(Ae),style:{border:"none"},children:(0,N.jsx)(pe.Z,{style:{top:"30px",zIndex:99},showFrequently:!0,onEmojiSelect:function(e){a({reaction:e.id})}})})]})},Je=(0,_.memo)(Be),qe=t(3020),He=t(3433),We={userDetail:"index_userDetail__9aUgI",infoCon:"index_infoCon__BDGr1",left:"index_left__+CZcC",avatar:"index_avatar__WJ4iH",info:"index_info__zK+1p",nickname:"index_nickname__AUU+z",idName:"index_idName__85kq5",op:"index_op__kLmhH",toChat:"index_toChat__eOoDy",chatCon:"index_chatCon__TwOfk",private:"index_private__41GG+"},Ke=t(6871),Ge=(0,_.memo)((0,ce.$j)((function(e){var n=e.app,t=e.contact;return{appUserInfo:n.appUserInfo,serverRole:n.serverRole,contactsList:t.contactsList,hasSentApply:t.hasSentApply,currentChannelInfo:n.currentChannelInfo}}),(function(e){return{setSelected:function(n){return e({type:"app/setSelectedTab",payload:n})}}}))((function(e){var n,t,a=e.userId,r=e.appUserInfo,o=e.currentChannelInfo,c=e.serverRole,l=e.setSelected,d=(0,_.useState)([]),u=(0,i.Z)(d,2),m=u[0],v=u[1],f=(0,Ke.UO)(),h=f.serverId,p=f.channelId,x=!(c[h]===ie.N1.user),j=(0,Ke.s0)(),g=function(e){switch(e.key){case"mute":se.Z.conn.muteChannelMember({serverId:h,channelId:p,userId:a,duration:-1}).then((function(){v([].concat((0,He.Z)(m),[a]))})).catch((function(e){17===e.type&&"User is not in server."===JSON.parse(e.data).error_description&&(ae.ZP.warn({content:"\u7528\u6237\u5df2\u9000\u51fa\u793e\u533a"}),console.log("err====="))}));break;case"unmute":se.Z.conn.unmuteChannelMember({serverId:h,channelId:p,userId:a}).then((function(){var e=m.filter((function(e){return!e.includes(a)}));v(e)})).catch((function(e){17===e.type&&"User is not in server."===JSON.parse(e.data).error_description&&ae.ZP.warn({content:"\u7528\u6237\u5df2\u9000\u51fa\u793e\u533a"})}));break;case"kick":se.Z.conn.removeChannelMember({serverId:h,channelId:p,userId:a}).catch((function(e){17===e.type&&"User is not in server."===JSON.parse(e.data).error_description&&ae.ZP.warn({content:"\u7528\u6237\u5df2\u9000\u51fa\u793e\u533a"})}))}},C=(0,_.useMemo)((function(){var e=[];return m.includes(a)?e.push(ie.SY):e.push(ie.Q2),1!==(null===o||void 0===o?void 0:o.defaultChannel)&&e.push(ie.Ry),e}),[m,o]);(0,_.useEffect)((function(){x&&se.Z.conn.getChannelMutelist({serverId:h,channelId:p}).then((function(e){var n=e.data.list.map((function(e){return e.userId}));v(n)}))}),[]);var y=[{label:(0,N.jsx)(M.Z,{size:"22px",color:"#fff",name:"ellipsis"}),key:"SubMenu",children:C}];return(0,N.jsxs)("div",{className:We.userDetail,children:[(0,N.jsxs)("div",{className:We.infoCon,children:[(0,N.jsxs)("div",{className:We.left,children:[(0,N.jsx)("div",{className:We.avatar,children:(0,N.jsx)(s.Z,{size:56,src:null===(n=r[a])||void 0===n?void 0:n.avatarurl})}),(0,N.jsxs)("div",{className:We.info,children:[(0,N.jsx)("div",{className:We.nickname,children:(null===(t=r[a])||void 0===t?void 0:t.nickname)||a}),(0,N.jsxs)("div",{className:We.idName,children:["\u73af\u4fe1ID\uff1a",a]})]})]}),x&&(0,N.jsx)("div",{className:We.op,children:(0,N.jsx)(ve.Z,{className:We.menuWrap,onClick:function(e){g(e)},style:{padding:0},theme:"dark",selectable:!1,triggerSubMenuAction:"click",mode:"horizontal",items:y})})]}),(0,N.jsx)("div",{className:We.toChat,children:(0,N.jsxs)("span",{className:We.chatCon,onClick:function(){l("contacts"),j("/main/contacts/chat/".concat(a))},children:[(0,N.jsx)(M.Z,{name:"message",size:"24px",color:"rgba(255,255,255,.74)"}),(0,N.jsx)("span",{className:We.private,children:"\u79c1\u804a"})]})})]})}))),Qe=(0,_.memo)((0,ce.$j)((function(e){var n=e.app;return{reactionMap:n.reactionMap,appUserInfo:n.appUserInfo}}),null)((function(e){var n,t,x=(0,_.useRef)(),j=(0,_.useRef)(),C=e.source,I=e.isThreadMessage,Z=e.message,b=e.reactionMap,k=e.onHandleOperation,w=e.appUserInfo,T=(0,_.useMemo)((function(){return b.get(Z.id)||[]}),[b,Z.id]),E=(0,_.useState)(!1),U=(0,i.Z)(E,2),S=U[0],M=U[1],D=function(e){M(e)},O=C===ie.Z5.groupChat&&!I&&"recall"!==Z.type&&(!Z.chatThreadOverview||"{}"===JSON.stringify(Z.chatThreadOverview)),z=C===ie.Z5.groupChat&&Z.chatThreadOverview&&"recall"!==Z.type&&"{}"!==JSON.stringify(Z.chatThreadOverview),L=C!==ie.Z5.threadParentMsg&&(null===T||void 0===T?void 0:T.length)>0&&"recall"!==Z.type,F=C!==ie.Z5.threadParentMsg&&"recall"!==Z.type&&"custom"!==Z.type,P=(0,_.useState)(!1),A=(0,i.Z)(P,2),J=A[0],q=A[1];return(0,_.useEffect)((function(){var e=function(e){var n=j.current;n&&(n.contains(e.target)?q(!0):q(!1))};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[]),(0,N.jsxs)("div",{className:"".concat(a," ").concat(J?r:null),ref:x,children:[(0,N.jsxs)("div",{className:o,children:[(0,N.jsx)("div",{className:u,onClick:function(){k("openUserInfoPanel",I,Z),"groupChat"===C&&se.Z.conn.user!==Z.from&&(0,g.mZ)([Z.from]).then((function(){D(!0)}))},children:(0,N.jsx)(qe.Z,{placement:"bottomLeft",destroyTooltipOnHide:!0,overlayClassName:p,content:(0,N.jsx)(Ge,{userId:Z.from}),visible:S,onVisibleChange:D,trigger:"click",children:(0,N.jsx)(s.Z,{size:36,src:null===(n=w[Z.from])||void 0===n?void 0:n.avatarurl})})}),(0,N.jsxs)("div",{className:c,children:[(0,N.jsxs)("div",{className:l,children:[(0,N.jsxs)("div",{className:m,children:[(0,N.jsx)("span",{className:v,children:(null===(t=w[Z.from])||void 0===t?void 0:t.nickname)||Z.from}),(0,N.jsx)("span",{className:f,children:(0,g.rn)(Z.time)})]}),F&&(0,N.jsx)("div",{className:d,ref:j,children:(0,N.jsx)(je,{type:Z.type,canCreateThread:O,source:C,message:Z,parent:x,operation:function(e){k(e,I,Z)}})})]}),(0,N.jsxs)("div",{className:h,children:["txt"===Z.type&&(0,N.jsx)(y,{message:Z}),"img"===Z.type&&(0,N.jsx)(B,{message:Z}),"file"===Z.type&&(0,N.jsx)(R,{message:Z}),"recall"===Z.type&&(0,N.jsx)(W,{message:Z}),"custom"===Z.type&&(0,N.jsx)(le,{message:Z})]})]})]}),L&&(0,N.jsx)(Je,{msgId:Z.id,reaction:T}),z&&(0,N.jsx)(Re,{thread:Z.chatThreadOverview,clickCount:function(){k("openThreadPanel",I,Z)}})]})})))},9205:function(e,n){var t,i,s;i=[],t=function(){return function e(n,t,i){var s,a,r=window,o="application/octet-stream",c=i||o,l=n,d=!t&&!i&&l,u=document.createElement("a"),m=function(e){return String(e)},v=r.Blob||r.MozBlob||r.WebKitBlob||m,f=t||"download";if(v=v.call?v.bind(r):Blob,"true"===String(this)&&(c=(l=[l,c])[0],l=l[1]),d&&d.length<2048&&(f=d.split("/").pop().split("?")[0],u.href=d,-1!==u.href.indexOf(d))){var h=new XMLHttpRequest;return h.open("GET",d,!0),h.responseType="blob",h.onload=function(n){e(n.target.response,f,o)},setTimeout((function(){h.send()}),0),h}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(l)){if(!(l.length>2096103.424&&v!==m))return navigator.msSaveBlob?navigator.msSaveBlob(j(l),f):g(l);c=(l=j(l)).type||o}else if(/([\x80-\xff])/.test(l)){for(var p=0,_=new Uint8Array(l.length),x=_.length;p<x;++p)_[p]=l.charCodeAt(p);l=new v([_],{type:c})}function j(e){for(var n=e.split(/[:;,]/),t=n[1],i=("base64"==n[e.indexOf("charset")>0?3:2]?atob:decodeURIComponent)(n.pop()),s=i.length,a=0,r=new Uint8Array(s);a<s;++a)r[a]=i.charCodeAt(a);return new v([r],{type:t})}function g(e,n){if("download"in u)return u.href=e,u.setAttribute("download",f),u.className="download-js-link",u.innerHTML="downloading...",u.style.display="none",u.addEventListener("click",(function(e){e.stopPropagation(),this.removeEventListener("click",arguments.callee)})),document.body.appendChild(u),setTimeout((function(){u.click(),document.body.removeChild(u),!0===n&&setTimeout((function(){r.URL.revokeObjectURL(u.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,o)),window.open(e)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=e),!0;var t=document.createElement("iframe");document.body.appendChild(t),!n&&/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,o)),t.src=e,setTimeout((function(){document.body.removeChild(t)}),333)}if(s=l instanceof v?l:new v([l],{type:c}),navigator.msSaveBlob)return navigator.msSaveBlob(s,f);if(r.URL)g(r.URL.createObjectURL(s),!0);else{if("string"===typeof s||s.constructor===m)try{return g("data:"+c+";base64,"+r.btoa(s))}catch(N){return g("data:"+c+","+encodeURIComponent(s))}(a=new FileReader).onload=function(e){g(this.result)},a.readAsDataURL(s)}return!0}},void 0===(s="function"===typeof t?t.apply(n,i):t)||(e.exports=s)}}]);
//# sourceMappingURL=384.54699a45.chunk.js.map