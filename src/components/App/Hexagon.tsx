interface HexagonProps {
  sideLength: string;
  x: number;
  y: number;
  z: number;
  value: number;
}

export const Hexagon: React.FC<HexagonProps> = ({ sideLength, x, y, z, value }) => {
  const width = 2 * Number(sideLength);
  const height = Math.sqrt(3) * Number(sideLength);
  const border = 8;

  const hexPoints = {
    left: `0 ${height / 2}`,
    topLeft: `${width / 4} 0`,
    topRight: `${(3 * width) / 4} 0`,
    right: `${width} ${height / 2}`,
    bottomRight: `${(3 * width) / 4} ${height}`,
    bottomLeft: `${width / 4} ${height}`
  }

  const calculatePosition = (): {top: number; left: number} => {
    const result = { top: 0, left: 0 };

    // center
    if (y === 0 && z === 0) {
      result.top = height;
    // upper left
    } else if (y === 1 && z === 0) {
      result.top = 0;
    // top
    } else if (y === 1 && z === -1) {
      result.top = 0;
    // upper right
    } else if (y === 0 && z === -1) {
      result.top = 0;
    // lower right
    } else if (y === -1 && z === 0) {
      result.top = height;
    // bottom
    } else if (y === -1 && z === 1) {
      result.top = height * 2;
    // lower left
    } else if (y === 0 && z === 1) {
      result.top = height;
    }

    if (x === -1){
      result.left = 0;
      result.top += height / 2;
    } else if (x === 0) {
      result.left = (3 * width) / 4;
    } else if (x === 1) {
      result.left = (3 * width) / 2;
      result.top += height / 2;
    }

    return result;
  }

  const style = {...(calculatePosition()), width, height }

  const fillColor = () => Number(value) > 0 ? "#FA58B6" : "#e5e5bf"

  return (
    <div className="Hexagon" style={style}>
      <svg width={width} height={height}>
        <polygon
          points={Object.values(hexPoints).join(", ")}
          stroke="#1A1A40"
          fill={fillColor()}
          strokeWidth={border}
        />
      </svg>
      <span>{value ? value : null}</span>
    </div>
  );
}

