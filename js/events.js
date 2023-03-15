import { 
  buttonUpMinutes,
  buttonDownMinutes,
  buttonPlay,
  buttonStop,
  buttonForest,
  buttonRain,
  buttonCoffeShope,
  buttonFirePlace,
  minutesDisplay
} from './elements.js'
import Sound from './sounds.js'

export default function Events ({controls, timer,})
{
let sounds = Sound()

buttonUpMinutes.addEventListener('click', () => {
  if (minutesDisplay.textContent >= 60) {
    minutesDisplay.textContent = 0
    controls.upMinutes()
  } else
    controls.upMinutes()
})
buttonDownMinutes.addEventListener('click', () => {
  if (minutesDisplay.textContent <= 1) {
    minutesDisplay.textContent = 60
  } else
    controls.downMinutes()
})
buttonPlay.addEventListener('click', () => {
  timer.countdown()
  sounds.finishedAudioOff()
})
buttonStop.addEventListener('click', () => {
  timer.updateDisplay()
  sounds.stopAudio()
  
})
buttonForest.addEventListener('click', () => {
  sounds.setForestAudio()
})
buttonRain.addEventListener('click', () => {
  sounds.setRainAudio()
})
buttonCoffeShope.addEventListener('click', () => {
  sounds.setCoffeeShopAudio()
})
buttonFirePlace.addEventListener('click', () => {
  sounds.setFirePlaceAudio()
})

}