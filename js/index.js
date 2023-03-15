import Controls from "./controls.js";
import Timer from "./timer.js";
import Sound from "./sounds.js";
import Events from "./events.js";
import { 
  secondsDisplay,
  minutesDisplay
} from './elements.js'


const controls = Controls({
  minutesDisplay,
})

const timer = Timer({
  secondsDisplay, 
  minutesDisplay,
})

const sounds = Sound()

Events({controls, sounds, timer})