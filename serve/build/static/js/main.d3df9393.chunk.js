(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{19:function(e,t,a){"use strict";var n=a(24),r=a(1),c=a.n(r);t.a=Object(n.a)({},c.a,{ID:c.a.oneOfType([c.a.string,c.a.number]).isRequired,component:c.a.oneOfType([c.a.string,c.a.func]),date:c.a.oneOfType([c.a.instanceOf(Date),c.a.string])})},20:function(e,t,a){"use strict";var n=a(24),r=a(9),c=a(2),o=a.n(c),l=(a(19),a(4)),i=a.n(l),s=a(30),u=function(e){var t=e.rounded,a=e.circle,c=e.src,l=e.size,s=e.tag,u=e.className,m=e.style,p=Object(r.a)(e,["rounded","circle","src","size","tag","className","style"]),f=i()({"rounded-circle":a,rounded:t},u);return o.a.createElement(s,Object.assign({src:c,style:Object(n.a)({width:l,height:l},m),className:f},p))};u.defaultProps={tag:"img",rounded:!1,circle:!0,size:40,src:a.n(s).a,style:{}},t.a=u},22:function(e,t,a){"use strict";var n,r=a(4),c=a.n(r),o=(n="cr",{create:function(e){var t=e;return"string"===typeof n&&(t="".concat(n,"-").concat(e)),{b:function(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return c()(t,a)},e:function(e){for(var a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];return c()("".concat(t,"__").concat(e),n)},m:function(e){for(var a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];return c()("".concat(t,"--").concat(e),n)}}}});t.a=o},25:function(e,t,a){"use strict";a.d(t,"a",function(){return O});var n=a(15),r=a(16),c=a(18),o=a(17),l=a(10),i=a(31),s=a.n(i),u=a(2),m=a.n(u),p=a(64),f=a(37),d=a(38),h=a(28),b=a(65),g=a(96),v=a(97),y=a(32);function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(o.a)(this,a)}}var x=function(e){Object(c.a)(a,e);var t=E(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).handleSubmit=function(t){t.preventDefault(),localStorage.setItem("isLogin",!0),e.props.history.push("/")},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.showLogo,a=e.usernameLabel,n=e.usernameInputProps,r=e.passwordLabel,c=e.passwordInputProps,o=e.confirmPasswordLabel,l=e.confirmPasswordInputProps,i=e.children,u=e.onLogoClick;return Object(y.a)()?m.a.createElement(g.a,{to:"/"}):m.a.createElement(p.a,{onSubmit:this.handleSubmit},t&&m.a.createElement("div",{className:"text-center pb-4"},m.a.createElement("img",{src:s.a,className:"rounded",style:{width:60,height:60,cursor:"pointer"},alt:"logo",onClick:u})),m.a.createElement(f.a,null,m.a.createElement(d.a,{for:a},a),m.a.createElement(h.a,n)),m.a.createElement(f.a,null,m.a.createElement(d.a,{for:r},r),m.a.createElement(h.a,c)),this.isSignup&&m.a.createElement(f.a,null,m.a.createElement(d.a,{for:o},o),m.a.createElement(h.a,l)),m.a.createElement(f.a,{check:!0},m.a.createElement(d.a,{check:!0},m.a.createElement(h.a,{type:"checkbox"})," ",this.isSignup?"Agree the terms and policy":"Remember me")),m.a.createElement("hr",null),m.a.createElement(b.a,{size:"lg",className:"bg-gradient-theme-left border-0",block:!0,onClick:this.handleSubmit},"Login"),i)}}]),a}(m.a.Component),O="LOGIN";x.defaultProps={showLogo:!0,usernameLabel:"Email",usernameInputProps:{type:"email",placeholder:"your@email.com",value:"superadmin"},passwordLabel:"Password",passwordInputProps:{type:"password",placeholder:"your password",value:"555555"},confirmPasswordLabel:"Confirm Password",confirmPasswordInputProps:{type:"password",placeholder:"confirm your password"},onLogoClick:function(){}},t.b=Object(v.a)(x)},30:function(e,t,a){e.exports=a.p+"static/media/100_4.978e51b5.jpg"},31:function(e,t,a){e.exports=a.p+"static/media/logo_200.b175e1c4.png"},32:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(){return"true"===localStorage.getItem("isLogin")}},45:function(e,t,a){e.exports=a.p+"static/media/sidebar-4.80d4a4e5.jpg"},48:function(e,t,a){"use strict";var n=a(2),r=a.n(n),c=a(8),o=a(64),l=a(28);t.a=function(){return r.a.createElement(o.a,{inline:!0,className:"cr-search-form",onSubmit:function(e){return e.preventDefault()}},r.a.createElement(c.C,{size:"20",className:"cr-search-form__icon-search text-secondary"}),r.a.createElement(l.a,{type:"search",className:"cr-search-form__input",placeholder:"Search..."}))}},49:function(e,t,a){e.exports=a.p+"static/media/100_1.1f7beca5.jpg"},50:function(e,t,a){"use strict";var n=a(9),r=a(2),c=a.n(r),o=a(19),l=a(4),i=a.n(l),s=a(103),u=a(104),m=a(105),p=a(106),f=a(107),d=a(20),h=function(e){var t=e.avatar,a=e.avatarSize,r=e.title,o=e.subtitle,l=e.text,h=e.children,b=e.className,g=Object(n.a)(e,["avatar","avatarSize","title","subtitle","text","children","className"]),v=i()("bg-gradient-theme",b);return c.a.createElement(s.a,Object.assign({inverse:!0,className:v},g),c.a.createElement(u.a,{className:"d-flex justify-content-center align-items-center flex-column"},c.a.createElement(d.a,{src:t,size:a,className:"mb-2"}),c.a.createElement(m.a,null,r),c.a.createElement(p.a,null,o),c.a.createElement(f.a,null,c.a.createElement("small",null,l))),h)};h.defaultProps={avatarSize:80};var b=h,g=a(108),v=a(65),y=function(e){var t=e.color,a=e.header,r=e.avatar,o=e.avatarSize,l=e.name,m=e.date,p=e.text,h=e.className,b=e.buttonProps,y=Object(n.a)(e,["color","header","avatar","avatarSize","name","date","text","className","buttonProps"]),E="bg-".concat(t),x=i()(E,h);return c.a.createElement(s.a,Object.assign({inverse:!0,className:x},y),a&&"string"===typeof a?c.a.createElement(g.a,{className:E},a):a,c.a.createElement(u.a,{className:"d-flex flex-wrap flex-column align-items-center justify-content-center"},c.a.createElement(d.a,{size:o,src:r}),c.a.createElement(f.a,{className:"text-center"},c.a.createElement("strong",{className:"d-block"},l),c.a.createElement("small",{className:"text-muted"},m)),c.a.createElement(f.a,{className:"text-center"},p),c.a.createElement(v.a,Object.assign({color:"primary"},b))))};y.defaultProps={color:"gradient-secondary",avatarSize:60};var E=y,x=a(111),O=a(112),k=a(109),N=a(110),j=a(37),w=a(38),S=a(28),P=(o.a.arrayOf(o.a.shape({id:o.a.ID,title:o.a.string,done:o.a.bool})),function(e){var t=e.todos,a=Object(n.a)(e,["todos"]);return c.a.createElement(k.a,Object.assign({flush:!0},a),t.map(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,a=e.title,n=e.done;return c.a.createElement(N.a,{key:t,className:"border-0"},c.a.createElement(j.a,{check:!0},c.a.createElement(w.a,{check:!0},c.a.createElement(S.a,{type:"checkbox",checked:n,readOnly:!0}),n?c.a.createElement("strike",null,a):c.a.createElement("span",null,a))))}),c.a.createElement(v.a,{block:!0},"Add"))});P.defaultProps={todos:[]};var C=P,z=a(59),R=function(e){var t=e.image,a=e.title,r=e.subtitle,o=e.todos,l=Object(n.a)(e,["image","title","subtitle","todos"]);return c.a.createElement(s.a,l,c.a.createElement("div",{className:"position-relative"},c.a.createElement(x.a,{src:t}),c.a.createElement(O.a,{className:"bg-dark",style:{opacity:.2}},c.a.createElement(m.a,{className:"text-white"},a),c.a.createElement(f.a,{className:"text-white"},r))),c.a.createElement(C,{todos:o}))};R.defaultProps={image:a.n(z).a,title:"Tasks",subtitle:"Due soon..."};var I=R;a.d(t,"c",function(){return b}),a.d(t,"a",function(){return E}),a.d(t,"b",function(){return I})},51:function(e,t,a){e.exports=a.p+"static/media/100_2.82e7c41e.jpg"},52:function(e,t,a){e.exports=a.p+"static/media/100_3.6e25d86d.jpg"},53:function(e,t,a){e.exports=a.p+"static/media/100_5.fd533725.jpg"},54:function(e,t,a){"use strict";var n=a(24),r=a(9),c=a(2),o=a.n(c),l=a(4),i=a.n(l),s=a(95),u={"top-right":{top:-3,right:-3},"top-left":{top:-3,left:-3},"bottom-left":{bottom:-3,left:-3},"bottom-right":{bottom:-3,right:-3}},m={xs:{width:10,height:10},sm:{width:15,height:15},md:{width:20,height:20},lg:{width:25,height:25},xl:{width:30,height:30}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.position,a=void 0===t?"bottom-right":t,c=e.size,l=void 0===c?"sm":c,p=e.style,f=void 0===p?{}:p,d=e.className,h=Object(r.a)(e,["position","size","style","className"]);return function(e){return function(t){var c=t.tag,p=void 0===c?"div":c,b=Object(r.a)(t,["tag"]);return o.a.createElement(p,{className:"d-inline-block position-relative"},o.a.createElement(e,b),o.a.createElement(s.a,Object.assign({className:i()("position-absolute",d),style:Object(n.a)({},u[a],m[l],{borderRadius:"50%",border:"2px solid #fff"},f)},h)))}}}},59:function(e,t,a){e.exports=a.p+"static/media/background_1920-2.c54eef50.jpg"},66:function(e,t,a){e.exports=a(94)},93:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(23),o=a.n(c),l=a(15),i=a(16),s=a(18),u=a(17),m=a(10),p=a(25),f=a(9),d=a(22),h=a(99),b=d.a.create("content"),g=function(e){var t=e.tag,a=e.className,n=Object(f.a)(e,["tag","className"]),c=b.b(a);return r.a.createElement(t,Object.assign({className:c},n))};g.defaultProps={tag:h.a};var v=g,y=function(e){var t=e.children,a=Object(f.a)(e,["children"]);return r.a.createElement("main",Object.assign({className:"cr-app bg-light"},a),r.a.createElement(v,{fluid:!0},t))},E=a(100),x=a(101),O=a(102),k=function(){return r.a.createElement(E.a,null,r.a.createElement(x.a,{navbar:!0},r.a.createElement(O.a,null,"2021 author Nguyen Trong Thuc")))},N=a(20),j=a(50),w=(a(19),a(113)),S=function(e){var t=e.notificationsData;return t&&t.length&&t.map(function(e){var t=e.id,a=e.avatar,n=e.message,c=e.date;return r.a.createElement(w.a,{key:t,className:"pb-2"},r.a.createElement(w.a,{left:!0,className:"align-self-center pr-3"},r.a.createElement(N.a,{tag:w.a,object:!0,src:a,alt:"Avatar"})),r.a.createElement(w.a,{body:!0,middle:!0,className:"align-self-center"},n),r.a.createElement(w.a,{right:!0,className:"align-self-center"},r.a.createElement("small",{className:"text-muted"},c)))})};S.defaultProps={notificationsData:[]};var P=S,C=a(48),z=a(49),R=a.n(z),I=a(51),B=a.n(I),L=a(52),A=a.n(L),D=a(30),_=a.n(D),T=a(53),W=a.n(T),M=[{id:1,avatar:R.a,message:"David sent you a message",date:"3 min ago"},{id:2,avatar:B.a,message:"Jane mentioned you here",date:"1 hour ago"},{id:3,avatar:A.a,message:"Clark sent a pull request",date:"yesterday"},{id:4,avatar:_.a,message:"Alicia signed up",date:"3 days ago"},{id:5,avatar:W.a,message:"Keith shared this article",date:"a week ago"}],U=a(54),q=a(8),J=a(65),H=a(114),F=a(115),G=a(116),K=a(109),Q=a(110),V=a(97);function X(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var Y=d.a.create("header"),Z=Object(U.a)({size:"md",color:"primary",style:{top:-10,right:-10,display:"inline-flex",justifyContent:"center",alignItems:"center"},children:r.a.createElement("small",null,"5")})(q.u),$=function(e){Object(s.a)(a,e);var t=X(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isOpenNotificationPopover:!1,isNotificationConfirmed:!1,isOpenUserCardPopover:!1},e.toggleNotificationPopover=function(){e.setState({isOpenNotificationPopover:!e.state.isOpenNotificationPopover}),e.state.isNotificationConfirmed||e.setState({isNotificationConfirmed:!0})},e.toggleUserCardPopover=function(){e.setState({isOpenUserCardPopover:!e.state.isOpenUserCardPopover})},e.handleSidebarControlButton=function(e){e.preventDefault(),e.stopPropagation(),document.querySelector(".cr-sidebar").classList.toggle("cr-sidebar--open")},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state.isNotificationConfirmed;return r.a.createElement(E.a,{light:!0,expand:!0,className:Y.b("bg-white")},r.a.createElement(x.a,{navbar:!0,className:"mr-2"},r.a.createElement(J.a,{outline:!0,onClick:this.handleSidebarControlButton},r.a.createElement(q.h,{size:25}))),r.a.createElement(x.a,{navbar:!0},r.a.createElement(C.a,null)),r.a.createElement(x.a,{navbar:!0,className:Y.e("nav-right")},r.a.createElement(O.a,{className:"d-inline-flex"},r.a.createElement(H.a,{id:"Popover1",className:"position-relative"},t?r.a.createElement(q.v,{size:25,className:"text-secondary can-click",onClick:this.toggleNotificationPopover}):r.a.createElement(Z,{size:25,className:"text-secondary can-click animated swing infinite",onClick:this.toggleNotificationPopover})),r.a.createElement(F.a,{placement:"bottom",isOpen:this.state.isOpenNotificationPopover,toggle:this.toggleNotificationPopover,target:"Popover1"},r.a.createElement(G.a,null,r.a.createElement(P,{notificationsData:M})))),r.a.createElement(O.a,null,r.a.createElement(H.a,{id:"Popover2"},r.a.createElement(N.a,{onClick:this.toggleUserCardPopover,className:"can-click"})),r.a.createElement(F.a,{placement:"bottom-end",isOpen:this.state.isOpenUserCardPopover,toggle:this.toggleUserCardPopover,target:"Popover2",className:"p-0 border-0",style:{minWidth:250}},r.a.createElement(G.a,{className:"p-0 border-light"},r.a.createElement(j.c,{title:"Jane",subtitle:"jane@jane.com",text:"Last updated 3 mins ago",className:"border-light"},r.a.createElement(K.a,{flush:!0},r.a.createElement(Q.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(q.w,null)," Profile"),r.a.createElement(Q.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(q.p,null)," Stats"),r.a.createElement(Q.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(q.t,null)," Messages"),r.a.createElement(Q.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(q.D,null)," Settings"),r.a.createElement(Q.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(q.n,null)," Help"),r.a.createElement(Q.a,{tag:"button",action:!0,className:"border-light",onClick:function(){localStorage.setItem("isLogin",!1),e.props.history.push("/login")}},r.a.createElement(q.l,null)," Signout"))))))))}}]),a}(r.a.Component),ee=Object(V.a)($),te=a(60),ae=function(e){var t=e.component,a=e.layout,n=Object(f.a)(e,["component","layout"]);return r.a.createElement(te.a,Object.assign({},n,{render:function(e){return r.a.createElement(a,null,r.a.createElement(t,e))}}))},ne=a(61),re=a.n(ne),ce={NotificationItem:{DefaultStyle:{display:"flex",justifyContent:"space-between",alignItems:"center",borderRadius:"4px",fontSize:"14px"},success:{borderTop:0,backgroundColor:"#45b649",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},error:{borderTop:0,backgroundColor:"#f85032",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},warning:{borderTop:0,backgroundColor:"#ffd700",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},info:{borderTop:0,background:"linear-gradient(to right, #6a82fb, #fc5c7d)",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0}},Title:{DefaultStyle:{margin:0,padding:0,paddingRight:5,color:"#fff",display:"inline-flex",fontSize:20,fontWeight:"bold"}},MessageWrapper:{DefaultStyle:{display:"block",color:"#fff",width:"100%"}},Dismiss:{DefaultStyle:{display:"inline-flex",justifyContent:"center",alignItems:"center",fontFamily:"inherit",fontSize:20,color:"#f2f2f2",position:"relative",margin:0,padding:0,background:"none",borderRadius:0,opacity:1,width:20,height:20,textAlign:"initial",float:"none",top:"unset",right:"unset",lineHeight:"inherit"}},Action:{DefaultStyle:{background:"#fff",borderRadius:"2px",padding:"6px 20px",fontWeight:"bold",margin:"10px 0 0 0",border:0},success:{backgroundColor:"#45b649",color:"#fff"},error:{backgroundColor:"#f85032",color:"#fff"},warning:{backgroundColor:"#ffd700",color:"#fff"},info:{backgroundColor:"#00c9ff",color:"#fff"}},ActionWrapper:{DefaultStyle:{margin:0,padding:0}}};function oe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var le=function(e){Object(s.a)(a,e);var t=oe(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleContentClick=function(t){!a.isSidebarOpen()||"xs"!==e.props.breakpoint&&"sm"!==e.props.breakpoint&&"md"!==e.props.breakpoint||e.openSidebar("close")},e}return Object(i.a)(a,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.breakpoint;t!==this.props.breakpoint&&this.checkBreakpoint(t)}},{key:"componentDidMount",value:function(){var e=this;this.checkBreakpoint(this.props.breakpoint),setTimeout(function(){e.notificationSystem&&e.notificationSystem.addNotification({title:r.a.createElement(q.o,null),message:"Welome to Admin Page!",level:"info"})},1500)}},{key:"checkBreakpoint",value:function(e){switch(e){case"xs":case"sm":case"md":return this.openSidebar("close");case"lg":case"xl":default:return this.openSidebar("open")}}},{key:"openSidebar",value:function(e){if("open"===e)return document.querySelector(".cr-sidebar").classList.add("cr-sidebar--open");document.querySelector(".cr-sidebar").classList.remove("cr-sidebar--open")}},{key:"render",value:function(){var e=this,t=this.props.children;return r.a.createElement("main",{className:"cr-app bg-light"},r.a.createElement(Ee,null),r.a.createElement(v,{fluid:!0,onClick:this.handleContentClick},r.a.createElement(ee,null),t,r.a.createElement(k,null)),r.a.createElement(re.a,{dismissible:!1,ref:function(t){return e.notificationSystem=t},style:ce}))}}],[{key:"isSidebarOpen",value:function(){return document.querySelector(".cr-sidebar").classList.contains("cr-sidebar--open")}}]),a}(r.a.Component),ie=a(29),se=a(31),ue=a.n(se),me=a(45),pe=a.n(me),fe=a(62),de=a(40),he=a(121);function be(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var ge={backgroundImage:'url("'.concat(pe.a,'")'),backgroundSize:"cover",backgroundRepeat:"no-repeat"},ve=(q.A,q.m,q.g,q.O,q.b,q.H,q.u,q.e,q.N,q.J,q.d,q.a,q.M,[{to:"/",name:"dashboard",exact:!0,Icon:q.i},{to:"/admin-manager",name:"admin manager",exact:!1,Icon:q.c},{to:"/user-manager",name:"user manager",exact:!1,Icon:de.e},{to:"/subject-manager",name:"subjects",exact:!1,Icon:q.I},{to:"/wallet-manager",name:"wallet",exact:!1,Icon:de.f}]),ye=d.a.create("sidebar"),Ee=function(e){Object(s.a)(a,e);var t=be(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isOpenComponents:!0,isOpenContents:!0,isOpenPages:!0},e.handleClick=function(t){return function(){e.setState(function(e){var a=e["isOpen".concat(t)];return Object(ie.a)({},"isOpen".concat(t),!a)})}},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("aside",{className:ye.b(),"data-image":pe.a},r.a.createElement("div",{className:ye.e("background"),style:ge}),r.a.createElement("div",{className:ye.e("content")},r.a.createElement(E.a,null,r.a.createElement(H.a,{className:"navbar-brand d-flex",tag:he.a,to:"/"},r.a.createElement("img",{src:ue.a,width:"40",height:"30",className:"pr-2",alt:""}),r.a.createElement("span",{className:"text-white"},"CRM ",r.a.createElement(fe.a,null)))),r.a.createElement(x.a,{vertical:!0},ve.map(function(e,t){var a=e.to,n=e.name,c=e.exact,o=e.Icon;return r.a.createElement(O.a,{key:t,className:ye.e("nav-item")},r.a.createElement(H.a,{id:"navItem-".concat(n,"-").concat(t),className:"text-uppercase",tag:he.a,to:a,activeClassName:"active",exact:c},r.a.createElement(o,{className:ye.e("nav-item-icon")}),r.a.createElement("span",{className:""},n)))}))))}}]),a}(r.a.Component),xe=a(96),Oe=a(32),ke=function(e){var t=e.component,a=Object(f.a)(e,["component"]);return r.a.createElement(te.a,Object.assign({},a,{render:function(e){return Object(Oe.a)()?r.a.createElement(t,e):r.a.createElement(xe.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},Ne=a(117),je=function(e){var t=e.color,a=void 0===t?"primary":t;return r.a.createElement("div",{className:"cr-page-spinner"},r.a.createElement(Ne.a,{color:a}))},we=a(118),Se=a(119),Pe=a(103);function Ce(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var ze=function(e){Object(s.a)(a,e);var t=Ce(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleAuthState=function(t){t===p.a?e.props.history.push("/login"):e.props.history.push("/signup")},e.handleLogoClick=function(){e.props.history.push("/")},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(we.a,{style:{height:"100vh",justifyContent:"center",alignItems:"center"}},r.a.createElement(Se.a,{md:6,lg:4},r.a.createElement(Pe.a,{body:!0},r.a.createElement(p.b,{authState:this.props.authState,onChangeAuthState:this.handleAuthState,onLogoClick:this.handleLogoClick}))))}}]),a}(r.a.Component),Re=a(63),Ie=a.n(Re),Be=a(120),Le=a(122);a(93);function Ae(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var De=r.a.lazy(function(){return Promise.all([a.e(0),a.e(27)]).then(a.bind(null,484))}),_e=r.a.lazy(function(){return Promise.all([a.e(0),a.e(23)]).then(a.bind(null,467))}),Te=r.a.lazy(function(){return a.e(24).then(a.bind(null,468))}),We=r.a.lazy(function(){return a.e(11).then(a.bind(null,486))}),Me=r.a.lazy(function(){return a.e(18).then(a.bind(null,469))}),Ue=r.a.lazy(function(){return Promise.all([a.e(1),a.e(9)]).then(a.bind(null,485))}),qe=r.a.lazy(function(){return Promise.all([a.e(1),a.e(19)]).then(a.bind(null,487))}),Je=r.a.lazy(function(){return Promise.all([a.e(1),a.e(5),a.e(6)]).then(a.bind(null,482))}),He=r.a.lazy(function(){return a.e(12).then(a.bind(null,472))}),Fe=r.a.lazy(function(){return a.e(20).then(a.bind(null,488))}),Ge=r.a.lazy(function(){return a.e(13).then(a.bind(null,483))}),Ke=r.a.lazy(function(){return Promise.all([a.e(0),a.e(16)]).then(a.bind(null,473))}),Qe=r.a.lazy(function(){return a.e(17).then(a.bind(null,474))}),Ve=r.a.lazy(function(){return a.e(21).then(a.bind(null,475))}),Xe=r.a.lazy(function(){return a.e(25).then(a.bind(null,476))}),Ye=r.a.lazy(function(){return a.e(15).then(a.bind(null,489))}),Ze=r.a.lazy(function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,477))}),$e=r.a.lazy(function(){return Promise.all([a.e(0),a.e(10),a.e(22)]).then(a.bind(null,490))}),et=r.a.lazy(function(){return Promise.all([a.e(0),a.e(7),a.e(26)]).then(a.bind(null,479))}),tt=r.a.lazy(function(){return Promise.all([a.e(0),a.e(14)]).then(a.bind(null,481))}),at=function(e){Object(s.a)(a,e);var t=Ae(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(Be.a,{basename:"/".concat("".split("/").pop())},r.a.createElement(Le.a,null,r.a.createElement(ae,{exact:!0,path:"/login",layout:y,component:function(e){return r.a.createElement(ze,Object.assign({},e,{authState:p.a}))}}),r.a.createElement(ae,{exact:!0,path:"/admin",layout:y,component:function(e){return r.a.createElement(ze,Object.assign({},e,{authState:p.a}))}}),r.a.createElement(le,{breakpoint:this.props.breakpoint},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(je,null)},r.a.createElement(ke,{exact:!0,path:"/",component:Je}),r.a.createElement(ke,{exact:!0,path:"/login-modal",component:_e}),r.a.createElement(ke,{exact:!0,path:"/buttons",component:Me}),r.a.createElement(ke,{exact:!0,path:"/cards",component:Ue}),r.a.createElement(ke,{exact:!0,path:"/widgets",component:Ye}),r.a.createElement(ke,{exact:!0,path:"/typography",component:Xe}),r.a.createElement(ke,{exact:!0,path:"/alerts",component:De}),r.a.createElement(ke,{exact:!0,path:"/tables",component:Ve}),r.a.createElement(ke,{exact:!0,path:"/badges",component:Te}),r.a.createElement(ke,{exact:!0,path:"/button-groups",component:We}),r.a.createElement(ke,{exact:!0,path:"/dropdowns",component:He}),r.a.createElement(ke,{exact:!0,path:"/progress",component:Qe}),r.a.createElement(ke,{exact:!0,path:"/modals",component:Ke}),r.a.createElement(ke,{exact:!0,path:"/forms",component:Fe}),r.a.createElement(ke,{exact:!0,path:"/input-groups",component:Ge}),r.a.createElement(ke,{exact:!0,path:"/admin-manager",component:Ze}),r.a.createElement(ke,{exact:!0,path:"/user-manager",component:$e}),r.a.createElement(ke,{exact:!0,path:"/subject-manager",component:et}),r.a.createElement(ke,{exact:!0,path:"/wallet-manager",component:tt}),r.a.createElement(ke,{exact:!0,path:"/charts",component:qe}))),r.a.createElement(xe.a,{to:"/"})))}}]),a}(r.a.Component),nt=Ie()(function(e){var t=e.width;return t<575?{breakpoint:"xs"}:576<t&&t<767?{breakpoint:"sm"}:768<t&&t<991?{breakpoint:"md"}:992<t&&t<1199?{breakpoint:"lg"}:t>1200?{breakpoint:"xl"}:{breakpoint:"xs"}})(at);o.a.render(r.a.createElement(nt,null),document.getElementById("root"))}},[[66,3,4]]]);
//# sourceMappingURL=main.d3df9393.chunk.js.map