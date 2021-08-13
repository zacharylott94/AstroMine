import AsteroidSpawnSystem from "./engine/asteroidSpawner.js"
import { initGameState } from "./engine/global.js"
import { clear } from "./draw/clear.js"
import { setupInterface } from "./engine/humanInterface.js"
import Controller from "./engine/keyboardController.js"
import { updateScoreSetup } from "./behaviors/gameState Updaters/updateScore.js"
import particleListUpdaterSetup from "./behaviors/gameState Updaters/updateParticleList.js"
import { updateObjectList } from "./behaviors/gameState Updaters/updateObjectList.js"
import { gameRenderSetup } from "./draw/setupFunctions.ts/gameRenderSetup.js"
import { updateOreSetup } from "./behaviors/gameState Updaters/updateOre.js"
import droneSpawner from "./engine/droneSpawner.js"
import array from "./libraries/array.js"
import text from "./draw/text.js"

const GameState = initGameState()

const gameRender = gameRenderSetup(GameState)
const humanInterface = setupInterface(GameState)
const updateParticleList = particleListUpdaterSetup(GameState.objectList, GameState.timer)
const updateOre = updateOreSetup(GameState.objectList)
const updateScore = updateScoreSetup(GameState.objectList)
humanInterface.reset()

//debug
let lastTime = 0
let frameTimes = [0]

const graphicsLoop = () => {
  clear()
  gameRender()
  text(() => [40, 10], () => `FPS: ${Math.round(1000 / array.average(frameTimes))}`)
}

const physicsLoop = () => {
  if (Controller.isButtonPushed("p")) humanInterface.pause()
  if (Controller.isButtonPushed("o")) humanInterface.reset()
  if (GameState.paused()) return

  if (Controller.isButtonHeld("w")) humanInterface.accelerate()
  if (Controller.isButtonHeld("a")) humanInterface.rotateCounterclockwise()
  if (Controller.isButtonHeld("d")) humanInterface.rotateClockwise()
  if (Controller.isButtonPushed("Enter")) humanInterface.fire()
  if (Controller.isButtonPushed("c")) humanInterface.jettison()

  GameState.particleList(updateParticleList)
  GameState.objectList(updateObjectList)
  GameState.score(updateScore)
  GameState.ore(updateOre)


  if (GameState.timer() % 60 === 0) {
    GameState.objectList(AsteroidSpawnSystem(GameState.score()))
  }

  if (GameState.timer() % (60 * 60) === 600) {
    GameState.objectList(droneSpawner(GameState.score()))
  }

  GameState.timer(_ => ++_)
  //debug
  frameTimes.unshift(Date.now() - lastTime)
  frameTimes = array.limit(30)(frameTimes) as number[]
  lastTime = Date.now()
}

setInterval(graphicsLoop, 1000 / 60)
setInterval(physicsLoop, 1000 / 60)

