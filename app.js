// ----------------Retos Slider--------------

const slider = document.querySelector('.slider');
const arrowLeft = document.querySelector('#left-arrow')
const arrowRight = document.querySelector('#right-arrow')


arrowRight.addEventListener('click', ()=> {
    slider.scrollLeft += slider.offsetWidth
})

arrowLeft.addEventListener('click', ()=> {
    slider.scrollLeft -= slider.offsetWidth
})