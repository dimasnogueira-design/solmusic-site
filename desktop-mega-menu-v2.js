(()=>{
  if(!window.matchMedia('(min-width:1001px)').matches) return;

  const setup=()=>{
    const mega=document.querySelector('.desktop-mega-menu');
    if(!mega) return false;

    const tabs=mega.querySelector('.mega-tabs');
    if(tabs){
      tabs.innerHTML=`
        <button class="mega-tab mega-card is-active" type="button" style="--mega-img:url('guitarra-01.png')"><span>Guitarras</span></button>
        <button class="mega-tab mega-card" type="button" style="--mega-img:url('baixo-01.png')"><span>Baixos</span></button>
        <button class="mega-tab mega-card" type="button" style="--mega-img:url('violao-01.png')"><span>Violões</span></button>
        <button class="mega-tab mega-card" type="button" style="--mega-img:url('bateria-01.png')"><span>Baterias</span></button>
        <button class="mega-tab mega-card" type="button" style="--mega-img:url('amplificador-01.png')"><span>Amplificadores</span></button>
        <button class="mega-tab mega-card" type="button" style="--mega-img:url('pedais-01.png')"><span>Pedais & Efeitos</span></button>`;
    }

    const content=mega.querySelector('.mega-content');
    if(content){
      content.innerHTML=`
        <div class="mega-col mega-find"><h4>Encontre seu instrumento</h4><a href="#products">Mais vendidos</a><a href="#products">Novidades</a><a href="#products">Para iniciantes</a><a href="#products">Intermediários</a><a href="#products">Profissionais</a><a class="mega-accent-link" href="#products">Signature Series →</a><a href="#products">Canhotas</a><a href="#products">7 e 8 cordas</a></div>
        <div class="mega-col"><h4>Tipo de corpo</h4><a href="#products">Stratocaster (ST)</a><a href="#products">Telecaster (TL)</a><a href="#products">Les Paul (LP)</a><a href="#products">Super Strato</a><a href="#products">Semiacústicas</a><a href="#products">Hollow Body</a><a href="#products">Headless</a></div>
        <div class="mega-col"><h4>Marcas populares</h4><a href="#brands">Tagima</a><a href="#brands">Fender</a><a href="#brands">Gibson</a><a href="#brands">PRS</a><a href="#brands">Ibanez</a><a href="#brands">Epiphone</a><a href="#brands">Squier</a><a href="#brands">Jackson</a><a href="#brands">ESP</a><a href="#brands">Cort</a></div>
        <div class="mega-col"><h4>Modelos populares</h4><a href="#products">Tagima Signature</a><a href="#products">Fender Stratocaster</a><a href="#products">Fender Telecaster</a><a href="#products">Gibson Les Paul</a><a href="#products">PRS Custom 24</a><a href="#products">Ibanez RG</a><a href="#products">Jackson Soloist</a></div>
        <div class="mega-col"><h4>Comprar melhor</h4><a href="#offers">Ofertas</a><a href="#products">Usados</a><a href="#products">Custo-benefício</a><a href="#products">Parcelamento</a><a href="#products">Kits e combos</a><a href="#products">Últimas unidades</a></div>
        <div class="mega-promos"><a class="mega-promo signature-art" href="#products"><div><span>Tagima Signature</span><small>Conheça a linha →</small></div></a><a class="mega-promo guitar-art" href="#products"><div><span>Encontre sua próxima guitarra</span><small>Ver modelos →</small></div></a></div>`;
    }

    const trust=document.querySelectorAll('.trust-grid span');
    const icons=[
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h11v9H3zM14 9h3l3 3v3h-6zM6 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm11 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg>',
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h11l-2-2m2 2-2 2M20 17H9l2 2m-2-2 2-2"/></svg>',
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12a8 8 0 0 1 16 0v5h-3v-5a5 5 0 0 0-10 0v5H4zM7 17v2H4v-2M20 17v2h-3v-2"/></svg>',
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h16v10H4zM6 9V6h12v3M8 12h2v4H8m6-4h2v4h-2"/></svg>',
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-2.8 8-7 10-4.2-2-7-5.5-7-10V6zM9 12l2 2 4-5"/></svg>'
    ];
    const labels=['Enviamos para todo o Brasil','Compra, venda e troca','Atendimento especializado','Loja física em Caraguatatuba/SP','Produtos testados e com garantia'];
    trust.forEach((el,i)=>{if(labels[i]) el.innerHTML=`<i class="trust-icon">${icons[i]}</i><span>${labels[i]}</span>`});

    const style=document.createElement('style');
    style.id='desktop-mega-menu-v2-style';
    style.textContent=`
      @media(min-width:1001px){
        .desktop-mega-menu{background:#0b0d0f!important;border-color:#292d31!important;color:#fff!important}
        .mega-tabs{grid-template-columns:repeat(6,1fr)!important;gap:8px!important;padding:8px!important;background:#0b0d0f!important;border-bottom:1px solid #292d31!important}
        .mega-tab.mega-card{display:block!important;position:relative!important;min-height:92px!important;overflow:hidden!important;border:0!important;border-radius:8px!important;background:#14181b var(--mega-img) center/cover no-repeat!important;color:#fff!important;isolation:isolate!important;box-shadow:none!important;padding:0!important}
        .mega-tab.mega-card::before{content:''!important;position:absolute!important;inset:0!important;background:linear-gradient(180deg,rgba(5,7,8,.10),rgba(5,7,8,.70))!important;z-index:-1!important;transition:.22s ease!important}
        .mega-tab.mega-card::after{content:''!important;position:absolute!important;left:0!important;right:0!important;bottom:0!important;height:3px!important;background:#ffc928!important;transform:scaleX(0)!important;transform-origin:left!important;transition:.22s ease!important}
        .mega-tab.mega-card span{position:absolute!important;left:16px!important;bottom:13px!important;font-family:'Manrope',Arial,sans-serif!important;font-size:14px!important;font-weight:800!important;letter-spacing:-.1px!important;text-shadow:0 2px 10px rgba(0,0,0,.75)!important}
        .mega-tab.mega-card:hover,.mega-tab.mega-card.is-active{transform:translateY(-1px)!important}
        .mega-tab.mega-card:hover::before,.mega-tab.mega-card.is-active::before{background:linear-gradient(180deg,rgba(255,255,255,.03),rgba(5,7,8,.48))!important}
        .mega-tab.mega-card:hover::after,.mega-tab.mega-card.is-active::after{transform:scaleX(1)!important}
        .mega-content{grid-template-columns:1.1fr 1fr 1fr 1fr .95fr 330px!important;background:#101316!important;padding:24px 0!important}
        .mega-col{border-right:1px solid #2a2e32!important}
        .mega-col h4{color:#ffc928!important}
        .desktop-mega-menu .mega-col a{color:#e6e8e9!important;background:transparent!important}
        .desktop-mega-menu .mega-col a:hover{color:#ffc928!important;text-decoration:none!important}
        .desktop-mega-menu .mega-col a.mega-accent-link{color:#ffc928!important;font-weight:800!important;margin-top:3px!important}
        .mega-promos{position:relative!important;gap:16px!important;padding-left:18px!important;padding-right:18px!important}
        .mega-promos::after{content:''!important;position:absolute!important;left:18px!important;right:18px!important;top:50%!important;height:1px!important;background:linear-gradient(90deg,transparent,rgba(255,255,255,.10),transparent)!important;transform:translateY(-.5px)!important;pointer-events:none!important}
        .site-header .nav .desktop-mega-menu .mega-promos .mega-promo.signature-art{background:url('banner-signature.png') center/cover no-repeat!important}
        .site-header .nav .desktop-mega-menu .mega-promos .mega-promo.guitar-art{background:url('banner-sua-proxima-guitarra.png') center/cover no-repeat!important}
        .site-header .nav .desktop-mega-menu .mega-promos .mega-promo{min-height:146px!important;border:1px solid #2a2e32!important;box-shadow:none!important}
        .mega-promo::before{background:linear-gradient(90deg,rgba(0,0,0,.46),rgba(0,0,0,.04))!important}
        .trust-grid .trust-icon{display:grid!important;place-items:center!important;width:24px!important;height:24px!important;flex:0 0 24px!important;color:#17191c!important}
        .trust-grid .trust-icon svg{width:24px!important;height:24px!important;fill:none!important;stroke:currentColor!important;stroke-width:1.7!important;stroke-linecap:round!important;stroke-linejoin:round!important}
        .trust-grid>span>span{font-family:'Manrope',Arial,sans-serif!important;font-size:12px!important;font-weight:600!important;letter-spacing:-.1px!important}
      }`;
    document.getElementById(style.id)?.remove();
    document.head.appendChild(style);
    return true;
  };

  if(setup()) return;
  let tries=0;
  const timer=setInterval(()=>{tries++;if(setup()||tries>40) clearInterval(timer)},100);
})();
