import{S as d,i as l}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const c=document.querySelector(".gallery"),f=new d(".gallery a");function m({hits:s}){if(s.length===0){c.innerHTML="";return}const t=s.map(({webformatURL:n,largeImageURL:i,tags:e,likes:r,views:o,comments:p,downloads:u})=>`
      <li class="gallery-item">
        <a href="${i}" class="gallery-link">
          <img src="${n}" alt="${e}" />
        </a>
        <div class="flex-style">
          <div class="p-style">
            <p class="p1">Likes</p>
            <p class="p2">${r}</p>
          </div>
          <div class="p-style">
            <p class="p1">Views</p>
            <p class="p2">${o}</p>
          </div>
          <div class="p-style">
            <p class="p1">Comments</p>
            <p class="p2">${p}</p>
          </div>
          <div class="p-style">
            <p class="p1">Downloads</p>
            <p class="p2">${u}</p>
          </div>
        </div>
      </li>`).join("");c.innerHTML=t,f.refresh()}const y="https://pixabay.com/api",h="42570593-7f6e60f401c84611dfc2b0674",g=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:"true"}),v=()=>{const s=document.querySelector(".loader");s.style.display="inline-block"},L=s=>{v(),setTimeout(function(){fetch(`${y}/?key=${h}&q=${s}&${g}`).then(t=>t.json()).then(t=>(t.hits.length||l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),t)).then(m).catch(t=>l.error({title:"Error",message:"Bad request",position:"topRight"})).finally(()=>{const t=document.querySelector(".loader");t.style.display="none"})},250)},$=document.querySelector("form"),a=document.querySelector('input[name="search"]');function P(s){if(s.preventDefault(),a.value.trim()===""){l.error({title:"Error",message:"Please enter text into the input field.",position:"topRight"});return}L(a.value.trim())}$.addEventListener("submit",P);
//# sourceMappingURL=commonHelpers.js.map
