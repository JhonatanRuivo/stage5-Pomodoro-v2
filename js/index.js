const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonUpMinutes = document.querySelector('.upMinutes')
const buttonDownMinutes = document.querySelector('.downMinutes')

const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffeShope = document.querySelector('.coffeShop')
const buttonFirePlace = document.querySelector('.firePlace')

const forestAudio = new Audio('./songs/forest.wav')
const rainAudio = new Audio('./songs/rain.wav')
const coffeeShopAudio = new Audio('./songs/coffeeShop.wav')
const firePlaceAudio = new Audio('./songs/firePlace.wav')
const finishedAudio = new Audio('./songs/finished.wav')

function upMinutes() {
  let minutes = minutesDisplay.textContent
  minutes++
  minutesDisplay.textContent = String(minutes).padStart('2', 0)
}
function downMinutes() {
  let minutes = Number(minutesDisplay.textContent)
  minutes--
  minutesDisplay.textContent = String(minutes).padStart('2', 0)
}
function updateDisplay() {
  minutesDisplay.textContent = String(0).padStart(2, '0')
  secondsDisplay.textContent = String(0).padStart(2, '0')
}
function countdown() {
  setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let isFinished = minutes <= 0 && seconds <= 0

    if (seconds <= 0) {
      seconds = 60
      minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')

    if (isFinished) {
      updateDisplay()
      finishedAudio.play()
      stopAudio()

      return
    }

    countdown()
  }, 1000)
}
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

buttonUpMinutes.addEventListener('click', () => {
  if (minutesDisplay.textContent >= 60) {
    minutesDisplay.textContent = 0
    upMinutes()
  } else
    upMinutes()
})
buttonDownMinutes.addEventListener('click', () => {
  if (minutesDisplay.textContent <= 1) {
    minutesDisplay.textContent = 60
  } else
    downMinutes()
})
buttonPlay.addEventListener('click', () => {
  countdown()
  finishedAudio.volume = 1
})
buttonStop.addEventListener('click', () => {
  updateDisplay()
  stopAudio()
  finishedAudio.volume = 0
})
buttonForest.addEventListener('click', () => {
  setForestAudio()
})
buttonRain.addEventListener('click', () => {
  setRainAudio()
})
buttonCoffeShope.addEventListener('click', () => {
  setCoffeeShopAudio()
})
buttonFirePlace.addEventListener('click', () => {
  setFirePlaceAudio()
})