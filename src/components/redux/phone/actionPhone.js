import { BUY_PHONE } from "./type";

// Action Creation
export const buyPhone = totalPhone => {
  return {
    type: BUY_PHONE,
    payload: totalPhone
  }
}