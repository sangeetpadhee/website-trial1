
function menu(){
    const hideMe = document.querySelector(".menu");
    hideMe.style.display = 'block';
}

window.onload = function(){
    
    document.onclick = function(e){
       var hideMe = document.querySelector(".menu");
       if(e.target.id !== 'hideMe'){
          hideMe.style.display = 'none';
       }
    };
 };

 var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);