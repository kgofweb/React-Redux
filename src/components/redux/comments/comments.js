import axios from 'axios'

// Types
export const types = {
  LOAD_COMMENT: 'LOAD_COMMENT',
  LOAD_COMMENT_SUCCESS: 'LOAD_COMMENT_SUCCESS',
  LOAD_COMMENT_ERROR: 'LOAD_COMMENT_ERROR'
}

// ActionType
export const loadApiComment = () => {
  return {
    type: types.LOAD_COMMENT
  }
}

export const loadCommentSuccess = comments => {
  return {
    type: types.LOAD_COMMENT_SUCCESS,
    payload: comments
  }
}

export const loadCommentError = error => {
  return {
    type: types.LOAD_COMMENT_ERROR,
    payload: error
  }
}

// Call API (action qui retourne une function)
export const callApi = () => {
  return dispatch => {
    // Dispatch loading
    dispatch(loadApiComment())

    // Appel a l'API
    axios.get('https://jsonplaceholder.typicode.com/comments?_limit=5')
      .then(response => {
        // Dispatch comment succes
        dispatch(loadCommentSuccess(response.data))
      })
      .catch(error => {
        dispatch(loadCommentError(error.message))
      })
  }
}

// Init state
const initStateComment = {
  // init loading
  isLoading: false,
  // init comment
  comment: [],
  // error msg
  error: ''
}

// Reducer
const commentReducer = (state = initStateComment, action) => {
  switch (action.type) {
    case types.LOAD_COMMENT:
      return {
        ...state,
        isLoading: true
      }
    case types.LOAD_COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comment: action.payload,
        error: ''
      }
    case types.LOAD_COMMENT_ERROR:
      return {
        ...state,
        isLoading: false,
        comment: [],
        error: action.payload
      }
    default: return state
  }
}

export default commentReducer