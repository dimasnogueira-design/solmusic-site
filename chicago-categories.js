(()=>{
  if(!matchMedia('(max-width:700px)').matches)return;
  const heading=document.querySelector('#cats .section-head h2');
  if(heading)heading.textContent='Veja seu instrumento';

  const track=document.querySelector('#cats .cats');
  if(!track)return;
  const cards=[...track.querySelectorAll('.cat')];
  if(!cards.length)return;

  let active=0;
  let settleTimer;

  const setActive=(index,{scroll=false}={})=>{
    active=Math.max(0,Math.min(cards.length-1,index));
    cards.forEach((card,i)=>card.classList.toggle('is-active',i===active));
    if(scroll){
      cards[active].scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'});
    }
  };

  const nearestToCenter=()=>{
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

  cards.forEach((card,i)=>card.addEventListener('click',e=>{
    if(i!==active){e.preventDefault();setActive(i,{scroll:true});}
  }));

  track.addEventListener('scroll',()=>{
    clearTimeout(settleTimer);
    settleTimer=setTimeout(nearestToCenter,85);
  },{passive:true});

  setActive(0);
})();