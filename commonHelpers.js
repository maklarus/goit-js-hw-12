import{S as v,i as l,a as u}from"./assets/vendor-64b55ca9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a=document.querySelector(".gallery"),L=new v(".gallery a"),q=document.querySelector(".load-more");function S(s){if(s.hits.length===0)return;const r=s.hits.map(({webformatURL:n,largeImageURL:o,tags:e,likes:t,views:i,comments:y,downloads:g})=>`
      <li class="gallery-item">
        <a href="${o}" class="gallery-link">
          <img src="${n}" alt="${e}" />
        </a>
        <div class="flex-style">
          <div class="p-style">
            <p class="p1">Likes</p>
            <p class="p2">${t}</p>
          </div>
          <div class="p-style">
            <p class="p1">Views</p>
            <p class="p2">${i}</p>
          </div>
          <div class="p-style">
            <p class="p1">Comments</p>
            <p class="p2">${y}</p>
          </div>
          <div class="p-style">
            <p class="p1">Downloads</p>
            <p class="p2">${g}</p>
          </div>
        </div>
      </li>`).join("");a.insertAdjacentHTML("beforeend",r),a.childElementCount>=s.totalHits&&(q.classList.add("is-hidden"),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),console.log(a.firstElementChild.getBoundingClientRect().height),L.refresh()}const d=document.querySelector(".loader"),$=document.querySelector(".load-more");document.querySelector(".gallery");u.defaults.baseURL="https://pixabay.com/api";const b="42570593-7f6e60f401c84611dfc2b0674",E=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:"true"});async function p(s,r,n){d.classList.remove("is-hidden");try{const e=(await u.get(`?key=${b}&q=${s}&${E}&per_page=${r}&page=${n}`)).data;$.classList.remove("is-hidden"),e.hits.length?S(e):l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch(o){console.log(o),l.error({title:"Error",message:"Bad request",position:"topRight"})}finally{d.classList.add("is-hidden")}}const w=document.querySelector("form"),P=document.querySelector('input[name="search"]'),R=document.querySelector(".load-more"),m=document.querySelector(".gallery");document.querySelector(".loader");let f=15,c,h;function B(){const s=m.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:3*s,left:0,behavior:"smooth"})}function C(s){s.preventDefault(),m.innerHTML=null;const r=P.value.trim();if(r===""){l.error({title:"Error",message:"Please enter text into the input field.",position:"topRight"});return}p(r,f,1),h=r,c=1}w.addEventListener("submit",C);async function M(){c++,await p(h,f,c),B()}R.addEventListener("click",M);
//# sourceMappingURL=commonHelpers.js.map
