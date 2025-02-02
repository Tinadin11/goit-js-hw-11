import{S as p,i as a}from"./assets/vendor-B2mb6eXk.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function h(i,r=1){const o="https://pixabay.com/api/",s="47181465-58855b534a7ed572abb95719a",e=new URLSearchParams({key:s,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:r});return fetch(`${o}?${e}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}function y(i){return i.map(({webformatURL:r,largeImageURL:o,tags:s,likes:e,views:t,comments:l,downloads:f})=>`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${s}"
              width="360"
            />
          </a>
          <ul class="info-list">
            <li class="info-item">
              <h2 class="subtitle">Likes</h2>
              <p class="info">${e}</p>
            </li>
            <li class="info-item">
              <h2 class="subtitle">Views</h2>
              <p class="info">${t}</p>
            </li>
            <li class="info-item">
              <h2 class="subtitle">Comments</h2>
              <p class="info">${l}</p>
            </li>
            <li class="info-item">
              <h2 class="subtitle">Downloads</h2>
              <p class="info">${f}</p>
            </li>
          </ul>
    </li>`).join("")}const m=document.querySelector(".form-search"),c=document.querySelector(".gallery"),n=document.querySelector(".loader"),u=document.querySelector(".input-search");n.style.display="none";const d=new p(".gallery a",{captionsData:"alt",captionDelay:250});m.addEventListener("submit",g);function g(i){i.preventDefault(),c.innerHTML="",n.style.display="block";const r=u.value.trim();if(!r)return n.style.display="none",a.warning({title:"Caution",message:"Please complete the field!",position:"bottomRight"});h(r).then(o=>{if(n.style.display="none",!o.hits.length)return a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"});c.innerHTML=y(o.hits),d.refresh(),setTimeout(()=>{window.scrollBy({top:document.querySelector(".gallery-item").getBoundingClientRect().height*2,behavior:"smooth"})},500),m.reset()}).catch(o=>{n.style.display="none",console.error("Error",o),a.error({title:"Error",message:"Sorry, something went wrong. This is an error!",position:"bottomRight"})}).finally(()=>{n.style.display="none",u.value=""})}
//# sourceMappingURL=index.js.map
