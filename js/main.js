(function(){
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const cfg=window.BUSINESS_CONFIG||BUSINESS_CONFIG;
  const safe=v=>v&&String(v).trim()?v:"[EDIT IN js/config.js]";
  const tel=()=>cfg.phone?`tel:${cfg.phone}`:"contact.html";
  const wa=(msg="Hello Natraj Electronics, I would like to enquire.")=>cfg.whatsapp?`https://wa.me/${cfg.whatsapp}?text=${encodeURIComponent(msg)}`:"contact.html";
  window.NE={tel,wa,cfg};
  function hydrate(){
    $$('[data-config]').forEach(el=>{el.textContent=safe(cfg[el.dataset.config]);});
    $$('[data-link="maps"]').forEach(a=>a.href=cfg.googleMapsUrl);
    $$('[data-link="call"]').forEach(a=>a.href=tel());
    $$('[data-link="whatsapp"]').forEach(a=>a.href=wa(a.dataset.message));
    $$('[data-link="email"]').forEach(a=>a.href=cfg.email?`mailto:${cfg.email}`:"contact.html");
    $$('.year').forEach(el=>el.textContent=new Date().getFullYear());
  }
  function nav(){ const b=$('.menu-toggle'), n=$('.nav-links'); if(b&&n)b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)}); const p=location.pathname.split('/').pop()||'index.html'; $$(`.nav-links a,.mobile-bottom-nav a`).forEach(a=>{if((a.getAttribute('href')||'').includes(p))a.classList.add('active')}); }
  function renderProducts(limitFeatured=false){ const grid=$('#productGrid'); if(!grid||!window.PRODUCTS)return; const search=$('#productSearch'), filters=$('#productFilters'); const cats=['All',...new Set(PRODUCTS.map(p=>p.category))]; let active='All'; if(filters)filters.innerHTML=cats.map(c=>`<button class="filter-btn${c==='All'?' active':''}" type="button" data-cat="${c}">${c}</button>`).join('');
    const draw=()=>{const q=(search?.value||'').toLowerCase(); const data=PRODUCTS.filter(p=>(!limitFeatured||p.featured)&&(active==='All'||p.category===active)&&(`${p.name} ${p.category} ${p.description}`.toLowerCase().includes(q))); grid.innerHTML=data.map(p=>`<article class="card product-card reveal"><img src="${p.image}" alt="${p.name}" loading="lazy"><p><span class="badge">${p.category}</span></p><h3>${p.name}</h3><p class="muted">${p.description}</p><p><strong>${p.price}</strong></p><p class="muted">${p.availability}</p><div class="action-row"><a class="btn btn-dark" href="${wa('I want to enquire about '+p.name)}">WhatsApp</a><a class="btn btn-secondary" href="contact.html">Enquire</a></div></article>`).join('')||'<p class="muted">No matching products. Edit js/products.js to add more items.</p>'; reveal(); };
    filters?.addEventListener('click',e=>{if(e.target.matches('.filter-btn')){active=e.target.dataset.cat;$$('.filter-btn',filters).forEach(x=>x.classList.remove('active'));e.target.classList.add('active');draw();}}); search?.addEventListener('input',draw); draw(); }
  function renderServices(){ $$("[data-services]").forEach(grid=>{grid.innerHTML=(window.SERVICES||[]).map(s=>`<article class="card reveal"><div class="badge">${s.icon}</div><h3>${s.title}</h3><p class="muted">${s.description}</p></article>`).join('')}); const t=$('#trustGrid'); if(t)t.innerHTML=(window.TRUST_ITEMS||[]).map(x=>`<div class="card"><strong>${x}</strong><p class="muted">Editable trust point. Add proof or exact details when available.</p></div>`).join(''); const b=$('#b2bItems'); if(b)b.innerHTML=(window.B2B_ITEMS||[]).map(x=>`<span class="badge">${x}</span>`).join(''); }
  function contactForms(){ $$('[data-enquiry-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault(); const d=Object.fromEntries(new FormData(form)); const msg=`B2B Enquiry for Natraj Electronics\nName: ${d.name||''}\nCompany: ${d.company||''}\nPhone: ${d.phone||''}\nEmail: ${d.email||''}\nRequirement: ${d.requirement||''}\nQuantity: ${d.quantity||''}\nMessage: ${d.message||''}`; location.href=cfg.whatsapp?wa(msg):(cfg.email?`mailto:${cfg.email}?subject=B2B Enquiry&body=${encodeURIComponent(msg)}`:`mailto:?subject=B2B Enquiry&body=${encodeURIComponent(msg)}`); })); }
  function reveal(){ const els=$$('.reveal'); if(!('IntersectionObserver'in window)){els.forEach(e=>e.classList.add('visible'));return;} const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12}); els.forEach(e=>io.observe(e)); }
  document.addEventListener('DOMContentLoaded',()=>{hydrate();nav();renderProducts(document.body.dataset.page==='home');renderServices();contactForms();reveal();});
})();
