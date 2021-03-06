import React, { useReducer } from 'react'
import CircleNavContext from './circleNavContext'
import CircleNavReducer from './circleNavReducer'
import {
  OPEN_CIRCLE_NAV,
  CLOSE_CIRCLE_NAV,
  SHOW_PARTICLES,
  HIDE_PARTICLES
} from '../types'

const CircleNavState = (props) => {
  const initialState = {
    open: false,
    bodyId: '',
    navId: '',
    showParticles: false
  }

  const [state, dispatch] = useReducer(CircleNavReducer, initialState)

  // Open CircleNav
  const openCircleNav = () => {
    // have screem scroll to top of page to maintain angle-open look
    window.scrollTo({ top: 0, left: 0 })
    // add hidden to overflow only on open to disable scroll
    document.body.style.overflow = "hidden"

    // only show particles when open to optimize performance 
    dispatch({ type: SHOW_PARTICLES })
    dispatch({
      type: OPEN_CIRCLE_NAV,
      payload: {
        bodyId: 'open',
        navId: 'rotateCircleNav',
      }
    })
  }

  // Close CircleNav
  const closeCircleNav = () => {
    // add scroll ability to view full pages
    document.body.style.overflow = "scroll"
    // still hide overflow x
    document.body.style.overflowX = "hidden"
    dispatch({
      type: CLOSE_CIRCLE_NAV,
      payload: {
        bodyId: '',
        navId: ''
      }
    })
    // setTimeout to let screen cover nav then hide particles
    setTimeout(() => {
      dispatch({ type: HIDE_PARTICLES })
    }, 500)
  }

  return <CircleNavContext.Provider
    value={{
      open: state.open,
      bodyId: state.addId,
      navId: state.navId,
      showParticles: state.showParticles,
      openCircleNav,
      closeCircleNav
    }}
  >
    {props.children}
  </CircleNavContext.Provider>
}

export default CircleNavState