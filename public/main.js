let hue = 100
let sat = 50
let light = 50
let alpha = 0.5

const getHSL = () => {
  return `hsla(${hue}, ${sat}%, ${light}% , ${alpha})`
}

const main = () => {
  const hueInput = document.querySelector('input[name=hue]')
  hueInput.addEventListener('input', () => {
    hue = hueInput.value
    console.log(getHSL())
    document.querySelector('.box').style.backgroundColor = getHSL()
    document.querySelector('h3').textContent = getHSL()
  })
  const satInput = document.querySelector('input[name=sat]')
  satInput.addEventListener('input', () => {
    sat = satInput.value
    console.log(getHSL())
    document.querySelector('.box').style.backgroundColor = getHSL()
    document.querySelector('h3').textContent = getHSL()
  })
  const lightInput = document.querySelector('input[name=light]')
  lightInput.addEventListener('input', () => {
    light = lightInput.value
    console.log(getHSL())
    document.querySelector('.box').style.backgroundColor = getHSL()
    document.querySelector('h3').textContent = getHSL()
  })
  const alphaInput = document.querySelector('input[name=alpha]')
  alphaInput.addEventListener('input', () => {
    alpha = alphaInput.value
    console.log(getHSL())
    document.querySelector('.box').style.backgroundColor = getHSL()
    document.querySelector('h3').textContent = getHSL()
  })
  document.querySelector('.box').style.backgroundColor = getHSL()
  // document.querySelector('h3').textContent = getHSL()
}

document.addEventListener('DOMContentLoaded', main)
