import { updateObjectList } from "./behaviors/gameState Updaters/updateObjectList"
import { updateOreSetup } from "./behaviors/gameState Updaters/updateOre"
import particleListUpdaterSetup from "./behaviors/gameState Updaters/updateParticleList"
import { updateScoreSetup } from "./behaviors/gameState Updaters/updateScore"
import text from "./draw/graphics/text"
import { clear } from "./draw/library/clear"
import { gameRenderSetup } from "./draw/setupFunctions.ts/gameRenderSetup"
import asteroidSpawner from "./engine/asteroidSpawner"
import droneSpawner from "./engine/droneSpawner"
import { initGameState } from "./engine/global"
import { setupInterface } from "./engine/humanInterface"
import Controller from "./engine/keyboardController"
import array from "./libraries/array"


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
    GameState.objectList(asteroidSpawner(GameState.score()))
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

