import { BUY_PHONE } from "./type";

// Init state
const initStatePhone = {
  phones: 5
}

// Create a reducer
const phoneReducer = (state = initStatePhone, action) => {
  switch (action.type) {
    case BUY_PHONE:
      return {
        ...state,
        phones: state.phones - action.payload
      }
      // return a new state
    default: return state
  }
}

export default phoneReducer