const intro = document.querySelector('.intro')
const video = intro.querySelector('video')
const text = intro.querySelector('h1')

const section = document.querySelector('.section')
const end = section.querySelector('h2')

const controller = new ScrollMagic.Controller()

let scene = new ScrollMagic.Scene({
  duration: 9000,
  triggerElement: intro,
  triggerHook: 0,
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller)

const textAnim = TweenMax.fromTo(text, 3, { opacity: 0 }, { opacity: 1 })
// let scene2 = ScrollMagic.Scene({
//   duration: 3000,
//   triggerElement: intro,
//   triggerHook: 0,
// })
//   .setTween(textAnim)
//   .addTo(controller)

let accelAmount = 0.1
let scrollPos = 0
let frameNumber = 0
let playbackConst = 500
let delay = 0

scene.on('update', (e) => {
  scrollPos = e.scrollPos / 1000
  // video.currentTime = scrollPos
})

// function scrollPlay() {
//   // delay += (scrollPos - delay) * accelAmount
//   video.currentTime = scrollPos
//   window.requestAnimationFrame(scrollPlay)
// }
// window.requestAnimationFrame(scrollPlay)
