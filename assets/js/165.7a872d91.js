"use strict";(self.webpackChunksulmar=self.webpackChunksulmar||[]).push([[165],{7165:(t,e,a)=>{a.r(e),a.d(e,{default:()=>L});var r=a(641),s=a(33),n=a(3456),i=a(953);const l={key:0,class:"simmilar-courses-holder"},o=(0,r.Lk)("h2",null,"Podobne szkolenia",-1),c={class:"theme-default-content course-list simmilar-courses"},u=["onClick"],m={class:"course-box"},d={class:"course-title-and-tagline"},g={class:"title"},v={class:"tagline"},k={class:"extra-info"},p={class:"extra-info-item"},f=(0,r.Lk)("span",{class:"extra-info-item"},"sth",-1),h=(0,r.Lk)("span",{class:"extra-info-item"},"c#",-1),L={__name:"SimmilarCoursesList",props:{currentPage:Object},setup(t){const e=t,a=(0,i.KR)([]),L=(0,n.rU)();return(0,r.sV)((()=>{!async function(){const t=L.value.frontmatterData,r=e.currentPage.frontmatter.category,s=e.currentPage.title;a.value=t.filter((t=>t.path.startsWith("/courses/")&&"/courses/"!==t.path&&t.frontmatter.category.includes(r)&&t.title!==s)).map((t=>({path:t.path,title:t.frontmatter.title,tagline:t.frontmatter.tagline,category:t.frontmatter.category,image:t.frontmatter.image,duration:t.frontmatter.duration})))}()})),(t,e)=>((0,r.uX)(),(0,r.CE)("div",null,[a.value&&a.value.length>0?((0,r.uX)(),(0,r.CE)("div",l,[o,(0,r.Lk)("div",c,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.value,(e=>{return(0,r.uX)(),(0,r.CE)("div",{key:e.path,onClick:a=>{t.$router.push(`${e.path}`).catch((t=>{"NavigationDuplicated"===t.name||t.message.includes("Avoided redundant navigation to current location")||console.log(t)}))},class:(0,s.C4)(["course-card",e.category])},[(0,r.Lk)("div",{class:"image-box",style:(0,s.Tr)((a=e.image,{"background-image":`url(${(0,n.cV)(a)})`}))},null,4),(0,r.Lk)("div",m,[(0,r.Lk)("div",d,[(0,r.Lk)("div",g,(0,s.v_)(e.title),1),(0,r.Lk)("p",v,(0,s.v_)(e.tagline),1)]),(0,r.Lk)("div",k,[(0,r.Lk)("span",p,(0,s.v_)(e.duration)+" dni",1),f,h])])],10,u);var a})),128))])])):(0,r.Q3)("",!0)]))}}}}]);