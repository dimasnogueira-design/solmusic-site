const WA="https://wa.me/5500000000000";
const IG="https://www.instagram.com/lojasolmusic/";

const carouselCss=document.createElement("link");
carouselCss.rel="stylesheet";
carouselCss.href="carousel.css";
document.head.appendChild(carouselCss);

const oldHero=document.querySelector("section.hero");
if(oldHero){
  const hero=document.createElement("section");
  hero.className="hero-carousel";
  hero.setAttribute("aria-label","Destaques SolMusic");
  hero.innerHTML=`
    <div class="carousel-track">
      <a class="carousel-slide is-active" href="#products" aria-label="Tagima Signature Edu Ardanuy">
        <img src="assets/banner-tagima.webp" alt="Tagima Signature Edu Ardanuy — destaque SolMusic" fetchpriority="high">
        <div class="hero-overlay">
          <span class="hero-kicker">TAGIMA SIGNATURE • EDU ARDANUY</span>
          <h2>FEITA PARA<br><strong>GRANDES HISTÓRIAS.</strong></h2>
          <p>Superstrato de assinatura com atitude, performance e identidade própria.</p>
          <span class="hero-cta">VER DETALHES →</span>
        </div>
      </a>
      <a class="carousel-slide" href="#products" aria-label="Tagima Almach e Sixmart">
        <img src="assets/banner-trio.webp" alt="Tagima Almach e Sixmart — destaque SolMusic" loading="eager">
        <div class="hero-overlay">
          <span class="hero-kicker">TAGIMA • ALMACH • SIXMART</span>
          <h2>TRÊS FORMAS DE<br><strong>ENCONTRAR SEU SOM.</strong></h2>
          <p>Almach com construção clássica. Sixmart com delay, reverb, overdrive e distortion integrados.</p>
          <span class="hero-cta">CONHEÇA OS MODELOS →</span>
        </div>
      </a>
      <a class="carousel-slide" href="#products" aria-label="SKP Pro Audio Q12 MK2">
        <img src="assets/banner-skp.webp" alt="SKP Pro Audio Q12 MK2 — destaque SolMusic" loading="eager">
      </a>
      <a class="carousel-slide" href="#reels" aria-label="Jam Session SolMusic">
        <img src="assets/banner-jam.webp" alt="Jam Session na SolMusic" loading="eager">
      </a>
    </div>
    <button class="carousel-arrow carousel-prev" type="button" aria-label="Banner anterior">‹</button>
    <button class="carousel-arrow carousel-next" type="button" aria-label="Próximo banner">›</button>
    <div class="carousel-count"><b>01</b><span>/ 04</span></div>
    <div class="carousel-nav" role="tablist" aria-label="Escolher banner">
      <button class="carousel-dot is-active" type="button" aria-label="Banner 1"></button>
      <button class="carousel-dot" type="button" aria-label="Banner 2"></button>
      <button class="carousel-dot" type="button" aria-label="Banner 3"></button>
      <button class="carousel-dot" type="button" aria-label="Banner 4"></button>
    </div>`;
  oldHero.replaceWith(hero);

  const slides=[...hero.querySelectorAll(".carousel-slide")];
  const dots=[...hero.querySelectorAll(".carousel-dot")];
  const count=hero.querySelector(".carousel-count b");
  let current=0;
  let timer;

  const show=index=>{
    current=(index+slides.length)%slides.length;
    slides.forEach((slide,i)=>slide.classList.toggle("is-active",i===current));
    dots.forEach((dot,i)=>dot.classList.toggle("is-active",i===current));
    count.textContent=String(current+1).padStart(2,"0");
  };
  const start=()=>{clearInterval(timer);timer=setInterval(()=>show(current+1),6500)};

  hero.querySelector(".carousel-prev").addEventListener("click",()=>{show(current-1);start()});
  hero.querySelector(".carousel-next").addEventListener("click",()=>{show(current+1);start()});
  dots.forEach((dot,i)=>dot.addEventListener("click",()=>{show(i);start()}));
  hero.addEventListener("mouseenter",()=>clearInterval(timer));
  hero.addEventListener("mouseleave",start);

  let touchX=null;
  hero.addEventListener("touchstart",e=>{touchX=e.changedTouches[0].clientX},{passive:true});
  hero.addEventListener("touchend",e=>{
    if(touchX===null)return;
    const dx=e.changedTouches[0].clientX-touchX;
    if(Math.abs(dx)>45){show(current+(dx<0?1:-1));start()}
    touchX=null;
  },{passive:true});
  start();
}

const products=[
  ["Tagima Signature","Série Especial","R$ 3.590,00","p1"],
  ["Fender","Player Stratocaster","R$ 5.990,00","p2"],
  ["LTD","EC-256","R$ 4.290,00","p3"],
  ["S by Solar","A2.6C","R$ 3.990,00","p4"],
  ["Takamine","GD11MCE","R$ 2.690,00","p5"]
];
document.querySelectorAll("[data-wa]").forEach(a=>{
  a.href=WA+"?text="+encodeURIComponent("Olá! Vim pelo site da SolMusic e gostaria de falar com um especialista.");
  a.target="_blank"; a.rel="noopener";
});
document.querySelectorAll(".reelgrid a").forEach(a=>{a.href=IG;a.rel="noopener"});
const grid=document.getElementById("grid");
if(grid) grid.innerHTML=products.map((p,i)=>`
<article class="card">
  <button class="heart" aria-label="Favoritar">♡</button>
  <div class="pic ${p[3]}"></div>
  <div class="body">
    <h3>${p[0]}</h3><small>${p[1]}</small>
    <div class="price">${p[2]}</div><small>à vista no Pix</small>
    <div class="actions">
      <a href="#">Comprar　→</a>
      <a target="_blank" rel="noopener" href="${WA}?text=${encodeURIComponent("Olá! Vi no site "+p[0]+" "+p[1]+". Está disponível?")}">◉ WhatsApp</a>
    </div>
  </div>
</article>`).join("");
const setup=document.getElementById("setup");
if(setup) setup.onsubmit=e=>{
  e.preventDefault();
  const b=document.getElementById("budget").value||"não informado";
  const s=document.getElementById("style").value;
  window.open(WA+"?text="+encodeURIComponent(`Olá! Vim pelo site da SolMusic. Quero montar um setup para ${s} e tenho aproximadamente R$ ${b} disponíveis. Podem me ajudar?`),"_blank");
};
const sell=document.getElementById("sellwa");
if(sell){sell.href=WA+"?text="+encodeURIComponent("Olá! Vim pelo site da SolMusic e quero solicitar uma avaliação do meu instrumento.");sell.target="_blank";sell.rel="noopener";}
const search=document.getElementById("search");
if(search) search.onsubmit=e=>{e.preventDefault();document.getElementById("products")?.scrollIntoView({behavior:"smooth"})};
const themeToggle=document.getElementById("themeToggle");
if(themeToggle) themeToggle.onclick=()=>document.body.classList.toggle("light-mode");