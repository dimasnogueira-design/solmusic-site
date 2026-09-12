(()=>{
  const root=document.querySelector('.desktop-banner-carousel');
  if(root){
    const slides=[...root.querySelectorAll('.desktop-banner-slide')];
    const dots=[...root.querySelectorAll('.desktop-banner-dots button')];
    const prev=root.querySelector('.desktop-banner-prev');
    const next=root.querySelector('.desktop-banner-next');
    let i=0,timer;
    const show=n=>{i=(n+slides.length)%slides.length;slides.forEach((s,x)=>s.classList.toggle('is-active',x===i));dots.forEach((d,x)=>d.classList.toggle('is-active',x===i));};
    const restart=()=>{clearInterval(timer);timer=setInterval(()=>show(i+1),6500)};
    prev?.addEventListener('click',()=>{show(i-1);restart()});
    next?.addEventListener('click',()=>{show(i+1);restart()});
    dots.forEach((d,x)=>d.addEventListener('click',()=>{show(x);restart()}));
    root.addEventListener('mouseenter',()=>clearInterval(timer));
    root.addEventListener('mouseleave',restart);
    show(0);restart();
  }
})();

(()=>{
  if(!window.matchMedia('(min-width:1001px)').matches) return;
  const header=document.querySelector('.site-header');
  const nav=header?.querySelector('.nav');
  if(!header||!nav||nav.querySelector('.desktop-extra-menu')) return;
  const links=[...nav.querySelectorAll(':scope > a')];
  const mainTrigger=links[0];

  const closeMainMega=()=>{
    const mega=nav.querySelector('.desktop-mega-menu');
    mega?.classList.remove('is-open');
    mainTrigger?.classList.remove('mega-open');
  };
  const closeExtraMenus=()=>{
    nav.querySelectorAll('.desktop-extra-menu').forEach(m=>m.classList.remove('is-open'));
    links.slice(1).forEach(a=>a.classList.remove('mega-open'));
  };

  const defs={
    1:{key:'audio',html:`<div class="simple-menu audio-menu"><div class="audio-cards"><a href="#products" style="--bg:url('IMG_4717.png')"><b>Amplificadores</b><small>Guitarra, baixo e palco</small></a><a href="#products" style="--bg:url('IMG_4719.png')"><b>Home Studio</b><small>Interfaces, monitores e gravação</small></a><a href="#products" style="--bg:url('F8918250-070B-401F-87CA-B8D6028BB386.png')"><b>PA & Caixas</b><small>Som ao vivo e eventos</small></a></div><div class="simple-cols"><div><h4>Áudio</h4><a href="#products">Caixas ativas</a><a href="#products">Monitores de referência</a><a href="#products">Mesas de som</a><a href="#products">Interfaces de áudio</a></div><div><h4>Microfones</h4><a href="#products">Dinâmicos</a><a href="#products">Condensadores</a><a href="#products">Sem fio</a><a href="#products">Acessórios para microfone</a></div><div><h4>Estúdio</h4><a href="#products">Fones</a><a href="#products">Controladores</a><a href="#products">Cabos</a><a href="#products">Gravação</a></div></div></div>`},
    2:{key:'acessorios',html:`<div class="simple-menu"><div class="simple-cols four"><div><h4>Acessórios</h4><a href="#products">Cordas</a><a href="#products">Palhetas</a><a href="#products">Correias</a><a href="#products">Capotrastes</a></div><div><h4>Proteção</h4><a href="#products">Cases</a><a href="#products">Bags</a><a href="#products">Suportes</a><a href="#products">Pedestais</a></div><div><h4>Conexões</h4><a href="#products">Cabos</a><a href="#products">Fontes</a><a href="#products">Adaptadores</a><a href="#products">Conectores</a></div><div><h4>Manutenção</h4><a href="#products">Afinadores</a><a href="#products">Limpeza</a><a href="#products">Peças</a><a href="#products">Ferramentas</a></div></div></div>`},
    3:{key:'marcas',html:`<div class="simple-menu"><div class="simple-cols five"><div><h4>Destaques</h4><a href="#brands">Tagima</a><a href="#brands">Fender</a><a href="#brands">Gibson</a></div><div><h4>Guitarras</h4><a href="#brands">Ibanez</a><a href="#brands">Jackson</a><a href="#brands">LTD</a></div><div><h4>Áudio</h4><a href="#brands">SKP</a><a href="#brands">Yamaha</a><a href="#brands">Marshall</a></div><div><h4>Efeitos</h4><a href="#brands">Boss</a><a href="#brands">Zoom</a><a href="#brands">Mooer</a></div><div><h4>Ver tudo</h4><a href="#brands">Todas as marcas →</a></div></div></div>`},
    4:{key:'usados',html:`<div class="simple-menu"><div class="simple-cols four"><div><h4>Usados</h4><a href="#products">Guitarras usadas</a><a href="#products">Baixos usados</a><a href="#products">Violões usados</a></div><div><h4>Equipamentos</h4><a href="#products">Amplificadores</a><a href="#products">Pedais</a><a href="#products">Áudio</a></div><div><h4>Compra & Troca</h4><a href="#sellwa">Quero vender meu instrumento</a><a href="#sellwa">Quero trocar</a><a href="#sellwa">Solicitar avaliação</a></div><div><h4>Condição</h4><a href="#products">Revisados</a><a href="#products">Seminovos</a><a href="#products">Oportunidades</a></div></div></div>`},
    5:{key:'ofertas',html:`<div class="simple-menu offer-menu"><div class="simple-cols four"><div><h4>Ofertas</h4><a href="#offers">Promoções do site</a><a href="#offers">Últimas unidades</a><a href="#offers">Combos</a></div><div><h4>Por categoria</h4><a href="#products">Guitarras</a><a href="#products">Áudio</a><a href="#products">Acessórios</a></div><div><h4>Destaques</h4><a href="#products">Mais vendidos</a><a href="#products">Novidades</a><a href="#products">Custo-benefício</a></div><div class="offer-code"><small>SÓ NO SITE</small><b>SOL10</b><span>10% OFF em selecionados</span></div></div></div>`},
    7:{key:'conteudo',html:`<div class="simple-menu"><div class="simple-cols four"><div><h4>Conteúdo</h4><a href="#reels">Reviews</a><a href="#reels">Lançamentos</a><a href="#reels">Dicas</a></div><div><h4>SolMusic Sessions</h4><a href="#reels">Jam Sessions</a><a href="#reels">Ao vivo</a><a href="#reels">Artistas</a></div><div><h4>Guias</h4><a href="#reels">Como escolher</a><a href="#reels">Setup</a><a href="#reels">Primeiro instrumento</a></div><div><h4>Comunidade</h4><a href="#club">SolMusic Club</a><a href="https://www.instagram.com/lojasolmusic/" target="_blank" rel="noopener">Instagram →</a></div></div></div>`}
  };

  Object.entries(defs).forEach(([idx,def])=>{
    const trigger=links[Number(idx)];
    if(!trigger) return;
    const menu=document.createElement('div');
    menu.className='desktop-extra-menu';
    menu.dataset.menu=def.key;
    menu.innerHTML=def.html;
    nav.appendChild(menu);
    let t;
    const open=()=>{
      clearTimeout(t);
      closeMainMega();
      closeExtraMenus();
      menu.classList.add('is-open');
      trigger.classList.add('mega-open');
    };
    const close=()=>{t=setTimeout(()=>{menu.classList.remove('is-open');trigger.classList.remove('mega-open')},120)};
    trigger.addEventListener('mouseenter',open);
    trigger.addEventListener('focus',open);
    trigger.addEventListener('click',e=>{
      e.preventDefault();
      const was=menu.classList.contains('is-open');
      closeMainMega();
      closeExtraMenus();
      if(!was){menu.classList.add('is-open');trigger.classList.add('mega-open')}
    });
    menu.addEventListener('mouseenter',()=>clearTimeout(t));
    menu.addEventListener('mouseleave',close);
  });

  mainTrigger?.addEventListener('mouseenter',closeExtraMenus);
  mainTrigger?.addEventListener('focus',closeExtraMenus);

  nav.addEventListener('mouseleave',()=>setTimeout(()=>{closeExtraMenus();},140));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeExtraMenus();closeMainMega();}});
})();

(()=>{
  if(!window.matchMedia('(min-width:1001px)').matches) return;
  if(document.querySelector('script[data-solmusic-mega-v2]')) return;
  const s=document.createElement('script');
  s.src='desktop-mega-menu-v2.js?v=20260911-2';
  s.dataset.solmusicMegaV2='1';
  document.head.appendChild(s);
})();

// Protótipo: liga todos os cards de produto da home à única página demonstrativa.
(()=>{
  const target='produto-fender-american-ultra-ii.html';
  const linkCards=()=>{
    document.querySelectorAll('#grid .card').forEach(card=>{
      const buy=card.querySelector('.actions a:first-child');
      if(buy) buy.href=target;
      const pic=card.querySelector('.pic');
      if(pic&&!pic.dataset.sampleLinked){
        pic.dataset.sampleLinked='1';
        pic.style.cursor='pointer';
        pic.addEventListener('click',()=>location.href=target);
      }
      const title=card.querySelector('h3');
      if(title&&!title.dataset.sampleLinked){
        title.dataset.sampleLinked='1';
        title.style.cursor='pointer';
        title.addEventListener('click',()=>location.href=target);
      }
    });
  };
  linkCards();
  const grid=document.getElementById('grid');
  if(grid)new MutationObserver(linkCards).observe(grid,{childList:true,subtree:true});
})();
