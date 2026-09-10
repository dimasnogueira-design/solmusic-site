const WA="https://wa.me/5500000000000";
const IG="https://www.instagram.com/lojasolmusic/";

["carousel.css","mobile-header.css"].forEach(href=>{const link=document.createElement("link");link.rel="stylesheet";link.href=href;document.head.appendChild(link)});

// Header mobile: arquitetura própria, preservando o desktop.
const siteHeader=document.querySelector(".site-header");
if(siteHeader){
  const top=siteHeader.querySelector(".top");
  if(top){
    const mobileActions=document.createElement("div");
    mobileActions.className="mobile-head-actions";
    mobileActions.innerHTML=`<div class="left"><button class="mobile-icon mobile-menu-btn" type="button" aria-label="Abrir menu">☰</button></div><div class="right"><button class="mobile-icon mobile-search-btn" type="button" aria-label="Buscar">⌕</button><a class="mobile-icon" href="#" aria-label="Favoritos">♡</a><a class="mobile-icon cart" href="#" aria-label="Carrinho">⌑<span class="m-badge">0</span></a></div>`;
    top.appendChild(mobileActions);
  }
  const drawer=document.createElement("aside");drawer.className="mobile-drawer";drawer.setAttribute("aria-label","Menu principal");
  drawer.innerHTML=`<div class="mobile-drawer-head"><img src="assets/solmusic-logo.webp" alt="SolMusic"><button class="mobile-drawer-close" type="button" aria-label="Fechar menu">×</button></div><nav><a href="#cats">Instrumentos</a><a href="#cats">Áudio</a><a href="#cats">Acessórios</a><a href="#brands">Marcas</a><a href="#products">Usados</a><a href="#offers">Ofertas</a><a href="#club">SolMusic Club</a><a href="#reels">Conteúdo</a><a href="#footer">A Loja</a></nav><div class="account-links"><a href="#">Minha conta</a><a href="#">Favoritos</a></div><a class="drawer-wa" href="${WA}" target="_blank" rel="noopener">FALAR NO WHATSAPP</a>`;
  const backdrop=document.createElement("button");backdrop.className="mobile-drawer-backdrop";backdrop.type="button";backdrop.setAttribute("aria-label","Fechar menu");
  document.body.append(backdrop,drawer);
  const closeMenu=()=>document.body.classList.remove("mobile-menu-open");
  siteHeader.querySelector(".mobile-menu-btn")?.addEventListener("click",()=>document.body.classList.add("mobile-menu-open"));
  drawer.querySelector(".mobile-drawer-close")?.addEventListener("click",closeMenu);backdrop.addEventListener("click",closeMenu);drawer.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));
  siteHeader.querySelector(".mobile-search-btn")?.addEventListener("click",()=>siteHeader.querySelector(".search input")?.focus());
}

const oldHero=document.querySelector("section.hero");
const isMobileHero=window.matchMedia("(max-width:700px)").matches;
if(oldHero&&!isMobileHero){
 const hero=document.createElement("section");hero.className="hero-carousel";hero.setAttribute("aria-label","Destaques SolMusic");
 hero.innerHTML=`<div class="carousel-track">
 <a class="carousel-slide is-active" href="#products" aria-label="Tagima Signature Edu Ardanuy"><img src="assets/banner-tagima.webp" alt="Tagima Signature Edu Ardanuy — destaque SolMusic" fetchpriority="high"><div class="hero-overlay"><span class="hero-kicker">TAGIMA SIGNATURE • EDU ARDANUY</span><h2>FEITA PARA<br><strong>GRANDES HISTÓRIAS.</strong></h2><p>Performance, identidade e atitude em uma Signature feita para quem vive guitarra.</p><span class="hero-cta">VER DETALHES →</span></div></a>
 <a class="carousel-slide" href="#products" aria-label="Tagima Almach e Sixmart"><img src="assets/banner-trio.webp" alt="Tagima Almach e Sixmart — destaque SolMusic" loading="eager"><div class="hero-overlay"><span class="hero-kicker">TAGIMA • ALMACH • SIXMART</span><h2>TRÊS FORMAS DE<br><strong>ENCONTRAR SEU SOM.</strong></h2><p>Do clássico ao moderno: instrumentos para diferentes estilos, timbres e formas de tocar.</p><span class="hero-cta">CONHEÇA OS MODELOS →</span></div></a>
 <a class="carousel-slide" href="#products" aria-label="SKP Pro Audio Q12 MK2"><img src="assets/banner-skp.webp" alt="SKP Pro Audio Q12 MK2 — destaque SolMusic" loading="eager"><div class="hero-overlay"><span class="hero-kicker">SKP PRO AUDIO • Q12 MK2</span><h2>POTÊNCIA PARA<br><strong>LEVAR SEU SOM.</strong></h2><p>Caixa ativa de 12”, 1400W de potência, Bluetooth e versatilidade para música, eventos e apresentações.</p><span class="hero-cta">VER DETALHES →</span></div></a>
 <a class="carousel-slide" href="#reels" aria-label="Jam Session SolMusic"><img src="assets/banner-jam.webp" alt="Jam Session na SolMusic" loading="eager"><div class="hero-overlay"><span class="hero-kicker">SOLMUSIC • JAM SESSION</span><h2>AQUI A MÚSICA<br><strong>ACONTECE DE VERDADE.</strong></h2><p>Gente que canta, toca e vive música. A próxima Jam pode ter você.</p><span class="hero-cta">QUERO PARTICIPAR →</span></div></a>
 </div><button class="carousel-arrow carousel-prev" type="button" aria-label="Banner anterior">‹</button><button class="carousel-arrow carousel-next" type="button" aria-label="Próximo banner">›</button><div class="carousel-count"><b>01</b><span>/ 04</span></div><div class="carousel-nav" role="tablist" aria-label="Escolher banner"><button class="carousel-dot is-active" type="button" aria-label="Banner 1"></button><button class="carousel-dot" type="button" aria-label="Banner 2"></button><button class="carousel-dot" type="button" aria-label="Banner 3"></button><button class="carousel-dot" type="button" aria-label="Banner 4"></button></div>`;
 oldHero.replaceWith(hero);
 const slides=[...hero.querySelectorAll(".carousel-slide")],dots=[...hero.querySelectorAll(".carousel-dot")],count=hero.querySelector(".carousel-count b");let current=0,timer;
 const show=index=>{current=(index+slides.length)%slides.length;slides.forEach((slide,i)=>slide.classList.toggle("is-active",i===current));dots.forEach((dot,i)=>dot.classList.toggle("is-active",i===current));count.textContent=String(current+1).padStart(2,"0")};
 const start=()=>{clearInterval(timer);timer=setInterval(()=>show(current+1),6500)};
 hero.querySelector(".carousel-prev").addEventListener("click",e=>{e.preventDefault();show(current-1);start()});hero.querySelector(".carousel-next").addEventListener("click",e=>{e.preventDefault();show(current+1);start()});dots.forEach((dot,i)=>dot.addEventListener("click",()=>{show(i);start()}));hero.addEventListener("mouseenter",()=>clearInterval(timer));hero.addEventListener("mouseleave",start);
 let touchX=null;hero.addEventListener("touchstart",e=>{touchX=e.changedTouches[0].clientX},{passive:true});hero.addEventListener("touchend",e=>{if(touchX===null)return;const dx=e.changedTouches[0].clientX-touchX;if(Math.abs(dx)>45){show(current+(dx<0?1:-1));start()}touchX=null},{passive:true});start();
}

// Carrossel mobile: autoplay, swipe e setas discretas.
const mobileCarousel=document.querySelector('.mobile-banner-carousel');
if(mobileCarousel){
  const track=mobileCarousel.querySelector('.mobile-banner-track');
  const slides=[...mobileCarousel.querySelectorAll('.mobile-banner-slide')];
  const dots=[...mobileCarousel.querySelectorAll('.mobile-banner-dots button')];
  const prev=document.createElement('button');prev.className='mobile-banner-arrow mobile-banner-prev';prev.type='button';prev.setAttribute('aria-label','Banner anterior');prev.textContent='‹';
  const next=document.createElement('button');next.className='mobile-banner-arrow mobile-banner-next';next.type='button';next.setAttribute('aria-label','Próximo banner');next.textContent='›';
  mobileCarousel.append(prev,next);
  let current=0,timer,scrollTimer;
  const go=index=>{current=(index+slides.length)%slides.length;track.scrollTo({left:current*track.clientWidth,behavior:'smooth'});dots.forEach((d,i)=>d.classList.toggle('active',i===current));};
  const start=()=>{clearInterval(timer);timer=setInterval(()=>go(current+1),5200)};
  const sync=()=>{clearTimeout(scrollTimer);scrollTimer=setTimeout(()=>{const i=Math.round(track.scrollLeft/track.clientWidth);if(i!==current){current=i;dots.forEach((d,n)=>d.classList.toggle('active',n===current));start()}},90)};
  track.addEventListener('scroll',sync,{passive:true});
  dots.forEach((d,i)=>d.addEventListener('click',()=>{go(i);start()}));
  prev.addEventListener('click',()=>{go(current-1);start()});next.addEventListener('click',()=>{go(current+1);start()});
  track.addEventListener('touchstart',()=>clearInterval(timer),{passive:true});track.addEventListener('touchend',start,{passive:true});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)clearInterval(timer);else start()});
  start();
}

const products=[["Tagima Signature","Série Especial","R$ 3.590,00","p1"],["Fender","Player Stratocaster","R$ 5.990,00","p2"],["LTD","EC-256","R$ 4.290,00","p3"],["S by Solar","A2.6C","R$ 3.990,00","p4"],["Takamine","GD11MCE","R$ 2.690,00","p5"]];
document.querySelectorAll("[data-wa]").forEach(a=>{a.href=WA+"?text="+encodeURIComponent("Olá! Vim pelo site da SolMusic e gostaria de falar com um especialista.");a.target="_blank";a.rel="noopener"});document.querySelectorAll(".reelgrid a").forEach(a=>{a.href=IG;a.rel="noopener"});
const grid=document.getElementById("grid");if(grid)grid.innerHTML=products.map(p=>`<article class="card"><button class="heart" aria-label="Favoritar">♡</button><div class="pic ${p[3]}"></div><div class="body"><h3>${p[0]}</h3><small>${p[1]}</small><div class="price">${p[2]}</div><small>à vista no Pix</small><div class="actions"><a href="#">Comprar →</a><a target="_blank" rel="noopener" href="${WA}?text=${encodeURIComponent("Olá! Vi no site "+p[0]+" "+p[1]+". Está disponível?")}">◉ WhatsApp</a></div></div></article>`).join("");
const setup=document.getElementById("setup");if(setup)setup.onsubmit=e=>{e.preventDefault();const b=document.getElementById("budget").value||"não informado",s=document.getElementById("style").value;window.open(WA+"?text="+encodeURIComponent(`Olá! Vim pelo site da SolMusic. Quero montar um setup para ${s} e tenho aproximadamente R$ ${b} disponíveis. Podem me ajudar?`),"_blank")};
const sell=document.getElementById("sellwa");if(sell){sell.href=WA+"?text="+encodeURIComponent("Olá! Vim pelo site da SolMusic e quero solicitar uma avaliação do meu instrumento.");sell.target="_blank";sell.rel="noopener"}const search=document.getElementById("search");if(search)search.onsubmit=e=>{e.preventDefault();document.getElementById("products")?.scrollIntoView({behavior:"smooth"})};const themeToggle=document.getElementById("themeToggle");if(themeToggle)themeToggle.onclick=()=>document.body.classList.toggle("light-mode");