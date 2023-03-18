import {
  buttonForest,
buttonRain,
buttonCoffeShope,
buttonFirePlace} from "./elements.js"

export default function Sound() {
  const forestAudio = new Audio('./songs/forest.wav')
  const rainAudio = new Audio('./songs/rain.wav')
  const coffeeShopAudio = new Audio('./songs/coffeeShop.wav')
  const firePlaceAudio = new Audio('./songs/firePlace.wav')
  const finishedAudio = new Audio('./songs/finished.wav')

  function setForestAudio() {
    buttonForest.classList.add('selected')
    buttonRain.classList.remove('selected')
    buttonCoffeShope.classList.remove('selected')
    buttonFirePlace.classList.remove('selected')

    forestAudio.play()
    forestAudio.loop = true
    rainAudio.pause()
    coffeeShopAudio.pause()
    firePlaceAudio.pause()

  }
  function setRainAudio() {
    buttonForest.classList.remove('selected')
    buttonRain.classList.add('selected')
    buttonCoffeShope.classList.remove('selected')
    buttonFirePlace.classList.remove('selected')

    forestAudio.pause()
    rainAudio.play()
    rainAudio.loop = true
    coffeeShopAudio.pause()
    firePlaceAudio.pause()
  }
  function setCoffeeShopAudio() {
    buttonForest.classList.remove('selected')
    buttonRain.classList.remove('selected')
    buttonCoffeShope.classList.add('selected')
    buttonFirePlace.classList.remove('selected')

    forestAudio.pause()
    rainAudio.pause()
    coffeeShopAudio.play()
    coffeeShopAudio.loop = true
    firePlaceAudio.pause()
  }
  function setFirePlaceAudio() {
    buttonForest.classList.remove('selected')
    buttonRain.classList.remove('selected')
    buttonCoffeShope.classList.remove('selected')
    buttonFirePlace.classList.add('selected')

    forestAudio.pause()
    rainAudio.pause()
    coffeeShopAudio.pause()
    firePlaceAudio.play()
    firePlaceAudio.loop = true
  }
  function stopAudio() {
    forestAudio.pause()
    forestAudio.currentTime = 0
    rainAudio.pause()
    rainAudio.currentTime = 0
    coffeeShopAudio.pause()
    coffeeShopAudio.currentTime = 0
    firePlaceAudio.pause()
    firePlaceAudio.currentTime = 0
    
  }
  function finishedAudioOff() {
    finishedAudio.volume = 0
  }
  function finishedAudioOn() {
    finishedAudio.play()
    finishedAudio.volume = 1
  }
  return {
    setForestAudio,
    setRainAudio,
    setCoffeeShopAudio,
    setFirePlaceAudio,
    stopAudio,
    finishedAudioOff,
    finishedAudioOn
  }
}