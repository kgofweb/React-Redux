import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Import reducer
import phoneReducer from './phone/reducerPhone';
import tvReducer from './tv/reducerTV';
import commentReducer from './comments/comments';

const rootReducer = combineReducers({
  phone: phoneReducer,
  tv: tvReducer,
  cmt: commentReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;