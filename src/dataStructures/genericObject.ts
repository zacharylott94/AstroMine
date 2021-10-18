import Position from "./position/Position"

export default function GenericFactory(location: TVector, velocity: TVector, radius: number, type = ObjectType.Generic): IGeneric {
  return {
    position: Position.fromVector(location),
    radius,
    velocity,
    type: type,
    delete: false,
  }
}