(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{106:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(20),o=a.n(c),i=a(13),l=a(14),s=a(16),u=a(15),m=a(10),p=a(26),f=a(1),d=a.n(f),h=a(39);function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}h.a.initialize("UA-110410381-1");var b=function(e){Object(s.a)(a,e);var t=g(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.sendPageView(this.context.router.history.location),this.context.router.history.listen(this.sendPageView)}},{key:"sendPageView",value:function(e){h.a.set({page:e.pathname}),h.a.pageview(e.pathname)}},{key:"render",value:function(){return this.props.children}}]),a}(r.a.Component);b.contextTypes={router:d.a.object};var v=b,E=a(9),y=a(24),x=a(112),N=y.a.create("content"),O=function(e){var t=e.tag,a=e.className,n=Object(E.a)(e,["tag","className"]),c=N.b(a);return r.a.createElement(t,Object.assign({className:c},n))};O.defaultProps={tag:x.a};var k=O,j=function(e){var t=e.children,a=Object(E.a)(e,["children"]);return r.a.createElement("main",Object.assign({className:"cr-app bg-light"},a),r.a.createElement(k,{fluid:!0},t))},w=a(113),C=a(114),S=a(115),P=function(e){return r.a.createElement("a",Object.assign({href:"https://github.com/reduction-admin/react-reduction",target:"_blank",rel:"noopener noreferrer"},e))},R=function(){return r.a.createElement(w.a,null,r.a.createElement(C.a,{navbar:!0},r.a.createElement(S.a,null,"2018 Reduction theme, source on ",r.a.createElement(P,null,"Github"))))},z=a(21),I=a(52),B=(a(19),a(126)),D=function(e){var t=e.notificationsData;return t&&t.length&&t.map(function(e){var t=e.id,a=e.avatar,n=e.message,c=e.date;return r.a.createElement(B.a,{key:t,className:"pb-2"},r.a.createElement(B.a,{left:!0,className:"align-self-center pr-3"},r.a.createElement(z.a,{tag:B.a,object:!0,src:a,alt:"Avatar"})),r.a.createElement(B.a,{body:!0,middle:!0,className:"align-self-center"},n),r.a.createElement(B.a,{right:!0,className:"align-self-center"},r.a.createElement("small",{className:"text-muted"},c)))})};D.defaultProps={notificationsData:[]};var L=D,A=a(50),_=a(51),T=a.n(_),W=a(53),M=a.n(W),U=a(54),q=a.n(U),J=a(32),V=a.n(J),G=a(55),H=a.n(G),F=[{id:1,avatar:T.a,message:"David sent you a message",date:"3 min ago"},{id:2,avatar:M.a,message:"Jane mentioned you here",date:"1 hour ago"},{id:3,avatar:q.a,message:"Clark sent a pull request",date:"yesterday"},{id:4,avatar:V.a,message:"Alicia signed up",date:"3 days ago"},{id:5,avatar:H.a,message:"Keith shared this article",date:"a week ago"}],K=a(56),Q=a(8),X=a(71),Y=a(127),Z=a(128),$=a(129),ee=a(122),te=a(123),ae=a(110);function ne(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var re=y.a.create("header"),ce=Object(K.a)({size:"md",color:"primary",style:{top:-10,right:-10,display:"inline-flex",justifyContent:"center",alignItems:"center"},children:r.a.createElement("small",null,"5")})(Q.x),oe=function(e){Object(s.a)(a,e);var t=ne(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isOpenNotificationPopover:!1,isNotificationConfirmed:!1,isOpenUserCardPopover:!1},e.toggleNotificationPopover=function(){e.setState({isOpenNotificationPopover:!e.state.isOpenNotificationPopover}),e.state.isNotificationConfirmed||e.setState({isNotificationConfirmed:!0})},e.toggleUserCardPopover=function(){e.setState({isOpenUserCardPopover:!e.state.isOpenUserCardPopover})},e.handleSidebarControlButton=function(e){e.preventDefault(),e.stopPropagation(),document.querySelector(".cr-sidebar").classList.toggle("cr-sidebar--open")},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state.isNotificationConfirmed;return r.a.createElement(w.a,{light:!0,expand:!0,className:re.b("bg-white")},r.a.createElement(C.a,{navbar:!0,className:"mr-2"},r.a.createElement(X.a,{outline:!0,onClick:this.handleSidebarControlButton},r.a.createElement(Q.h,{size:25}))),r.a.createElement(C.a,{navbar:!0},r.a.createElement(A.a,null)),r.a.createElement(C.a,{navbar:!0,className:re.e("nav-right")},r.a.createElement(S.a,{className:"d-inline-flex"},r.a.createElement(Y.a,{id:"Popover1",className:"position-relative"},t?r.a.createElement(Q.y,{size:25,className:"text-secondary can-click",onClick:this.toggleNotificationPopover}):r.a.createElement(ce,{size:25,className:"text-secondary can-click animated swing infinite",onClick:this.toggleNotificationPopover})),r.a.createElement(Z.a,{placement:"bottom",isOpen:this.state.isOpenNotificationPopover,toggle:this.toggleNotificationPopover,target:"Popover1"},r.a.createElement($.a,null,r.a.createElement(L,{notificationsData:F})))),r.a.createElement(S.a,null,r.a.createElement(Y.a,{id:"Popover2"},r.a.createElement(z.a,{onClick:this.toggleUserCardPopover,className:"can-click"})),r.a.createElement(Z.a,{placement:"bottom-end",isOpen:this.state.isOpenUserCardPopover,toggle:this.toggleUserCardPopover,target:"Popover2",className:"p-0 border-0",style:{minWidth:250}},r.a.createElement($.a,{className:"p-0 border-light"},r.a.createElement(I.c,{title:"Jane",subtitle:"jane@jane.com",text:"Last updated 3 mins ago",className:"border-light"},r.a.createElement(ee.a,{flush:!0},r.a.createElement(te.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(Q.A,null)," Profile"),r.a.createElement(te.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(Q.q,null)," Stats"),r.a.createElement(te.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(Q.w,null)," Messages"),r.a.createElement(te.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(Q.I,null)," Settings"),r.a.createElement(te.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(Q.o,null)," Help"),r.a.createElement(te.a,{tag:"button",action:!0,className:"border-light",onClick:function(){localStorage.setItem("isLogin",!1),e.props.history.push("/login")}},r.a.createElement(Q.l,null)," Signout"))))))))}}]),a}(r.a.Component),ie=Object(ae.a)(oe),le=a(66),se=function(e){var t=e.component,a=e.layout,n=Object(E.a)(e,["component","layout"]);return r.a.createElement(le.a,Object.assign({},n,{render:function(e){return r.a.createElement(a,null,r.a.createElement(t,e))}}))},ue=a(67),me=a.n(ue),pe={NotificationItem:{DefaultStyle:{display:"flex",justifyContent:"space-between",alignItems:"center",borderRadius:"4px",fontSize:"14px"},success:{borderTop:0,backgroundColor:"#45b649",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},error:{borderTop:0,backgroundColor:"#f85032",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},warning:{borderTop:0,backgroundColor:"#ffd700",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},info:{borderTop:0,background:"linear-gradient(to right, #6a82fb, #fc5c7d)",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0}},Title:{DefaultStyle:{margin:0,padding:0,paddingRight:5,color:"#fff",display:"inline-flex",fontSize:20,fontWeight:"bold"}},MessageWrapper:{DefaultStyle:{display:"block",color:"#fff",width:"100%"}},Dismiss:{DefaultStyle:{display:"inline-flex",justifyContent:"center",alignItems:"center",fontFamily:"inherit",fontSize:20,color:"#f2f2f2",position:"relative",margin:0,padding:0,background:"none",borderRadius:0,opacity:1,width:20,height:20,textAlign:"initial",float:"none",top:"unset",right:"unset",lineHeight:"inherit"}},Action:{DefaultStyle:{background:"#fff",borderRadius:"2px",padding:"6px 20px",fontWeight:"bold",margin:"10px 0 0 0",border:0},success:{backgroundColor:"#45b649",color:"#fff"},error:{backgroundColor:"#f85032",color:"#fff"},warning:{backgroundColor:"#ffd700",color:"#fff"},info:{backgroundColor:"#00c9ff",color:"#fff"}},ActionWrapper:{DefaultStyle:{margin:0,padding:0}}};function fe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var de=function(e){Object(s.a)(a,e);var t=fe(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleContentClick=function(t){!a.isSidebarOpen()||"xs"!==e.props.breakpoint&&"sm"!==e.props.breakpoint&&"md"!==e.props.breakpoint||e.openSidebar("close")},e}return Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e){var t=e.breakpoint;t!==this.props.breakpoint&&this.checkBreakpoint(t)}},{key:"componentDidMount",value:function(){var e=this;this.checkBreakpoint(this.props.breakpoint),setTimeout(function(){e.notificationSystem&&e.notificationSystem.addNotification({title:r.a.createElement(Q.p,null),message:"Welome to Reduction Admin!",level:"info"})},1500),setTimeout(function(){e.notificationSystem&&e.notificationSystem.addNotification({title:r.a.createElement(Q.u,null),message:"Reduction is carefully designed template powered by React and Bootstrap4!",level:"info"})},2500)}},{key:"checkBreakpoint",value:function(e){switch(e){case"xs":case"sm":case"md":return this.openSidebar("close");case"lg":case"xl":default:return this.openSidebar("open")}}},{key:"openSidebar",value:function(e){if("open"===e)return document.querySelector(".cr-sidebar").classList.add("cr-sidebar--open");document.querySelector(".cr-sidebar").classList.remove("cr-sidebar--open")}},{key:"render",value:function(){var e=this,t=this.props.children;return r.a.createElement("main",{className:"cr-app bg-light"},r.a.createElement(ze,null),r.a.createElement(k,{fluid:!0,onClick:this.handleContentClick},r.a.createElement(ie,null),t,r.a.createElement(R,null)),r.a.createElement(me.a,{dismissible:!1,ref:function(t){return e.notificationSystem=t},style:pe}))}}],[{key:"isSidebarOpen",value:function(){return document.querySelector(".cr-sidebar").classList.contains("cr-sidebar--open")}}]),a}(r.a.Component),he=a(30),ge=a(33),be=a.n(ge),ve=a(47),Ee=a.n(ve),ye=a(68),xe=a(48),Ne=a(135),Oe=a(130);function ke(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var je={backgroundImage:'url("'.concat(Ee.a,'")'),backgroundSize:"cover",backgroundRepeat:"no-repeat"},we=[{to:"/buttons",name:"buttons",exact:!1,Icon:Q.E},{to:"/button-groups",name:"button groups",exact:!1,Icon:Q.n},{to:"/forms",name:"forms",exact:!1,Icon:Q.g},{to:"/input-groups",name:"input groups",exact:!1,Icon:Q.T},{to:"/dropdowns",name:"dropdowns",exact:!1,Icon:Q.b},{to:"/badges",name:"badges",exact:!1,Icon:Q.M},{to:"/alerts",name:"alerts",exact:!1,Icon:Q.x},{to:"/progress",name:"progress",exact:!1,Icon:Q.e},{to:"/modals",name:"modals",exact:!1,Icon:Q.S}],Ce=[{to:"/typography",name:"typography",exact:!1,Icon:Q.O},{to:"/tables",name:"tables",exact:!1,Icon:Q.d}],Se=[{to:"/login",name:"login / signup",exact:!1,Icon:Q.a},{to:"/login-modal",name:"login modal",exact:!1,Icon:Q.R}],Pe=[{to:"/",name:"dashboard",exact:!0,Icon:Q.i},{to:"/cards",name:"cards",exact:!1,Icon:Q.U},{to:"/charts",name:"charts",exact:!1,Icon:Q.q},{to:"/widgets",name:"widgets",exact:!1,Icon:Q.V},{to:"/admin-manager",name:"admin manager",exact:!1,Icon:Q.c},{to:"/user-manager",name:"user manager",exact:!1,Icon:xe.c},{to:"/subject-manager",name:"subject ",exact:!1,Icon:Q.N}],Re=y.a.create("sidebar"),ze=function(e){Object(s.a)(a,e);var t=ke(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isOpenComponents:!0,isOpenContents:!0,isOpenPages:!0},e.handleClick=function(t){return function(){e.setState(function(e){var a=e["isOpen".concat(t)];return Object(he.a)({},"isOpen".concat(t),!a)})}},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("aside",{className:Re.b(),"data-image":Ee.a},r.a.createElement("div",{className:Re.e("background"),style:je}),r.a.createElement("div",{className:Re.e("content")},r.a.createElement(w.a,null,r.a.createElement(P,{className:"navbar-brand d-flex"},r.a.createElement("img",{src:be.a,width:"40",height:"30",className:"pr-2",alt:""}),r.a.createElement("span",{className:"text-white"},"Reduction ",r.a.createElement(ye.a,null)))),r.a.createElement(C.a,{vertical:!0},Pe.map(function(e,t){var a=e.to,n=e.name,c=e.exact,o=e.Icon;return r.a.createElement(S.a,{key:t,className:Re.e("nav-item")},r.a.createElement(Y.a,{id:"navItem-".concat(n,"-").concat(t),className:"text-uppercase",tag:Ne.a,to:a,activeClassName:"active",exact:c},r.a.createElement(o,{className:Re.e("nav-item-icon")}),r.a.createElement("span",{className:""},n)))}),r.a.createElement(S.a,{className:Re.e("nav-item"),onClick:this.handleClick("Components")},r.a.createElement(Y.a,{className:Re.e("nav-item-collapse")},r.a.createElement("div",{className:"d-flex"},r.a.createElement(Q.m,{className:Re.e("nav-item-icon")}),r.a.createElement("span",{className:" align-self-start"},"Components")),r.a.createElement(Q.r,{className:Re.e("nav-item-icon"),style:{padding:0,transform:this.state.isOpenComponents?"rotate(0deg)":"rotate(-90deg)",transitionDuration:"0.3s",transitionProperty:"transform"}}))),r.a.createElement(Oe.a,{isOpen:this.state.isOpenComponents},we.map(function(e,t){var a=e.to,n=e.name,c=e.exact,o=e.Icon;return r.a.createElement(S.a,{key:t,className:Re.e("nav-item")},r.a.createElement(Y.a,{id:"navItem-".concat(n,"-").concat(t),className:"text-uppercase",tag:Ne.a,to:a,activeClassName:"active",exact:c},r.a.createElement(o,{className:Re.e("nav-item-icon")}),r.a.createElement("span",{className:""},n)))})),r.a.createElement(S.a,{className:Re.e("nav-item"),onClick:this.handleClick("Contents")},r.a.createElement(Y.a,{className:Re.e("nav-item-collapse")},r.a.createElement("div",{className:"d-flex"},r.a.createElement(Q.H,{className:Re.e("nav-item-icon")}),r.a.createElement("span",{className:""},"Contents")),r.a.createElement(Q.r,{className:Re.e("nav-item-icon"),style:{padding:0,transform:this.state.isOpenContents?"rotate(0deg)":"rotate(-90deg)",transitionDuration:"0.3s",transitionProperty:"transform"}}))),r.a.createElement(Oe.a,{isOpen:this.state.isOpenContents},Ce.map(function(e,t){var a=e.to,n=e.name,c=e.exact,o=e.Icon;return r.a.createElement(S.a,{key:t,className:Re.e("nav-item")},r.a.createElement(Y.a,{id:"navItem-".concat(n,"-").concat(t),className:"text-uppercase",tag:Ne.a,to:a,activeClassName:"active",exact:c},r.a.createElement(o,{className:Re.e("nav-item-icon")}),r.a.createElement("span",{className:""},n)))})),r.a.createElement(S.a,{className:Re.e("nav-item"),onClick:this.handleClick("Pages")},r.a.createElement(Y.a,{className:Re.e("nav-item-collapse")},r.a.createElement("div",{className:"d-flex"},r.a.createElement(Q.z,{className:Re.e("nav-item-icon")}),r.a.createElement("span",{className:""},"Pages")),r.a.createElement(Q.r,{className:Re.e("nav-item-icon"),style:{padding:0,transform:this.state.isOpenPages?"rotate(0deg)":"rotate(-90deg)",transitionDuration:"0.3s",transitionProperty:"transform"}}))),r.a.createElement(Oe.a,{isOpen:this.state.isOpenPages},Se.map(function(e,t){var a=e.to,n=e.name,c=e.exact,o=e.Icon;return r.a.createElement(S.a,{key:t,className:Re.e("nav-item")},r.a.createElement(Y.a,{id:"navItem-".concat(n,"-").concat(t),className:"text-uppercase",tag:Ne.a,to:a,activeClassName:"active",exact:c},r.a.createElement(o,{className:Re.e("nav-item-icon")}),r.a.createElement("span",{className:""},n)))})))))}}]),a}(r.a.Component),Ie=a(109),Be=a(34),De=function(e){var t=e.component,a=Object(E.a)(e,["component"]);return r.a.createElement(le.a,Object.assign({},a,{render:function(e){return Object(Be.a)()?r.a.createElement(t,e):r.a.createElement(Ie.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},Le=a(131),Ae=function(e){var t=e.color,a=void 0===t?"primary":t;return r.a.createElement("div",{className:"cr-page-spinner"},r.a.createElement(Le.a,{color:a}))},_e=a(132),Te=a(133),We=a(116);function Me(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var Ue=function(e){Object(s.a)(a,e);var t=Me(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleAuthState=function(t){t===p.a?e.props.history.push("/login"):e.props.history.push("/signup")},e.handleLogoClick=function(){e.props.history.push("/")},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(_e.a,{style:{height:"100vh",justifyContent:"center",alignItems:"center"}},r.a.createElement(Te.a,{md:6,lg:4},r.a.createElement(We.a,{body:!0},r.a.createElement(p.b,{authState:this.props.authState,onChangeAuthState:this.handleAuthState,onLogoClick:this.handleLogoClick}))))}}]),a}(r.a.Component),qe=a(69),Je=a.n(qe),Ve=a(134),Ge=a(136);a(106);function He(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var Fe=r.a.lazy(function(){return a.e(18).then(a.bind(null,482))}),Ke=r.a.lazy(function(){return a.e(15).then(a.bind(null,465))}),Qe=r.a.lazy(function(){return a.e(22).then(a.bind(null,466))}),Xe=r.a.lazy(function(){return a.e(9).then(a.bind(null,484))}),Ye=r.a.lazy(function(){return a.e(17).then(a.bind(null,467))}),Ze=r.a.lazy(function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,483))}),$e=r.a.lazy(function(){return Promise.all([a.e(0),a.e(19)]).then(a.bind(null,485))}),et=r.a.lazy(function(){return Promise.all([a.e(0),a.e(5),a.e(6)]).then(a.bind(null,480))}),tt=r.a.lazy(function(){return a.e(10).then(a.bind(null,470))}),at=r.a.lazy(function(){return a.e(20).then(a.bind(null,486))}),nt=r.a.lazy(function(){return a.e(12).then(a.bind(null,481))}),rt=r.a.lazy(function(){return a.e(11).then(a.bind(null,471))}),ct=r.a.lazy(function(){return a.e(16).then(a.bind(null,472))}),ot=r.a.lazy(function(){return a.e(21).then(a.bind(null,473))}),it=r.a.lazy(function(){return a.e(23).then(a.bind(null,474))}),lt=r.a.lazy(function(){return a.e(14).then(a.bind(null,487))}),st=r.a.lazy(function(){return a.e(7).then(a.bind(null,475))}),ut=r.a.lazy(function(){return Promise.all([a.e(1),a.e(24)]).then(a.bind(null,476))}),mt=r.a.lazy(function(){return Promise.all([a.e(1),a.e(13)]).then(a.bind(null,488))}),pt=function(e){Object(s.a)(a,e);var t=He(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(Ve.a,{basename:"/".concat("".split("/").pop())},r.a.createElement(v,null,r.a.createElement(Ge.a,null,r.a.createElement(se,{exact:!0,path:"/login",layout:j,component:function(e){return r.a.createElement(Ue,Object.assign({},e,{authState:p.a}))}}),r.a.createElement(se,{exact:!0,path:"/admin",layout:j,component:function(e){return r.a.createElement(Ue,Object.assign({},e,{authState:p.a}))}}),r.a.createElement(de,{breakpoint:this.props.breakpoint},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(Ae,null)},r.a.createElement(De,{exact:!0,path:"/",component:et}),r.a.createElement(De,{exact:!0,path:"/login-modal",component:Ke}),r.a.createElement(De,{exact:!0,path:"/buttons",component:Ye}),r.a.createElement(De,{exact:!0,path:"/cards",component:Ze}),r.a.createElement(De,{exact:!0,path:"/widgets",component:lt}),r.a.createElement(De,{exact:!0,path:"/typography",component:it}),r.a.createElement(De,{exact:!0,path:"/alerts",component:Fe}),r.a.createElement(De,{exact:!0,path:"/tables",component:ot}),r.a.createElement(De,{exact:!0,path:"/badges",component:Qe}),r.a.createElement(De,{exact:!0,path:"/button-groups",component:Xe}),r.a.createElement(De,{exact:!0,path:"/dropdowns",component:tt}),r.a.createElement(De,{exact:!0,path:"/progress",component:ct}),r.a.createElement(De,{exact:!0,path:"/modals",component:rt}),r.a.createElement(De,{exact:!0,path:"/forms",component:at}),r.a.createElement(De,{exact:!0,path:"/input-groups",component:nt}),r.a.createElement(De,{exact:!0,path:"/admin-manager",component:st}),r.a.createElement(De,{exact:!0,path:"/user-manager",component:ut}),r.a.createElement(De,{exact:!0,path:"/subject-manager",component:mt}),r.a.createElement(De,{exact:!0,path:"/charts",component:$e}))),r.a.createElement(Ie.a,{to:"/"}))))}}]),a}(r.a.Component),ft=Je()(function(e){var t=e.width;return t<575?{breakpoint:"xs"}:576<t&&t<767?{breakpoint:"sm"}:768<t&&t<991?{breakpoint:"md"}:992<t&&t<1199?{breakpoint:"lg"}:t>1200?{breakpoint:"xl"}:{breakpoint:"xs"}})(pt);o.a.render(r.a.createElement(ft,null),document.getElementById("root"))},19:function(e,t,a){"use strict";var n=a(25),r=a(1),c=a.n(r);t.a=Object(n.a)({},c.a,{ID:c.a.oneOfType([c.a.string,c.a.number]).isRequired,component:c.a.oneOfType([c.a.string,c.a.func]),date:c.a.oneOfType([c.a.instanceOf(Date),c.a.string])})},21:function(e,t,a){"use strict";var n=a(25),r=a(9),c=a(2),o=a.n(c),i=(a(19),a(4)),l=a.n(i),s=a(32),u=function(e){var t=e.rounded,a=e.circle,c=e.src,i=e.size,s=e.tag,u=e.className,m=e.style,p=Object(r.a)(e,["rounded","circle","src","size","tag","className","style"]),f=l()({"rounded-circle":a,rounded:t},u);return o.a.createElement(s,Object.assign({src:c,style:Object(n.a)({width:i,height:i},m),className:f},p))};u.defaultProps={tag:"img",rounded:!1,circle:!0,size:40,src:a.n(s).a,style:{}},t.a=u},24:function(e,t,a){"use strict";var n,r=a(4),c=a.n(r),o=(n="cr",{create:function(e){var t=e;return"string"===typeof n&&(t="".concat(n,"-").concat(e)),{b:function(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return c()(t,a)},e:function(e){for(var a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];return c()("".concat(t,"__").concat(e),n)},m:function(e){for(var a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];return c()("".concat(t,"--").concat(e),n)}}}});t.a=o},26:function(e,t,a){"use strict";a.d(t,"a",function(){return N});var n=a(13),r=a(14),c=a(16),o=a(15),i=a(10),l=a(33),s=a.n(l),u=a(2),m=a.n(u),p=a(70),f=a(40),d=a(41),h=a(29),g=a(71),b=a(109),v=a(110),E=a(34);function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(i.a)(e);if(t){var r=Object(i.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(o.a)(this,a)}}var x=function(e){Object(c.a)(a,e);var t=y(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).handleSubmit=function(t){t.preventDefault(),localStorage.setItem("isLogin",!0),e.props.history.push("/")},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.showLogo,a=e.usernameLabel,n=e.usernameInputProps,r=e.passwordLabel,c=e.passwordInputProps,o=e.confirmPasswordLabel,i=e.confirmPasswordInputProps,l=e.children,u=e.onLogoClick;return Object(E.a)()?m.a.createElement(b.a,{to:"/"}):m.a.createElement(p.a,{onSubmit:this.handleSubmit},t&&m.a.createElement("div",{className:"text-center pb-4"},m.a.createElement("img",{src:s.a,className:"rounded",style:{width:60,height:60,cursor:"pointer"},alt:"logo",onClick:u})),m.a.createElement(f.a,null,m.a.createElement(d.a,{for:a},a),m.a.createElement(h.a,n)),m.a.createElement(f.a,null,m.a.createElement(d.a,{for:r},r),m.a.createElement(h.a,c)),this.isSignup&&m.a.createElement(f.a,null,m.a.createElement(d.a,{for:o},o),m.a.createElement(h.a,i)),m.a.createElement(f.a,{check:!0},m.a.createElement(d.a,{check:!0},m.a.createElement(h.a,{type:"checkbox"})," ",this.isSignup?"Agree the terms and policy":"Remember me")),m.a.createElement("hr",null),m.a.createElement(g.a,{size:"lg",className:"bg-gradient-theme-left border-0",block:!0,onClick:this.handleSubmit},"Login"),l)}}]),a}(m.a.Component),N="LOGIN";x.defaultProps={showLogo:!0,usernameLabel:"Email",usernameInputProps:{type:"email",placeholder:"your@email.com"},passwordLabel:"Password",passwordInputProps:{type:"password",placeholder:"your password"},confirmPasswordLabel:"Confirm Password",confirmPasswordInputProps:{type:"password",placeholder:"confirm your password"},onLogoClick:function(){}},t.b=Object(v.a)(x)},32:function(e,t,a){e.exports=a.p+"static/media/100_4.978e51b5.jpg"},33:function(e,t,a){e.exports=a.p+"static/media/logo_200.b175e1c4.png"},34:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(){return"true"===localStorage.getItem("isLogin")}},47:function(e,t,a){e.exports=a.p+"static/media/sidebar-4.80d4a4e5.jpg"},50:function(e,t,a){"use strict";var n=a(2),r=a.n(n),c=a(8),o=a(70),i=a(29);t.a=function(){return r.a.createElement(o.a,{inline:!0,className:"cr-search-form",onSubmit:function(e){return e.preventDefault()}},r.a.createElement(c.G,{size:"20",className:"cr-search-form__icon-search text-secondary"}),r.a.createElement(i.a,{type:"search",className:"cr-search-form__input",placeholder:"Search..."}))}},51:function(e,t,a){e.exports=a.p+"static/media/100_1.1f7beca5.jpg"},52:function(e,t,a){"use strict";var n=a(9),r=a(2),c=a.n(r),o=a(19),i=a(4),l=a.n(i),s=a(116),u=a(117),m=a(118),p=a(119),f=a(120),d=a(21),h=function(e){var t=e.avatar,a=e.avatarSize,r=e.title,o=e.subtitle,i=e.text,h=e.children,g=e.className,b=Object(n.a)(e,["avatar","avatarSize","title","subtitle","text","children","className"]),v=l()("bg-gradient-theme",g);return c.a.createElement(s.a,Object.assign({inverse:!0,className:v},b),c.a.createElement(u.a,{className:"d-flex justify-content-center align-items-center flex-column"},c.a.createElement(d.a,{src:t,size:a,className:"mb-2"}),c.a.createElement(m.a,null,r),c.a.createElement(p.a,null,o),c.a.createElement(f.a,null,c.a.createElement("small",null,i))),h)};h.defaultProps={avatarSize:80};var g=h,b=a(121),v=a(71),E=function(e){var t=e.color,a=e.header,r=e.avatar,o=e.avatarSize,i=e.name,m=e.date,p=e.text,h=e.className,g=e.buttonProps,E=Object(n.a)(e,["color","header","avatar","avatarSize","name","date","text","className","buttonProps"]),y="bg-".concat(t),x=l()(y,h);return c.a.createElement(s.a,Object.assign({inverse:!0,className:x},E),a&&"string"===typeof a?c.a.createElement(b.a,{className:y},a):a,c.a.createElement(u.a,{className:"d-flex flex-wrap flex-column align-items-center justify-content-center"},c.a.createElement(d.a,{size:o,src:r}),c.a.createElement(f.a,{className:"text-center"},c.a.createElement("strong",{className:"d-block"},i),c.a.createElement("small",{className:"text-muted"},m)),c.a.createElement(f.a,{className:"text-center"},p),c.a.createElement(v.a,Object.assign({color:"primary"},g))))};E.defaultProps={color:"gradient-secondary",avatarSize:60};var y=E,x=a(124),N=a(125),O=a(122),k=a(123),j=a(40),w=a(41),C=a(29),S=(o.a.arrayOf(o.a.shape({id:o.a.ID,title:o.a.string,done:o.a.bool})),function(e){var t=e.todos,a=Object(n.a)(e,["todos"]);return c.a.createElement(O.a,Object.assign({flush:!0},a),t.map(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,a=e.title,n=e.done;return c.a.createElement(k.a,{key:t,className:"border-0"},c.a.createElement(j.a,{check:!0},c.a.createElement(w.a,{check:!0},c.a.createElement(C.a,{type:"checkbox",checked:n,readOnly:!0}),n?c.a.createElement("strike",null,a):c.a.createElement("span",null,a))))}),c.a.createElement(v.a,{block:!0},"Add"))});S.defaultProps={todos:[]};var P=S,R=a(65),z=function(e){var t=e.image,a=e.title,r=e.subtitle,o=e.todos,i=Object(n.a)(e,["image","title","subtitle","todos"]);return c.a.createElement(s.a,i,c.a.createElement("div",{className:"position-relative"},c.a.createElement(x.a,{src:t}),c.a.createElement(N.a,{className:"bg-dark",style:{opacity:.2}},c.a.createElement(m.a,{className:"text-white"},a),c.a.createElement(f.a,{className:"text-white"},r))),c.a.createElement(P,{todos:o}))};z.defaultProps={image:a.n(R).a,title:"Tasks",subtitle:"Due soon..."};var I=z;a.d(t,"c",function(){return g}),a.d(t,"a",function(){return y}),a.d(t,"b",function(){return I})},53:function(e,t,a){e.exports=a.p+"static/media/100_2.82e7c41e.jpg"},54:function(e,t,a){e.exports=a.p+"static/media/100_3.6e25d86d.jpg"},55:function(e,t,a){e.exports=a.p+"static/media/100_5.fd533725.jpg"},56:function(e,t,a){"use strict";var n=a(25),r=a(9),c=a(2),o=a.n(c),i=a(4),l=a.n(i),s=a(108),u={"top-right":{top:-3,right:-3},"top-left":{top:-3,left:-3},"bottom-left":{bottom:-3,left:-3},"bottom-right":{bottom:-3,right:-3}},m={xs:{width:10,height:10},sm:{width:15,height:15},md:{width:20,height:20},lg:{width:25,height:25},xl:{width:30,height:30}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.position,a=void 0===t?"bottom-right":t,c=e.size,i=void 0===c?"sm":c,p=e.style,f=void 0===p?{}:p,d=e.className,h=Object(r.a)(e,["position","size","style","className"]);return function(e){return function(t){var c=t.tag,p=void 0===c?"div":c,g=Object(r.a)(t,["tag"]);return o.a.createElement(p,{className:"d-inline-block position-relative"},o.a.createElement(e,g),o.a.createElement(s.a,Object.assign({className:l()("position-absolute",d),style:Object(n.a)({},u[a],m[i],{borderRadius:"50%",border:"2px solid #fff"},f)},h)))}}}},65:function(e,t,a){e.exports=a.p+"static/media/background_1920-2.c54eef50.jpg"},75:function(e,t,a){e.exports=a(107)}},[[75,3,4]]]);
//# sourceMappingURL=main.e476461e.chunk.js.map