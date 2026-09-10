(()=>{
  const header=document.querySelector('.site-header');
  if(header){
    header.querySelector('.mobile-rating-bar')?.remove();

    const top=header.querySelector('.top');
    if(top){
      top.querySelector('.mobile-head-actions')?.remove();
      const actions=document.createElement('div');
      actions.className='mobile-head-actions mobile-head-actions-v2';
      actions.innerHTML=`<div class="right">
        <a class="mobile-icon mobile-account" href="#" aria-label="Minha conta"><svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="10" r="5"></circle><path d="M6 28c0-6 4.5-10 10-10s10 4 10 10"></path></svg></a>
        <a class="mobile-icon cart" href="#" aria-label="Carrinho"><svg viewBox="0 0 36 32" aria-hidden="true"><path d="M2 4h5l3 16h17l4-12H9"></path><circle cx="14" cy="27" r="2"></circle><circle cx="27" cy="27" r="2"></circle></svg><span class="m-badge">0</span></a>
        <button class="mobile-icon mobile-menu-btn mobile-menu-btn-right" type="button" aria-label="Abrir menu"></button>
      </div>`;
      top.appendChild(actions);
      actions.querySelector('.mobile-menu-btn-right')?.addEventListener('click',()=>document.body.classList.add('mobile-menu-open'));
    }
  }

  if(!window.matchMedia('(max-width:700px)').matches) return;

  const trust=document.querySelector('.trust-grid');
  if(!trust) return;

  const icons={
    truck:`<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M3 7h17v15H3z"></path><path d="M20 12h5l4 5v5h-9z"></path><circle cx="9" cy="24" r="2.5"></circle><circle cx="24" cy="24" r="2.5"></circle></svg>`,
    swap:`<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 10h19"></path><path d="M20 6l4 4-4 4"></path><path d="M27 22H8"></path><path d="M12 18l-4 4 4 4"></path></svg>`,
    headset:`<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M6 17v-2a10 10 0 0 1 20 0v2"></path><path d="M6 17h4v8H7a2 2 0 0 1-2-2v-4a2 2 0 0 1 1-2z"></path><path d="M26 17h-4v8h3a2 2 0 0 0 2-2v-4a2 2 0 0 0-1-2z"></path></svg>`,
    store:`<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 13h22v14H5z"></path><path d="M3 13l3-8h20l3 8"></path><path d="M10 27v-8h7v8"></path><path d="M3 13c0 2 2 3 4 3s4-1 4-3c0 2 2 3 4 3s4-1 4-3c0 2 2 3 4 3s4-1 4-3"></path></svg>`,
    shield:`<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3l10 4v8c0 7-4.4 11.2-10 14-5.6-2.8-10-7-10-14V7z"></path><path d="M11 16l3.5 3.5L22 12"></path></svg>`
  };

  const items=[
    [icons.truck,'Enviamos para todo o Brasil'],
    [icons.swap,'Compra, venda e troca'],
    [icons.headset,'Atendimento especializado'],
    [icons.store,'Loja física em Caraguatatuba/SP'],
    [icons.shield,'Produtos testados e com garantia']
  ];

  trust.innerHTML=items.map(([icon,text])=>`<div class="trust-card"><span class="trust-icon">${icon}</span><span>${text}</span></div>`).join('');

  const style=document.createElement('style');
  style.textContent=`@media(max-width:700px){
    .trust{background:#f3f3f0!important;color:#111!important;overflow:hidden!important}
    .trust .wrap{width:100%!important;margin:0!important;padding:0!important}
    .trust-grid{display:flex!important;gap:10px!important;min-height:0!important;padding:12px 14px 13px!important;overflow-x:auto!important;overflow-y:hidden!important;scroll-snap-type:x proximity!important;scroll-behavior:smooth!important;-webkit-overflow-scrolling:touch!important;scrollbar-width:none!important;touch-action:pan-x!important;text-align:left!important}
    .trust-grid::-webkit-scrollbar{display:none!important}
    .trust-card{flex:0 0 auto!important;min-width:230px!important;min-height:58px!important;padding:10px 14px!important;border:1px solid #d5dadd!important;border-radius:12px!important;background:#fff!important;display:flex!important;align-items:center!important;gap:11px!important;scroll-snap-align:start!important;box-shadow:0 2px 10px rgba(0,0,0,.04)!important;font-size:14px!important;font-weight:750!important;line-height:1.25!important;white-space:normal!important}
    .trust-icon{width:34px!important;height:34px!important;flex:0 0 34px!important;border-radius:9px!important;background:#0a1015!important;color:#ffc928!important;display:grid!important;place-items:center!important}
    .trust-icon svg{width:22px!important;height:22px!important;fill:none!important;stroke:currentColor!important;stroke-width:1.8!important;stroke-linecap:round!important;stroke-linejoin:round!important}
  }
  @media(max-width:390px){.trust-card{min-width:212px!important;font-size:13px!important}.trust-grid{padding-left:12px!important;padding-right:12px!important}}`;
  document.head.appendChild(style);

  const cards=[...trust.querySelectorAll('.trust-card')];
  let current=0,timer;
  const start=()=>{clearInterval(timer);timer=setInterval(()=>{current=(current+1)%cards.length;trust.scrollTo({left:cards[current].offsetLeft-14,behavior:'smooth'});},3300)};
  const stop=()=>clearInterval(timer);
  trust.addEventListener('touchstart',stop,{passive:true});
  trust.addEventListener('touchend',()=>setTimeout(start,1600),{passive:true});
  trust.addEventListener('pointerdown',stop,{passive:true});
  trust.addEventListener('pointerup',()=>setTimeout(start,1600),{passive:true});
  trust.addEventListener('scroll',()=>{
    let nearest=0,best=Infinity;
    cards.forEach((card,i)=>{const d=Math.abs(card.offsetLeft-trust.scrollLeft-14);if(d<best){best=d;nearest=i}});
    current=nearest;
  },{passive:true});
  start();
})();