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

let popfive=[
  {Name :"Maruti Suzuki Alto K10", price:"3.9 - 5.9 Lakh (Ex-Show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/127563/alto-k10-exterior-right-front-three-quarter-58.jpeg?isig=0&q=80"},
  {Name :"Maruti Suzuki Alto", price:"3.5 - 5.1 Lakh (Ex-Show)", img:"https://imgd.aeplcdn.com/1280x720/cw/ec/39013/Maruti-Suzuki-Alto-Right-Front-Three-Quarter-154833.jpg?wm=0&q=80"},
  {Name :"Maruti Suzuki S-Presso", price:"4.2 - 6.1Lakh (Ex-Show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/126463/s-presso-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"},
  {Name:"Renault Kwid", price:"4.08 - 5.31 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/141125/kwid-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80" }
  ]
let popten=[
  {Name :"Maruti Suzuki Swift", price:"6-8 - 8 Lakh (Ex-Show)", img:"https://imgd.aeplcdn.com/1280x720/n/cw/ec/54399/swift-exterior-right-front-three-quarter-64.jpeg?isig=0&q=80"},
  {Name :"Maruti Suzuki Dzire", price:"6.5 - 9.4 Lakh (Ex-Show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/45691/dzire-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"},
  {Name :"Maruti Suzuki Brezza", price:"8.29 - 13.9 Lakh (Ex-Show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/107543/brezza-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80"},
  {Name:"Tata Nexon", price:"8.1-15 Lakh (Ex-show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80" }
]
let popfifteen=[
  {Name:"Honda City", price:"11.16 - 14.96 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/134287/city-exterior-right-front-three-quarter-76.jpeg?isig=0&q=80" },
  {Name:"Skoda Slavia", price:"11.53 - 19.13 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/144999/slavia-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80" },
  {Name :"Maruti Suzuki Grand Vitara", price:"10.7 - 19.8 Lakh (Ex-Show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/123185/grand-vitara-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80"},
  {Name:"Hyundai Creta", price:"10.16 - 17.71 lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/106815/creta-exterior-right-front-three-quarter-4.png?isig=0&q=80" }
]
let popthirty=[
  {Name:"Tata Harrier", price:"15.4-26.4 Lakh (Ex-show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/139139/harrier-facelift-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80" },
  {Name:"Tata Safari", price:"16.1-27.3 Lakh (Ex-show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/138895/safari-facelift-exterior-right-front-three-quarter-39.jpeg?isig=0&q=80" },
  {Name:"Toyota Innova Crysta", price:"16.52 - 25.41 lakhs", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-2.png?isig=0&q=80"},
  {Name:"Toyota Innova Hycross", price:"19.77 - 30.68 lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/115025/innova-hycross-exterior-right-front-three-quarter-73.jpeg?isig=0&q=80"}
  ]
let popabove=[
  {Name:"Toyota Fortuner Legender", price:"30.34 - 38.50 lakhs", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/137767/fortuner-legender-exterior-right-front-three-quarter-3.png?isig=0&q=80"},
  {Name:"Toyota Land Cruiser", price:"1.47 crore", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/139739/land-cruiser-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80"},
  {Name:"Skoda Kodiaq", price:"38.50 - 41.99 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/49051/kodiaq-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80" },
  {Name:"Jeep Wrangler", price:"53.90 - 57.90 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/54437/wrangler-exterior-right-front-three-quarter-52.jpeg?isig=0&q=80" }
]



const bodylist1 = document.querySelector(".bypricecardetail1");
const bodyshowInHtml1 = popfive.map((project, index)=>{
    return`
    <div class="bycarpricedetailitem"> 
    <div class="imgsec" style="background-image: url(${project.img});"></div>
    <span id="namesec">${project.Name}</span>
    <span id="pricesec">${project.price}</span>
    </div>
    `
})
.join("");

bodylist1.innerHTML= bodyshowInHtml1;


function fivelk(){
  const bodylist = document.querySelector(".bypricecardetail1");
  const bodyshowInHtml = popfive.map((project, index)=>{
      return`
      <div class="bycarpricedetailitem"> 
      <div class="imgsec" style="background-image: url(${project.img});"></div>
      <span id="namesec">${project.Name}</span>
      <span id="pricesec">${project.price}</span>
      </div>
      `
  })
  .join("");
  
  bodylist.innerHTML= bodyshowInHtml;
  }

function tenlk(){
    const bodylist = document.querySelector(".bypricecardetail1");
    const bodyshowInHtml = popten.map((project, index)=>{
        return`
        <div class="bycarpricedetailitem"> 
        <div class="imgsec" style="background-image: url(${project.img});"></div>
        <span id="namesec">${project.Name}</span>
        <span id="pricesec">${project.price}</span>
        </div>
        `
    })
    .join("");
    
    bodylist.innerHTML= bodyshowInHtml;
}
function fifteenlk(){
  const bodylist = document.querySelector(".bypricecardetail1");
  const bodyshowInHtml = popfifteen.map((project, index)=>{
      return`
      <div class="bycarpricedetailitem"> 
      <div class="imgsec" style="background-image: url(${project.img});"></div>
      <span id="namesec">${project.Name}</span>
      <span id="pricesec">${project.price}</span>
      </div>
      `
  })
  .join("");
  
  bodylist.innerHTML= bodyshowInHtml;
  }

function thirty(){
    const bodylist = document.querySelector(".bypricecardetail1");
    const bodyshowInHtml = popthirty.map((project, index)=>{
        return`
        <div class="bycarpricedetailitem"> 
        <div class="imgsec" style="background-image: url(${project.img});"></div>
        <span id="namesec">${project.Name}</span>
        <span id="pricesec">${project.price}</span>
        </div>
        `
    })
    .join("");
    
    bodylist.innerHTML= bodyshowInHtml;
}
function aboveth(){
  const bodylist = document.querySelector(".bypricecardetail1");
  const bodyshowInHtml = popabove.map((project, index)=>{
      return`
      <div class="bycarpricedetailitem"> 
      <div class="imgsec" style="background-image: url(${project.img});"></div>
      <span id="namesec">${project.Name}</span>
      <span id="pricesec">${project.price}</span>
      </div>
      `
  })
  .join("");
  
  bodylist.innerHTML= bodyshowInHtml;
}



let suvv=[
  {Name :"Maruti Suzuki Brezza", price:"8.29 - 13.9 Lakh (Ex-Show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/107543/brezza-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80"},
  {Name :"Maruti Suzuki Grand Vitara", price:"10.7 - 19.8 Lakh (Ex-Show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/123185/grand-vitara-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80"},
  {Name :"Maruti Suzuki Jimny", price:"10.7 - 15 Lakh (Ex-Show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/45299/jimny-exterior-right-front-three-quarter-27.jpeg?isig=0&q=80"},
  {Name:"Tata Nexon", price:"8.1-15 Lakh (Ex-show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80" },
  {Name:"Tata Harrier", price:"15.4-26.4 Lakh (Ex-show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/139139/harrier-facelift-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80" },
  {Name:"Tata Safari", price:"16.1-27.3 Lakh (Ex-show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/138895/safari-facelift-exterior-right-front-three-quarter-39.jpeg?isig=0&q=80" },
  {Name:"Tata Nexon EV", price:"14.7-19.9 Lakh (Ex-show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/149123/nexon-ev-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80" },
  {Name:"Kia Sonet", price:"6.79 - 13.45 lakhs", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/141383/sonet-facelift-exterior-right-front-three-quarter-8.jpeg?isig=0&q=80"},
  {Name:"Kia Seltos", price:"9.95 - 17.65 lakhs", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/135051/seltos-exterior-right-front-three-quarter-31.jpeg?isig=0&q=80"},
  {Name:"Kia EV6", price:" 20 - 25 lakhs", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/114971/ev6-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80"},
  {Name:"Toyota Urban Cruiser", price:"8.50 - 11.35 lakhs", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/124027/urban-cruiser-hyryder-exterior-right-front-three-quarter-72.jpeg?isig=0&q=80"},
  {Name:"Toyota Fortuner Legender", price:"30.34 - 38.50 lakhs", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/137767/fortuner-legender-exterior-right-front-three-quarter-3.png?isig=0&q=80"},
  {Name:"Toyota Land Cruiser", price:"1.47 crore", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/139739/land-cruiser-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80"},
  {Name:"Toyota Fortuner", price:"42-49 lakh", img:"https://imgd.aeplcdn.com/1200x900/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-20.jpeg?isig=0&q=80"},
  {Name:"Hyundai Venue", price:"6.99 - 11.79 lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/141113/venue-exterior-right-front-three-quarter-16.jpeg?isig=0&q=80" },
  {Name:"Hyundai Creta", price:"10.16 - 17.71 lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/106815/creta-exterior-right-front-three-quarter-4.png?isig=0&q=80" },
  {Name:"Hyundai Creta N-Line", price:"10.16 - 17.71 lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/168697/creta-n-line-exterior-right-front-three-quarter-2.png?isig=0&q=80" },
  {Name:"Hyundai Tucson", price:"22.55 - 27.34 lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/106821/tucson-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80" },
  {Name:"Hyundai Kona Electric", price:"23.75 - 23.94 lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/29580/kona-electric-exterior-right-front-three-quarter-162254.jpeg?isig=0&q=80" },
  {Name:"Mahindra Scorpio-N", price:"13.60 - 24.54 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80" },
  {Name:"Mahindra Scorpio", price:"13.59 - 17.35 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-47.jpeg?isig=0&q=80" },
  {Name:"Mahindra Bolero", price:"8.17 - 9.41 lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/131179/bolero-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80" },
  {Name:"Mahindra Thar", price:"11.25 - 17.60 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/40087/thar-exterior-right-front-three-quarter-35.jpeg?isig=0&q=80" },
  {Name:"Mahindra XUV 400EV", price:"15.49 - 19.39 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/45278/xuv400-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80" },
  {Name:"Mahindra XUV300", price:"9.97 - 11.41 lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/26918/xuv300-exterior-right-front-three-quarter-148709.jpeg?isig=0&q=80" },
  {Name:"Mahindra Bolero Neo", price:"9.90 - 12.15 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/131181/bolero-neo-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80" },
  {Name:"Honda Elevate", price:"11.58 - 16.20 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/142515/elevate-exterior-right-front-three-quarter-21.jpeg?isig=0&q=80" },
  {Name:"MG Hector", price:"13.99 - 21.95 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/130583/hector-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80" },
  {Name:"MG Hector Plus", price:"17 - 22.68 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/139315/hector-plus-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80" },
  {Name:"MG ZS EV", price:"18.98 - 25.08 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/110437/zs-ev-exterior-right-front-three-quarter-69.jpeg?isig=0&q=80" },
  {Name:"MG Gloster", price:"37.50 - 43 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/129689/gloster-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80" },
  {Name:"MG Astor", price:"9.98 - 17.89 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/51940/astor-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80" },
  {Name:"Skoda Kushaq", price:"11.89 - 20.49 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/145021/kushaq-exterior-right-front-three-quarter-12.jpeg?isig=0&q=80" },
  {Name:"Skoda Kodiaq", price:"38.50 - 41.99 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/49051/kodiaq-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80" },
  {Name:"Jeep Compass", price:"18.92 - 31.72 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/47051/compass-exterior-right-front-three-quarter-74.jpeg?isig=0&q=80" },
  {Name:"Jeep Wrangler", price:"53.90 - 57.90 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/54437/wrangler-exterior-right-front-three-quarter-52.jpeg?isig=0&q=80" },
  {Name:"Jeep Grand Cherokee", price:"93.21 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/132711/grand-cherokee-exterior-right-front-three-quarter.jpeg?isig=0&q=80" },
  {Name:"Jeep Meridian", price:"30 - 34.5 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/47139/meridian-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80" },
  {Name:"Renault Kiger", price:"5.64 - 9.72 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/141857/kiger-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80" },
  {Name:"Volkswagen Taigun", price:"10.49 - 17.49 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/144689/taigun-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80" },
  {Name:"Volkswagen Tiguan", price:"33.25 - 36.95 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/53123/tiguan-exterior-right-front-three-quarter-4.jpeg?q=80" },
  {Name :"Maruti Suzuki Ertiga", price:"8.3 - 12.9Lakh (Ex-Show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/115777/ertiga-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80"},
  {Name :"Maruti Suzuki XL6", price:"11.6 - 14.5 Lakh (Ex-Show)", img:"https://media.zigcdn.com/media/model/2023/Feb/xl-6_600x400.jpg"},
  {Name :"Maruti Suzuki Invicto", price:"24.8 - 28.4 Lakh (Ex-Show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/147201/invicto-exterior-right-front-three-quarter-69.jpeg?isig=0&q=80"},
  {Name:"Kia Carnival", price:"24.95 - 33.95 lakhs", img:"https://imgd.aeplcdn.com/1280x720/n/cw/ec/41205/carnival-exterior-right-front-three-quarter-55.jpeg?isig=0&q=80"},
  {Name:"Kia Carens", price:" 10 - 15 lakhs", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/144163/carens-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80"},
  {Name:"Toyota Innova Crysta", price:"16.52 - 25.41 lakhs", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-2.png?isig=0&q=80"},
  {Name:"Toyota Innova Hycross", price:"19.77 - 30.68 lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/115025/innova-hycross-exterior-right-front-three-quarter-73.jpeg?isig=0&q=80"},
  {Name:"Toyota Rumion", price:"10.44 - 13.73 lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/105799/rumion-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80"},
  {Name:"Toyota Vellfire", price:"87.00 lakhs", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/154483/vellfire-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80"},
  {Name:"Hyundai Alcazar", price:"17.87 - 21.10 lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/142523/alcazar-exterior-right-front-three-quarter-11.jpeg?isig=0&q=80" },
  {Name:"Mahindra Marazzo", price:"14.39 - 16.80 Lakh", img:"https://imgd.aeplcdn.com/1280x720/n/cw/ec/26944/marazzo-2018-2020-exterior-right-front-three-quarter-2.jpeg?q=80" },
  {Name:"Renault Triber", price:"5.50 - 8.49 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/141119/triber-exterior-right-front-three-quarter-8.jpeg?isig=0&q=80" },
  {Name:"Citroën C5 Aircross", price:"30.00 - 32.00 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/129909/c5-aircross-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80" },
  {Name:"Citroën C3 Aircross", price:"10.00 - 15.00 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/142375/c3-aircross-exterior-right-front-three-quarter-31.jpeg?isig=0&q=80" },
  {Name :"Maruti Suzuki Dzire", price:"6.5 - 9.4 Lakh (Ex-Show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/45691/dzire-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"},
  {Name :"Maruti Suzuki Ciaz", price:"9.4 - 12.3 Lakh (Ex-Show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/48542/ciaz-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"},
  {Name:"Tata Tigor", price:"6.3-9.5 Lakh (Ex-show)", img:"https://www.carlelo.com/laravel/public/uploads/variant/3jmwW3I4EHRDwiSMe1I8LJXVKQzEBHjlrMG3lqwq.jpeg" },
  {Name:"Tata Tigor EV", price:"12.49 - 13.75 Lakh (Ex-show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/135723/tigor-ev-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80" },
  {Name:"Toyota Camry", price:"39.02 - 41.58 lakhs", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/110233/camry-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"},
  {Name:"Hyundai Aura", price:"6.39 - 9.36 lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/139133/aura-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80" },
  {Name:"Hyundai Verna", price:"9.17 - 15.12 lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/121943/verna-exterior-right-front-three-quarter-101.jpeg?isig=0&q=80" },
  {Name:"Honda City", price:"11.16 - 14.96 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/134287/city-exterior-right-front-three-quarter-76.jpeg?isig=0&q=80" },
  {Name:"Honda Amaze", price:"7.16 - 9.92 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/45951/amaze-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80" },
  {Name:"Honda City-Hybrid", price:"18.89 - 20.39 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/143275/city-hybrid-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80" },
  {Name:"Skoda Slavia", price:"11.53 - 19.13 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/144999/slavia-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80" },
  {Name:"Volkswagen Virtus", price:"9.99 - 13.92 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80" },
  {Name :"Maruti Suzuki Swift", price:"6-8 - 8 Lakh (Ex-Show)", img:"https://imgd.aeplcdn.com/1280x720/n/cw/ec/54399/swift-exterior-right-front-three-quarter-64.jpeg?isig=0&q=80"},
  {Name :"Maruti Suzuki Fronx", price:"7.51 - 13.03 Lakh (Ex-Show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80"},
  {Name :"Maruti Suzuki Baleno", price:"6.6 - 9.8 Lakh (Ex-Show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/102663/baleno-exterior-right-front-three-quarter-67.jpeg?isig=0&q=80"},
  {Name :"Maruti Suzuki Wagonr", price:" 5.5 - 7.4 Lakh (Ex-Show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/112947/wagon-r-2022-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"},
  {Name :"Maruti Suzuki Alto K10", price:"3.9 - 5.9 Lakh (Ex-Show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/127563/alto-k10-exterior-right-front-three-quarter-58.jpeg?isig=0&q=80"},
  {Name :"Maruti Suzuki Celerio", price:"5.3 - 7.1 Lakh (Ex-Show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/53695/celerio-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80"},
  {Name :"Maruti Suzuki Alto", price:"3.5 - 5.1 Lakh (Ex-Show)", img:"https://imgd.aeplcdn.com/1280x720/cw/ec/39013/Maruti-Suzuki-Alto-Right-Front-Three-Quarter-154833.jpg?wm=0&q=80"},
  {Name :"Maruti Suzuki Ignis", price:"5.8 - 8.1 Lakh (Ex-Show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/142921/ignis-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80"},
  {Name :"Maruti Suzuki S-Presso", price:"4.2 - 6.1Lakh (Ex-Show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/126463/s-presso-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"},
  {Name:"Tata Punch", price:"6-10.1 Lakh (Ex-show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/39015/punch-exterior-right-front-three-quarter-54.jpeg?isig=0&q=80" },
  {Name:"Tata Tiago", price:" 5-8.2 Lakh (Ex-show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/39345/tiago-exterior-right-front-three-quarter-27.jpeg?isig=0&q=80" },
  {Name:"Tata Tiago EV", price:" 10.2-12.1 Lakh (Ex-show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/40453/tiago-ev-exterior-right-front-three-quarter-11.jpeg?isig=0&q=80" },
  {Name:"Tata Punch EV", price:"10.99-15.5 Lakh (Ex-show)", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/148309/punch-ev-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80" },
  {Name:"Toyota Glanza", price:"7.18 - 9.10 lakhs", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/112839/glanza-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80"},
  {Name:"Hyundai i20 N-Line", price:"7.73 - 8.47 lakh", img:"https://imgd.aeplcdn.com/1280x720/n/cw/ec/158139/i20-n-line-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80" },
  {Name:"Hyundai Grand i10 Nios", price:"5.19 - 8.44 lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/136183/grand-i10-nios-exterior-right-front-three-quarter-15.jpeg?isig=0&q=80" },
  {Name:"Hyundai i20", price:"6.91 - 11.40 lakh", img:"https://imgd.aeplcdn.com/664x374/n/cw/ec/150603/i20-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80" },
  {Name:"MG Comet EV", price:"6.99 - 9.14 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/125193/comet-ev-exterior-right-side-view-23.jpeg?isig=0&q=80" },
  {Name:"Renault Kwid", price:"4.08 - 5.31 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/141125/kwid-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80" },
  {Name:"Citroën C3", price:"10.00 - 15.00 Lakh", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/103611/exterior-right-front-three-quarter-2.jpeg?isig=0&q=80" }

 
]



const ul = document.querySelector(".searchbarallcar");
  
  function displayCars(cars) {
    ul.innerHTML = ''; // Clear previous content
    cars.forEach((car) => {
      const listItem = document.createElement('div');
      listItem.classList.add('searchbarallcarlist');
      listItem.innerHTML = `
        <div class="searchbarcarimg">
          <img src="${car.img}" alt="" class="searchbarimgallcarlist">
        </div>
        <span class="searchbarnameprice">
          <span class="searchbarcarnameallcarlist" style="font-size: 17px;">${car.Name}</span>
          <span class="searchbarpriceallcarlist">${car.price}</span>
        </span>
      `;
      ul.appendChild(listItem);
    });
  }
  
  displayCars(suvv);


const searchInput = document.getElementById("search");
const choosesec = document.querySelector(".choosesection");

searchInput.addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const searchWords = searchTerm.split(" ").filter(word => word.trim() !== "");
  const filteredCars = suvv.filter(car => {
    const carNameWords = car.Name.toLowerCase().split(" ");
    return searchWords.every(word => carNameWords.some(carWord => carWord.includes(word)));
  });
  displayCars(filteredCars);
  if(searchInput.value==""){
  ul.style.height="0px";
}else{
    ul.style.height="auto"; 
    choosesec.style.marginTop="30px";
}
});