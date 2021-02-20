interface IAcceleration {
  acceleration: TVector
}

interface IVelocity {
  velocity: TVector
}

interface IPosition {
  position: TPosition,
}
interface IRotatable {
  rotation: Degrees
}

interface IRadius {
  radius: number
}

interface ICircleRenderable extends IPosition, IRadius { }
interface IRotatableRenderable extends IPosition, IRotatable { }

type TRenderFunction = (location: TVector, object: any) => void


interface IUpdateable {
  update: (object: any) => any
}

interface ICollidable extends IPosition {
  radius: number
  handleCollision: (thisObject: ICollidable, otherObject: ICollidable) => ICollidable
}

interface IAsteroid extends ICircleRenderable, IVelocity { }

interface IProjectile extends IRotatableRenderable, IVelocity { }

interface IPlayer extends IRotatableRenderable, IVelocity, IRadius { }


type TMoveable = IVelocity & IPosition

type TVector = {
  x: number,
  y: number
}
type TPosition = [TVector, TVector, TVector, TVector, TVector, TVector, TVector, TVector, TVector,]

type Degrees = number