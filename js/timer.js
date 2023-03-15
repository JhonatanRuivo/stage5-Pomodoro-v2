import Sound from "./sounds.js"


export default function Timer({
  secondsDisplay, 
  minutesDisplay,
}) {


function countdown() {

  let sounds = Sound()

  setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let isFinished = minutes <= 0 && seconds <= 0

    if (seconds <= 0) {
      seconds = 5
      minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')

    if (isFinished) {
      updateDisplay()
      sounds.stopAudio()
      sounds.finishedAudioOn()
      return
    }
    
    sounds.finishedAudioOff()

    countdown()
  }, 1000)
}
function updateDisplay() {
  minutesDisplay.textContent = String(0).padStart(2, '0')
  secondsDisplay.textContent = String(0).padStart(2, '0')
}

return {
  countdown,
  updateDisplay
}
}