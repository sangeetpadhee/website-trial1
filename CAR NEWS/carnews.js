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

let news=[
  {text:"Volkswagen Virtus GT Plus Sport revealed", img:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240322025043_VW%20Virtus%20Resized%20and%20Watermarked.001.jpeg&w=215&h=142&q=75&c=1"},
  {text:"BMW Vision Neue Klasse X electric SUV concept revealed", img:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240321030417_bmw_vision_neue_klase_x_front.jpg&w=215&h=142&q=75&c=1"},
  {text:"Citroen eC3 scores 0-star Global NCAP safety rating", img:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240321021328_Citroen%20e_C3%20_%20frontal%20impact.jpg&w=215&h=142&q=75&c=1"},
  {text:"Volkswagen Taigun GT Plus Sport, GT Line break cover", img:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240321124826_Taigun%20GT%20Plus%20Sport%20_1_.jpg&w=215&h=142&q=75&c=1"},
  {text:"Hyundai Ioniq 5 to get an off-road focused derivative soon", img:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240320050213_Hyundai_Ionjiq_5_XRT.jpg&w=215&h=142&q=75&c=1"},
  {text:"Suzuki trademarks Escudo, Torqnado nameplates in India", img:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240320020343_Suzuki%20Trademarks%20Web.003%20_1_.jpeg&w=215&h=142&q=75&c=1"},
  {text:"MG Cyberster electric sportscar makes India debut", img:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240320015139_MG%20Cyberster%20.001_1.jpg&w=215&h=142&q=75&c=1"},
  {text:"BMW 620d M Sport Signature launched at Rs 78.90 lakh", img:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240320104555_20230911020907_6_gt_m_sport_signature.jpg&w=215&h=142&q=75&c=1"},
  {text:"New Maruti Dzire spy shots show first in segment sunroof", img:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240320112758_Maruti_Dzire_front_spied.jpeg&w=215&h=142&q=75&c=1"},
  {text:"MG lines up all-new EV MPV, SUV for India", img:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240318054528_Baojun%20Web.004.jpeg&w=215&h=142&q=75&c=1"},
  {text:"Maruti Fronx-based Toyota Taisor to debut on April 3", img:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240315024146_Image%20Tag%20Added%20Toyota.001.jpeg&w=215&h=142&q=75&c=1"},
  {text:"Kia Clavis SUV India testing begins", img:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240314053857_Untitled%20design%20_%202024_03_14T173747.112.jpg&w=215&h=142&q=75&c=1"},
  {text:"MG trademarks Excelor EV nameplate in India", img:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240314025949_MG%20Logo%20Inset.001.jpeg&w=215&h=142&q=75&c=1"},
  {text:"Tata Punch facelift spied for the first time", img:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240314120627_1.jpg&w=215&h=142&q=75&c=1"},
  {text:"Honda exports nearly 7,000 Elevate SUVs to Japan", img:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240313053515_Honda_elevate_WR_V.jpg&w=215&h=142&q=75&c=1"},
  {text:"Skoda Kushaq, Slavia facelifts to get ADAS", img:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240313122722_Kushaq%20and%20Slavia%20Collage.001.jpeg&w=215&h=142&q=75&c=1"},
  {text:"BYD Atto 3 gets larger touchscreen, new colours overseas", img:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240313062245_1.jpg&w=215&h=142&q=75&c=1"},
  {text:"Hyundai i20 N Line, Venue N Line have clocked over 22,000...", img:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240312063546_Untitled%20design%20_%202024_03_12T181700.211.jpg&w=215&h=142&q=75&c=1"},
  {text:"Porsche 911 hybrid confirmed for 2024 debut", img:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240312054442_Porsche_911_S_T.jpg&w=215&h=142&q=75&c=1"},
]

const bodylist = document.querySelector(".newslist");
const bodyshowInHtml = news.map((project, index)=>{
    return`
    <div class="outerlayer">
    <div class="outerimg" style="background-image: url(${project.img});"></div>
    <span class="newsdesc">${project.text}</span>
</div>
    `
})
.join("");

bodylist.innerHTML= bodyshowInHtml;