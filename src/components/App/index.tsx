import React, { useCallback, useEffect, useState } from "react";
import { apiRequestHandler } from "./helpers/apiRequestHandler";
import { GridDrawer } from "./GridDrawer";

export interface HexParameters {
  x: number;
  y: number;
  z: number;
  value: number;
}

export const App: React.FC = () => {
  const radius = 2;
  const [gridData, setGridData ] = useState<HexParameters[]>([]);

  const handleStart = async () => {
    const result = await apiRequestHandler(radius, gridData);
    
    setGridData(result);
  }

  const handleKeyDown = async (eventCode: string, hexes: HexParameters[], radius: number) => {
    const startingPosition: HexParameters[] = [...hexes];
    const processedPosition: HexParameters[] = [];

    hexes.forEach(hex => {
      // Move North West:
      if (eventCode === "KeyQ") {
        const newY = hex.y + 1;
        const newX = -newY - hex.z;

        // Check for walls
        if (Math.abs(newY) === radius || Math.abs(newX) === radius) {
          console.log(hex, "wall block")
          processedPosition.push(hex);
        } else {
          // Check for other hexes
          if (!!startingPosition.filter(el => el.x === newX && el.y === newY && el.z === hex.z && el.value !== hex.value).length) {
            console.log(hex, "hex block");
            processedPosition.push(hex);

          // Move hex
          } else {
            console.log(hex, "moving/muliplying")
            hex.y = newY;
            hex.x = newX;
            processedPosition.push(hex);
          }
        }
        // Move South East:
      } else if (eventCode === "KeyD") {
          const newY = hex.y - 1;
          const newX = -newY - hex.z;

          // Check for walls
          if (Math.abs(newY) === radius || Math.abs(newX) === radius) {
            console.log(hex, "wall block")
            processedPosition.push(hex);
          } else {
            // Check for other hexes
            if (!!startingPosition.filter(el => el.x === newX && el.y === newY && el.z === hex.z && el.value !== hex.value).length) {
              console.log(hex, "hex block");
              processedPosition.push(hex);

            // Move hex
            } else {
              console.log(hex, "moving/muliplying")
              hex.y = newY;
              hex.x = newX;
              processedPosition.push(hex);
            }
          }
          // Move North:
      } else if (eventCode === "KeyW") {
        const newY = hex.y + 1;
        const newZ = -newY - hex.x;

        // Check for walls
        if (Math.abs(newY) === radius || Math.abs(newZ) === radius) {
          console.log(hex, "wall block")
          processedPosition.push(hex);
        } else {
          // Check for other hexes
          if (!!startingPosition.filter(el => el.x === hex.x && el.y === newY && el.z === newZ && el.value !== hex.value).length) {
            console.log(hex, "hex block");
            processedPosition.push(hex);

          // Move hex
          } else {
            console.log(hex, "moving/muliplying")
            hex.y = newY;
            hex.z = newZ;
            processedPosition.push(hex);
          }
        }
        // Move South
      } else if (eventCode === "KeyS") {
        const newY = hex.y - 1;
        const newZ = -newY - hex.x;

        // Check for walls
        if (Math.abs(newY) === radius || Math.abs(newZ) === radius) {
          console.log(hex, "wall block")
          processedPosition.push(hex);
        } else {
          // Check for other hexes
          if (!!startingPosition.filter(el => el.x === hex.x && el.y === newY && el.z === newZ && el.value !== hex.value).length) {
            console.log(hex, "hex block");
            processedPosition.push(hex);

          // Move hex
          } else {
            console.log(hex, "moving/muliplying")
            hex.y = newY;
            hex.z = newZ;
            processedPosition.push(hex);
          }
        }
        // Move Notrh East
      } else if (eventCode === "KeyE") {
        const newZ = hex.z - 1;
        const newX = -newZ - hex.y;

        // Check for walls
        if (Math.abs(newZ) === radius || Math.abs(newX) === radius) {
          console.log(hex, "wall block")
          processedPosition.push(hex);
        } else {
          // Check for other hexes
          if (!!startingPosition.filter(el => el.x === newX && el.y === hex.y && el.z === newZ && el.value !== hex.value).length) {
            console.log(hex, "hex block");
            processedPosition.push(hex);

          // Move hex
          } else {
            console.log(hex, "moving/muliplying")
            hex.z = newZ;
            hex.x = newX;
            processedPosition.push(hex);
          }
        }
      } else if (eventCode ==="KeyA") {
        const newZ = hex.z + 1;
        const newX = -newZ - hex.y;

        // Check for walls
        if (Math.abs(newZ) === radius || Math.abs(newX) === radius) {
          console.log(hex, "wall block")
          processedPosition.push(hex);
        } else {
          // Check for other hexes
          if (!!startingPosition.filter(el => el.x === newX && el.y === hex.y && el.z === newZ && el.value !== hex.value).length) {
            console.log(hex, "hex block");
            processedPosition.push(hex);

          // Move hex
          } else {
            console.log(hex, "moving/muliplying")
            hex.z = newZ;
            hex.x = newX;
            processedPosition.push(hex);
          }
        }
      }
    })
    const result = await apiRequestHandler(radius, processedPosition);
    setGridData(result)
  }

  // Event listener for button clicks
  const keyDownListener = useCallback((event: KeyboardEvent): void => {
    const { code } = event;
    handleKeyDown(code, gridData, radius)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gridData]);

  // Setup starting data
  useEffect(() => {
    handleStart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
    
  // Setup button event listener
  useEffect(() => {
    window.addEventListener("keydown", keyDownListener);
    
    return () => {
      window.removeEventListener("keydown", keyDownListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleKeyDown]);

  return (
    <div className="App" >
      <GridDrawer radius={radius} sideLength="100" gridData={gridData} />
    </div>
  );
}