(()=>{
  if(!matchMedia('(max-width:700px)').matches)return;
  const heading=document.querySelector('#cats .section-head h2');
  if(heading)heading.textContent='Veja seu instrumento';

  const track=document.querySelector('#cats .cats');
  if(!track)return;
  const cards=[...track.querySelectorAll('.cat')];
  if(!cards.length)return;

  let active=0;
  let raf=0;
  let userInteracting=false;

  const haptic=()=>{
    if(userInteracting&&'vibrate' in navigator){
      try{navigator.vibrate(8)}catch(e){}
    }
  };

  const setActive=(index,{scroll=false,hapticFeedback=true}={})=>{
    const next=Math.max(0,Math.min(cards.length-1,index));
    if(next===active&&!scroll)return;
    const changed=next!==active;
    active=next;
    cards.forEach((card,i)=>card.classList.toggle('is-active',i===active));
    if(changed&&hapticFeedback)haptic();
    if(scroll){
      cards[active].scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'});
    }
  };

  const nearestToCenter=()=>{
    raf=0;
    const box=track.getBoundingClientRect();
    const center=box.left+box.width/2;
    let best=0;
    let bestDist=Infinity;
    cards.forEach((card,i)=>{
      const r=card.getBoundingClientRect();
      const d=Math.abs((r.left+r.width/2)-center);
      if(d<bestDist){bestDist=d;best=i;}
    });
    setActive(best);
  };

  const sync=()=>{
    if(!raf)raf=requestAnimationFrame(nearestToCenter);
  };

  cards.forEach((card,i)=>card.addEventListener('click',e=>{
    if(i!==active){
      e.preventDefault();
      userInteracting=true;
      setActive(i,{scroll:true});
      setTimeout(()=>{userInteracting=false},420);
    }
  }));

  track.addEventListener('scroll',sync,{passive:true});
  track.addEventListener('touchstart',()=>{userInteracting=true},{passive:true});
  track.addEventListener('touchend',()=>setTimeout(()=>{userInteracting=false},350),{passive:true});
  track.addEventListener('pointerdown',()=>{userInteracting=true},{passive:true});
  track.addEventListener('pointerup',()=>setTimeout(()=>{userInteracting=false},350),{passive:true});

  setActive(0,{hapticFeedback:false});
})();