(this.webpackJsonpme=this.webpackJsonpme||[]).push([[0],{24:function(e,t,s){},27:function(e,t,s){},39:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s(14),n=s.n(c),i=(s(24),s(5)),r=s(7),l=s(8),o=s(6),j=s(15),d=s(17),h=s.n(d),b=(s(27),s(18)),u=s(9),m=s.n(u),O=s(1),p=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){var e,t;if(!this.props.data)return null;var s=null===(e=this.props.data.social)||void 0===e?void 0:e.find((function(e){return"Github"===e.name})),a=null===(t=this.props.data.social)||void 0===t?void 0:t.find((function(e){return"LinkedIn"===e.name})),c=this.props.data.name,n=this.props.data.description;return Object(O.jsxs)("header",{id:"home",children:[Object(O.jsx)(b.a,{type:"circle",bg:!0}),Object(O.jsxs)("nav",{id:"nav-wrap",children:[Object(O.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(O.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(O.jsxs)("ul",{id:"nav",className:"nav",children:[Object(O.jsx)("li",{className:"current",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(O.jsx)("div",{className:"row banner",children:Object(O.jsxs)("div",{className:"banner-text",children:[Object(O.jsx)(m.a,{bottom:!0,children:Object(O.jsx)("h1",{className:"responsive-headline",children:c})}),Object(O.jsx)(m.a,{bottom:!0,duration:1200,children:Object(O.jsxs)("h3",{children:["- ",n," -"]})}),Object(O.jsx)("hr",{}),Object(O.jsx)(m.a,{bottom:!0,duration:2e3,children:Object(O.jsxs)("ul",{className:"social",children:[Object(O.jsxs)("a",{href:null===s||void 0===s?void 0:s.url,target:"_blank",className:"button btn github-btn",rel:"noreferrer",children:[Object(O.jsx)("i",{className:null===s||void 0===s?void 0:s.className}),"Github"]}),Object(O.jsxs)("a",{href:null===a||void 0===a?void 0:a.url,target:"_blank",className:"button btn linkedin-btn",rel:"noreferrer",children:[Object(O.jsx)("i",{className:null===a||void 0===a?void 0:a.className}),"LinkedIn"]})]})})]})}),Object(O.jsx)("p",{className:"scrolldown",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(O.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(a.Component),x=p,f=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return this.props.data?Object(O.jsx)("footer",{children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)(m.a,{bottom:!0,children:Object(O.jsx)("div",{className:"twelve columns",children:Object(O.jsxs)("ul",{className:"copyright",children:[Object(O.jsx)("li",{className:"copyright-name",children:"\xa9 Viona Zatil Aqmar Kaleb"}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})})]})})}),Object(O.jsx)("div",{id:"go-top",children:Object(O.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(O.jsx)("i",{className:"icon-up-open"})})})]})}):null}}]),s}(a.Component),v=f,N=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){var e,t,s,a;if(!this.props.data)return null;var c=this.props.data.fullname,n="images/"+this.props.data.image,i=this.props.data.bio,r=this.props.data.address.street,l=this.props.data.address.city,o=this.props.data.address.country,j=this.props.data.address.gmaps,d=null===(e=this.props.data.social)||void 0===e||null===(t=e.find((function(e){return"Email"===e.name})))||void 0===t?void 0:t.url,h=null===(s=this.props.data.social)||void 0===s||null===(a=s.find((function(e){return"LinkedIn"===e.name})))||void 0===a?void 0:a.url;return Object(O.jsx)("section",{id:"about",children:Object(O.jsx)(m.a,{duration:1e3,children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"three columns",children:Object(O.jsx)("img",{className:"profile-pic",src:n,alt:"Viona Z. A. Kaleb Profile Pic"})}),Object(O.jsxs)("div",{className:"nine columns main-col",children:[Object(O.jsxs)("h2",{children:[Object(O.jsx)("i",{class:"fa fa-user"})," About Me"]}),Object(O.jsx)("p",{children:i}),Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"columns contact-details",children:[Object(O.jsxs)("h2",{children:[Object(O.jsx)("i",{class:"fa fa-info-circle","aria-hidden":"true"})," Contact Details"]}),Object(O.jsxs)("p",{className:"address",children:[Object(O.jsx)("span",{children:Object(O.jsx)("a",{href:h,target:"_blank",rel:"noreferrer",style:{cursor:"pointer"},children:c})}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:Object(O.jsxs)("a",{href:j,target:"_blank",rel:"noreferrer",style:{cursor:"pointer"},children:[r&&Object(O.jsxs)(O.Fragment,{children:[r,Object(O.jsx)("br",{})]}),l,", ",o]})}),Object(O.jsx)("br",{}),Object(O.jsx)("a",{onClick:function(){return window.open("mailto:".concat(d))},style:{cursor:"pointer"},children:d})]})]})})]})]})})})}}]),s}(a.Component),g=N,k=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var t=this.props.data.skillmessage,s=this.props.data.education.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.school}),Object(O.jsxs)("p",{className:"info",children:[e.degree," ",Object(O.jsx)("span",{children:"\u2022"}),Object(O.jsx)("em",{className:"date",children:e.graduated})]}),Object(O.jsx)("p",{children:e.description})]},e.school)})),a=this.props.data.work.map((function(e){var t;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.company}),Object(O.jsxs)("p",{className:"info",children:[e.title,Object(O.jsx)("span",{children:"\u2022"})," ",Object(O.jsx)("em",{className:"date",children:e.years})]}),Object(O.jsx)("p",{className:"mb-1",children:e.description}),Object(O.jsx)("div",{className:"skill-container mb-2",children:null===e||void 0===e||null===(t=e.skills)||void 0===t?void 0:t.map((function(e){return Object(O.jsxs)("div",{class:"skill-labels",children:["\u2714 ",e]})}))})]},e.company)})),c=this.props.data.skills.map((function(t){var s=e.getRandomColor(),a="bar-expand "+t.name.toLowerCase(),c=t.level;return Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{style:{width:c,backgroundColor:s},className:a}),Object(O.jsx)("em",{children:t.name})]},t.name)}));return Object(O.jsxs)("section",{id:"resume",children:[Object(O.jsx)(m.a,{left:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row education",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsxs)("h1",{children:[Object(O.jsx)("i",{class:"fa fa-book"})," ",Object(O.jsx)("span",{children:"Education"})]})}),Object(O.jsx)("div",{className:"nine columns main-col",children:Object(O.jsx)("div",{className:"row item",children:Object(O.jsx)("div",{className:"twelve columns",children:s})})})]})}),Object(O.jsx)(m.a,{right:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row work",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsxs)("h1",{children:[Object(O.jsx)("i",{class:"fa fa-briefcase"})," ",Object(O.jsx)("span",{children:"Work"})]})}),Object(O.jsx)("div",{className:"nine columns main-col",children:a})]})}),Object(O.jsx)(m.a,{left:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row skill",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsxs)("h1",{children:[Object(O.jsx)("i",{class:"fa fa-file"})," ",Object(O.jsx)("span",{children:"Skills"})]})}),Object(O.jsxs)("div",{className:"nine columns main-col",children:[Object(O.jsx)("p",{children:t}),Object(O.jsx)("div",{className:"bars",children:Object(O.jsx)("ul",{className:"skills",children:c})})]})]})})]})}}]),s}(a.Component),y=k,w=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){var e,t;if(!this.props.data)return null;var s=this.props.data.contactmessage,a=null===(e=this.props.data.social)||void 0===e||null===(t=e.find((function(e){return"Email"===e.name})))||void 0===t?void 0:t.url;return Object(O.jsx)("section",{id:"contact",children:Object(O.jsx)(u.Fade,{bottom:!0,duration:1e3,children:Object(O.jsxs)("div",{className:"row section-head",children:[Object(O.jsx)("div",{className:"two columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Get In Touch"})})}),Object(O.jsxs)("div",{className:"ten columns",children:[Object(O.jsx)("p",{style:{margin:0,width:"100%"},children:Object(O.jsxs)("a",{onClick:function(){return window.open("mailto:".concat(a))},className:"button",style:{width:"100%"},children:[Object(O.jsx)("i",{class:"fa fa-envelope","aria-hidden":"true"})," ",s]})}),Object(O.jsx)("p",{style:{margin:"0 0 0 0.5rem",cursor:"pointer"},children:Object(O.jsx)("a",{href:"https://linkedin.com/in/vionakaleb",target:"_blank",rel:"noreferrer",style:{cursor:"pointer"},children:"Or reach me on LinkedIn."})})]})]})})})}}]),s}(a.Component),C=w,D=s(19),A=s.n(D),S=0,F=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(O.jsx)("div",{className:"columns portfolio-item",children:Object(O.jsxs)("div",{className:"item-wrap",children:[Object(O.jsx)(A.a,{alt:e.title,src:t}),Object(O.jsx)("div",{style:{textAlign:"center"},children:e.title})]})},S++)}));return Object(O.jsx)("section",{id:"portfolio",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"twelve columns collapsed",children:[Object(O.jsxs)("div",{style:{textAlign:"center",marginBottom:"2rem"},children:[Object(O.jsxs)("h1",{style:{marginBottom:"2rem"},children:[Object(O.jsx)("i",{class:"fa fa-folder-open"})," Some of My Works"]}),Object(O.jsx)("a",{href:this.props.data.project,target:"_blank",className:"button btn github-btn",rel:"noreferrer",style:{padding:"5px 20px",fontSize:"small"},children:"More Portfolio"})]}),Object(O.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),s}(a.Component),I=F,L=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},j.a.initialize("UA-110570651-1"),j.a.pageview(window.location.pathname),a}return Object(r.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(x,{data:this.state.resumeData.main}),Object(O.jsx)(g,{data:this.state.resumeData.main}),Object(O.jsx)(y,{data:this.state.resumeData.resume}),Object(O.jsx)(I,{data:this.state.resumeData.portfolio}),Object(O.jsx)(C,{data:this.state.resumeData.main}),Object(O.jsx)(v,{data:this.state.resumeData.main})]})}}]),s}(a.Component),B=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,40)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};n.a.render(Object(O.jsx)(L,{}),document.getElementById("root")),B()}},[[39,1,2]]]);
//# sourceMappingURL=main.346379dd.chunk.js.map