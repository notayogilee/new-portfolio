import {
  OPEN_HOME_SCREEN,
  OPEN_RESUME_SCREEN,
  OPEN_COVER_LETTER_SCREEN,
  OPEN_PROJECTS_SCREEN
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case OPEN_HOME_SCREEN:
      return {
        ...state
      }
    case OPEN_RESUME_SCREEN:
      return {
        ...state
      }
    case OPEN_COVER_LETTER_SCREEN:
      return {
        ...state
      }
    case OPEN_PROJECTS_SCREEN:
      return {
        ...state
      }
    default:
      return state
  }
}