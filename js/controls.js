export default function Controls({
  minutesDisplay,
}) {

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

  return {
    upMinutes,
    downMinutes,
  }
}