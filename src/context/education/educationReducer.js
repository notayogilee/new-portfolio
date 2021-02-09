import {
  SET_LOADING,
  GET_EDUCATION_DETAILS
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_EDUCATION_DETAILS:
      return {
        ...state,
        education: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}