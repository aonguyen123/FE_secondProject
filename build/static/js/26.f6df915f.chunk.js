(window["webpackJsonpreact-antd"]=window["webpackJsonpreact-antd"]||[]).push([[26],{1016:function(e,t){},1019:function(e,t,n){},1297:function(e,t,n){"use strict";n.r(t);var a=n(70),c=n(0),r=n.n(c),l=n(57),u=n(1274),o=n(1289),i=n(1275),f=n(992),s=n.n(f),d=n(219),m=n(7),E=n(836),b=n(257),p=(n(1019),u.a.Header),h=u.a.Content,v=u.a.Footer,j=u.a.Sider;var k=function(e){var t=e.children,n=Object(c.useState)(!1),f=Object(a.a)(n,2),k=f[0],O=f[1],w=Object(l.c)((function(e){return e.uiReducer.isShowAnimate})),x=Object(l.c)((function(e){return e.uiReducer.typeAnimate})),g=Object(c.useRef)(),y=Object(l.b)();return Object(c.useEffect)((function(){var e=b.b;return g.current=s()(e),function(){g.current.close()}}),[]),Object(c.useEffect)((function(){return g.current.on("notice",(function(e){var t=e.text;y(m.a.chatsActions.getStatusChat(t))})),function(){g.current.off("notice")}}),[y]),r.a.createElement(u.a,null,r.a.createElement(p,null,r.a.createElement(d.f,null)),r.a.createElement(u.a,null,r.a.createElement(j,{theme:k?"dark":"light",breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(e){O(e)},style:k?{position:"fixed",zIndex:"99"}:{padding:"24px 14px"}},r.a.createElement(o.a,null,r.a.createElement(d.o,{collapsedWidth:k}))),r.a.createElement(h,null,r.a.createElement("div",{className:"content-layout-basic"},r.a.createElement(c.Suspense,{fallback:r.a.createElement(d.h,null)},r.a.createElement(E.a.Provider,{value:{socketRef:g}},t))))),r.a.createElement(v,{style:{backgroundColor:"#000",textAlign:"center"}},r.a.createElement(d.e,null)),r.a.createElement(i.a,null),w&&r.a.createElement(d.a,{typeAnimate:x}))};n.d(t,"default",(function(){return k}))},836:function(e,t,n){"use strict";var a=n(0),c=n.n(a).a.createContext();n.d(t,"a",(function(){return c}))}}]);