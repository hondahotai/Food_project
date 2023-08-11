(()=>{"use strict";function t(t,e){const n=document.querySelector(t);n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden",console.log(e),e&&clearInterval(e)}function e(t){const e=document.querySelector(t);e.classList.add("hide"),e.classList.remove("show"),document.body.style.overflow=""}window.addEventListener("DOMContentLoaded",(()=>{const n=setTimeout((()=>t(".modal",n)),3e5);(function(t,e,n,o){const s=document.querySelectorAll(t),r=document.querySelectorAll(e),a=document.querySelector(n);function c(){r.forEach((t=>{t.classList.add("hide"),t.classList.remove("show","fade")})),s.forEach((t=>{t.classList.remove(o)}))}function i(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;r[t].classList.add("show","fade"),r[t].classList.remove("hide"),s[t].classList.add(o)}c(),i(),a.addEventListener("click",(e=>{const n=e.target;n&&n.classList.contains(t.slice(1))&&s.forEach(((t,e)=>{n===t&&(c(),i(e))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(n,o,s){const r=document.querySelectorAll(n),a=document.querySelector(o);r.forEach((e=>{e.addEventListener("click",(()=>t(o,s)))})),a.addEventListener("click",(t=>{t.target!==a&&""!==t.target.getAttribute("data-close")||e(o)})),document.addEventListener("keydown",(t=>{"Escape"===t.code&&a.classList.contains("show")&&e(o)})),window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight-1&&(t(o,s),window.removeEventListener("scroll",e))}))}("[data-modal]",".modal",n),function(t,e){function n(t){return t>=0&&t<10?`0${t}`:t}!function(t,e){const o=document.querySelector(t),s=o.querySelector("#days"),r=o.querySelector("#hours"),a=o.querySelector("#minutes"),c=o.querySelector("#seconds"),i=setInterval(l,1e3);function l(){const t=function(t){let e,n,o,s;const r=Date.parse(t)-new Date;return r<=0?(e=0,n=0,o=0,s=0):(e=Math.floor(r/864e5),n=Math.floor(r/36e5%24),o=Math.floor(r/1e3/60%60),s=Math.floor(r/1e3%60)),{total:r,days:e,hours:n,minutes:o,seconds:s}}(e);s.innerHTML=n(t.days),r.innerHTML=n(t.hours),a.innerHTML=n(t.minutes),c.innerHTML=n(t.seconds),t.total<=0&&clearInterval(i)}l()}(t,e)}(".timer","2023-08-12"),function(){class t{constructor(t,e,n,o,s,r){this.src=t,this.alt=e,this.title=n,this.descr=o,this.price=s;for(var a=arguments.length,c=new Array(a>6?a-6:0),i=6;i<a;i++)c[i-6]=arguments[i];this.classes=c,this.parent=document.querySelector(r),this.transfer=60,this.changeToRUB()}changeToRUB(){this.price=this.price*this.transfer}render(){const t=document.createElement("div");0===this.classes.length?(this.element="menu__item",t.classList.add(this.element)):this.classes.forEach((e=>t.classList.add(e))),t.innerHTML=` \n                <img src=${this.src} alt=${this.alt}>\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.descr}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>\n                </div>   \n            `,this.parent.append(t)}}(async t=>{const e=await fetch(t);if(!e.ok)throw new Error(`Could not fetch ${t}, status: ${e.status}`);return await e.json()})("http://localhost:3000/menu").then((e=>{e.forEach((e=>{let{img:n,altimg:o,title:s,descr:r,price:a}=e;new t(n,o,s,r,a,".menu .container").render()}))}))}(),function(){const t=document.querySelector(".calculating__result span");let e,n,o,s,r;function a(t,e){document.querySelectorAll(t).forEach((t=>{t.classList.remove(e),t.getAttribute("id")===localStorage.getItem("sex")&&t.classList.add(e),t.getAttribute("data-ratio")===localStorage.getItem("ratio")&&t.classList.add(e)}))}function c(){t.textContent=e&&n&&o&&s&&r?"female"===e?Math.round((447.6+9.2*o+3.1*n-4.3*s)*r):Math.round((88.36+13.4*o+4.8*n-5.7*s)*r):"____"}function i(t,n){const o=document.querySelectorAll(t);o.forEach((t=>{t.addEventListener("click",(t=>{t.target.getAttribute("data-ratio")?(r=+t.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+t.target.getAttribute("data-ratio"))):(e=t.target.getAttribute("id"),localStorage.setItem("sex",t.target.getAttribute("id"))),o.forEach((t=>{t.classList.remove(n)})),t.target.classList.add(n),c()}))}))}function l(t){const e=document.querySelector(t);e.addEventListener("input",(()=>{switch(e.value.match(/\D/g)?e.style.border="1px solid red":e.style.border="none",e.getAttribute("id")){case"height":n=+e.value;break;case"weight":o=+e.value;break;case"age":s=+e.value}c()}))}localStorage.getItem("sex")?e=localStorage.getItem("sex"):(e="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?r=localStorage.getItem("ratio"):(r=1.375,localStorage.setItem("ratio",1.375)),a("#gender div","calculating__choose-item_active"),a(".calculating__choose_big div","calculating__choose-item_active"),c(),i("#gender div","calculating__choose-item_active"),i(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}(),function(n,o){function s(n){const s=document.querySelector(".modal__dialog");s.classList.add("hide"),t(".modal",o);const r=document.createElement("div");r.classList.add("modal__dialog"),r.innerHTML=`\n            <div class="modal__content">\n                <div class="modal__close" data-close="">&times;</div>                         \n                <div class="modal__title">${n}</div>   \n            </div>\n        `,document.querySelector(".modal").append(r),setTimeout((()=>{r.remove(),s.classList.add("show"),s.classList.remove("hide"),e(".modal")}),4e3)}document.querySelectorAll(n).forEach((t=>{var e;(e=t).addEventListener("submit",(t=>{t.preventDefault();const n=document.createElement("img");n.src="img/form/spinner.svg",n.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",e.insertAdjacentElement("afterend",n);const o=new FormData(e);(async(t,e)=>{const n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:e});return await n.json()})(0,JSON.stringify(Object.fromEntries(o.entries()))).then((t=>{console.log(t),s("Спасибо! Скоро мы с вами свяжемся"),n.remove()})).catch((()=>{s("Что-то пошло не так...")})).finally((()=>{e.reset()}))}))}))}("form",n),function(t){let{container:e,slide:n,nextArrow:o,prevArrow:s,totalCounter:r,currentCounter:a,wrapper:c,field:i}=t;const l=document.querySelectorAll(n),d=document.querySelector(e),u=document.querySelector(s),m=document.querySelector(o),h=document.querySelector(r),g=document.querySelector(a),f=document.querySelector(c),y=document.querySelector(i),p=window.getComputedStyle(f).width;let v=1,_=0;l.length<10?(h.textContent=`0${l.length}`,g.textContent=`0${v}`):(h.textContent=l.length,g.textContent=v),y.style.width=100*l.length+"%",y.style.display="flex",y.style.transition="0.5s all",f.style.overflow="hidden",l.forEach((t=>{t.style.width=p})),d.style.position="relative";const w=document.createElement("ol"),L=[];w.classList.add("carousel-indicators"),w.style.cssText="\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 15;\n        display: flex;\n        justify-content: center;\n        margin-right: 15%;\n        margin-left: 15%;\n        list-style: none;\n    ",d.append(w);for(let t=0;t<l.length;t++){const e=document.createElement("li");e.setAttribute("data-slide-to",t+1),e.style.cssText="\n            box-sizing: content-box;\n            flex: 0 1 auto;\n            width: 30px;\n            height: 6px;\n            margin-right: 3px;\n            margin-left: 3px;\n            cursor: pointer;\n            background-color: #fff;\n            background-clip: padding-box;\n            border-top: 10px solid transparent;\n            border-bottom: 10px solid transparent;\n            opacity: .5;\n            transition: opacity .6s ease;\n        ",0===t&&(e.style.opacity=1),w.append(e),L.push(e)}function S(t){return+t.replace(/\D/g,"")}m.addEventListener("click",(()=>{_===S(p)*(l.length-1)?_=0:_+=S(p),y.style.transform=`translateX(-${_}px)`,v===l.length?v=1:v++,l.length<10?g.textContent=`0${v}`:g.textContent=v,L.forEach((t=>t.style.opacity=".5")),L[v-1].style.opacity=1})),u.addEventListener("click",(()=>{0===_?_=S(p)*(l.length-1):_-=S(p),y.style.transform=`translateX(-${_}px)`,1===v?v=l.length:v--,l.length<10?g.textContent=`0${v}`:g.textContent=v,L.forEach((t=>t.style.opacity=".5")),L[v-1].style.opacity=1})),L.forEach((t=>{t.addEventListener("click",(t=>{const e=t.target.getAttribute("data-slide-to");v=e,_=S(p)*(e-1),y.style.transform=`translateX(-${_}px)`,l.length<10?g.textContent=`0${v}`:g.textContent=v,L.forEach((t=>t.style.opacity=".5")),L[v-1].style.opacity=1}))}))}({container:".offer__slider",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",slide:".offer__slide",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"})}))})();
//# sourceMappingURL=bundle.js.map