import * as bootstrap from './libs/bootstrap.bundle'

// // get carousel
let carousel = document.getElementById('carousel-trends')

// define carousel config
new bootstrap.Carousel(carousel, {
    interval: 4000,
    keyboard: false
})
