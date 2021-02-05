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
    addId: ''
  }

  const [state, dispatch] = useReducer(CircleNavReducer, initialState)

  // Open CircleNav
  const openCircleNav = () => {
    dispatch({
      type: OPEN_CIRCLE_NAV,
      payload: 'open'
    })
  }

  // Close CircleNav
  const closeCircleNav = () => {
    dispatch({
      type: CLOSE_CIRCLE_NAV,
      payload: ''
    })
  }

  return <CircleNavContext.Provider
    value={{
      open: state.open,
      addId: state.addId,
      openCircleNav,
      closeCircleNav
    }}
  >
    {props.children}
  </CircleNavContext.Provider>
}

export default CircleNavState