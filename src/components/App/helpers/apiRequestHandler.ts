import axios from "axios";
import { HexParameters } from "..";

export const apiRequestHandler = async (
  radius: number,
  data: HexParameters[]
): Promise<HexParameters[]> => {
  try {
    const response = await axios({
      method: "post",
      url: `https://hex2048szb9jquj-hex15.functions.fnc.fr-par.scw.cloud/${radius}`,
      data: data.filter((hex) => hex.value !== 0),
    });

    const result: HexParameters[] = [...data, ...response.data];

    return result;
  } catch (error) {
    console.error(error);

    // TODO remove this clutch
    return [{ x: 0, y: 0, z: 0, value: 0 }];
  }
};
