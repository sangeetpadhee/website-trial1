const pol = document.querySelector(".menubar");

function menu(){
  pol.style.display="block";
}

window.addEventListener('mouseup',function(event){
  if(event.target != pol && event.target.parentNode != pol){
      pol.style.display = 'none';
  }
});  