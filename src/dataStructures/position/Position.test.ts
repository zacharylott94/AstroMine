import { GameDimensions } from "../../GameDimensions"
import Position from "./Position"
import Vector from "../vector/Vector"
describe('Position static class', () => {
  it('can get "real" position', () => {
    let position = Position.fromVector(Vector.fromComponents(20, 20))
    expect(Position.real(position)).toStrictEqual(Vector.fromComponents(20, 20))
  })

  it('can get position closest to vector', () => {
    //Mutates global Settings to test. Fair Warning
    GameDimensions[0] = 500
    GameDimensions[1] = 500
    let position = Position.fromComponents(50, 50)
    let point = Vector.fromComponents(480, 480)
    let expected = Vector.fromComponents(550, 550)
    expect(Position.closestTo(position, point)).toStrictEqual(expected)
    position = Position.fromComponents(400, 250)
    point = Vector.fromComponents(0, 480)
    expected = Vector.fromComponents(-100, 250)
    expect(Position.closestTo(position, point)).toStrictEqual(expected)


  })

  it('can create from components', () => {
    let position = Position.fromComponents(10, 10)
    expect(Position.real(position)).toStrictEqual(Vector.fromComponents(10, 10))
  })
  it('can constrain positions to the game field', () => {
    //Spooky manipulation of global values
    GameDimensions[1] = 100
    GameDimensions[0] = 100
    let position = Position.fromComponents(101, 101)
    let expected = Position.fromComponents(1, 1)
    expect(Position.constrain(position)).toStrictEqual(expected)
    position = Position.fromComponents(-99, -99)
    expected = Position.fromComponents(1, 1)
    expect(Position.constrain(position)).toStrictEqual(expected)

  })
})