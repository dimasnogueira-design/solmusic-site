(()=>{
  if(!window.matchMedia('(max-width:700px)').matches) return;

  const trust=document.querySelector('.trust-grid');
  if(!trust) return;

  const icon={
    truck:`<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M3.5 8.5h16v13h-16z"></path><path d="M19.5 13h5l4 4.5v4h-9z"></path><circle cx="9" cy="24" r="2.2"></circle><circle cx="24.5" cy="24" r="2.2"></circle></svg>`,
    swap:`<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 10h20"></path><path d="M21 6l4 4-4 4"></path><path d="M27 22H7"></path><path d="M11 18l-4 4 4 4"></path></svg>`,
    headset:`<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M6 17v-2a10 10 0 0120 0v2"></path><path d="M6 17h4v8H8a2 2 0 01-2-2z"></path><path d="M26 17h-4v8h2a2 2 0 002-2z"></path></svg>`,
    store:`<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 13h22v14H5z"></path><path d="M3.5 13l3-8h19l3 8"></path><path d="M11 27v-8h7v8"></path></svg>`,
    shield:`<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.5l9.5 3.8v7.5c0 6.8-4.2 10.8-9.5 13.7-5.3-2.9-9.5-6.9-9.5-13.7V7.3z"></path><path d="M11.5 16l3.2 3.2 6.2-7"></path></svg>`
  };

  const items=[
    [icon.truck,'Enviamos para todo o Brasil'],
    [icon.swap,'Compra, venda e troca'],
    [icon.headset,'Atendimento especializado'],
    [icon.store,'Loja física em Caraguatatuba'],
    [icon.shield,'Produtos testados e com garantia']
  ];

  trust.innerHTML=items.map(([svg,text])=>`<div class="trust-card trust-clean-card"><span class="trust-icon trust-clean-icon">${svg}</span><span>${text}</span></div>`).join('');

  const style=document.createElement('style');
  style.textContent=`@media(max-width:700px){
    .trust{background:#fff!important;border:0!important;border-top:1px solid #ecece8!important;border-bottom:1px solid #ecece8!important;overflow:hidden!important}
    .trust .wrap{width:100%!important;margin:0!important;padding:0!important}
    .trust .trust-grid{display:flex!important;align-items:stretch!important;gap:0!important;min-height:0!important;padding:0!important;overflow-x:auto!important;overflow-y:hidden!important;scroll-snap-type:x mandatory!important;scroll-behavior:smooth!important;-webkit-overflow-scrolling:touch!important;scrollbar-width:none!important;touch-action:pan-x!important;text-align:left!important;background:#fff!important}
    .trust .trust-grid::-webkit-scrollbar{display:none!important}
    .trust .trust-clean-card{flex:0 0 78vw!important;max-width:310px!important;min-width:220px!important;min-height:58px!important;padding:9px 18px!important;border:0!important;border-right:1px solid #ecece8!important;border-radius:0!important;background:#fff!important;box-shadow:none!important;display:flex!important;align-items:center!important;gap:12px!important;scroll-snap-align:start!important;font-size:13.5px!important;font-weight:750!important;line-height:1.25!important;color:#151719!important}
    .trust .trust-clean-icon{width:34px!important;height:34px!important;flex:0 0 34px!important;border-radius:50%!important;background:#fff6d8!important;color:#16191b!important;display:grid!important;place-items:center!important}
    .trust .trust-clean-icon svg{width:20px!important;height:20px!important;fill:none!important;stroke:currentColor!important;stroke-width:1.65!important;stroke-linecap:round!important;stroke-linejoin:round!important}
  }`;
  document.head.appendChild(style);

  const cards=[...trust.querySelectorAll('.trust-clean-card')];
  if(cards.length<2) return;

  let current=0;
  let timer=null;
  let resumeTimer=null;

  const go=()=>{
    current=(current+1)%cards.length;
    trust.scrollTo({left:cards[current].offsetLeft,behavior:'smooth'});
  };
  const start=()=>{
    clearInterval(timer);
    timer=setInterval(go,2800);
  };
  const pause=()=>{
    clearInterval(timer);
    clearTimeout(resumeTimer);
  };
  const resume=()=>{
    clearTimeout(resumeTimer);
    resumeTimer=setTimeout(start,1800);
  };

  trust.addEventListener('touchstart',pause,{passive:true});
  trust.addEventListener('touchend',resume,{passive:true});
  trust.addEventListener('pointerdown',pause,{passive:true});
  trust.addEventListener('pointerup',resume,{passive:true});
  document.addEventListener('visibilitychange',()=>document.hidden?pause():start());
  start();
})();