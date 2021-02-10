import {
  SET_LOADING,
  GET_PROJECTS_DETAILS
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_PROJECTS_DETAILS:
      return {
        ...state,
        projects: action.payload,
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