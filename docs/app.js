// ----------------Retos Slider--------------

const slider = document.querySelector('.slider');
const arrowLeft = document.querySelector('#left-arrow')
const arrowRight = document.querySelector('#right-arrow')

// ----Leer en que archivo HTML se encuentra----
function filename(){
    let rutaAbsoluta = self.location.href;   
    let posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
    let rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
    return rutaRelativa;  
}
console.log(filename())
if (filename == 'index.html#' || 'index.html#my-projects'){

    arrowRight.addEventListener('click', ()=> {
        slider.scrollLeft += slider.offsetWidth
    })
    
    arrowLeft.addEventListener('click', ()=> {
        slider.scrollLeft -= slider.offsetWidth
    })
}

// ----------------Menú desplegable--------------

const burger = document.querySelector('.burger')
const close = document.querySelector('#close')
const header = document.querySelector('#header')
const main = document.querySelector('#main')
const footer = document.querySelector('#footer')
const menuElem = document.querySelectorAll('.nav-link')

burger.addEventListener('click', () => {
    header.classList.add('visible')
    main.classList.add('visible')
    footer.classList.add('visible')
})
close.addEventListener('click', () => {
    header.classList.remove('visible')
    main.classList.remove('visible')
    footer.classList.remove('visible')
})

for (let i=0; i<menuElem.length; i++) {
    menuElem[i].addEventListener('click', () => {
        console.log('click')
        header.classList.remove('visible')
        main.classList.remove('visible')
        footer.classList.remove('visible')
    })
}


