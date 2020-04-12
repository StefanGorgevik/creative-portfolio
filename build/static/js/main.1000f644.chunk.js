(this["webpackJsonpcreative-portfolio"]=this["webpackJsonpcreative-portfolio"]||[]).push([[0],[,,,,,,function(e,a,t){},,function(e,a,t){e.exports=t(25)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),o=t.n(l),i=(t(13),t(14),t(1)),c=t(2),s=t(4),u=t(3);t(15),t(16),t(17);function d(e){if("wait"!==e.className)var a=e.divs.map((function(a,t){return r.a.createElement("li",{className:"about-me-header-ul-li",key:t,onMouseEnter:function(){return e.divHovered(a)}},a)}));return r.a.createElement("ul",{className:e.hovered?"about-me-header-ul-active":e.className}," wait"!==e.className?a:null)}var m=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).handleHover=function(){n.setState({hovered:!0}),setTimeout((function(){n.setState({ulClass:"about-me-header-ul"})}),700)},n.handleHoverLeave=function(){n.setState({hovered:!1}),setTimeout((function(){n.setState({ulClass:"wait"})}),700)},n.state={hovered:!1,ulClass:"wait"},n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:this.state.hovered?"about-me-header-active":"about-me-header",onMouseEnter:this.handleHover,onMouseLeave:this.handleHoverLeave},r.a.createElement(d,{className:"wait"===this.state.ulClass?"wait":"about-me-header-ul",divHovered:this.props.divHovered,divs:this.props.divs,hovered:this.state.hovered}),this.state.hovered?null:r.a.createElement("div",{className:"arrow-div"},r.a.createElement("i",{className:"fas fa-arrow-alt-circle-right"})))}}]),t}(r.a.Component);t(18),t(6),t(19);var h=function(e){return r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{className:"visit-btn"},"Project"))};var v=function(e){return r.a.createElement("div",{className:"education-main-div"},r.a.createElement("h1",{className:"about-me-divs-title"},"Education"),r.a.createElement("div",{className:"education-div"},r.a.createElement("h3",null,"Semos Education, Skopje, North Macedonia"),r.a.createElement("p",null,"March 2019 - February 2020"),r.a.createElement("h4",null,"I have worked and understood the connection between the front-end and the back-end when it comes to developing a web application, including the architectural pattern MVC. I have a good understanding of the communication between the handlers of the back-end and the UI in the front end. During the course that lasted aproximately 1 year, I have acknowledged skills with languages and frameworks such as Javascript, DOM,ReactJS, NodeJS and MongoDB, altogether with multiple libraries."),r.a.createElement(h,{url:"https://stark-island-29614.herokuapp.com"})))};t(20);function p(){var e=["Udemy - Web Developer Bootcamp by Colt Steele","Udemy - React - The Complete Guide by Maximilian Schwarzm\xfcller","Udemy - NodeJS - The Complete Guide by Maximilian Schwarzm\xfcller","Udemy - The Complete JavaScript Course by Jonas Schmedtmann"].map((function(e,a){return r.a.createElement("li",{key:e+a},e)}));return r.a.createElement("div",{className:"courses-div"},r.a.createElement("h1",{className:"about-me-divs-title"},"Courses"),r.a.createElement("p",{className:"courses-p"},"Before joining Semos Education, I had previous experience by following several courses on Udemy, including:"),r.a.createElement("ul",{className:"courses-ul"},e))}t(21);var f=function(e){var a=["Stefan Gorgevik","Full stack web developer","stefangorgevik@hotmail.com","https://github.com/StefanGorgevik","079-231-692","Skopje, Macedonia",25],t=["Name","Professional Headline","Email","GitHub","Phone Number","Location","Age"].map((function(e,t){return r.a.createElement("div",{key:e+t,className:"info-div"},r.a.createElement("p",{className:"key"},e),r.a.createElement("p",{className:"value"},"https://github.com/StefanGorgevik"===a[t]?r.a.createElement("a",{href:"https://github.com/StefanGorgevik",target:"_blank",rel:"noopener noreferrer"},a[t]):a[t]))}));return r.a.createElement("div",{className:"personal-main-info-div"},r.a.createElement("h1",{className:"about-me-divs-title"},"Personal Info"),t)};t(22);var E=function(e){return r.a.createElement("div",{className:"technical-skills-div"},r.a.createElement("h1",{className:"about-me-divs-title"},"Technical Skills"),r.a.createElement("div",{className:"ul-div"},r.a.createElement("h1",{className:"ul-div-h1"},"Front-end"),r.a.createElement("ul",null,r.a.createElement("li",null,"HTML"),r.a.createElement("li",null,"CSS"),r.a.createElement("li",null,"Bootstrap"),r.a.createElement("li",null,"ReactJS"),r.a.createElement("li",null,"DOM"))),r.a.createElement("div",{className:"ul-div"},r.a.createElement("h1",{className:"ul-div-h1"},"Back-end"),r.a.createElement("ul",null,r.a.createElement("li",null,"NodeJS"),r.a.createElement("li",null,"MongoDB"))),r.a.createElement("div",{className:"ul-div"},r.a.createElement("h1",{className:"ul-div-h1"},"Concepts and skills"),r.a.createElement("ul",null,r.a.createElement("li",null,"MVC"),r.a.createElement("li",null,"JSON"),r.a.createElement("li",null,"API & RestAPI"),r.a.createElement("li",null,"HTTP"),r.a.createElement("li",null,"Databases"))))};t(23),t(24);function b(e){return r.a.createElement("div",{className:"project-info-div"},r.a.createElement("h1",{className:"project-info-h1"},e.name),r.a.createElement("p",{className:"project-info-p"},e.info,e.extra?r.a.createElement("p",{className:"extra-info-p"},e.extra):null),r.a.createElement(h,{url:e.url}))}var k=function(e){return r.a.createElement("div",{className:"projects-main-div"},r.a.createElement("h1",{className:"about-me-divs-title"},"Projects"),r.a.createElement("div",{className:"projects-div"},r.a.createElement(b,{name:"Expense Calculator",info:"Full-stack developed project, created with ReactJS, Node.js, and MongoDB. For the UI, I used plain HTML and\r CSS. It is a calculator where you can keep track of your expenses and bought items. It was given as an ending project\r by Semos Education. I also included a user info page and the option to add another user and merge both of your products.",url:"https://stark-island-29614.herokuapp.com"}),r.a.createElement(b,{name:"BodyBuildingMedia - Version 1",info:"Full-stack developed project, created with ReactJS, Node.js, and MongoDB. For the UI, I used plain HTML and\r CSS. It is a type of social media where you can keep track of diet and workout plan, and you can see other users' \r diets, workout plans and personal info. Updated version is coming up.",url:"https://bodybuildingmedia.herokuapp.com",extra:"!Upload photo is still not available. I am currently working on it! "}),r.a.createElement(b,{name:"Movie Database",info:"Front-end developed project, created with ReactJS. For the UI, I used plain HTML and\r CSS. It is a small front-end project where I used a prepared API, but the information was limited, \r so I worked with what I had.",url:"https://stefangorgevik.github.io/movies/"})))},N=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).divHovered=function(e){n.setState({hoveredDiv:e}),console.log(n.state.hoveredDiv)},n.state={divs:["Personal Info","Education","Courses","Technical Skills","Projects"],hoveredDiv:"Personal Info"},n}return Object(c.a)(t,[{key:"renderSwitch",value:function(){switch(this.state.hoveredDiv){case"Personal Info":return r.a.createElement(f,null);case"Education":return r.a.createElement(v,null);case"Courses":return r.a.createElement(p,null);case"Technical Skills":return r.a.createElement(E,null);case"Projects":return r.a.createElement(k,null);default:return null}}},{key:"render",value:function(){return r.a.createElement("div",{className:"about-me-main-div"},r.a.createElement(m,{divs:this.state.divs,hoveredDiv:this.state.hoveredDiv,divHovered:this.divHovered}),r.a.createElement("div",{className:"about-me-div"},this.renderSwitch()))}}]),t}(r.a.Component);var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.1000f644.chunk.js.map