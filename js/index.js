const introButton = document.querySelector('.intro-btn')

introButton.addEventListener('click', () => {
  const pin = document.querySelector('#pinVectorial')
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
  .addIndicators({
    colorTrigger: 'white',
    colorStart: 'red',
    colorEnd: 'red',
    indent: 40,
  })
  .addTo(controller)
