const WA="https://wa.me/5500000000000";
const IG="https://www.instagram.com/lojasolmusic/";
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
document.getElementById("grid").innerHTML=products.map((p,i)=>`
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
document.getElementById("setup").onsubmit=e=>{
  e.preventDefault();
  const b=document.getElementById("budget").value||"não informado";
  const s=document.getElementById("style").value;
  window.open(WA+"?text="+encodeURIComponent(`Olá! Vim pelo site da SolMusic. Quero montar um setup para ${s} e tenho aproximadamente R$ ${b} disponíveis. Podem me ajudar?`),"_blank");
};
const sell=document.getElementById("sellwa");
sell.href=WA+"?text="+encodeURIComponent("Olá! Vim pelo site da SolMusic e quero solicitar uma avaliação do meu instrumento.");
sell.target="_blank";sell.rel="noopener";
document.getElementById("search").onsubmit=e=>{e.preventDefault();document.getElementById("products").scrollIntoView({behavior:"smooth"})};
document.getElementById("themeToggle").onclick=()=>document.body.classList.toggle("light-mode");