import { HexParameters } from ".";
import { Hexagon } from "./Hexagon";

interface GridDrawerProps {
  radius: number;
  sideLength: string;
  gridData: HexParameters[];
}

export const GridDrawer: React.FC<GridDrawerProps> = ({radius, sideLength, gridData}) => {
  // TODO include radius
  const calculateSize = (): {width: number, height: number} => {
    return ({width: Number(sideLength) * 5, height: Number(sideLength) * Math.sqrt(3) * 3})
  }

  // Grid coordinates for every hexagon
  const coordinatesRadius2 = [
    {x: 0, y: 0, z: 0, value: 0},
    {x: 0, y: 1, z: -1, value: 0},
    {x: 0, y: -1, z: 1, value: 0},
    {x: -1, y: 1, z: 0, value: 0},
    {x: -1, y: 0, z: 1, value: 0},
    {x: 1, y: 0, z: -1, value: 0},
    {x: 1, y: -1, z: 0, value: 0},
  ]

  // TODO add grid coordinates for radius 3
  const coordinatesRadius3 = [{x: 0, y: 0, z: 0, value: 0},]

  const baseGrid = radius === 2 ? coordinatesRadius2 : coordinatesRadius3;

  // Based on API data determine which hexagons need to be filled
  const result = baseGrid.map((el) => {
    for (const newEl of gridData) {
      if (el.x === newEl.x && el.y === newEl.y && el.z === newEl.z) return newEl;
    }
    return el;
  })

  return <div className="GridDrawer" style={calculateSize()}>
     {result.map((el, index) => <Hexagon key={index} sideLength={sideLength} x={el.x} y={el.y} z={el.z} value={el.value}  />)}
  </div>
}