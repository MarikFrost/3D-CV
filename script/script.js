
document.addEventListener('click', () => {
    console.log('5')
})

new Swiper('.swiper', {
    mousewheel: {
        eventsTarget: '.swiper',
    },
    direction: 'vertical',
    effect: 'cube',
    cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    parallax:true,
    speed: 500,
})