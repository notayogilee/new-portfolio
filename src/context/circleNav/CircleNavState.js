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
    navId: '',
  }

  const [state, dispatch] = useReducer(CircleNavReducer, initialState)

  // Open CircleNav
  const openCircleNav = () => {
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