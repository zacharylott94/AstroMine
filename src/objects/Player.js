import Canvas from "./Canvas.js"
import GameObject from "./GameObject.js"
import Vector from "./vector/Vector.js";
import Controller from "./Controller.js"
import EventCoordinator from "./EventCoordinator.js";
import Settings from "../gameLogic/Settings.js"
import triangle from "../draw/Triangle.js";
import Sound from "../gameLogic/Sound.js";
import Position from "./vector/Position.js";
import ColliderComponent from "./components/colliderComponent.js"
import { canAccelerate } from "./behaviors/canAccelerate.js";
import { canRender } from "./canRender.js";
import { canFireProjectile } from "./behaviors/canFireProjectile.js";
import { canRotate } from "./behaviors/canRotate.js";


const State = _ => {
    let state = false
    const get = _ => state
    const set = bool => state = bool
    const on = _ => set(true)
    const off = _ => set(false)
    return {
        get,
        on,
        off,
    }
}

class Player extends GameObject {
    constructor(position = new Position(Canvas.width/2, Canvas.height/2), velocity = new Vector(), radius = Settings.PLAYER_RADIUS) {
        super(position, velocity, radius)
        this.rotation = 0
        this.impulse = Settings.IMPULSE
        this.state = {
            accelerating:  State(),
            rotatingLeft:  State(),
            rotatingRight: State(),
            fired:         State(),
            firing:        State()
        }
        this.collider = new ColliderComponent(this)
        this.activeProjectiles = new Set()


        Object.assign(
            this,
            canAccelerate(this),
            canRotate(this),
            canFireProjectile(this),
            canRender(this, triangle),
            )
        {   //I did this so that the below lines wouldn't be insanely long due to long-winded property indexing
            //I.E. this.state.accelerating.on.bind(this.state.accelerating)
            const accelerating = this.state.accelerating
            const rotatingLeft = this.state.rotatingLeft
            const rotatingRight = this.state.rotatingRight
            const firing = this.state.firing
            Controller.registerCallback(Controller.button.accelerate, accelerating.on, accelerating.off)
            Controller.registerCallback(Controller.button.left, rotatingLeft.on, rotatingLeft.off)
            Controller.registerCallback(Controller.button.right, rotatingRight.on, rotatingRight.off)
            Controller.registerCallback(Controller.button.fire, firing.on, firing.off)
            EventCoordinator.registerCallback(EventCoordinator.event.ProjectileDeleted, this.decrementActiveProjectiles)
        }


    }

    handleCollision(obj) {
        if(!this.collider.collidedWith(obj)) return
        if (obj.constructor.name === "Asteroid") this.delete()
    }


    update() {
        super.update()
        if (this.state.accelerating.get()) this.accelerate()
        if (this.state.rotatingRight.get()) this.rotate(Settings.ROTATION_RATE)
        if (this.state.rotatingLeft.get()) this.rotate(-Settings.ROTATION_RATE)
        if (this.state.firing.get() && !this.state.fired.get()){
            this.state.fired.on()
            this.fireProjectile()
        } else if (!this.state.firing.get()) {
            this.state.fired.off()
        }

        
    }
    delete () {
        Controller.unregisterCallback(Controller.button.accelerate, this.state.accelerating.on, this.state.accelerating.off)
        Controller.unregisterCallback(Controller.button.left, this.state.rotatingLeft.on, this.state.rotatingLeft.off)
        Controller.unregisterCallback(Controller.button.right, this.state.rotatingRight.on, this.state.rotatingRight.off)
        Controller.unregisterCallback(Controller.button.fire, this.state.firing.on, this.state.firing.off)
        EventCoordinator.unregisterCallback(EventCoordinator.event.ProjectileDeleted, this.decrementActiveProjectiles)
        Player.destructionSound.play()
        super.delete()
    }

    static destructionSound = new Sound("/asteroids/src/sfx/player_kill.wav")
}

const playerFactory = () => new Player

export default playerFactory