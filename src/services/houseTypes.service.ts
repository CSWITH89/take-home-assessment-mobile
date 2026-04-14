import { HOUSE_TYPES } from "@/src/constants";

/* We know this could return synchronously... Please leave it as an async Promise :) */
export const getHouseTypes = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(HOUSE_TYPES.map((type) => ({ ...type })));
    }, 500);
  });
};
