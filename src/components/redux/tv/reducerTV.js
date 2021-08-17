import { BUY_TV } from "./type"

// Init state
const initStateTV = {
  tvs: 3
}

const reducerTV = (state = initStateTV, action) => {
  switch (action.type) {
    case BUY_TV:
        return {
          ...state,
          tvs: state.tvs - 1
        }
  
    default: return state
  }
}

export default reducerTV
