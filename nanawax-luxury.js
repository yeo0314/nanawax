// ── CURSOR ──
const cur=document.getElementById('cursor'),ring=document.getElementById('cursor-ring');
document.addEventListener('mousemove',e=>{
  cur.style.left=e.clientX+'px';cur.style.top=e.clientY+'px';
  ring.style.left=e.clientX+'px';ring.style.top=e.clientY+'px';
});
document.addEventListener('mousedown',()=>{
  cur.style.width='6px';cur.style.height='6px';
  ring.style.width='48px';ring.style.height='48px';
});
document.addEventListener('mouseup',()=>{
  cur.style.width='10px';cur.style.height='10px';
  ring.style.width='36px';ring.style.height='36px';
});
document.querySelectorAll('a,button,.p-card,.look-card,.edit-item,.blog-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.style.width='16px';cur.style.height='16px';cur.style.background='var(--terracotta)';ring.style.opacity='0';});
  el.addEventListener('mouseleave',()=>{cur.style.width='10px';cur.style.height='10px';cur.style.background='var(--gold)';ring.style.opacity='.6';});
});

// ── NAV SCROLL ──
window.addEventListener('scroll',()=>{
  document.getElementById('main-nav').classList.toggle('scrolled',window.scrollY>60);
});

// ── LANG ──
let L='fr';
const T={
  ribbon:['Nouvelles Arrivées','Bogolan Exclusif','Wax Premium','Livraison Abidjan 24h','Kente Royale','Sur-mesure Disponible','Collection 2025','Femme Africaine Contemporaine'],
  ribbonEN:['New Arrivals','Exclusive Bogolan','Premium Wax','Abidjan Delivery 24h','Royal Kente','Custom Orders','Collection 2025','Contemporary African Woman'],
  langMsg:{fr:'Livraison disponible à Abidjan · Cotonou · Dakar · Paris',en:'Delivery available in Abidjan · Cotonou · Dakar · Paris'},
  'h-eyebrow':{fr:'Collection Printemps — Été 2025',en:'Spring — Summer 2025 Collection'},
  'h-title1':{fr:"L'Afrique",en:'Africa'},
  'h-title2':{fr:'sublimée.',en:'Elevated.'},
  'h-desc':{fr:"Prêt-à-porter de luxe né du wax, des Nana Benz et de la richesse culturelle africaine. Des pièces intemporelles pour la femme africaine contemporaine.",en:"Luxury ready-to-wear born from wax, the Nana Benz legacy, and the richness of African culture. Timeless pieces for the contemporary African woman."},
  'h-cta1':{fr:'Découvrir la Collection',en:'Explore the Collection'},
  'h-cta2':{fr:'Voir le Lookbook',en:'View Lookbook'},
  'h-scroll':{fr:'Défiler',en:'Scroll'},
  's-new-eyebrow':{fr:'Nouveautés',en:'New Arrivals'},
  's-new-title':{fr:'Pièces <em>Signature</em>',en:'<em>Signature</em> Pieces'},
  'see-all-btn':{fr:'Voir toute la collection →',en:'View full collection →'},
  'ed1':{fr:'Été Sahel',en:'Sahel Summer'},
  'ed1-a':{fr:'Voir la série →',en:'View the series →'},
  'ed2':{fr:'Abidjan, Nuit Dorée',en:'Abidjan, Golden Night'},
  'ed2-a':{fr:'Explorer →',en:'Explore →'},
  'ed3':{fr:'Forêt Sacrée',en:'Sacred Forest'},
  'ed3-a':{fr:'Découvrir →',en:'Discover →'},
  'a-quote':{fr:'"Le wax est notre héritage,<br>le luxe notre langage."',en:'"Wax is our heritage,<br>luxury our language."'},
  'a-eyebrow':{fr:'Notre Fondatrice',en:'Our Founder'},
  'a-title':{fr:"Née d'une passion,<br><em>portée par un continent</em>",en:"Born from passion,<br><em>carried by a continent</em>"},
  'a-p1':{fr:"Maureen Ayité, franco-Béninoise autodidacte, a fondé Nanawax en 2012 depuis Cotonou. Un groupe Facebook, des milliers de messages, une vision : démocratiser le luxe africain.",en:"Maureen Ayité, a self-taught Franco-Beninese designer, founded Nanawax in 2012 from Cotonou. A Facebook group, thousands of messages, one vision: democratize African luxury."},
  'a-p2':{fr:"En hommage aux légendaires <em>Nana Benz</em> du Togo, Nanawax est devenue l'une des marques prêt-à-porter africaines les plus influentes — présente à Abidjan, Cotonou, Dakar et Paris.",en:"In tribute to the legendary <em>Nana Benz</em> of Togo, Nanawax has become one of Africa's most influential ready-to-wear brands — present in Abidjan, Cotonou, Dakar and Paris."},
  'st1':{fr:"Ans d'histoire",en:'Years of history'},
  'st2':{fr:'Pièces / mois',en:'Pieces / month'},
  'st3':{fr:'Abonnés',en:'Followers'},
  'st4':{fr:'Marques Afrique',en:'African Brands'},
  'a-btn':{fr:'Lire notre histoire →',en:'Read our story →'},
  'nl-title':{fr:'Rejoignez la maison <em>Nanawax</em>',en:'Join the <em>Nanawax</em> House'},
  'nl-sub':{fr:'Nouveautés, inspirations et offres exclusives réservées à nos membres',en:'New arrivals, inspiration and exclusive offers reserved for our members'},
  'nl-input':{fr:'Votre adresse e-mail',en:'Your email address'},
  'nl-btn-text':{fr:"S'abonner",en:'Subscribe'},
  'f-tag':{fr:"Maison de mode africaine fondée en 2012. L'excellence du wax réinventée pour la femme contemporaine.",en:'African fashion house founded in 2012. The excellence of wax reimagined for the contemporary woman.'},
  'f-h1':{fr:'Boutique',en:'Shop'},
  'f-new':{fr:'Nouveautés',en:'New Arrivals'},
  'f-dresses':{fr:'Robes',en:'Dresses'},
  'f-sets':{fr:'Ensembles',en:'Sets'},
  'f-acc':{fr:'Accessoires',en:'Accessories'},
  'f-promo':{fr:'Promotions',en:'Sales'},
  'f-h2':{fr:'Service',en:'Service'},
  'f-size':{fr:'Guide des tailles',en:'Size Guide'},
  'f-ship':{fr:'Livraison',en:'Shipping'},
  'f-ret':{fr:'Retours',en:'Returns'},
  'f-contact':{fr:'Contact',en:'Contact'},
  'f-faq':{fr:'FAQ',en:'FAQ'},
  'f-h3':{fr:'Maison',en:'House'},
  'f-story':{fr:'Notre Histoire',en:'Our Story'},
  'f-look':{fr:'Lookbook',en:'Lookbook'},
  'f-journal':{fr:'Journal',en:'Journal'},
  'f-press':{fr:'Presse',en:'Press'},
  'f-stores':{fr:'Boutiques',en:'Stores'},
  'f-copy':{fr:'© 2025 Nanawax. Tous droits réservés.',en:'© 2025 Nanawax. All rights reserved.'},
  'bq-eyebrow':{fr:'Collection 2025',en:'Collection 2025'},
  'bq-title':{fr:'Boutique',en:'Shop'},
  'bc-home':{fr:'Accueil',en:'Home'},
  'bc-shop':{fr:'Boutique',en:'Shop'},
  'pd-add-label':{fr:'Ajouter au panier',en:'Add to cart'},
  'pd-sz-label':{fr:'Taille',en:'Size'},
  'pd-guide':{fr:'Guide des tailles',en:'Size guide'},
  'pf1':{fr:'Tissu wax 100% coton premium certifié',en:'Certified 100% premium cotton wax fabric'},
  'pf2':{fr:'Livraison Abidjan en 24–48h',en:'Abidjan delivery in 24–48h'},
  'pf3':{fr:'Retours gratuits sous 14 jours',en:'Free returns within 14 days'},
  'pf4':{fr:'Sur-mesure disponible sur commande',en:'Custom orders available'},
  'lb-eyebrow':{fr:'Nanawax Studio',en:'Nanawax Studio'},
  'lb-title':{fr:'Lookbook',en:'Lookbook'},
  'lb-sub':{fr:"L'art du wax en images — chaque tissu raconte une histoire",en:'The art of wax in images — each fabric tells a story'},
  'ab-eyebrow':{fr:'Fondée en 2012 à Cotonou',en:'Founded in 2012 in Cotonou'},
  'ab-h1':{fr:'Notre<br><em>Histoire</em>',en:'Our<br><em>Story</em>'},
  'ab-sub':{fr:"De Cotonou au monde, l'épopée d'une marque africaine de luxe",en:'From Cotonou to the world, the epic of an African luxury brand'},
  'ab2-eyebrow':{fr:"L'Origine",en:'The Origin'},
  'ab2-title':{fr:'Des Nana Benz<br><em style="font-style:italic;color:var(--gold3)">à Nanawax</em>',en:'From the Nana Benz<br><em style="font-style:italic;color:var(--gold3)">to Nanawax</em>'},
  'ab2-p1':{fr:"Tout a commencé sur Facebook. Maureen Ayité publiait ses créations en wax dans un groupe, et des milliers de personnes lui ont demandé où acheter ces pièces. C'est là que Nanawax est née.",en:"It all started on Facebook. Maureen Ayité shared her wax creations in a group, and thousands of people asked where to buy them. That's where Nanawax was born."},
  'ab2-p2':{fr:'Le nom rend hommage aux Nana Benz, ces femmes d\'affaires togolaises qui ont bâti des empires dans le commerce du wax hollandais.',en:'The name pays tribute to the Nana Benz, the Togolese businesswomen who built empires trading Dutch wax fabrics.'},
  'ab3-ey':{fr:'Reconnaissances',en:'Recognition'},
  'ab3-title':{fr:'Nanawax dans <em>le monde</em>',en:'Nanawax in <em>the world</em>'},
  'r1':{fr:'Forbes Afrique<br>30 Talents',en:'Forbes Africa<br>30 Talents'},
  'r2':{fr:'Abonnés<br>Instagram',en:'Instagram<br>Followers'},
  'r3':{fr:'Marques Afrique<br>Préférées',en:'Preferred African<br>Brands'},
  'r4':{fr:'Décoration<br>Ministère FR',en:'French Ministry<br>Award'},
  'ab-nl-h':{fr:'Visitez nos <em>Maisons</em>',en:'Visit our <em>Houses</em>'},
  'ab-nl-p':{fr:'Abidjan · Cotonou · Dakar · Paris',en:'Abidjan · Cotonou · Dakar · Paris'},
  'ab-nl-btn':{fr:'Boutique en ligne →',en:'Online shop →'},
  'bl-eyebrow':{fr:'Nanawax Éditions',en:'Nanawax Editions'},
  'bl-title':{fr:'Le <em style="font-style:italic;color:var(--gold3)">Journal</em>',en:'The <em style="font-style:italic;color:var(--gold3)">Journal</em>'},
  'bl-sub':{fr:'Mode · Culture · Inspiration · Savoir-faire',en:'Fashion · Culture · Inspiration · Craft'},
  'cd-title':{fr:'Votre Sélection',en:'Your Selection'},
  'cd-empty':{fr:'Votre panier est vide',en:'Your cart is empty'},
  'cd-tot-l':{fr:'Total',en:'Total'},
  'cd-order':{fr:'Commander',en:'Order now'},
  'cd-continue':{fr:'Continuer mes achats',en:'Continue shopping'},
  'co-title':{fr:'Finaliser la commande',en:'Complete your order'},
  'co-s1':{fr:'1. Informations',en:'1. Information'},
  'co-s2':{fr:'2. Livraison',en:'2. Shipping'},
  'co-s3':{fr:'3. Paiement',en:'3. Payment'},
  'co-info':{fr:'Informations personnelles',en:'Personal information'},
  'co-fn':{fr:'Prénom',en:'First name'},
  'co-ln':{fr:'Nom',en:'Last name'},
  'co-em':{fr:'E-mail',en:'Email'},
  'co-ph':{fr:'Téléphone',en:'Phone'},
  'co-ship':{fr:'Adresse de livraison',en:'Delivery address'},
  'co-city':{fr:'Ville',en:'City'},
  'co-addr':{fr:'Adresse complète',en:'Full address'},
  'co-other':{fr:'Autre',en:'Other'},
  'co-pay':{fr:'Paiement',en:'Payment'},
  'co-paymode':{fr:'Mode de paiement',en:'Payment method'},
  'co-cod':{fr:'À la livraison',en:'Cash on delivery'},
  'co-confirm':{fr:'Confirmer la commande',en:'Confirm order'},
  'co-sum':{fr:'Votre commande',en:'Your order'},
  'co-sub-l':{fr:'Sous-total',en:'Subtotal'},
  'co-ship-l':{fr:'Livraison',en:'Shipping'},
  'co-ship-v':{fr:'Gratuite',en:'Free'},
  'co-tot-l':{fr:'Total',en:'Total'},
  'lang-msg':{fr:'Livraison disponible à Abidjan · Cotonou · Dakar · Paris',en:'Delivery available in Abidjan · Cotonou · Dakar · Paris'},
  addedCart:{fr:'ajouté au panier ✦',en:'added to cart ✦'},
  orderConfirm:{fr:'Commande confirmée ! Merci ✦',en:'Order confirmed! Thank you ✦'},
};

function setLang(l){
  L=l;
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.textContent===l.toUpperCase()));
  // update all translatable elements
  Object.keys(T).forEach(k=>{
    if(k==='ribbon'||k==='ribbonEN'||k==='addedCart'||k==='orderConfirm')return;
    const el=document.getElementById(k);
    if(!el||!T[k][l])return;
    if(el.tagName==='INPUT')el.placeholder=T[k][l];
    else el.innerHTML=T[k][l];
  });
  // nav links
  document.querySelectorAll('.nav-link[data-fr]').forEach(el=>el.textContent=el.getAttribute('data-'+l));
  // cat pills
  document.querySelectorAll('.cat[data-fr]').forEach(el=>el.textContent=el.getAttribute('data-'+l));
  // ribbon
  buildRibbon();
  // rebuild showcase with new lang
  buildShowcase();
  // wishlist + search
  updateWishButtons();
  if(document.getElementById('wish-drawer')?.classList.contains('open'))renderWish();
  renderSearchResults(lastSearchQuery);
}

function buildRibbon(){
  const items=L==='fr'?T.ribbon:T.ribbonEN;
  const doubled=[...items,...items,...items,...items];
  document.getElementById('ribbon-track').innerHTML=
    doubled.map(t=>`<span class="ribbon-item">${t}</span>`).join('');
}

// ── DATA ──
const PRODS=[
  {id:1,name:{fr:'Robe Wax Soleil d\'Afrique',en:'African Sun Wax Dress'},price:38000,badge:'new',cat:'robes',w:'w1',desc:{fr:'Robe longue en wax ankara, coupe évasée et silhouette élégante.',en:'Long ankara wax dress, flared cut and elegant silhouette.'}},
  {id:2,name:{fr:'Ensemble Bogolan Royal',en:'Royal Bogolan Set'},price:55000,old:70000,badge:'promo',cat:'ensembles',w:'w2',desc:{fr:'Ensemble deux pièces bogolan, haut et pantalon palazzo de haute couture.',en:'Two-piece bogolan set, top and palazzo trousers, haute couture.'}},
  {id:3,name:{fr:'Blouse Adinkra Prestige',en:'Adinkra Prestige Blouse'},price:28000,badge:'',cat:'hauts',w:'w3',desc:{fr:'Blouse légère motifs adinkra, encolure V gracieuse.',en:'Lightweight adinkra-motif blouse, graceful V-neck.'}},
  {id:4,name:{fr:'Robe Kente Lumière',en:'Kente Light Dress'},price:45000,badge:'new',cat:'robes',w:'w4',desc:{fr:'Robe midi kente aux reflets dorés pour les grandes occasions.',en:'Midi kente dress with golden reflections for special occasions.'}},
  {id:5,name:{fr:'Sac Wax Signature',en:'Signature Wax Bag'},price:22000,badge:'exclu',cat:'accessoires',w:'w5',desc:{fr:'Sac en tissu wax, compartiments multiples, pièce iconique.',en:'Wax fabric bag, multiple compartments, iconic piece.'}},
  {id:6,name:{fr:'Ensemble Homme Wax Classique',en:'Classic Men\'s Wax Set'},price:48000,badge:'new',cat:'homme',w:'w6',desc:{fr:'Ensemble chemise et pantalon wax pour homme élégant.',en:'Elegant men\'s wax shirt and trousers set.'}},
  {id:7,name:{fr:'Robe Dashiki Nuit',en:'Night Dashiki Dress'},price:41000,badge:'',cat:'robes',w:'w7',desc:{fr:'Robe cocktail dashiki brodée, idéale pour les soirées.',en:'Embroidered dashiki cocktail dress, perfect for evenings.'}},
  {id:8,name:{fr:'Haut Wax Graphic',en:'Graphic Wax Top'},price:19000,badge:'',cat:'hauts',w:'w8',desc:{fr:'Top court wax graphique, style contemporain affirmé.',en:'Short graphic wax top, bold contemporary style.'}},
];

const BLOGS=[
  {cat:{fr:'Mode',en:'Fashion'},title:{fr:'Les Nana Benz : l\'héritage textile qui inspire Nanawax',en:'The Nana Benz: the textile legacy that inspires Nanawax'},date:'15 Mars 2025',w:'w1'},
  {cat:{fr:'Culture',en:'Culture'},title:{fr:'Comment nouer le gele : guide complet en images',en:'How to tie the gele: a complete photo guide'},date:'8 Mars 2025',w:'w2'},
  {cat:{fr:'Savoir-faire',en:'Craft'},title:{fr:'Du fil au tissu : le voyage du wax hollandais',en:'From thread to cloth: the journey of Dutch wax'},date:'28 Fév. 2025',w:'w3'},
];

const LOOKS=[
  {title:{fr:'Été Sahel',en:'Sahel Summer'},sub:{fr:'Collection',en:'Collection'},w:'w1',h:'680px'},
  {title:{fr:'Abidjan Nuit',en:'Abidjan Night'},sub:{fr:'Soirées',en:'Evenings'},w:'w2',h:'420px'},
  {title:{fr:'Forêt Sacrée',en:'Sacred Forest'},sub:{fr:'Nature',en:'Nature'},w:'w3',h:'520px'},
  {title:{fr:'Dakar Coucher',en:'Dakar Sunset'},sub:{fr:'Côte Ouest',en:'West Coast'},w:'w4',h:'400px'},
  {title:{fr:'Lagos Day',en:'Lagos Day'},sub:{fr:'Urbain',en:'Urban'},w:'w5',h:'600px'},
  {title:{fr:'Kigali Matin',en:'Kigali Morning'},sub:{fr:'Élégance',en:'Elegance'},w:'w6',h:'460px'},
];

// ── RENDER ──
function pCard(p){
  const name=p.name[L];const desc=p.desc[L];
  const bCls=p.badge==='new'?'badge-new':p.badge==='promo'?'badge-promo':p.badge==='exclu'?'badge-exclu':'';
  const bLbl=p.badge==='new'?(L==='fr'?'Nouveau':'New'):p.badge==='promo'?'Promo':p.badge==='exclu'?(L==='fr'?'Exclusif':'Exclusive'):'';
  const priceHtml=p.old
    ?`<span class="p-old">${p.old.toLocaleString()} FCFA</span><span class="p-new">${p.price.toLocaleString()} FCFA</span>`
    :`${p.price.toLocaleString()} FCFA`;
  const addLbl=L==='fr'?'Ajouter au panier':'Add to cart';
  const wished=isWished(p.id);
  const favLbl=wished
    ?(L==='fr'?'Retirer des favoris':'Remove from wishlist')
    :(L==='fr'?'Ajouter aux favoris':'Add to wishlist');
  return`<div class="p-card" onclick="openProd(${p.id})">
    <div class="p-img-wrap ${p.w}">
      ${bLbl?`<div class="p-badge ${bCls}">${bLbl}</div>`:''}
      <div class="p-img"><div class="p-img-label">${name.split(' ').slice(0,2).join(' ')}</div></div>
      <button class="p-fav${wished?' active':''}" type="button" data-wish-id="${p.id}" aria-label="${favLbl}" onclick="event.stopPropagation();toggleWish(${p.id})">${wished?'♥':'♡'}</button>
      <button class="p-cta" onclick="event.stopPropagation();addCart(${p.id})">${addLbl}</button>
    </div>
    <div class="p-info">
      <p class="p-sub">Nanawax</p>
      <p class="p-name">${name}</p>
      <p class="p-price">${priceHtml}</p>
    </div>
  </div>`;
}

function renderHomeProds(cat='all'){
  const el=document.getElementById('home-products');
  if(!el)return;
  const list=cat==='all'?PRODS.slice(0,8):PRODS.filter(p=>p.cat===cat);
  el.innerHTML=list.slice(0,8).map(pCard).join('');
  updateWishButtons();
}
function filterHome(cat,btn){
  document.querySelectorAll('#home-cats .cat').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');renderHomeProds(cat);
}
function renderBoutiqueProds(cat='all'){
  const el=document.getElementById('boutique-products');
  if(!el)return;
  const list=cat==='all'?PRODS:PRODS.filter(p=>p.cat===cat);
  el.innerHTML=list.map(pCard).join('');
  updateWishButtons();
}
function filterBoutique(cat,btn){
  document.querySelectorAll('#boutique-cats .cat').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');renderBoutiqueProds(cat);
}
function renderBlog(){
  const el=document.getElementById('blog-grid');if(!el)return;
  el.innerHTML=BLOGS.map((b,i)=>`
    <div class="blog-card ${i===0?'blog-main':'blog-side'}">
      <div class="blog-img-box ${b.w}" style="min-height:${i===0?'280px':'180px'}">
        <div class="blog-img-inner"><div class="blog-img-text">${b.cat[L]}</div></div>
      </div>
      <p class="blog-cat2">${b.cat[L]}</p>
      <h3 class="blog-title2">${b.title[L]}</h3>
      <p class="blog-meta2">${b.date} · Nanawax Journal</p>
    </div>`).join('');
}
function renderLookbook(){
  const el=document.getElementById('lb-grid');if(!el)return;
  el.innerHTML=LOOKS.map(l=>`
    <div class="look-card">
      <div class="look-img ${l.w}" style="height:${l.h}">
        <div style="font-family:'Playfair Display',serif;font-style:italic;font-size:1.1rem;color:rgba(78,55,28,.25)">${l.title[L]}</div>
      </div>
      <div class="look-cap">
        <p class="look-cap-tag">${l.sub[L]}</p>
        <p class="look-cap-title">${l.title[L]}</p>
      </div>
    </div>`).join('');
}

// ── PRODUCT DETAIL ──
let curProd=null;
function openProd(id){
  curProd=PRODS.find(p=>p.id===id);if(!curProd)return;
  document.getElementById('bc-name').textContent=curProd.name[L];
  document.getElementById('pd-name').textContent=curProd.name[L];
  document.getElementById('pd-price').textContent=curProd.price.toLocaleString()+' FCFA';
  const oldEl=document.getElementById('pd-old');
  oldEl.textContent=curProd.old?(curProd.old.toLocaleString()+' FCFA'):'';
  document.getElementById('pd-desc').textContent=curProd.desc[L];
  const main=document.getElementById('pd-main-img');
  main.className=`pd-main ${curProd.w}`;
  main.innerHTML=`<div style="font-family:'Playfair Display',serif;font-style:italic;font-size:1.4rem;color:rgba(78,55,28,.25)">${curProd.name[L].split(' ').slice(0,2).join(' ')}</div>`;
  const thumbs=document.getElementById('pd-thumbs');
  thumbs.innerHTML=['Vue 1','Vue 2','Vue 3'].map((t,i)=>`
    <div class="pd-thumb ${curProd.w} ${i===0?'active':''}" onclick="selThumb(this)">
      <span>${t}</span></div>`).join('');
  go('product');
}
function selThumb(el){document.querySelectorAll('.pd-thumb').forEach(t=>t.classList.remove('active'));el.classList.add('active')}
function selSz(el){document.querySelectorAll('.sz:not(.out)').forEach(b=>b.classList.remove('active'));el.classList.add('active')}
function addCurrent(){
  if(!curProd)return;
  const sz=document.querySelector('.sz.active');
  addCartItem(curProd,sz?sz.textContent:'M');
}

// ── WISHLIST ──
const WISH_KEY='nw_wish';
let WISH=new Set();

function loadWish(){
  try{
    const raw=localStorage.getItem(WISH_KEY);
    const arr=raw?JSON.parse(raw):[];
    WISH=new Set((Array.isArray(arr)?arr:[]).map(Number).filter(n=>Number.isFinite(n)));
  }catch{WISH=new Set()}
}
function saveWish(){
  try{localStorage.setItem(WISH_KEY,JSON.stringify([...WISH]));}catch{}
}
function isWished(id){return WISH.has(Number(id))}
function updateWishCount(){
  const el=document.getElementById('wish-count');
  if(!el)return;
  const n=WISH.size;
  el.textContent=String(n);
  el.style.display=n?'flex':'none';
}
function updateWishButtons(){
  document.querySelectorAll('[data-wish-id]').forEach(btn=>{
    const id=Number(btn.getAttribute('data-wish-id'));
    const on=WISH.has(id);
    btn.classList.toggle('active',on);
    btn.textContent=on?'♥':'♡';
    btn.setAttribute('aria-label',
      on?(L==='fr'?'Retirer des favoris':'Remove from wishlist'):(L==='fr'?'Ajouter aux favoris':'Add to wishlist'));
  });
}
function toggleWish(id){
  const pid=Number(id);
  if(WISH.has(pid))WISH.delete(pid);else WISH.add(pid);
  saveWish();
  updateWishCount();
  updateWishButtons();
  if(document.getElementById('wish-drawer')?.classList.contains('open'))renderWish();
  const p=PRODS.find(x=>x.id===pid);
  if(p)showToast(WISH.has(pid)
    ?`"${p.name[L]}" ${L==='fr'?'ajouté aux favoris ✦':'added to wishlist ✦'}`
    :`"${p.name[L]}" ${L==='fr'?'retiré des favoris ✦':'removed from wishlist ✦'}`);
}
function toggleWishDrawer(){
  const d=document.getElementById('wish-drawer');
  const bg=document.getElementById('wish-bg');
  if(!d||!bg)return;
  const opening=!d.classList.contains('open');
  d.classList.toggle('open');
  bg.classList.toggle('open');
  if(opening)renderWish();
}
function openWishItem(id){
  toggleWishDrawer();
  openProd(Number(id));
}
function renderWish(){
  const body=document.getElementById('wish-body');
  if(!body)return;
  const ids=[...WISH].map(Number).filter(n=>Number.isFinite(n));
  const items=ids.map(id=>PRODS.find(p=>p.id===id)).filter(Boolean);
  if(!items.length){
    body.innerHTML=`<p class="cart-empty-msg">${L==='fr'?"Vous n'avez pas encore de favoris":"You don't have favorites yet"}</p>`;
    return;
  }
  body.innerHTML=items.map(p=>`
    <div class="wish-item">
      <div class="wish-img ${p.w}"><span>${p.name[L].split(' ')[0]}</span></div>
      <div class="wish-info">
        <p class="wish-name">${p.name[L]}</p>
        <p class="wish-price">${p.price.toLocaleString()} FCFA</p>
        <div class="wish-actions">
          <button class="wish-open" type="button" onclick="openWishItem(${p.id})">${L==='fr'?'Voir':'View'}</button>
          <button class="wish-rm" type="button" onclick="toggleWish(${p.id})">${L==='fr'?'Supprimer':'Remove'}</button>
        </div>
      </div>
    </div>`).join('');
}

// ── SEARCH ──
let lastSearchQuery='';
function openSearch(){
  document.getElementById('search-modal')?.classList.add('open');
  document.getElementById('search-bg')?.classList.add('open');
  const input=document.getElementById('search-input');
  if(input){
    input.value=lastSearchQuery;
    input.focus();
    input.select();
  }
  renderSearchResults(lastSearchQuery);
}
function closeSearch(){
  document.getElementById('search-modal')?.classList.remove('open');
  document.getElementById('search-bg')?.classList.remove('open');
}
function onSearchInput(v){
  lastSearchQuery=String(v||'');
  renderSearchResults(lastSearchQuery);
}
function renderSearchResults(q){
  const out=document.getElementById('search-results');
  if(!out)return;
  const query=String(q||'').trim().toLowerCase();
  const list=query
    ?PRODS.filter(p=>{
      const name=p.name[L].toLowerCase();
      const cat=p.cat.toLowerCase();
      return name.includes(query)||cat.includes(query);
    })
    :PRODS.slice(0,8);
  if(!list.length){
    out.innerHTML=`<div class="sr-empty">${L==='fr'?'Aucun résultat':'No results'}</div>`;
    return;
  }
  out.innerHTML=list.slice(0,10).map(p=>`
    <div class="sr-item" onclick="openSearchItem(${p.id})">
      <div>
        <div class="sr-name">${p.name[L]}</div>
        <div class="sr-meta">${L==='fr'?'Nanawax':'Nanawax'} · ${p.cat}</div>
      </div>
      <div class="sr-meta">${p.price.toLocaleString()} FCFA</div>
    </div>`).join('');
}
function openSearchItem(id){
  closeSearch();
  openProd(Number(id));
}

// ── CART ──
let cart=[];
function addCart(id){const p=PRODS.find(x=>x.id===id);if(p)addCartItem(p,'M')}
function addCartItem(p,sz){
  const ex=cart.find(i=>i.id===p.id&&i.sz===sz);
  ex?ex.qty++:cart.push({...p,sz,qty:1});
  updateCart();
  showToast(`"${p.name[L]}" ${T.addedCart[L]}`);
}
function removeCart(id,sz){cart=cart.filter(i=>!(i.id===id&&i.sz===sz));updateCart()}
function updateCart(){
  const count=cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById('cart-count').textContent=count;
  const body=document.getElementById('cart-body');
  const foot=document.getElementById('cart-foot');
  if(!cart.length){
    body.innerHTML=`<p class="cart-empty-msg">${T['cd-empty'][L]}</p>`;
    foot.style.display='none';return;
  }
  foot.style.display='block';
  body.innerHTML=cart.map(i=>`
    <div class="ci">
      <div class="ci-img ${i.w}"><span>${i.name[L].split(' ')[0]}</span></div>
      <div class="ci-info">
        <p class="ci-name">${i.name[L]}</p>
        <p class="ci-sz">${L==='fr'?'Taille':'Size'}: ${i.sz} · ${L==='fr'?'Qté':'Qty'}: ${i.qty}</p>
        <p class="ci-price">${(i.price*i.qty).toLocaleString()} FCFA</p>
        <button class="ci-rm" onclick="removeCart(${i.id},'${i.sz}')">${L==='fr'?'Supprimer':'Remove'}</button>
      </div>
    </div>`).join('');
  const tot=cart.reduce((s,i)=>s+i.price*i.qty,0);
  document.getElementById('cd-total').textContent=tot.toLocaleString()+' FCFA';
}
function toggleCart(){
  document.getElementById('cart-drawer').classList.toggle('open');
  document.getElementById('cart-bg').classList.toggle('open');
}
function goCheckout(){toggleCart();go('checkout')}
function renderCheckout(){
  const el=document.getElementById('co-items');if(!el)return;
  const tot=cart.reduce((s,i)=>s+i.price*i.qty,0);
  el.innerHTML=cart.map(i=>`<div class="o-item"><span>${i.name[L]} (${i.sz}) ×${i.qty}</span><span>${(i.price*i.qty).toLocaleString()} FCFA</span></div>`).join('');
  document.getElementById('co-subtotal').textContent=tot.toLocaleString()+' FCFA';
  document.getElementById('co-total').textContent=tot.toLocaleString()+' FCFA';
}
function confirmOrder(){
  cart=[];updateCart();
  showToast(T.orderConfirm[L]);
  setTimeout(()=>go('home'),2000);
}

// ── TOAST ──
function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3200);
}

// ── PAGE NAV ──
function go(page){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
  const nl=document.getElementById('nl-'+page);if(nl)nl.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  if(page==='boutique')renderBoutiqueProds();
  if(page==='blog')renderBlog();
  if(page==='lookbook')renderLookbook();
  if(page==='checkout')renderCheckout();
}

// ── HERO SHOWCASE ──
const HSC_PRODS=[0,1,3,6]; // indices into PRODS
let hscIdx=0,hscTimer=null;

function buildShowcase(){
  const track=document.getElementById('hsc-track');
  const dots=document.getElementById('hsc-dots');
  if(!track||!dots)return;
  const items=HSC_PRODS.map(i=>PRODS[i]);
  document.getElementById('hsc-tot').textContent=String(items.length).padStart(2,'0');

  track.innerHTML=items.map((p,i)=>{
    const nm=p.name[L];
    const mat=p.cat==='robes'?(L==='fr'?'Wax Ankara':'Ankara Wax'):
              p.cat==='ensembles'?(L==='fr'?'Bogolan Premium':'Premium Bogolan'):
              p.cat==='hauts'?(L==='fr'?'Adinkra Coton':'Adinkra Cotton'):'Wax Kente';
    const bdgCls=p.badge==='new'?'':'promo';
    const bdgTxt=p.badge==='new'?(L==='fr'?'Nouveau':'New'):p.badge==='promo'?'Promo':(L==='fr'?'Exclusif':'Exclusive');
    const addTxt=L==='fr'?'Ajouter':'Add to cart';
    const priceHtml=p.old
      ?`<span class="hsc-price-old">${p.old.toLocaleString()}</span>${p.price.toLocaleString()} FCFA`
      :`${p.price.toLocaleString()} FCFA`;
    return`<div class="hsc-slide" onclick="openProd(${p.id})">
      <div class="hsc-slide-bg ${p.w}"></div>
      <div class="hsc-card">
        ${p.badge?`<div class="hsc-badge ${bdgCls}">${bdgTxt}</div>`:''}
        <p class="hsc-name">${nm}</p>
        <p class="hsc-mat">${mat}</p>
        <div class="hsc-row">
          <div class="hsc-price">${priceHtml}</div>
          <button class="hsc-btn" onclick="event.stopPropagation();addCart(${p.id})">
            <span>${addTxt}</span>
          </button>
        </div>
      </div>
    </div>`;
  }).join('');

  dots.innerHTML=items.map((_,i)=>
    `<button class="hsc-dot${i===0?' active':''}" onclick="hscGo(${i})"></button>`
  ).join('');

  hscGo(0);
  startHscAuto();
}

function hscGo(idx){
  const items=HSC_PRODS.length;
  hscIdx=(idx+items)%items;
  const track=document.getElementById('hsc-track');
  if(track)track.style.transform=`translateX(-${hscIdx*100}%)`;
  document.getElementById('hsc-cur').textContent=String(hscIdx+1).padStart(2,'0');
  document.querySelectorAll('.hsc-dot').forEach((d,i)=>d.classList.toggle('active',i===hscIdx));
}
function hscMove(dir){hscGo(hscIdx+dir);restartHscAuto()}
function startHscAuto(){
  if(hscTimer)clearInterval(hscTimer);
  hscTimer=setInterval(()=>hscGo(hscIdx+1),4200);
}
function restartHscAuto(){clearInterval(hscTimer);startHscAuto()}

// ── INIT ──
loadWish();
updateWishCount();
buildRibbon();
renderHomeProds();
buildShowcase();
updateWishButtons();
document.addEventListener('keydown',e=>{
  if(e.key!=='Escape')return;
  closeSearch();
  const wish=document.getElementById('wish-drawer');
  if(wish?.classList.contains('open'))toggleWishDrawer();
  const cart=document.getElementById('cart-drawer');
  if(cart?.classList.contains('open'))toggleCart();
});

