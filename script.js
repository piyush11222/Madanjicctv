// Share logic: Web Share API or fallback modal
const shareData = {
  title: 'Madan Purohit CCTV Service',
  text: 'Contact Madan Purohit for CCTV installation, repair and maintenance. Call or WhatsApp: +91 99806 08544',
  url: location.href
};

async function openShare(){
  if(navigator.share){
    try{ await navigator.share(shareData); }catch(e){}
    return;
  }
  document.getElementById('siteUrl').value = shareData.url;
  const modal = document.getElementById('shareModal');
  modal.style.display = 'flex';
}

document.getElementById('shareBtn').addEventListener('click', openShare);

// modal controls
document.getElementById('closeModal').addEventListener('click', ()=>{
  document.getElementById('shareModal').style.display = 'none';
});

// copy link
document.getElementById('copyLink').addEventListener('click', ()=>{
  const url = document.getElementById('siteUrl').value;
  navigator.clipboard.writeText(url).then(()=>{ alert('Link copied') }, ()=>{ alert('Could not copy') });
});

// whatsapp share
document.getElementById('waShare').addEventListener('click', ()=>{
  const url = encodeURIComponent(document.getElementById('siteUrl').value);
  const text = encodeURIComponent('Check out Madan Purohit CCTV Service — Call/WhatsApp: +91 99806 08544\n'+url);
  window.open('https://wa.me/?text='+text,'_blank');
});
