import{a as y,i,S as f}from"./assets/vendor-9d830b88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const c=(e,t,s="beforeend")=>{e.insertAdjacentHTML(s,t)},p=e=>{e.innerHTML=""},v=e=>{c(e,`
    <form class="search-form" id="search-form">
      <input
        type="text"
        name="search"
        autocomplete="off"
        placeholder="Search images..."
      />
      <button type="submit" class="button">Search</button>
    </form>
  `)},L=e=>{c(e,'<div class="gallery" id="gallery"></div>')},b=(e,t)=>{const s=t.map(r=>`
    <div class="gallery-item">
      <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
      </a>
      <div class="gallery-item-info">
        <div>
          <b>Likes</b>
          ${r.likes}
        </div>
        <div>
          <b>Views</b>
          ${r.views}
        </div>
        <div>
          <b>Comments</b>
          ${r.comments}
        </div>
        <div>
          <b>Downloads</b>
          ${r.downloads}
        </div>
      </div>
    </div>
  `).join("");c(e,s)},m=(e,t)=>{b(e,t)},w=(e,t)=>{p(e),t&&t.length&&m(e,t)},S=e=>{c(e,`
    <div class="loader-wrapper hidden">
      <div class="loading ">Loading images, please wait...</div>
      <span class="loader"></span>
    </div>
  `)},q=e=>{c(e,`
    <button type="button" class="button load-more hidden">Load more</button>
  `)},I="45273601-269fa7243c6da01438f09c62a",E=y.create({baseURL:"https://pixabay.com/api",params:{key:I}}),u=async(e,t=1,s=15)=>{try{const{data:r}=await E.get("",{params:{q:e,image_type:"photo",orientation:"horizontal",page:t,per_page:s}});return{images:r.hits,total:r.totalHits}}catch(r){return i.error({icon:"",iconText:"",title:"❌ Error",message:`Error while fetching images. Please try again! ${r}`}),{images:[],total:0}}};i.settings({timeout:3e3});const g=new f("#gallery a",{captionDelay:250,captionsData:"alt"}),d=[];let l="",x=1;const h=()=>{i.warning({icon:"",iconText:"",title:"⚠️ Warning",message:"We're sorry, but you've reached the end of search results."})},P=async(e,t)=>{e.preventDefault(),l=t.elements.search.value;const s=document.querySelector(".loader-wrapper");if(l.trim()!==""){const r=document.querySelector("#gallery");s.classList.remove("hidden");const{images:o,total:n}=await u(l);if(w(r,o),o.length){g.refresh();const a=document.querySelector(".load-more");o.length>=n?(h(),a.classList.add("hidden")):a.classList.remove("hidden")}else i.error({icon:"",iconText:"",title:"❌ Error",message:"Sorry, there are no images matching your search query. Please try again!"})}else i.warning({icon:"",iconText:"",title:"⚠️ Warning",message:"Please enter a search query!"});s.classList.add("hidden"),t.reset()},T=async e=>{const t=document.querySelector(".loader-wrapper"),s=document.querySelector("#gallery");e.classList.add("hidden"),t.classList.remove("hidden");const{images:r,total:o}=await u(l,x+=1);if(d.length>=o)h();else{m(s,r),d.push(...r),g.refresh(),e.classList.remove("hidden");const n=document.querySelector(".gallery-item");if(n){const a=n.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}}t.classList.add("hidden")};document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("root");v(e),L(e),S(e),q(e);const t=document.querySelector("#search-form");t.addEventListener("submit",async r=>{await P(r,t)});const s=document.querySelector(".load-more");s.addEventListener("click",async()=>{await T(s)})});
//# sourceMappingURL=commonHelpers.js.map
