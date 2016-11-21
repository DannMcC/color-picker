let hue = 0
let sat = 0
let light = 0
let alpha = 0

const getHSL = () => {
  return `hsl(${hue}, ${sat}%, ${light}% , ${alpha})`
}

const main = () => {
  const hueInput = document.querySelector('input[name=hue]')
  hueInput.addEventListener('input', () => {
    hue = hueInput.value
    console.log(getHSL())
  })
  const satInput = document.querySelector('input[name=sat]')
  satInput.addEventListener('input', () => {
    sat = satInput.value
    console.log(getHSL())
  })
  const lightInput = document.querySelector('input[name=light]')
  lightInput.addEventListener('input', () => {
    light = lightInput.value
    console.log(getHSL())
  })
  const alphaInput = document.querySelector('input[name=alpha]')
  alphaInput.addEventListener('input', () => {
    alpha = alphaInput.value
    console.log(getHSL())
  })
}

document.addEventListener('DOMContentLoaded', main)
