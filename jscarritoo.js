/*
var swiper = new Swiper(".mySwiper-1",{
    sliderPerView:1,
    spaceBetween:30,
    loop:true,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevtEl:".swiper-button-prev",
    }

});

var swiper = new Swiper(".mySwiper-2",{
    sliderPerView:3,
    spaceBetween:20,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation:{
        nextEl:".swiper-button-next",
        prevtEl:".swiper-button-prev",
    },
    breackpoints:{
        0:{
            sliderPerView:1,
        },
        520:{
            sliderPerView:2,
        },
        950:{
            sliderPerView:3,
        }
    }
});

let tabInputs= document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input){

    input.addEventListener('change', function(){
        let id=input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    })
});

*/

/*
const aplicacion=document.querySelector()

const url = 'https://jsonplaceholder.typecode.com/users'

fetch(url)
.then(res => res.json())
.then(data => {
    data.forEach(usuario=> {
        console.log(usuario.name)
        const p = document.createElement('p')
        p.innerHTML = usuario.name
        aplicacion.appendChild(p)
    })
    console.log(data)
})
.catch(err => console.log(err))


*/

const aplicacion=document.querySelector('.container')

const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then(res => res.json())
.then(data => {
    data.forEach(usuario=> {
        console.log(usuario.name)
        const p = document.createElement('p')
        p.innerHTML = usuario.name
        aplicacion.appendChild(p)
    })
    console.log(data)
})
.catch(err => console.log(err))