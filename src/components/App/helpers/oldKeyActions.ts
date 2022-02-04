import { HexParameters } from "../index";

const handleKeyDown = async (
  hexes: HexParameters[],
  keyCode: string,
  radius: number
) => {
  const startingPosition = [...hexes];

  const processKeys = (): HexParameters[] => {
    switch (keyCode) {
      case "KeyQ":
        console.log("Moving Y = s UP, Z = r stays the same");
        console.log("startingPosition", startingPosition);
        const movesQ = hexes.map((hex) => {
          const newY = hex.y + 1;
          const newX = -newY - hex.z;

          // MOVE Q:
          if (Math.abs(newY) === radius || Math.abs(newX) === radius) {
            console.log(hex, "blocked by wall");
          } else if (
            !!startingPosition.filter(
              (el) =>
                el.x === newX &&
                el.y === newY &&
                el.z === hex.z &&
                el.value === hex.value
            ).length
          ) {
            // console.log(hex, "should multiply")
            const index = startingPosition.findIndex(
              (el) =>
                el.x === newX &&
                el.y === newY &&
                el.z === hex.z &&
                el.value === hex.value
            );
            console.log("index", index);

            hex.value *= 2;
            hex.y = newY;
            hex.x = newX;
            startingPosition.splice(index, 1);
          } else if (
            !!startingPosition.filter(
              (el) => el.x === newX && el.y === newY && el.z === hex.z
            ).length
          ) {
            // console.log(hex, "blocked by another hex")
          } else {
            // console.log(hex, 'moving')
            hex.y = newY;
            hex.x = newX;
          }
          return hex;
        });
        console.log("startingPosition 2", startingPosition);

        console.log("movesQ", movesQ);
        return movesQ.filter((el) => !!el);
      case "KeyD":
        console.log("Moving Y = s DOWN, Z = r stays the same");
        const movesD = hexes.map((hex) => {
          const newY = hex.y - 1;
          const newX = -newY - hex.z;

          // MOVE D:
          if (Math.abs(newY) === radius || Math.abs(newX) === radius) {
            console.log(hex, "blocked by wall");
          } else if (
            !!startingPosition.filter(
              (el) =>
                el.x === newX &&
                el.y === newY &&
                el.z === hex.z &&
                el.value === hex.value
            ).length
          ) {
            console.log(hex, "should multiply");
          } else if (
            !!startingPosition.filter(
              (el) => el.x === newX && el.y === newY && el.z === hex.z
            ).length
          ) {
            console.log(hex, "blocked by another hex");
          } else {
            console.log(hex, "moving");
            hex.y = newY;
            hex.x = newX;
          }
          return hex;
        });
        return movesD;
      case "KeyW":
        console.log("Moving Y = s UP, X = q stays the same");
        const movesW = hexes.map((hex) => {
          const newY = hex.y + 1;
          const newZ = -newY - hex.x;

          // MOVE W:
          if (Math.abs(newY) === radius || Math.abs(newZ) === radius) {
            console.log(hex, "blocked by wall");
          } else if (
            !!startingPosition.filter(
              (el) =>
                el.z === newZ &&
                el.y === newY &&
                el.x === hex.x &&
                el.value === hex.value
            ).length
          ) {
            console.log(hex, "should multiply");
          } else if (
            !!startingPosition.filter(
              (el) => el.z === newZ && el.y === newY && el.x === hex.x
            ).length
          ) {
            console.log(hex, "blocked by another hex");
          } else {
            console.log(hex, "moving");
            hex.y = newY;
            hex.z = newZ;
          }
          return hex;
        });
        return movesW;
      case "KeyS":
        console.log("Moving Y = s DOWN, X = q stays the same");
        const movesS = hexes.map((hex) => {
          const newY = hex.y - 1;
          const newZ = -newY - hex.x;

          // MOVE S:
          if (Math.abs(newY) === radius || Math.abs(newZ) === radius) {
            console.log(hex, "blocked by wall");
          } else if (
            !!startingPosition.filter(
              (el) =>
                el.z === newZ &&
                el.y === newY &&
                el.x === hex.x &&
                el.value === hex.value
            ).length
          ) {
            console.log(hex, "should multiply");
          } else if (
            !!startingPosition.filter(
              (el) => el.z === newZ && el.y === newY && el.x === hex.x
            ).length
          ) {
            console.log(hex, "blocked by another hex");
          } else {
            console.log(hex, "moving");
            hex.y = newY;
            hex.z = newZ;
          }
          return hex;
        });
        return movesS;
      case "KeyE":
        console.log("Moving Z = r DOWN, Y = s stays the same");
        const movesE = hexes.map((hex) => {
          const newZ = hex.z - 1;
          const newX = -newZ - hex.y;

          // MOVE E:
          if (Math.abs(newZ) === radius || Math.abs(newX) === radius) {
            console.log(hex, "blocked by wall");
          } else if (
            !!startingPosition.filter(
              (el) =>
                el.x === newX &&
                el.z === newZ &&
                el.y === hex.y &&
                el.value === hex.value
            ).length
          ) {
            console.log(hex, "should multiply");
          } else if (
            !!startingPosition.filter(
              (el) => el.x === newX && el.z === newZ && el.y === hex.y
            ).length
          ) {
            console.log(hex, "blocked by another hex");
          } else {
            console.log(hex, "moving");
            hex.z = newZ;
            hex.x = newX;
          }
          return hex;
        });
        return movesE;
      case "KeyA":
        console.log("Moving Z = r UP, Y = s stays the same");
        const movesA = hexes.map((hex) => {
          const newZ = hex.z + 1;
          const newX = -newZ - hex.y;

          // MOVE A:
          if (Math.abs(newZ) === radius || Math.abs(newX) === radius) {
            console.log(hex, "blocked by wall");
          } else if (
            !!startingPosition.filter(
              (el) =>
                el.x === newX &&
                el.z === newZ &&
                el.y === hex.y &&
                el.value === hex.value
            ).length
          ) {
            console.log(hex, "should multiply");
          } else if (
            !!startingPosition.filter(
              (el) => el.x === newX && el.z === newZ && el.y === hex.y
            ).length
          ) {
            console.log(hex, "blocked by another hex");
          } else {
            console.log(hex, "moving");
            hex.z = newZ;
            hex.x = newX;
          }
          return hex;
        });
        return movesA;
      default:
        return startingPosition;
    }
  };

  // let i = 0;
  // do {
  //   i++;
  //   const endPosition = processKeys();
  //   setGridData(endPosition);
  // } while (i < radius);

  const endPosition = processKeys();
  return endPosition;
  // TODO send final result to server
};
