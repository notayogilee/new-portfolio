import React, { useReducer } from 'react'
import CircleNavContext from './circleNavContext'
import CircleNavReducer from './circleNavReducer'
import {
  OPEN_CIRCLE_NAV,
  CLOSE_CIRCLE_NAV
} from '../types'

const CircleNavState = (props) => {
  const initialState = {
    open: false,
    bodyId: '',
    navId: ''
  }

  const [state, dispatch] = useReducer(CircleNavReducer, initialState)

  // Open CircleNav
  const openCircleNav = () => {
    // have screem scroll to top of page to maintain angle-open look
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    // add hidden to overflow only on open to disable scroll
    document.body.style.overflow = "hidden"
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
    dispatch({
      type: CLOSE_CIRCLE_NAV,
      payload: {
        bodyId: '',
        navId: ''
      }
    })
  }

  return <CircleNavContext.Provider
    value={{
      open: state.open,
      bodyId: state.addId,
      navId: state.navId,
      openCircleNav,
      closeCircleNav
    }}
  >
    {props.children}
  </CircleNavContext.Provider>
}

export default CircleNavState