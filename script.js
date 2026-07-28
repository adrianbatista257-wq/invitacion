document.getElementById('btn').onclick=()=>{
document.getElementById('msg').classList.remove('hidden');
document.getElementById('btn').style.display='none';
window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'});
};