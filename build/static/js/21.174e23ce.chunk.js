(window["webpackJsonpreact-antd"]=window["webpackJsonpreact-antd"]||[]).push([[21],{1256:function(e,t,a){},1257:function(e,t,a){},1258:function(e,t,a){},1280:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(38),o=a(87),s=a(116),m=a(61),l=a(827),i=a(232),u=a(237),d=a(4),f=a(792),g=a(1289),E=a(62),_=a.n(E),h=a(783);function v(){return r.a.createElement(h.a,null,r.a.createElement(h.a.Item,null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.alipay.com/"},"1st menu item")),r.a.createElement(h.a.Item,null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.taobao.com/"},"2nd menu item")),r.a.createElement(h.a.Item,null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.tmall.com/"},"3rd menu item")))}a(1256);var p=function(){var e=Object(c.c)((function(e){return e.chatsReducer.userRoom}));return r.a.createElement(f.a,{size:"small",hoverable:!0,title:"List users"},r.a.createElement(i.n,{height:"492px",width:"100%"},r.a.createElement(g.b,{itemLayout:"vertical",size:"small",dataSource:e,renderItem:function(e){return r.a.createElement(g.b.Item,{extra:[r.a.createElement(i.c,{key:"more",menu:v})]},r.a.createElement(g.b.Item.Meta,{title:e.idUser.displayName,avatar:r.a.createElement("div",{className:"img_cont"},r.a.createElement("img",{alt:"avatar",src:e.idUser.photoURL,className:"rounded-circle user_img"}),r.a.createElement("span",{className:"online"===e.status?"online_icon":"online_icon offline"})),description:"online"===e.status?"online":_()(e.updatedAt).fromNow()}))}})))},R=a(233),b=a(866),w=a(73),N=a(1294),j=a(1268);a(1257);function y(e){var t=e.message;return e.IDuserCurrent===t.sender._id?r.a.createElement("div",{className:"content_chat_send"},r.a.createElement("div",{className:"img_cont_msg_send"},r.a.createElement("img",{src:t.sender.photoURL,alt:"avatar",className:"rounded-circle user_img_msg"})),r.a.createElement("div",{className:"msg_cotainer_send"},r.a.createElement("p",null,t.message),r.a.createElement("span",{className:"msg_time_send"},_()(t.createdAt).format("DD/MM/YYYY, HH:mm a"),", ",t.sender.displayName))):r.a.createElement("div",{className:"content_chat"},r.a.createElement("div",{className:"img_cont_msg"},r.a.createElement("img",{src:t.sender.photoURL,alt:"avatar",className:"rounded-circle user_img_msg"})),r.a.createElement("div",{className:"msg_cotainer"},r.a.createElement("p",null,t.message),r.a.createElement("span",{className:"msg_time"},_()(t.createdAt).format("DD/MM/YYYY, HH:mm a"),", ",t.sender.displayName)))}a(1258);var O=f.a.Meta,x=b.a.TextArea;function k(e){var t=e.onSendMessage,a=e.userCurrent,o=e.handleLeaveRoom,s=Object(n.useState)(""),m=Object(R.a)(s,2),l=m[0],u=m[1],d=Object(c.c)((function(e){return e.chatsReducer.roomInfo})),g=Object(c.c)((function(e){return e.chatsReducer.messageInRoom}));return r.a.createElement(f.a,{hoverable:!0,size:"small",title:"Messages",extra:[r.a.createElement(w.a,{placement:"topRight",title:"Leave room",key:"leaveRoom"},r.a.createElement(N.a,{onClick:function(){return o(d._id,a._id)}}))]},r.a.createElement(O,{avatar:r.a.createElement("div",{className:"img_cont_chat"},r.a.createElement("img",{alt:"avatar",src:d.roomImage,className:"rounded-circle_chat user_img_chat"})),title:d.roomName,description:d.userId&&"".concat(d.userId.displayName," created")}),r.a.createElement("div",{className:"chat_list_card_body_chat chat_list_msg_card_body"},r.a.createElement(i.n,{height:"350px",width:"100%"},g.map((function(e,t){return r.a.createElement(y,{key:t,IDuserCurrent:a._id,message:e})})))),r.a.createElement("div",{className:"card-footer",style:{padding:"12px"}},r.a.createElement(b.a.Group,{compact:!0},r.a.createElement(x,{style:{width:"90%"},placeholder:"Please your message input!",autoSize:{minRows:2,maxRows:6},value:l,onChange:function(e){return u(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),t({message:l}),u(""))}}),r.a.createElement(j.a,{style:{width:"10%"},onClick:function(e){e.preventDefault(),t({message:l}),u("")}}))))}function I(){var e=Object(o.h)().idRoom,t=Object(n.useContext)(u.a).socketRef,a=Object(c.c)((function(e){return e.userReducer.userInfo})),f=Object(c.c)((function(e){return e.uiReducer.loadingFetchData})),g=Object(o.g)(),E=Object(c.b)();Object(n.useEffect)((function(){E(d.a.chatsActions.checkJoinRoom(e,a._id,g))}),[E,e,a._id,g]),Object(n.useEffect)((function(){var n=t.current;return n.emit("joinRoom",{_id:a._id,idRoom:e}),function(){n.emit("unJoinRoom",{_id:a._id,idRoom:e})}}),[t,a._id,e]),Object(n.useEffect)((function(){var e=t.current;return e.on("sendMessageRoom",(function(e){E(d.a.chatsActions.getMessageRoomAfter(e))})),e.on("joinRoom",(function(e){E(d.a.chatsActions.getUserCurOnl(e))})),e.on("unJoinRoom",(function(e){E(d.a.chatsActions.getUserCurOnl(e))})),e.on("leaveRoom",(function(e){E(d.a.chatsActions.leaveRoom(e))})),e.on("leaveRoomSuccess",(function(){g.push("/chats")})),function(){e.off("sendMessageRoom"),e.off("joinRoom"),e.off("unJoinRoom"),e.off("leaveRoom"),e.off("leaveRoomSuccess")}}),[t,E,g]);var _=Object(n.useCallback)((function(n){var r=n.message;r&&t.current.emit("sendMessageRoom",{message:r,idRoom:e,idUser:a._id})}),[t,e,a._id]);return f>0?r.a.createElement(i.d,null):r.a.createElement(l.a,null,r.a.createElement(s.a,{gutter:[16,16]},r.a.createElement(m.a,{xxl:10,xl:10,lg:10,md:10,sm:24,xs:24},r.a.createElement(p,null)),r.a.createElement(m.a,{xxl:14,xl:14,lg:14,md:14,sm:24,xs:24},r.a.createElement(k,{onSendMessage:_,userCurrent:a,handleLeaveRoom:function(e,a){t.current.emit("leaveRoom",{idRoom:e,idUser:a})}}))))}a.d(t,"default",(function(){return I}))}}]);