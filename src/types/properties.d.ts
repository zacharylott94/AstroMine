interface IAcceleration { acceleration: number }
interface IVelocity { velocity: TVector }
interface IPosition { position: TPosition }
interface IDurability { durability: number }
interface IRadius { radius: number }
interface ITimeToLive { ttl: number }
interface ITypeable { type: ObjectType }
interface IRotation {
  rotation: Degrees,
  angularVelocity: Degrees
}

interface IDeleteable { delete: bool }
const enum ObjectType {
  Asteroid,
  Player,
  Projectile,
  Generic,
  Drone,
  Ore,
  CloneTrigger,
  Cargo,
}

const enum ParticleType {
  Dot,
  X
}
