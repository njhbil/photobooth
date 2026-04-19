(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();const et="/assets/IMG_1689-B_ruE5Dq.PNG",at="/assets/IMG_1690-B8S3J-Te.PNG",nt="/assets/IMG_1691-ehXEKnLl.PNG",st="/assets/IMG_1692-DDh0iU3W.PNG",x=[{id:"nais",name:"Nais",subtitle:"Mendeteksi slot...",shots:0,accent:"#f97316",image:et,fallbackSlots:[{x:.06,y:.06,w:.88,h:.18,r:18},{x:.06,y:.28,w:.88,h:.18,r:18},{x:.06,y:.5,w:.88,h:.18,r:18},{x:.06,y:.72,w:.88,h:.18,r:18}],slots:[{x:.06,y:.06,w:.88,h:.18,r:18},{x:.06,y:.28,w:.88,h:.18,r:18},{x:.06,y:.5,w:.88,h:.18,r:18},{x:.06,y:.72,w:.88,h:.18,r:18}]},{id:"boom",name:"Boom",subtitle:"Mendeteksi slot...",shots:0,accent:"#facc15",image:at,fallbackSlots:[{x:.14,y:.09,w:.72,h:.2,r:34},{x:.14,y:.41,w:.72,h:.2,r:34},{x:.14,y:.72,w:.72,h:.2,r:34}],slots:[{x:.14,y:.09,w:.72,h:.2,r:34},{x:.14,y:.41,w:.72,h:.2,r:34},{x:.14,y:.72,w:.72,h:.2,r:34}]},{id:"love",name:"Mahal Kita",subtitle:"Mendeteksi slot...",shots:0,accent:"#ec4899",image:nt,fallbackSlots:[{x:.05,y:.04,w:.9,h:.23,r:18},{x:.05,y:.33,w:.9,h:.23,r:18},{x:.05,y:.62,w:.9,h:.23,r:18}],slots:[{x:.05,y:.04,w:.9,h:.23,r:18},{x:.05,y:.33,w:.9,h:.23,r:18},{x:.05,y:.62,w:.9,h:.23,r:18}]},{id:"zebra",name:"Nais Retro",subtitle:"Mendeteksi slot...",shots:0,accent:"#a855f7",image:st,fallbackSlots:[{x:.16,y:.12,w:.68,h:.29,r:38},{x:.16,y:.56,w:.68,h:.29,r:38},{x:.17,y:.83,w:.66,h:.11,r:30}],slots:[{x:.16,y:.12,w:.68,h:.29,r:38},{x:.16,y:.56,w:.68,h:.29,r:38},{x:.17,y:.83,w:.66,h:.11,r:30}]}],ot=document.querySelector("#app");ot.innerHTML=`
  <main class="shell">
    <section class="hero">
      <div>
        <p class="eyebrow">Photo Booth Ready</p>
        <h1>Buat sesi foto sesuai template, otomatis jumlah jepretannya ikut slot tema.</h1>
        <p class="lead">
          Pilih tema, nyalakan kamera, lalu aplikasi akan ambil foto satu per satu sampai jumlah
          fotonya pas. Hasil akhir bisa langsung diunduh PNG.
        </p>
      </div>
      <div class="hero-badge">
        <span>Auto match</span>
        <strong>3 / 4 foto</strong>
      </div>
    </section>

    <section class="workspace">
      <div class="panel theme-panel">
        <div class="panel-head">
          <div>
            <p class="panel-kicker">Tema</p>
            <h2>Pilih frame</h2>
          </div>
          <span id="shot-label" class="shot-pill"></span>
        </div>
        <div id="theme-grid" class="theme-grid"></div>
      </div>

      <div class="panel preview-panel">
        <div class="panel-head">
          <div>
            <p class="panel-kicker">Preview hasil</p>
            <h2 id="template-name"></h2>
          </div>
          <span id="template-count" class="count-pill"></span>
        </div>
        <div id="template-stage" class="template-stage"></div>
      </div>

      <div class="panel camera-panel">
        <div class="panel-head">
          <div>
            <p class="panel-kicker">Kamera</p>
            <h2>Jepret otomatis</h2>
          </div>
          <span id="status-pill" class="status-pill">Belum aktif</span>
        </div>

        <div class="camera-frame">
          <video id="camera-video" autoplay muted playsinline></video>
          <div id="camera-overlay" class="camera-overlay"></div>
        </div>

        <div class="controls">
          <button id="camera-button" class="primary">Aktifkan kamera</button>
          <button id="session-button" class="secondary">Mulai sesi foto</button>
          <button id="reset-button" class="ghost">Ulangi</button>
        </div>

        <p id="helper-text" class="helper-text"></p>

        <div class="export-row">
          <button id="download-button" class="download" disabled>Download PNG</button>
        </div>
      </div>
    </section>

    <section class="panel strip-panel">
      <div class="panel-head">
        <div>
          <p class="panel-kicker">Hasil foto</p>
          <h2>Urutan jepretan</h2>
        </div>
        <span id="countdown-pill" class="countdown-pill">Siap</span>
      </div>
      <div id="capture-strip" class="capture-strip"></div>
    </section>
  </main>
`;const F=document.querySelector("#theme-grid"),j=document.querySelector("#template-stage"),it=document.querySelector("#template-name"),rt=document.querySelector("#template-count"),ct=document.querySelector("#shot-label"),b=document.querySelector("#helper-text"),_=document.querySelector("#status-pill"),K=document.querySelector("#countdown-pill"),O=document.querySelector("#capture-strip"),I=document.querySelector("#camera-video"),S=document.querySelector("#camera-button"),X=document.querySelector("#session-button"),lt=document.querySelector("#reset-button"),y=document.querySelector("#download-button"),o={selectedTemplateId:x[0].id,capturedShots:[],stream:null,isCameraReady:!1,isCapturing:!1,countdown:0};let N=0;function C(){return x.find(t=>t.id===o.selectedTemplateId)??x[0]}function dt(t){return`${t} foto`}async function ut(){for(const t of x){const e=await U(t.image),a=ht(e),s=a.length>=2?a:t.fallbackSlots;t.slots=mt(t.id,s),t.shots=t.slots.length,t.subtitle=`${t.shots} foto`}}function mt(t,e){return t==="nais"?e.map(a=>L(a,.01,.018)):t==="love"?e.map(a=>L(a,.009,.016)):e}function L(t,e,a){const s=t.w*e,n=t.h*a,i=v(t.x-s),r=v(t.y-n),d=v(t.x+t.w+s),l=v(t.y+t.h+n);return{...t,x:i,y:r,w:Math.max(.02,d-i),h:Math.max(.02,l-r)}}function ht(t){const e=document.createElement("canvas"),a=t.naturalWidth,s=t.naturalHeight,n=a*s;e.width=a,e.height=s;const i=e.getContext("2d");i.drawImage(t,0,0);const{data:r}=i.getImageData(0,0,a,s),d=new Uint8Array(n),l=14,m=[],f=[];function M(c){return r[c*4+3]}function k(c){return M(c)<=l}function T(c){c<0||c>=n||d[c]||!k(c)||(d[c]=1,m.push(c))}for(let c=0;c<n;c+=1){if(d[c]||!k(c))continue;d[c]=1,m.length=0,m.push(c);let h=0,g=a,P=s,R=0,B=0;for(;m.length;){const w=m.pop(),$=w%a,q=Math.floor(w/a);h+=1,$<g&&(g=$),$>R&&(R=$),q<P&&(P=q),q>B&&(B=q),T(w-1),T(w+1),T(w-a),T(w+a)}const D=R-g+1,G=B-P+1,J=h/n,H=D/a,A=G/s,Q=H>.97&&A>.97,V=J<.015,Z=H<.25||A<.06;if(Q||V||Z)continue;const tt=Math.max(12,Math.min(40,Math.round(Math.min(D,G)*.14)));f.push({x:g/a,y:P/s,w:D/a,h:G/s,r:tt,_pixelCount:h})}return f.sort((c,h)=>h._pixelCount-c._pixelCount).slice(0,5).sort((c,h)=>{const g=c.y-h.y;return Math.abs(g)>.015?g:c.x-h.x}).map(({_pixelCount:c,...h})=>pt(h))}function pt(t){const e=v(t.x),a=v(t.y),s=Math.max(.02,Math.min(1-e,t.w)),n=Math.max(.02,Math.min(1-a,t.h)),i=Math.max(10,Math.round(Math.min(s,n)*1365*.12));return L({x:e,y:a,w:s,h:n,r:i},.008,.008)}function v(t){return Math.min(1,Math.max(0,t))}function W(t){return new Promise(e=>window.setTimeout(e,t))}function u(t,e="neutral"){_.textContent=t,_.dataset.tone=e}function E(t){K.textContent=t,K.dataset.tone=t==="Siap"?"neutral":"live"}function ft(t,e,a,s,n,i){const r=Math.max(0,Math.min(i,Math.min(s,n)/2));t.beginPath(),t.moveTo(e+r,a),t.lineTo(e+s-r,a),t.quadraticCurveTo(e+s,a,e+s,a+r),t.lineTo(e+s,a+n-r),t.quadraticCurveTo(e+s,a+n,e+s-r,a+n),t.lineTo(e+r,a+n),t.quadraticCurveTo(e,a+n,e,a+n-r),t.lineTo(e,a+r),t.quadraticCurveTo(e,a,e+r,a),t.closePath()}function gt(t,e,a,s,n,i){const r=Math.max(n/e.width,i/e.height),d=e.width*r,l=e.height*r,m=a+(n-d)/2,f=s+(i-l)/2;t.drawImage(e,m,f,d,l)}function wt(){const{videoWidth:t,videoHeight:e}=I;if(!t||!e)throw new Error("Kamera belum siap.");const a=document.createElement("canvas");return a.width=t,a.height=e,a.getContext("2d").drawImage(I,0,0,a.width,a.height),a.toDataURL("image/jpeg",.92)}async function Y(){var e;if(o.stream)return;if(!((e=navigator.mediaDevices)!=null&&e.getUserMedia))throw new Error("Browser ini tidak mendukung kamera.");const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:1280},height:{ideal:1920}},audio:!1});o.stream=t,I.srcObject=t,o.isCameraReady=!0,u("Kamera aktif","success"),b.textContent="Arahkan wajah ke tengah frame lalu klik mulai sesi foto."}function vt(){const t=C();it.textContent=t.name,rt.textContent=dt(t.shots),ct.textContent=`${t.shots} shot`,y.disabled=o.capturedShots.length!==t.shots,X.disabled=o.isCapturing,F.innerHTML=x.map(e=>`
        <button class="theme-card ${e.id===o.selectedTemplateId?"active":""}" data-template-id="${e.id}">
          <img src="${e.image}" alt="${e.name}" />
          <span class="theme-card-copy">
            <strong>${e.name}</strong>
            <span>${e.subtitle}</span>
          </span>
        </button>
      `).join("")}async function p(){const t=++N,e=C();if(o.capturedShots.length>0){const s=await St(e,o.capturedShots);if(t!==N)return;j.innerHTML=`
      <img class="template-art" src="${s}" alt="${e.name}" />
    `}else{if(t!==N)return;j.innerHTML=`
      <img class="template-art" src="${e.image}" alt="${e.name}" />
    `}O.style.gridTemplateColumns=`repeat(${e.shots}, minmax(0, 1fr))`,O.innerHTML=e.slots.map((s,n)=>{const i=o.capturedShots[n];return`
        <div class="strip-item ${i?"filled":"empty"}">
          ${i?`<img src="${i}" alt="Foto ${n+1}" />`:`<span>Foto ${n+1}</span>`}
        </div>
      `}).join(""),b.textContent=o.capturedShots.length===e.shots?"Semua foto sudah pas ke template. Tinggal download hasilnya.":"Klik aktifkan kamera dulu, lalu mulai sesi untuk mengambil foto otomatis sesuai tema.",vt()}function yt(t=!0){o.capturedShots=[],o.isCapturing=!1,o.countdown=0,E("Siap"),u(o.isCameraReady?"Siap":"Belum aktif",o.isCameraReady?"neutral":"muted"),p(),!t&&o.stream&&(o.stream.getTracks().forEach(e=>e.stop()),o.stream=null,o.isCameraReady=!1,I.srcObject=null)}async function bt(){const t=C();o.isCapturing=!0,o.capturedShots=[],y.disabled=!0,p();for(let e=0;e<t.shots;e+=1){for(let s=3;s>=1;s-=1)if(o.countdown=s,E(String(s)),u(`Siap foto ${e+1}/${t.shots}`,"live"),await W(1e3),!o.isCapturing)return;const a=wt();o.capturedShots.push(a),p(),await W(450)}o.isCapturing=!1,o.countdown=0,E("Siap"),u("Sesi selesai","success"),y.disabled=!1,p()}function U(t){return new Promise((e,a)=>{const s=new Image;s.onload=()=>e(s),s.onerror=()=>a(new Error(`Gagal memuat gambar: ${t}`)),s.src=t})}async function kt(){const t=C();if(o.capturedShots.length!==t.shots){u("Foto belum lengkap","error");return}const e=await z(t,o.capturedShots),a=document.createElement("a");a.href=e.toDataURL("image/png"),a.download=`${t.id}-photobooth.png`,a.click(),u("PNG berhasil diunduh","success")}async function z(t,e){const a=await U(t.image),s=await Promise.all(e.map(U)),n=document.createElement("canvas");n.width=a.naturalWidth,n.height=a.naturalHeight;const i=n.getContext("2d");return s.forEach((r,d)=>{const l=L(t.slots[d],.012,.012),m=l.x*n.width,f=l.y*n.height,M=l.w*n.width,k=l.h*n.height;i.save(),ft(i,m,f,M,k,l.r),i.clip(),gt(i,r,m,f,M,k),i.restore()}),i.drawImage(a,0,0),n}async function St(t,e){return(await z(t,e)).toDataURL("image/png")}F.addEventListener("click",t=>{const e=t.target.closest("[data-template-id]");if(!e||o.isCapturing)return;const a=e.dataset.templateId;a!==o.selectedTemplateId&&(o.selectedTemplateId=a,o.capturedShots=[],E("Siap"),u(o.isCameraReady?"Tema diganti":"Belum aktif",o.isCameraReady?"neutral":"muted"),p())});S.addEventListener("click",async()=>{S.disabled=!0,S.textContent="Menyalakan...";try{await Y(),p()}catch(t){u("Kamera gagal aktif","error"),b.textContent=t.message}finally{S.disabled=!1,S.textContent="Aktifkan kamera"}});X.addEventListener("click",async()=>{if(!o.isCapturing)try{await Y(),await bt()}catch(t){o.isCapturing=!1,u("Gagal memulai sesi","error"),b.textContent=t.message,p()}});lt.addEventListener("click",()=>{yt(!0)});y.addEventListener("click",async()=>{try{y.disabled=!0,await kt()}catch(t){u("Download gagal","error"),b.textContent=t.message}finally{y.disabled=o.capturedShots.length!==C().shots}});async function xt(){await ut(),await p(),u("Belum aktif","muted"),b.textContent="Aktifkan kamera untuk mulai sesi photobooth."}xt();
