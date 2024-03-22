const pol = document.querySelector(".menubar");

function menu(){
  pol.style.display="block";
}

window.addEventListener('mouseup',function(event){
  if(event.target != pol && event.target.parentNode != pol){
      pol.style.display = 'none';
  }
}); 

const sm = document.querySelector(".socialmedia");

function user(){
  sm.style.display="block";
}

window.addEventListener('mouseup',function(event){
  if(event.target != sm && event.target.parentNode != sm){
    sm.style.display = 'none';
  }
}); 