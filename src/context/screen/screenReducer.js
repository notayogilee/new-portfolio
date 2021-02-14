import {
  OPEN_HOME_SCREEN,
  OPEN_RESUME_SCREEN,
  OPEN_PROJECTS_SCREEN
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case OPEN_HOME_SCREEN:
      return {
        ...state,
        home: true,
        resume: false,
        projects: false
      }
    case OPEN_RESUME_SCREEN:
      return {
        ...state,
        home: false,
        resume: true,
        projects: false
      }
    case OPEN_PROJECTS_SCREEN:
      return {
        ...state,
        home: false,
        resume: false,
        projects: true
      }
    default:
      return state
  }
}