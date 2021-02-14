import React, { useReducer } from 'react'
import screenContext from './screenContext'
import ScreenReducer from './screenReducer'
import {
  OPEN_HOME_SCREEN,
  OPEN_RESUME_SCREEN,
  OPEN_PROJECTS_SCREEN
} from '../types'

const ScreenState = (props) => {
  const initialState = {
    home: true,
    resume: false,
    projects: false
  }

  const [state, dispatch] = useReducer(ScreenReducer, initialState)

  // Open Home Screen
  const openHomeScreen = () => dispatch({ type: OPEN_HOME_SCREEN })

  // Open Resume Screen
  const openResumeScreen = () => dispatch({ type: OPEN_RESUME_SCREEN })

  // Open Projects Screen
  const openProjectsScreen = () => dispatch({ type: OPEN_PROJECTS_SCREEN })

  return <screenContext.Provider
    value={{
      home: state.home,
      resume: state.resume,
      projects: state.projects,
      openHomeScreen,
      openResumeScreen,
      openProjectsScreen
    }}
  >
    {props.children}
  </screenContext.Provider>
}

export default ScreenState