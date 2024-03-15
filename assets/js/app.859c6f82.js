"use strict";(self.webpackChunksulmar=self.webpackChunksulmar||[]).push([[524],{6552:(e,t,a)=>{a.r(t),a.d(t,{default:()=>z});var o=a(641),s=a(33),i=a(3456),l=a(953);const n={class:"theme-default-content course-list home-list"},r=["onClick"],c={class:"course-box"},d={class:"course-title-and-tagline"},u={class:"title"},m={class:"tagline"},h={class:"extra-info"},k={class:"extra-info-item"},p=(0,o.Lk)("span",{class:"extra-info-item"},"sth",-1),g=(0,o.Lk)("span",{class:"extra-info-item"},"c#",-1),z={__name:"CoursesList",setup(e){const t=(0,l.KR)([]),a=(0,i.rU)();return(0,o.sV)((()=>{!async function(){const e=a.value.frontmatterData;t.value=e.filter((e=>e.path.startsWith("/courses/")&&"/courses/"!==e.path)).map((e=>({path:e.path,title:e.frontmatter.title,tagline:e.frontmatter.tagline,category:e.frontmatter.category,image:e.frontmatter.image,duration:e.frontmatter.duration})))}()})),(e,a)=>((0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("div",n,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.value,(t=>((0,o.uX)(),(0,o.CE)("div",{key:t.path,onClick:a=>{e.$router.push(`${t.path}`).catch((e=>{"NavigationDuplicated"===e.name||e.message.includes("Avoided redundant navigation to current location")||console.log(e)}))},class:(0,s.C4)(["course-card",t.category])},[(0,o.Lk)("div",{class:"image-box",style:(0,s.Tr)({"background-image":"url("+t.image+")"})},null,4),(0,o.Lk)("div",c,[(0,o.Lk)("div",d,[(0,o.Lk)("div",u,(0,s.v_)(t.title),1),(0,o.Lk)("p",m,(0,s.v_)(t.tagline),1)]),(0,o.Lk)("div",h,[(0,o.Lk)("span",k,(0,s.v_)(t.duration)+" dni",1),p,g])])],10,r)))),128))])]))}}},1459:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var o=a(641),s=a(33),i=a(953),l=a(3456);const n={style:{width:"100%",display:"block",margin:"0 auto"},class:"carousel-holder"},r={class:"cell-box"},c={class:"cell-header"},d=(0,o.Lk)("img",{src:"icons/stars.svg"},null,-1),u={class:"cell-content"},m={class:"person-box"},h=(0,o.Lk)("img",{src:"images/head-circle.jpg"},null,-1),k={class:"person-holder"},p={__name:"OpinionsCarousel",setup(e){const t=(0,i.KR)([]);return(0,o.sV)((()=>{(async()=>{const e="/testimonials/",a=(0,l.rU)().value.frontmatterData;t.value=a.filter((t=>t.path.startsWith(e)&&t.path!==e)).map((e=>({path:e.path,slogan:e.frontmatter.slogan,author:e.frontmatter.author,category:e.frontmatter.category,content:e.frontmatter.content})))})()})),(e,a)=>{const i=(0,o.g2)("Slide"),l=(0,o.g2)("Carousel");return(0,o.uX)(),(0,o.CE)("div",n,[(0,o.bF)(l,{itemsToShow:3,itemsToScroll:1,autoplay:4e5,transition:700,wrapAround:!0,mouseDrag:!0,pauseAutoplayOnHover:!0},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.value,(e=>((0,o.uX)(),(0,o.Wv)(i,{key:e.path,class:(0,s.C4)(["course-cell",e.category])},{default:(0,o.k6)((()=>[(0,o.Lk)("div",r,[(0,o.Lk)("div",c,[d,(0,o.Lk)("h4",null,(0,s.v_)(e.slogan),1)]),(0,o.Lk)("div",u,[(0,o.Lk)("p",null,"“"+(0,s.v_)(e.content)+"”",1)]),(0,o.Lk)("div",m,[h,(0,o.Lk)("div",k,[(0,o.Lk)("h3",null,(0,s.v_)(e.author),1),(0,o.Lk)("p",null,"Uczestnik "+(0,s.v_)(e.category),1)])])])])),_:2},1032,["class"])))),128))])),_:1})])}}}},9536:(e,t,a)=>{a.d(t,{B:()=>De});var o=a(6358),s=a(355),i=a(3825),l=a(3450),n=a(5436),r=a(1599),c=a(5496),d=a(7899),u=a(8973),m=a(641);const h={enhance:({app:e})=>{e.component("Footer",(0,m.$V)((()=>a.e(350).then(a.bind(a,2350))))),e.component("ContactForm",(0,m.$V)((()=>Promise.all([a.e(261),a.e(218)]).then(a.bind(a,8218))))),e.component("CoursesList",(0,m.$V)((()=>Promise.resolve().then(a.bind(a,6552))))),e.component("OpinionsCarousel",(0,m.$V)((()=>Promise.resolve().then(a.bind(a,1459))))),e.component("SimmilarCoursesList",(0,m.$V)((()=>a.e(165).then(a.bind(a,7165)))))}};var k=a(6209),p=(a(5010),a(4183)),g=a(3902),z=a(6964),y=a(9270),w=a(33),L=a(2520),f=a(953),b=a(6552),v=a(1459);const C={class:"home-custom"},F={class:"hero"},j={class:"hero-content"},_=(0,m.Lk)("h1",null,"Szkolenia dla programistów",-1),S=(0,m.Lk)("p",null,"Trudne rzeczy w łatwy sposób",-1),x={id:"courses",class:"courses"},T=(0,m.Lk)("header",null,[(0,m.Lk)("p",{class:"sm-title"},"Najczęście wybierane szkolenia"),(0,m.Lk)("h2",null,"Szlifuj swoje umiejętności programistyczne"),(0,m.Lk)("p",null," Dzięki naszym kursom Twój zespół będzie wymiatał. Do tego szkolenie będzie bez powerpointa. Cenna wiedza i doświadczenie w miłej postaci. Lorem ipsum... ")],-1),M={id:"trainer",class:"trainer"},P=(0,m.Lk)("div",{class:"trainer-img-holder"},[(0,m.Lk)("div",{class:"trainer-img"})],-1),E=(0,m.Lk)("p",{class:"short"},"Prowadzący",-1),A=(0,m.Lk)("h2",null,"Marcin Sulecki",-1),R=(0,m.Lk)("div",{class:"trainer-description"},[(0,m.Lk)("p",null,"Wykształcenie: mgr informatyki Absolwent Uniwersytet A. Mickiewicza w Poznaniu, Wydział Matematyki i Informatyki Doświadczenie: 20+ lat Rozwiązania m.in. dla logistyki, monitoringu pojazdów z użyciem .NET i Crystal Reports. Tworzę rozwiązania dla swoich klientów a zdobytym doświadczeniem dzielę się na szkoleniach. ")],-1),N=(0,m.Lk)("div",{class:"counter"},[(0,m.Lk)("h2",null,"25+"),(0,m.Lk)("p",null,"Lat doświadczenia")],-1),W=(0,m.Lk)("div",{class:"counter"},[(0,m.Lk)("h2",null,"300"),(0,m.Lk)("p",null,"Przeprowadzonych szkoleń")],-1),U=(0,m.Lk)("div",{class:"counter"},[(0,m.Lk)("h2",null,"1000+"),(0,m.Lk)("p",null,"Uczestników")],-1),V=(0,m.Lk)("div",{class:"counter"},[(0,m.Lk)("h2",null,"100"),(0,m.Lk)("p",null,"Godzin konsultacji")],-1),D={class:"testimonials"},I=(0,m.Lk)("header",null,[(0,m.Lk)("p",{class:"sm-title"},"Rekomendacje"),(0,m.Lk)("h2",null,"Zobacz opinie uczestników")],-1),B={id:"contact",class:"cta-section"},$=(0,m.Lk)("div",{class:"cta-description"},[(0,m.Lk)("h2",null,"Chcesz skorzystać z oferty?"),(0,m.Lk)("p",null,"Napisz do nas, aby omówić szkolenie dla Twojej firmy. Daj nam znać, czego potrzebuje Twój zespół i w jaki sposób możemy Ci pomóc w osiągnięciu celów.")],-1),H={class:"contact-item"},K=["src"],O=(0,m.Lk)("p",null,"Skype",-1),X={class:"contact-item"},q=["src"],J=(0,m.Lk)("p",null,"info@twojastrona.com",-1),Z={class:"contact-item"},G=["src"],Q=(0,m.Lk)("p",null,"+48 123 456 789",-1),Y=(0,m.Lk)("div",{class:"form-img"},null,-1),ee={class:"address"},te=(0,m.Lk)("div",{class:"map-holder"},[(0,m.Lk)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1221.5440269361784!2d20.945383390646306!3d52.24178425774494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb0cd91e5319%3A0xed8d6f9f4ad39be9!2sErazma%20Cio%C5%82ka%2010%2C%2001-402%20Warszawa!5e0!3m2!1spl!2spl!4v1683125894187!5m2!1spl!2spl",width:"100%",height:"100%",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})],-1),ae={__name:"Home",setup(e){const t=(0,f.KR)(!1),a=()=>{const e=document.querySelector("#courses");e&&e.scrollIntoView({behavior:"smooth",block:"start"})},o=()=>{t.value=!t.value;let e=document.querySelector(".home-list");e&&e.classList.toggle("expanded")};return(e,s)=>{const i=(0,m.g2)("v-col"),l=(0,m.g2)("v-row"),n=(0,m.g2)("v-btn"),r=(0,m.g2)("v-container"),c=(0,m.g2)("ContactForm"),d=(0,m.g2)("Footer");return(0,m.uX)(),(0,m.CE)("div",C,[(0,m.bF)(L.A),(0,m.Lk)("section",F,[(0,m.Lk)("div",j,[(0,m.bF)(l,{"no-gutters":""},{default:(0,m.k6)((()=>[(0,m.bF)(i,{cols:"12",sm:"8"}),(0,m.bF)(i,{cols:"12",sm:"4"},{default:(0,m.k6)((()=>[_,S])),_:1})])),_:1})]),(0,m.bF)(n,{rounded:"xl",size:"large",variant:"outlined",onClick:a,class:"hero-btn"},{default:(0,m.k6)((()=>[(0,m.eW)("Zamów szkolenie")])),_:1})]),(0,m.Lk)("section",x,[(0,m.bF)(r,{class:"container"},{default:(0,m.k6)((()=>[T,(0,m.bF)(b.default),(0,m.bF)(n,{rounded:"xl",size:"large",variant:"outlined",class:"link-btn",onClick:o},{default:(0,m.k6)((()=>[(0,m.eW)((0,w.v_)(t.value?"Mniej kursów":"Wszystkie kursy"),1)])),_:1})])),_:1})]),(0,m.Lk)("section",M,[(0,m.bF)(r,{class:"trainer-content"},{default:(0,m.k6)((()=>[(0,m.bF)(l,null,{default:(0,m.k6)((()=>[(0,m.bF)(i,null,{default:(0,m.k6)((()=>[P])),_:1}),(0,m.bF)(i,null,{default:(0,m.k6)((()=>[E,A,R])),_:1})])),_:1})])),_:1}),(0,m.bF)(r,{class:"counters-container"},{default:(0,m.k6)((()=>[N,W,U,V])),_:1})]),(0,m.Lk)("section",D,[(0,m.bF)(r,{class:"container"},{default:(0,m.k6)((()=>[I])),_:1}),(0,m.bF)(v.default)]),(0,m.Lk)("section",B,[(0,m.bF)(r,{class:"cta-content"},{default:(0,m.k6)((()=>[$,(0,m.bF)(r,{class:"contact-items-container"},{default:(0,m.k6)((()=>[(0,m.Lk)("div",H,[(0,m.Lk)("img",{src:e.$withBase("/icons/skype.svg"),alt:"Location Icon"},null,8,K),O]),(0,m.Lk)("div",X,[(0,m.Lk)("img",{src:e.$withBase("/icons/email.svg"),alt:"Email Icon"},null,8,q),J]),(0,m.Lk)("div",Z,[(0,m.Lk)("img",{src:e.$withBase("/icons/phone.svg"),alt:"Phone Icon"},null,8,G),Q])])),_:1}),(0,m.bF)(l,{"no-gutters":"",class:"form-holder"},{default:(0,m.k6)((()=>[(0,m.bF)(i,{cols:"12",sm:"8"},{default:(0,m.k6)((()=>[(0,m.bF)(c)])),_:1}),(0,m.bF)(i,{cols:"12",sm:"4"},{default:(0,m.k6)((()=>[Y])),_:1})])),_:1})])),_:1})]),(0,m.Lk)("section",ee,[(0,m.bF)(r,null,{default:(0,m.k6)((()=>[te])),_:1})]),(0,m.bF)(d)])}}};var oe=a(3456);const se={class:"course-layout"},ie={class:"hero-course"},le={class:"hero-course-content"},ne=(0,m.Lk)("p",null,"REDIS jest strukturą danych typu open-source trzymaną w pamięci, używana jako baza danych NoSQL, pamięć podręczna lub broker wiadomości. Stosowana jest w rozwiązaniach gdzie wymagana jest analiza w czasie rzeczywistym, gdyż zapewnia bardzo wysoką wydajność i niezawodność. ",-1),re=(0,m.Lk)("div",{class:"hero-img-holder"},null,-1),ce={class:"learning-outcomes"},de=(0,m.Lk)("h2",null,"Czego się nauczysz",-1),ue=(0,m.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"25",height:"25",viewBox:"0 0 50 50",fill:"#257a1d"},[(0,m.Lk)("path",{d:"M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z"})],-1),me=(0,m.Lk)("div",{class:"outcomes-img-holder"},[(0,m.Lk)("div",{class:"outcomes-img"})],-1),he=(0,m.Lk)("h2",null,"Program szkolenia",-1),ke=(0,m.Lk)("p",null,"3 Dni",-1),pe={class:"trainer"},ge=(0,m.Lk)("div",{class:"trainer-img-holder"},[(0,m.Lk)("div",{class:"trainer-img"})],-1),ze=(0,m.Lk)("p",{class:"short"},"Prowadzący",-1),ye=(0,m.Lk)("h2",null,"Marcin Sulecki",-1),we=(0,m.Lk)("div",{class:"trainer-description"},[(0,m.Lk)("p",null,"Wykształcenie: mgr informatyki Absolwent Uniwersytet A. Mickiewicza w Poznaniu, Wydział Matematyki i Informatyki Doświadczenie: 20+ lat Rozwiązania m.in. dla logistyki, monitoringu pojazdów z użyciem .NET i Crystal Reports. Tworzę rozwiązania dla swoich klientów a zdobytym doświadczeniem dzielę się na szkoleniach. ")],-1),Le=(0,m.Lk)("div",{class:"counter"},[(0,m.Lk)("h2",null,"25+"),(0,m.Lk)("p",null,"Lat doświadczenia")],-1),fe=(0,m.Lk)("div",{class:"counter"},[(0,m.Lk)("h2",null,"300"),(0,m.Lk)("p",null,"Przeprowadzonych szkoleń")],-1),be=(0,m.Lk)("div",{class:"counter"},[(0,m.Lk)("h2",null,"1000+"),(0,m.Lk)("p",null,"Uczestników")],-1),ve=(0,m.Lk)("div",{class:"counter"},[(0,m.Lk)("h2",null,"100"),(0,m.Lk)("p",null,"Godzin konsultacji")],-1),Ce={class:"cta-section"},Fe=(0,m.Lk)("div",{class:"cta-description"},[(0,m.Lk)("h2",null,"Chcesz skorzystać z oferty?"),(0,m.Lk)("p",null,"Napisz do nas, aby omówić szkolenie dla Twojej firmy. Daj nam znać, czego potrzebuje Twój zespół i w jaki sposób możemy Ci pomóc w osiągnięciu celów.")],-1),je={class:"contact-item"},_e=["src"],Se=(0,m.Lk)("p",null,"Skype",-1),xe={class:"contact-item"},Te=["src"],Me=(0,m.Lk)("p",null,"info@twojastrona.com",-1),Pe={class:"contact-item"},Ee=["src"],Ae=(0,m.Lk)("p",null,"+48 123 456 789",-1),Re=(0,m.Lk)("div",{class:"form-img"},null,-1),Ne={class:"suggested-courses"},We={__name:"Course",setup(e){const t=(0,oe.R7)();(0,m.nT)((()=>{console.log(t.value.title)}));const a=(0,f.KR)([{title:"Confidently build front-end apps with React and TypeScript"},{title:"Build reusable function components"},{title:"Style your components using vanilla CSS, CSS modules, and CSS-in-JS"},{title:"Use VSCode shortcuts to increase your productivity"},{title:"Deploy your React apps"},{title:"Write clean code like a pro"}]);return(0,m.sV)((()=>{const e=document.getElementById("program").children[0].children;for(let t=0;t<e.length;t++){const a='<svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>';e[t].insertAdjacentHTML("beforeend",a),e[t].addEventListener("click",(function(){let e=this.children[0];const t=this.querySelector(".chevron-icon");e.classList.toggle("active"),t.style.transform=e.classList.contains("active")?"rotate(180deg)":"rotate(0deg)",e.addEventListener("click",(function(e){e.stopPropagation()}))}));const o=e[t].children;let s=Array.from(o[0].children);for(let e of s){console.log(e);let t=document.createElement("div");for(t.classList.add("topic");e.firstChild;)t.appendChild(e.firstChild);let a=document.createElement("div");a.classList.add("list-icon"),e.appendChild(a),e.appendChild(t)}}})),(e,o)=>{const s=(0,m.g2)("v-col"),i=(0,m.g2)("v-row"),l=(0,m.g2)("v-list-item-icon"),n=(0,m.g2)("v-list-item-title"),r=(0,m.g2)("v-list-item-content"),c=(0,m.g2)("v-list-item"),d=(0,m.g2)("v-list"),u=(0,m.g2)("v-container"),h=(0,m.g2)("Content"),k=(0,m.g2)("ContactForm"),p=(0,m.g2)("SimmilarCoursesList"),g=(0,m.g2)("Footer");return(0,m.uX)(),(0,m.CE)(m.FK,null,[(0,m.bF)(L.A),(0,m.Lk)("div",se,[(0,m.Lk)("h1",null,(0,w.v_)((0,f.R1)(t).title),1),(0,m.Lk)("section",ie,[(0,m.Lk)("div",le,[(0,m.bF)(i,{"no-gutters":""},{default:(0,m.k6)((()=>[(0,m.bF)(s,{cols:"12",sm:"4",class:"course-desc"},{default:(0,m.k6)((()=>[(0,m.Lk)("h1",null,(0,w.v_)((0,f.R1)(t).title),1),ne])),_:1}),(0,m.bF)(s,{cols:"12",sm:"8"},{default:(0,m.k6)((()=>[re])),_:1})])),_:1})])]),(0,m.Lk)("section",ce,[(0,m.bF)(u,null,{default:(0,m.k6)((()=>[(0,m.bF)(i,{"no-gutters":""},{default:(0,m.k6)((()=>[(0,m.bF)(s,{cols:"12",sm:"6"},{default:(0,m.k6)((()=>[de,(0,m.bF)(d,null,{default:(0,m.k6)((()=>[((0,m.uX)(!0),(0,m.CE)(m.FK,null,(0,m.pI)(a.value,(e=>((0,m.uX)(),(0,m.Wv)(c,{key:e.title},{default:(0,m.k6)((()=>[(0,m.bF)(l,null,{default:(0,m.k6)((()=>[ue])),_:1}),(0,m.bF)(r,null,{default:(0,m.k6)((()=>[(0,m.bF)(n,{textContent:(0,w.v_)(e.title)},null,8,["textContent"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,m.bF)(s,{cols:"12",sm:"6"},{default:(0,m.k6)((()=>[me])),_:1})])),_:1})])),_:1}),(0,m.bF)(u,{class:"course-content"},{default:(0,m.k6)((()=>[he,ke,(0,m.bF)(h,{id:"program"})])),_:1})]),(0,m.Lk)("section",pe,[(0,m.bF)(u,{class:"trainer-content"},{default:(0,m.k6)((()=>[(0,m.bF)(i,null,{default:(0,m.k6)((()=>[(0,m.bF)(s,null,{default:(0,m.k6)((()=>[ge])),_:1}),(0,m.bF)(s,null,{default:(0,m.k6)((()=>[ze,ye,we])),_:1})])),_:1})])),_:1}),(0,m.bF)(u,{class:"counters-container"},{default:(0,m.k6)((()=>[Le,fe,be,ve])),_:1})]),(0,m.Lk)("section",Ce,[(0,m.bF)(u,{class:"cta-content"},{default:(0,m.k6)((()=>[Fe,(0,m.bF)(u,{class:"contact-items-container"},{default:(0,m.k6)((()=>[(0,m.Lk)("div",je,[(0,m.Lk)("img",{src:e.$withBase("/icons/skype.svg"),alt:"Location Icon"},null,8,_e),Se]),(0,m.Lk)("div",xe,[(0,m.Lk)("img",{src:e.$withBase("/icons/email.svg"),alt:"Email Icon"},null,8,Te),Me]),(0,m.Lk)("div",Pe,[(0,m.Lk)("img",{src:e.$withBase("/icons/phone.svg"),alt:"Phone Icon"},null,8,Ee),Ae])])),_:1}),(0,m.bF)(i,{"no-gutters":"",class:"form-holder"},{default:(0,m.k6)((()=>[(0,m.bF)(s,{cols:"12",sm:"8"},{default:(0,m.k6)((()=>[(0,m.bF)(k)])),_:1}),(0,m.bF)(s,{cols:"12",sm:"4"},{default:(0,m.k6)((()=>[Re])),_:1})])),_:1})])),_:1})]),(0,m.Lk)("section",Ne,[(0,m.bF)(p,{currentPage:e.$page},null,8,["currentPage"])]),(0,m.bF)(g)])],64)}}},Ue=(0,p.$N)({components:g,directives:z}),Ve=(0,k.re)({async enhance({app:e}){e.use(Ue),e.component("Carousel",y.FN),e.component("Slide",y.q7)},layouts:{Home:ae,Course:We}}),De=[o.A,s.A,i.A,l.A,n.A,r.A,c.A,d.A,u.A,h,Ve]},6159:(e,t,a)=>{a.d(t,{J:()=>s,c:()=>o});const o=JSON.parse("{}"),s=Object.fromEntries([["/",{loader:()=>a.e(470).then(a.bind(a,2562)),meta:{title:"Home"}}],["/get-started.html",{loader:()=>a.e(642).then(a.bind(a,5727)),meta:{title:"Hello Master"}}],["/courses/blazor.html",{loader:()=>a.e(128).then(a.bind(a,109)),meta:{title:"Tworzenie aplikacji w Blazor 8.0"}}],["/courses/crystal-reports-beginner.html",{loader:()=>a.e(993).then(a.bind(a,6987)),meta:{title:"Crystal Reports dla początkujących"}}],["/courses/design-patterns.html",{loader:()=>a.e(143).then(a.bind(a,9576)),meta:{title:"Wzorce Projektowe w C#"}}],["/courses/entity-framework-core.html",{loader:()=>a.e(244).then(a.bind(a,8914)),meta:{title:"Entity Framework Core 8.0"}}],["/courses/maui.html",{loader:()=>a.e(216).then(a.bind(a,2677)),meta:{title:"Tworzenie aplikacji mobilnych MAUI"}}],["/courses/ml-net.html",{loader:()=>a.e(47).then(a.bind(a,6960)),meta:{title:"Uczenie maszynowe z ML.NET"}}],["/courses/razor-pages.html",{loader:()=>a.e(835).then(a.bind(a,8364)),meta:{title:"Razor Pages w ASP.NET Core 8.0"}}],["/courses/redis-for-developers.html",{loader:()=>a.e(479).then(a.bind(a,8790)),meta:{title:"Redis 7.0 dla programistów .NET"}}],["/courses/unit-testing.html",{loader:()=>a.e(995).then(a.bind(a,8327)),meta:{title:"Testy jednostkowe w C#"}}],["/testimonials/testimonial-1.html",{loader:()=>a.e(699).then(a.bind(a,5810)),meta:{title:""}}],["/testimonials/testimonial-2.html",{loader:()=>a.e(834).then(a.bind(a,605)),meta:{title:""}}],["/testimonials/testimonial-3.html",{loader:()=>a.e(897).then(a.bind(a,1342)),meta:{title:""}}],["/testimonials/testimonial-4.html",{loader:()=>a.e(680).then(a.bind(a,4890)),meta:{title:""}}],["/testimonials/testimonial-5.html",{loader:()=>a.e(943).then(a.bind(a,7955)),meta:{title:""}}],["/404.html",{loader:()=>a.e(490).then(a.bind(a,644)),meta:{title:""}}]])},7697:(e,t,a)=>{a.d(t,{b:()=>o});const o=[{title:"Home",headers:[],path:"/",pathLocale:"/",extraFields:[]},{title:"Hello Master",headers:[],path:"/get-started.html",pathLocale:"/",extraFields:[]},{title:"Tworzenie aplikacji w Blazor 8.0",headers:[],path:"/courses/blazor.html",pathLocale:"/",extraFields:["dotnet","blazor","webassembly"]},{title:"Crystal Reports dla początkujących",headers:[],path:"/courses/crystal-reports-beginner.html",pathLocale:"/",extraFields:["crystal-reports"]},{title:"Wzorce Projektowe w C#",headers:[],path:"/courses/design-patterns.html",pathLocale:"/",extraFields:["dotnet","design-patterns"]},{title:"Entity Framework Core 8.0",headers:[],path:"/courses/entity-framework-core.html",pathLocale:"/",extraFields:["dotnet","entity-framework-core","orm","sql"]},{title:"Tworzenie aplikacji mobilnych MAUI",headers:[],path:"/courses/maui.html",pathLocale:"/",extraFields:["dotnet","maui","mvvm"]},{title:"Uczenie maszynowe z ML.NET",headers:[],path:"/courses/ml-net.html",pathLocale:"/",extraFields:["machine-learning"]},{title:"Razor Pages w ASP.NET Core 8.0",headers:[],path:"/courses/razor-pages.html",pathLocale:"/",extraFields:["dotnet","razor-pages"]},{title:"Redis 7.0 dla programistów .NET",headers:[],path:"/courses/redis-for-developers.html",pathLocale:"/",extraFields:["redis","dotnet","nosql"]},{title:"Testy jednostkowe w C#",headers:[],path:"/courses/unit-testing.html",pathLocale:"/",extraFields:["dotnet","tdd","design-patterns","unit-tests"]},{title:"",headers:[],path:"/testimonials/testimonial-1.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/testimonials/testimonial-2.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/testimonials/testimonial-3.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/testimonials/testimonial-4.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/testimonials/testimonial-5.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:[]}]},9354:(e,t,a)=>{a.d(t,{U:()=>o});const o=JSON.parse('{"base":"/sulmar-homepage/","lang":"en-US","title":"","description":"My first VuePress Site","head":[["link",{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["link",{"rel":"preconnect","href":"https://fonts.gstatic.com","crossorigin":"anonymous"}],["link",{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap"}]],"locales":{},"frontmatterData":[{"path":"/","frontmatter":{"layout":"Home","title":"Home"}},{"path":"/get-started.html","frontmatter":{"layout":"Course","title":"Hello Master"}},{"path":"/courses/blazor.html","frontmatter":{"layout":"Course","title":"Tworzenie aplikacji w Blazor 8.0","tagline":"Poznaj nową technologię webową. Szybko i skutecznie.","slug":"blazor","image":"images/course-tiles/blazor.jpg","author":"Marcin Sulecki","duration":3,"difficulty":2,"category":"blazor","tags":["dotnet","blazor","webassembly"]}},{"path":"/courses/crystal-reports-beginner.html","frontmatter":{"layout":"Course","title":"Crystal Reports dla początkujących","tagline":"Efektywne i efektowane raporty. Zaskocz szefa.","slug":"crystal-reports-beginner","image":"images/course-tiles/crystal_reports.png","author":"Marcin Sulecki","duration":2,"difficulty":1,"category":"reporting","tags":["crystal-reports"]}},{"path":"/courses/design-patterns.html","frontmatter":{"layout":"Course","title":"Wzorce Projektowe w C#","tagline":"Poznaj przepisy na dobry kod. Wzor(c)owo.","slug":"design-patterns","image":"images/course-tiles/csharp.jpg","author":"Marcin Sulecki","duration":3,"difficulty":2,"category":"dotnet","tags":["dotnet","design-patterns"]}},{"path":"/courses/entity-framework-core.html","frontmatter":{"layout":"Course","title":"Entity Framework Core 8.0","tagline":"Ujarzmij dostęp do bazy danych. Wygodnie i wydajnie.","slug":"ef-core-8","image":"images/course-tiles/netcore.jpg","author":"Marcin Sulecki","duration":3,"difficulty":2,"category":"dotnet","tags":["dotnet","entity-framework-core","orm","sql"]}},{"path":"/courses/maui.html","frontmatter":{"layout":"Course","title":"Tworzenie aplikacji mobilnych MAUI","slug":"maui","image":"images/course-tiles/dotnet.jpg","author":"Marcin Sulecki","duration":3,"difficulty":2,"category":"maui","tags":["dotnet","maui","mvvm"]}},{"path":"/courses/ml-net.html","frontmatter":{"layout":"Course","title":"Uczenie maszynowe z ML.NET","slug":"mlnet","image":"images/course-tiles/mlnet.jpg","author":"Marcin Sulecki","duration":3,"difficulty":2,"category":"dotnet","tags":["machine-learning"]}},{"path":"/courses/razor-pages.html","frontmatter":{"layout":"Course","title":"Razor Pages w ASP.NET Core 8.0","slug":"razor-pages","image":"images/course-tiles/netcore.jpg","author":"Marcin Sulecki","duration":5,"difficulty":2,"category":"dotnet","tags":["dotnet","razor-pages"]}},{"path":"/courses/redis-for-developers.html","frontmatter":{"layout":"Course","title":"Redis 7.0 dla programistów .NET","tagline":"Baza danych w pamięci? Turbodoładowanie dla twojej aplikacji.","slug":"redis","image":"images/course-tiles/redis.png","author":"Marcin Sulecki","duration":3,"difficulty":2,"category":"redis","tags":["redis","dotnet","nosql"]}},{"path":"/courses/unit-testing.html","frontmatter":{"layout":"Course","title":"Testy jednostkowe w C#","slug":"unit-testing","image":"images/course-tiles/csharp2.jpg","author":"Marcin Sulecki","duration":"3","difficulty":"2","category":"dotnet","tags":["dotnet","tdd","design-patterns","unit-tests"]}},{"path":"/testimonials/testimonial-1.html","frontmatter":{"slogan":"Sehr guter Kurs","author":"Radosław Tomaszewski","category":"Wzorce Projektowe","content":"Sehr guter Kurs. Der Referent ist selbst seit über zwanzig Jahren Programmierer und zeigte die praktische Anwendung der gelehrten Techniken anhand von realen Problemen in Projekten. Es wurden keine vorgefertigten Folien oder Lösungen präsentiert. Änderungen im Code wurden in Zusammenarbeit mit den Teilnehmern langsam, in kleinen Schritten und gemeinsam vorgenommen, um das Problem mit der implementierten Methode zu lösen"}},{"path":"/testimonials/testimonial-2.html","frontmatter":{"slogan":"Szkolenie przeprowadzone w sposób profesjonalny","author":"Piotr Stec","category":"WPF MVVM","content":"Prowadzący oprócz wiedzy teoretycznej posiadał ogromną wiedzę praktyczną, popartą imponującym dorobkiem zawodowym. Jedno z nielicznych szkoleń, na których trener nie skupia się na przekazaniu wiedzy za pomocą prezentacji i skryptów, tylko omawia zagadnienia na praktycznych przykładach. Z przyjemnością polecam szkolenia realizowane przez Pana Marcina"}},{"path":"/testimonials/testimonial-3.html","frontmatter":{"slogan":"Jedno z najlepszych szkoleń w którym uczestniczyłem","author":"Mateusz Ryszkaniec","category":"WPF MVVM","content":"Szkolenie idealne zarówno dla początkujących jak i zaawansowanych programistów. Trener wykazywał doskonałe zrozumienie zawartości programu, stosował odpowiednie tempo nauki i jasno objaśniał ćwiczenia."}},{"path":"/testimonials/testimonial-4.html","frontmatter":{"slogan":"Szkolenie było na wysokim poziomie","author":"Marek Michalak","category":"WPF MVVM","content":"Doceniam ilość pracy jaką Pan włożył w wytłumaczenie nam kwestii. Szczególnie MVVM i jego złożoności"}},{"path":"/testimonials/testimonial-5.html","frontmatter":{"slogan":"Prowadzący wykazał się dużą wiedzą oraz umiejętnością jej ciekawego przekazywania, z wyczuleniem na indywidualne potrzeby słuchaczy","author":"sekretarz m.st. Warszawy","category":"Crystal Reports","content":"Poziom prowadzonych zajęć został wysoko oceniony przez uczestników, którzy dostali również starannie i fachowo przygotowane materiały szkoleniowe, stanowiące wartościową pomoc dla samokształcenia."}},{"path":"/404.html","frontmatter":{"layout":"NotFound"}}]}')},8120:(e,t,a)=>{a.d(t,{K:()=>o});const o=JSON.parse('{"logo":"/icons/sulmar_logo_vector.svg","logoDark":"/icons/sulmar_logo_vector_dark_mode.svg","navbar":[{"text":"Szkolenia","link":"/#courses"},{"text":"O mnie","link":"/#trainer"},{"text":"Kontakt","link":"/#contact"},{"text":"","link":"https://github.com/sulmar"}],"locales":{"/":{"selectLanguageName":"English"}},"colorMode":"auto","colorModeSwitch":true,"repo":null,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebar":"auto","sidebarDepth":2,"editLink":true,"editLinkText":"Edit this page","lastUpdated":true,"lastUpdatedText":"Last Updated","contributors":true,"contributorsText":"Contributors","notFound":["There\'s nothing here.","How did we get here?","That\'s a Four-Oh-Four.","Looks like we\'ve got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}')}},e=>{e.O(0,[35,675],(()=>(8731,e(e.s=8731)))),e.O()}]);