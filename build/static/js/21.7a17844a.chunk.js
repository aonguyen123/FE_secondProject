(window["webpackJsonpreact-antd"]=window["webpackJsonpreact-antd"]||[]).push([[21],{1289:function(e,t,n){"use strict";n.r(t);var r=n(232),a=n(0),c=n.n(a),i=n(38),s=n(871),o=n(872),d=n(5);function l(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],l=t[1],u=Object(i.c)((function(e){return e.uiReducer.loadingData})),f=Object(i.c)((function(e){return e.userReducer.searchUsers})),m=Object(i.c)((function(e){return e.userReducer.userInfo})),h=Object(i.c)((function(e){return e.uiReducer.visible})),E=Object(i.b)();return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{searchUser:function(e){E(d.a.userActions.searchUser(e,m._id))},showCardUser:function(e){l(e),E(d.a.uiActions.changeVisible(!0))},loadingData:u,searchUsers:f,friends:m.friends,searchEmpty:function(){E(d.a.userActions.searchUserEmpty())}}),h&&c.a.createElement(o.a,{visible:h,onCancelFlowUser:function(){E(d.a.uiActions.changeVisible(!1))},idFriend:n,userCurrent:m}))}n.d(t,"default",(function(){return l}))},871:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(797),i=n(13),s=n(912).a.Search;function o(e){var t=e.searchUser,n=e.loadingData,r=e.searchEmpty;return a.a.createElement(s,{placeholder:Object(i.formatMessage)({id:"home.friends.searchPlacehoder"}),loading:n,onSearch:function(e,n){e&&t(e)},onChange:function(e){e.target.value||r()}})}var d=n(1292),l=n(34),u=n(791),f=n(231),m=n(789);function h(e,t){return a.a.createElement(m.a,null,a.a.createElement(m.a.Item,{onClick:function(){return e(t)}},Object(i.formatMessage)({id:"home.friends.viewDetail"})))}var E=d.b.Item;function b(e){var t=e.friend,n=e.showCardUser,r=e.friends;return a.a.createElement(E,{key:t._id,extra:a.a.createElement(f.c,{key:"more",menu:h(n,t._id)})},a.a.createElement(E.Meta,{avatar:a.a.createElement(u.a,{src:t.photoURL}),title:a.a.createElement(l.a,{to:"/profile/".concat(t._id)},t.displayName),description:-1!==r.findIndex((function(e){return e.idUser._id===t._id}))&&Object(i.formatMessage)({id:"home.friends.follow"})}))}n(898);function U(e){var t=e.searchUsers,n=e.showCardUser,r=e.friends;return a.a.createElement("div",{className:"list-friend-container"},a.a.createElement(d.b,{dataSource:0===t.length?r:t,renderItem:function(e){return a.a.createElement(b,{friend:0===t.length?e.idUser:e,showCardUser:n,friends:r})}}))}function v(e){var t=e.searchUser,n=e.loadingData,r=e.searchUsers,s=e.searchEmpty,d=e.showCardUser,l=e.friends;return a.a.createElement(c.a,{title:Object(i.formatMessage)({id:"home.friends.title"}),size:"small"},a.a.createElement(o,{searchUser:t,loadingData:n,searchEmpty:s}),a.a.createElement(U,{searchUsers:r,showCardUser:d,friends:l}))}n.d(t,"a",(function(){return v}))},872:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(34),i=n(797),s=n(798),o=n(796),d=n(72),l=n(1147),u=n(799),f=n(13),m=n(38),h=n(1267),E=n(813),b=n(1266),U=n(988),v=n(987),g=n(251),p=(n(388),n(231)),w=n(5),O=n(236),j=(n(899),i.a.Meta);function y(e){var t=e.visible,n=e.onCancelFlowUser,y=e.idFriend,C=e.userCurrent,F=Object(m.b)(),A=Object(m.c)((function(e){return e.userReducer.userById})),I=Object(m.c)((function(e){return e.userReducer.statusAddFriend})),_=Object(r.useContext)(O.a).socketRef;Object(r.useEffect)((function(){return F(w.a.userActions.fetchUserById(y,C._id)),function(){F(w.a.userActions.cleanUserById())}}),[F,y,C._id]),Object(r.useEffect)((function(){var e=_.current;return e.on("sendAddFriendSuccess",(function(e){F(w.a.userActions.sendAddFriendSuccess(e))})),function(){e.off("sendAddFriendSuccess")}}),[_,F]);return a.a.createElement(o.a,{visible:t,onCancel:n,footer:null,width:350,centered:!1},0===Object.keys(A).length?a.a.createElement(p.d,null):a.a.createElement(i.a,{bordered:!1,cover:a.a.createElement("div",null,a.a.createElement(g.LazyLoadImage,{alt:"",height:200,width:"100%",src:A.photoURL,effect:"blur"})),actions:[a.a.createElement(d.a,{title:Object(f.formatMessage)({id:"home.modalViewUser.viewProfile"})},a.a.createElement(c.a,{to:"/profile/".concat(y)},a.a.createElement(h.a,{key:"view-profile"}))),a.a.createElement(d.a,{title:-1!==C.friends.findIndex((function(e){return e.idUser._id===y}))?Object(f.formatMessage)({id:"home.modalViewUser.follow"}):Object(f.formatMessage)({id:"home.modalViewUser.addFriend"})},-1!==C.friends.findIndex((function(e){return e.idUser._id===y}))?a.a.createElement(E.a,{style:{color:"#1890FF"}}):a.a.createElement(b.a,{style:{color:I&&"#1890FF"},key:"add-user",onClick:function(){I||_.current.emit("sendAddFriend",{idSender:C._id,idReceiver:y},(function(e){s.a.error(e,4)}))}}))]},a.a.createElement(j,{title:a.a.createElement("p",null,A.displayName),description:a.a.createElement("div",null,a.a.createElement(l.a,{direction:"vertical"},""!==A.district&&""!==A.provinceOrCity&&a.a.createElement(u.a,null,a.a.createElement(U.a,null)," ","".concat(A.district.label," - ").concat(A.provinceOrCity.label)),""!==A.phonenumber&&a.a.createElement(u.a,null,a.a.createElement(v.a,null)," ","+84".concat(A.phonenumber)),a.a.createElement(u.a,null,a.a.createElement(E.a,null)," ","".concat(A.friends.length," ").concat(Object(f.formatMessage)({id:"home.modalViewUser.friends"})))))})))}n.d(t,"a",(function(){return y}))},898:function(e,t,n){},899:function(e,t,n){}}]);