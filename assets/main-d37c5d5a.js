import{S as l}from"./vendor-870f0eb5.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],d=document.querySelector("ul.gallery");d.insertAdjacentHTML("beforeend",g(m));function g(a){return a.map(({preview:i,original:s,description:n})=>`<li class="gallery-item">
                <a class="gallery-link" href="${s}">
                  <img
                    class="gallery-image"
                    src="${i}"
                    alt="${n}"
                  />
                </a>
              </li>`).join("")}new l(".gallery a",{captionsData:"alt",captionDelay:250});const r=document.querySelector(".feedback-form"),h=r.elements.email,u=r.elements.message;let o={email:"",message:""};const p=JSON.parse(localStorage.getItem("feedback-form-state"));p!==null&&(u.value=p.message,h.value=p.email,o=p);r.addEventListener("input",a=>{const i=a.currentTarget.elements.email.value,s=a.currentTarget.elements.message.value;o.email=i.trim(),o.message=s.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(o))});r.addEventListener("submit",a=>{a.preventDefault(),!o.email||!o.message?console.log("Please fill in all fields."):(console.log(o),localStorage.removeItem("feedback-form-state"),r.reset(),o.email="",o.message="")});
//# sourceMappingURL=main-d37c5d5a.js.map
