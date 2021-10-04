import { BUY_TV } from "./type";

export const buyTV = totalTV => {
  return {
    type: BUY_TV,
    payload: totalTV
  }
}