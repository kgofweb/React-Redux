import { createStore, combineReducers } from 'redux';
// Import reducer
import phoneReducer from './phone/reducerPhone';
import tvReducer from './tv/reducerTV';

const rootReducer = combineReducers({
  phone: phoneReducer,
  tv: tvReducer
})

const store = createStore(rootReducer);

export default store;