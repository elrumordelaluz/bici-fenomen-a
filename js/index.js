const introButton = document.querySelector('.intro-btn')

introButton.addEventListener('click', () => {
  const pin = document.querySelector('#first-section')
  pin.scrollIntoView({ behavior: 'smooth' })
})

const controller = new ScrollMagic.Controller()
const vectorialTL = new TimelineMax()
vectorialTL.fromTo(
  '.boceto-vectorial',
  1,
  { opacity: 1 },
  { opacity: 0.1, ease: Linear.easeNone },
  '+=1'
)
vectorialTL.fromTo(
  '.texts__vectorial',
  1.5,
  { opacity: 0 },
  { opacity: 1, ease: Linear.easeNone },
  '+=.1'
)

const sinusoidalTL = new TimelineMax()
sinusoidalTL.fromTo(
  '.boceto-sinusoidal',
  1,
  { opacity: 1 },
  { opacity: 0.1, ease: Linear.easeNone },
  '+=1'
)
sinusoidalTL.fromTo(
  '.texts__sinusoidal',
  1.5,
  { opacity: 0 },
  { opacity: 1, ease: Linear.easeNone },
  '+=.1'
)

const derivadaTL = new TimelineMax()
derivadaTL.fromTo(
  '.boceto-derivada',
  1,
  { opacity: 1 },
  { opacity: 0.1, ease: Linear.easeNone },
  '+=1'
)
derivadaTL.fromTo(
  '.texts__derivada',
  1.5,
  { opacity: 0 },
  { opacity: 1, ease: Linear.easeNone },
  '+=.1'
)

new ScrollMagic.Scene({
  triggerElement: '#pinVectorial',
  triggerHook: 'onLeave',
  duration: '100%',
})
  .setPin('#pinVectorial')
  .setTween(vectorialTL)
  .addTo(controller)

new ScrollMagic.Scene({
  triggerElement: '#pinSinusoidal',
  triggerHook: 'onLeave',
  duration: '100%',
})
  .setPin('#pinSinusoidal')
  .setTween(sinusoidalTL)
  .addTo(controller)

new ScrollMagic.Scene({
  triggerElement: '#pinDerivada',
  triggerHook: 'onLeave',
  duration: '100%',
})
  .setPin('#pinDerivada')
  .setTween(derivadaTL)
  .addTo(controller)

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const params = Object.fromEntries(urlSearchParams.entries())

    if (
      params.licenciado ||
      params.licenciao ||
      params.lic ||
      params.digamelicenciado ||
      params.auguri ||
      params.felizcumple
    ) {
      confetti.start()
      // setTimeout(() => confetti.stop(), 8500)
    }
  },
  false
)

// const canvas = document.getElementById('canvas')
// const context = canvas.getContext('2d')

// const intial = 1
// const frameCount = 163
// const currentFrame = (index) =>
//   `https://res.cloudinary.com/elrumordelaluz/image/upload/v1631799117/fenomenas.bike/vectorial-${index.toString()}.jpg`

// const fenomena = {
//   frame: intial,
// }

// const img = new Image()
// img.src = currentFrame(intial)
// canvas.width = 430
// canvas.height = 322
// img.onload = function () {
//   context.drawImage(img, 0, 0)
// }

// const canvasTL = new TimelineMax()

// canvasTL.to(fenomena, {
//   frame: frameCount - 1,
//   snap: 'frame',
//   onUpdate: render,
// })

// new ScrollMagic.Scene({
//   triggerElement: '#pinCanvas',
//   triggerHook: 'onLeave',
//   duration: '300%',
// })
//   .setPin('#pinCanvas')
//   .setTween(canvasTL)
//   .addTo(controller)

// function render() {
//   img.src = currentFrame(fenomena.frame)
//   context.drawImage(img, 0, 0)
// }

// const preloadImages = () => {
//   for (let i = 1; i < frameCount; i++) {
//     const img = new Image()
//     img.src = currentFrame(i)
//   }

//   gsap.fromTo(
//     '.stop-motion-wrapper',
//     1,
//     { display: 'none' },
//     { display: 'flex' }
//   )
// }

// preloadImages()
