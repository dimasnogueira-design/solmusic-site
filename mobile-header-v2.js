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

  if(window.matchMedia('(max-width:700px)').matches){
    const trust=document.querySelector('.trust-grid');
    if(trust && !trust.dataset.marqueeReady){
      trust.dataset.marqueeReady='true';
      [...trust.children].forEach(item=>{
        const clone=item.cloneNode(true);
        clone.setAttribute('aria-hidden','true');
        trust.appendChild(clone);
      });
      const css=document.createElement('link');
      css.rel='stylesheet';css.href='trust-marquee.css';document.head.appendChild(css);
    }
  }
})();