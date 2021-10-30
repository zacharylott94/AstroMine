import { randomChoice } from "../libraries/random"

const sfxPrefix = "/asteroids/src/sfx/"

const shootList = [
  "shoot.wav",
  "shoot2.wav",
  "shoot3.wav"
]
const asteroidHitList = [
  "asteroid_hit.wav",
  "asteroid_hit2.wav",
  "asteroid_hit3.wav",
]

const asteroidShatterList = [
  "asteroid_shatter.wav",
  "asteroid_shatter2.wav",
  "asteroid_shatter3.wav",
]

const playSound = soundURI => arg => {
  new Audio(sfxPrefix + soundURI).play()
  return arg
}

const playRandomSound = soundURIList => arg => {
  new Audio(sfxPrefix + randomChoice(...soundURIList)).play()
  return arg
}


export const playerShootSound = playRandomSound(shootList)
export const asteroidHitSound = playRandomSound(asteroidHitList)
export const asteroidShatterSound = playRandomSound(asteroidShatterList)
export const playerDeathSound = playSound("player_kill.wav")
export const pauseSound = playSound("pause.wav")