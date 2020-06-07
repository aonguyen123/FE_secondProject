(window["webpackJsonpreact-antd"]=window["webpackJsonpreact-antd"]||[]).push([[21],{1270:function(e,t,a){},1271:function(e,t,a){},1272:function(e,t,a){},1295:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(38),o=a(88),s=a(116),m=a(61),i=a(841),l=a(232),u=a(237),d=a(5),f=a(806),g=a(1301),_=a(62),E=a.n(_),h=a(13),v=a(34),R=a(797);function p(e,t){return c.a.createElement(R.a,null,c.a.createElement(R.a.Item,null,c.a.createElement(v.a,{to:e===t?"/account":"/profile/".concat(t)},Object(h.formatMessage)({id:"chatroom.viewProfile"}))))}a(1270);var b=function(e){var t=e.idCur,a=Object(r.c)((function(e){return e.chatsReducer.userRoom}));return c.a.createElement(f.a,{size:"small",hoverable:!0,title:Object(h.formatMessage)({id:"chatroom.listUser"})},c.a.createElement(l.n,{height:"492px",width:"100%"},c.a.createElement(g.b,{itemLayout:"vertical",size:"small",dataSource:a,renderItem:function(e){return c.a.createElement(g.b.Item,{extra:[c.a.createElement(l.c,{key:"more",menu:p(t,e.idUser._id)})]},c.a.createElement(g.b.Item.Meta,{title:e.idUser.displayName,avatar:c.a.createElement("div",{className:"img_cont"},c.a.createElement("img",{alt:"avatar",src:e.idUser.photoURL,className:"rounded-circle user_img"}),c.a.createElement("span",{className:"online"===e.status?"online_icon":"online_icon offline"})),description:"online"===e.status?"online":E()(e.updatedAt).fromNow()}))}})))},j=a(233),N=a(880),O=a(73),M=a(1310),x=a(1284);a(1271);function w(e){var t=e.message;return e.IDuserCurrent===t.sender._id?c.a.createElement("div",{className:"content_chat_send"},c.a.createElement("div",{className:"img_cont_msg_send"},c.a.createElement("img",{src:t.sender.photoURL,alt:"avatar",className:"rounded-circle user_img_msg"})),c.a.createElement("div",{className:"msg_cotainer_send"},c.a.createElement("p",null,t.message),c.a.createElement("span",{className:"msg_time_send"},E()(t.createdAt).format("DD/MM/YYYY, HH:mm a"),", ",t.sender.displayName))):c.a.createElement("div",{className:"content_chat"},c.a.createElement("div",{className:"img_cont_msg"},c.a.createElement("img",{src:t.sender.photoURL,alt:"avatar",className:"rounded-circle user_img_msg"})),c.a.createElement("div",{className:"msg_cotainer"},c.a.createElement("p",null,t.message),c.a.createElement("span",{className:"msg_time"},E()(t.createdAt).format("DD/MM/YYYY, HH:mm a"),", ",t.sender.displayName)))}a(1272);var y=f.a.Meta,C=N.a.TextArea;function I(e){var t=e.onSendMessage,a=e.userCurrent,o=e.handleLeaveRoom,s=Object(n.useState)(""),m=Object(j.a)(s,2),i=m[0],u=m[1],d=Object(r.c)((function(e){return e.chatsReducer.roomInfo})),g=Object(r.c)((function(e){return e.chatsReducer.messageInRoom}));return c.a.createElement(f.a,{hoverable:!0,size:"small",title:Object(h.formatMessage)({id:"chatroom.mesage"}),extra:[c.a.createElement(O.a,{placement:"topRight",title:Object(h.formatMessage)({id:"chatroom.leaveRoom"}),key:"leaveRoom"},c.a.createElement(M.a,{onClick:function(){return o(d._id,a._id)}}))]},c.a.createElement(y,{avatar:c.a.createElement("div",{className:"img_cont_chat"},c.a.createElement("img",{alt:"avatar",src:d.roomImage,className:"rounded-circle_chat user_img_chat"})),title:d.roomName,description:d.userId&&"".concat(d.userId.displayName," ").concat(Object(h.formatMessage)({id:"chat.created"}))}),c.a.createElement("div",{className:"chat_list_card_body_chat chat_list_msg_card_body"},c.a.createElement(l.n,{height:"350px",width:"100%"},g.map((function(e,t){return c.a.createElement(w,{key:t,IDuserCurrent:a._id,message:e})})))),c.a.createElement("div",{className:"card-footer",style:{padding:"12px"}},c.a.createElement(N.a.Group,{compact:!0},c.a.createElement(C,{style:{width:"90%"},placeholder:Object(h.formatMessage)({id:"chat.chatRoom.input"}),autoSize:{minRows:2,maxRows:6},value:i,onChange:function(e){return u(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),t({message:i}),u(""))}}),c.a.createElement(x.a,{style:{width:"10%"},onClick:function(e){e.preventDefault(),t({message:i}),u("")}}))))}function k(){var e=Object(o.h)().idRoom,t=Object(n.useContext)(u.a).socketRef,a=Object(r.c)((function(e){return e.userReducer.userInfo})),f=Object(r.c)((function(e){return e.uiReducer.loadingFetchData})),g=Object(o.g)(),_=Object(r.b)();Object(n.useEffect)((function(){_(d.a.chatsActions.checkJoinRoom(e,a._id,g))}),[_,e,a._id,g]),Object(n.useEffect)((function(){var n=t.current;return n.emit("joinRoom",{_id:a._id,idRoom:e}),function(){n.emit("unJoinRoom",{_id:a._id,idRoom:e})}}),[t,a._id,e]),Object(n.useEffect)((function(){var e=t.current;return e.on("sendMessageRoom",(function(e){_(d.a.chatsActions.getMessageRoomAfter(e))})),e.on("joinRoom",(function(e){_(d.a.chatsActions.getUserCurOnl(e))})),e.on("unJoinRoom",(function(e){_(d.a.chatsActions.getUserCurOnl(e))})),e.on("leaveRoom",(function(e){_(d.a.chatsActions.leaveRoom(e))})),e.on("leaveRoomSuccess",(function(){g.push("/chats")})),function(){e.off("sendMessageRoom"),e.off("joinRoom"),e.off("unJoinRoom"),e.off("leaveRoom"),e.off("leaveRoomSuccess")}}),[t,_,g]);var E=Object(n.useCallback)((function(n){var c=n.message;c&&t.current.emit("sendMessageRoom",{message:c,idRoom:e,idUser:a._id})}),[t,e,a._id]);return f>0?c.a.createElement(l.d,null):c.a.createElement(i.a,null,c.a.createElement(s.a,{gutter:[16,16]},c.a.createElement(m.a,{xxl:10,xl:10,lg:10,md:10,sm:24,xs:24},c.a.createElement(b,{idCur:a._id})),c.a.createElement(m.a,{xxl:14,xl:14,lg:14,md:14,sm:24,xs:24},c.a.createElement(I,{onSendMessage:E,userCurrent:a,handleLeaveRoom:function(e,a){t.current.emit("leaveRoom",{idRoom:e,idUser:a})}}))))}a.d(t,"default",(function(){return k}))}}]);