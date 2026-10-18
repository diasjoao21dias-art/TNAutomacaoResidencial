/* CONFIGURAÇÃO: substitua pelo link real do WhatsApp da TN antes de publicar.
   Exemplo: https://wa.me/5534999999999?text=Olá%2C%20quero%20conhecer%20as%20soluções%20da%20TN.
   Se tiver um link curto oficial wa.me/message/..., você também pode usá-lo aqui. */
const WHATSAPP_LINK = 'https://wa.me/5500000000000?text=Ol%C3%A1%2C%20quero%20conhecer%20as%20solu%C3%A7%C3%B5es%20da%20TN%20Automa%C3%A7%C3%A3o%20Residencial.';
const DEFAULT_MESSAGE = 'Olá! Conheci o site da TN Automação Residencial e gostaria de saber mais sobre as soluções.';
function whatsappUrl(message=DEFAULT_MESSAGE){
  const base = WHATSAPP_LINK.trim();
  if(base.includes('5500000000000')) return 'https://www.instagram.com/tnautomacao/';
  if(base.includes('text=')) return base.replace(/text=[^&]*/, 'text='+encodeURIComponent(message));
  return base;
}
document.querySelectorAll('.whatsapp-link').forEach(link=>{link.href=whatsappUrl();link.addEventListener('click',e=>{if(WHATSAPP_LINK.includes('5500000000000')){e.preventDefault();window.open('https://www.instagram.com/tnautomacao/','_blank','noopener');}})});
document.querySelectorAll('[data-product]').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();const product=link.dataset.product;const msg=`Olá! Tenho interesse na solução: ${product}. Pode me passar mais informações?`;window.open(whatsappUrl(msg),'_blank','noopener');}));
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));document.querySelector('#year').textContent=new Date().getFullYear();
