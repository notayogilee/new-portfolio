import {
  OPEN_CIRCLE_NAV,
  CLOSE_CIRCLE_NAV,
  SHOW_PARTICLES,
  HIDE_PARTICLES
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case OPEN_CIRCLE_NAV:
      return {
        ...state,
        open: true,
        addId: action.payload.bodyId,
        navId: action.payload.navId
      }
    case CLOSE_CIRCLE_NAV:
      return {
        ...state,
        open: false,
        addId: action.payload.bodyId,
        navId: action.payload.navId
      }
    case SHOW_PARTICLES:
      return {
        ...state,
        showParticles: true
      }
    case HIDE_PARTICLES:
      return {
        ...state,
        showParticles: false
      }
    default:
      return state;
  }
}