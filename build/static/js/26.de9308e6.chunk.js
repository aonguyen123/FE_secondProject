(window["webpackJsonpreact-antd"]=window["webpackJsonpreact-antd"]||[]).push([[26],{1019:function(e,n){},1022:function(e,n,t){},1296:function(e,n,t){"use strict";t.r(n);var c=t(232),r=t(0),a=t.n(r),u=t(38),i=t(1273),o=t(1271),s=t(1274),d=t(995),l=t.n(d),f=t(231),v=t(5),E=t(236),m=t(264),b=(t(1022),i.a.Header),p=i.a.Content,A=i.a.Footer,S=i.a.Sider;var h=function(e){var n=e.children,t=Object(u.c)((function(e){return e.userReducer.userInfo})),d=Object(r.useState)(!1),h=Object(c.a)(d,2),j=h[0],O=h[1],F=Object(u.c)((function(e){return e.uiReducer.isShowAnimate})),k=Object(u.c)((function(e){return e.uiReducer.typeAnimate})),w=Object(r.useRef)(),R=Object(u.b)();Object(r.useEffect)((function(){return R(v.a.eventsActions.fetchEvents(t._id)),function(){R(v.a.eventsActions.cleanEvents())}}),[R,t._id]),Object(r.useEffect)((function(){var e=m.b;return w.current=l()(e),w.current.emit("subscribe",t._id),function(){w.current.close()}}),[t._id]),Object(r.useEffect)((function(){return w.current.on("notice",(function(e){var n=e.text;R(v.a.chatsActions.getStatusChat(n))})),w.current.on("subscribe",(function(e){})),w.current.on("sendEvent",(function(e){var n=e.newEvent;R(v.a.eventsActions.sendEventAddFriend(n))})),w.current.on("addFriend",(function(e){var n=e.friendSender;R(v.a.userActions.addFriendSuccess(n))})),w.current.on("addFriendCancel",(function(e){var n=e.idEvent;R(v.a.eventsActions.removeEventSuccess(n))})),w.current.on("addFriendSuccess",(function(e){var n=e.friendReceiver,t=e.idEvent;R(v.a.userActions.addFriendSuccess(n)),R(v.a.eventsActions.removeEventSuccess(t))})),function(){w.current.off("notice"),w.current.off("sendEvent"),w.current.off("subscribe"),w.current.off("addFriendSuccess"),w.current.off("addFriend"),w.current.off("addFriendCancel")}}),[R]);var g=Object(r.useMemo)((function(){return a.a.createElement(E.a.Provider,{value:{socketRef:w}},a.a.createElement(f.f,null))}),[]);return a.a.createElement(i.a,null,a.a.createElement(b,null,g),a.a.createElement(i.a,null,a.a.createElement(S,{theme:j?"dark":"light",breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(e){O(e)},style:j?{position:"fixed",zIndex:"99"}:{padding:"24px 14px"}},a.a.createElement(o.a,null,a.a.createElement(f.o,{collapsedWidth:j}))),a.a.createElement(p,null,a.a.createElement("div",{className:"content-layout-basic"},a.a.createElement(r.Suspense,{fallback:a.a.createElement(f.h,null)},a.a.createElement(E.a.Provider,{value:{socketRef:w}},n))))),a.a.createElement(A,{style:{backgroundColor:"#000",textAlign:"center"}},a.a.createElement(f.e,null)),a.a.createElement(s.a,null),F&&a.a.createElement(f.a,{typeAnimate:k}))};t.d(n,"default",(function(){return h}))}}]);