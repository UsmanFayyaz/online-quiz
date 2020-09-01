(this["webpackJsonponline-quiz"]=this["webpackJsonponline-quiz"]||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(183),o=n(35);test("renders learn react link",(function(){var e=(0,Object(i.a)(a.a.createElement(o.default,null)).getByText)(/learn react/i);expect(e).toBeInTheDocument()}))},147:function(e,t,n){"use strict";n.r(t);n(471)},192:function(e,t,n){e.exports=n(44)},196:function(e,t,n){var r={"./":44,"./App":35,"./App.css":103,"./App.js":35,"./App.test":104,"./App.test.js":104,"./Untitled.png":468,"./components/header":65,"./components/header.js":65,"./components/questions":66,"./components/questions.js":66,"./index":44,"./index.css":102,"./index.js":44,"./logo.svg":469,"./questionImage.png":470,"./serviceWorker":67,"./serviceWorker.js":67,"./setupTests":147,"./setupTests.js":147};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=196},35:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(65),o=n(66);n(103);t.default=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(i.default,null),a.a.createElement(o.default,null))}},44:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(16),o=n.n(i),s=(n(102),n(35)),c=n(67);o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s.default,null)),document.getElementById("root")),c.unregister()},468:function(e,t,n){e.exports=n.p+"static/media/Untitled.6e3b21e6.png"},469:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},470:function(e,t,n){e.exports=n.p+"static/media/questionImage.f2eb790f.png"},65:function(e,t,n){"use strict";n.r(t);var r=n(179),a=n(180),i=n(188),o=n(191),s=n(1),c=n.n(s),u=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{id:"header"},c.a.createElement("h3",{id:"title"},"Online Quiz"))}}]),n}(c.a.Component);t.default=u},66:function(e,t,n){"use strict";n.r(t);var r=n(181),a=n(182),i=n(43),o=n(190),s=n(189),c=n(1),u=n.n(c),l=function(e){Object(o.a)(c,e);var t=Object(s.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).state={currentQuestion:0,minutes:2,seconds:0,isSubmit:"Next",data:[{question:"Which statement about factors of production is correct?",answer:["Capital is the amount of money borrowed from a bank.","Labour is output made by an employee.","Land includes commercially grown rice crops.","Profit is the reward for enterprise."],correctAnswer:2,marks:2,image:null,table:null},{question:"The diagram shows two production possibility curves. Which statement about the movement from point X to point Y is correct?",answer:["Demand for consumer goods has risen.","The opportunity cost for producing consumer goods has risen.","There has been an increase in productivity in consumer goods production.","There has been an inward shift in the production possibility curve."],correctAnswer:3,marks:5,image:"questionImage.png",table:null},{question:"A railway company increases ticket prices by 10% for travel between 06:00 and 09:00, causing a reduction in demand by 2%. After 09:00 it reduces ticket prices by 5%, resulting in a 7% increase in demand. What is the price elasticity of demand in response to these price changes?",answer:["Career opportunities are abundant.","Earnings are related to the level of skill.","It may be difficult to find work locally.","Labour supply is elastic and plentiful."],correctAnswer:1,marks:2,image:null,table:[["","prices","effect"],["A","fluctuate up and down","consumers are uncertain about future price levels"],["B","fluctuate up and down","consumers can anticipate future price levels"],["C","rise very rapidly","value of fixed assets remains stable"],["D","rise very rapidly","money has limited worth as a medium of exchange"]]}]},n.increment=n.increment.bind(Object(i.a)(n)),n.decrement=n.decrement.bind(Object(i.a)(n)),n}return Object(a.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.myInterval=setInterval((function(){var t=e.state,n=t.seconds,r=t.minutes;n>0&&e.setState((function(e){return{seconds:e.seconds-1}})),0===n&&(0===r?clearInterval(e.myInterval):e.setState((function(e){return{minutes:e.minutes-1,seconds:59}})))}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.myInterval)}},{key:"increment",value:function(){var e=this.state,t=e.data,n=e.currentQuestion;"Submit"!==this.state.isSubmit?(n<t.length-1&&this.setState((function(e){return{currentQuestion:e.currentQuestion+1}})),n===t.length-2&&this.setState((function(e){return{isSubmit:"Submit"}}))):window.confirm("Are you sure, you want to submit the quiz.")&&alert("Quiz submitted successfuly")}},{key:"decrement",value:function(){var e=this.state,t=e.data,n=e.currentQuestion;0!==n&&this.setState((function(e){return{currentQuestion:e.currentQuestion-1}})),n<=t.length-1&&this.setState((function(e){return{isSubmit:"Next"}}))}},{key:"renderTableData",value:function(){var e=this.state;return e.data[e.currentQuestion].table.map((function(e,t){return u.a.createElement("tr",{key:t},e.map((function(e,t){return u.a.createElement("td",{key:t},e)})))}))}},{key:"renderOptions",value:function(){var e=this.state,t=e.data,n=e.currentQuestion;return t[n].answer.map((function(e,r){return u.a.createElement("div",{key:r},u.a.createElement("input",{type:"radio",id:"q"+r+"option"+r,name:"q1correctAnswer",value:"q"+r+"option"+r}),u.a.createElement("label",{className:"option",htmlFor:"q"+r+"option"+r},t[n].answer[r])," ",u.a.createElement("br",null))}))}},{key:"render",value:function(){var e=this.state,t=e.minutes,r=e.seconds,a=e.data,i=e.currentQuestion;return u.a.createElement("div",{id:"questionsContainer"},u.a.createElement("h2",{id:"titleOfTheAssesment"},"Ecnomics Quiz-1"),u.a.createElement("div",null,u.a.createElement("h4",{id:"totalQuestions"},"Total Questions: ",a.length),0===t&&0===r?u.a.createElement("h4",{id:"timer"},"Time over!"):u.a.createElement("h4",{id:"timer"},"Time Remaining: ",t,":",r<10?"0".concat(r):r)),u.a.createElement("form",null,null===a[i].image&&null===a[i].table?u.a.createElement("div",{className:"questionBody"},u.a.createElement("h5",{className:"questionNumber"},u.a.createElement("span",{style:{backgroundColor:"#020718",padding:"10px"}},i+1,".")),u.a.createElement("p",{className:"questionText"},a[i].question),u.a.createElement("p",{className:"marks"},"(",a[i].marks," marks)"),this.renderOptions()):null!==a[i].image&&null===a[i].table?u.a.createElement("div",{className:"questionBody"},u.a.createElement("h5",{className:"questionNumber"},u.a.createElement("span",{style:{backgroundColor:"#020718",padding:"10px"}},i+1,".")),u.a.createElement("p",{className:"questionText"},a[i].question),u.a.createElement("p",{className:"marks"},"(",a[i].marks," marks)"),u.a.createElement("img",{className:"imagesForQuestion",src:n(196)("./"+a[i].image),alt:"question description"}),u.a.createElement("br",null),this.renderOptions()):null===a[i].image&&null!==a[i].table?u.a.createElement("div",{className:"questionBody"},u.a.createElement("h5",{className:"questionNumber"},u.a.createElement("span",{style:{backgroundColor:"#020718",padding:"10px"}},i+1,".")),u.a.createElement("p",{className:"questionText"},a[i].question),u.a.createElement("p",{className:"marks"},"(",a[i].marks," marks)"),u.a.createElement("table",null,u.a.createElement("tbody",null,this.renderTableData())),this.renderOptions()):u.a.createElement("div",null),u.a.createElement("div",null,u.a.createElement("button",{className:"buttons",type:"button",onClick:this.decrement},"Previous"),u.a.createElement("button",{className:"buttons",type:"button",onClick:this.increment},this.state.isSubmit))))}}]),c}(u.a.Component);t.default=l},67:function(e,t,n){"use strict";n.r(t),n.d(t,"register",(function(){return a})),n.d(t,"unregister",(function(){return o}));var r=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function a(e){if("serviceWorker"in navigator){if(new URL("/online-quiz",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/online-quiz","/service-worker.js");r?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):i(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):i(t,e)}))}}function i(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function o(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}}},[[192,1,2]]]);
//# sourceMappingURL=main.8361d036.chunk.js.map