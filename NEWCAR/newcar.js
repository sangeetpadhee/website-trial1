const uppercarlist = Array.from(document.getElementsByClassName('allcarlist'));

let uppercarname=[
    "Tata nexon",
    "Maruti Suzuki Brezza",
    "ford figo",
    "Tata Harrier",
    "hyundai creta",
    "hyundai i20",
    "hyundai santro",
    "tata safari",
    "maruti swift",
    "renault duster",
    "kia seltos",
    "toyota hyryder",
    "tata tiago",
    "toyota fortuner",
    "hyundai kona",
    "toyota innova",
    "kia seltos",
    "toyota hyryder"
]

uppercarlist.forEach((element, i)=>{ 
    element.getElementsByClassName("carnameallcarlist")[0].innerText = uppercarname[i]; 
})