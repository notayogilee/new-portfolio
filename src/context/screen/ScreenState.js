import React, { useReducer } from 'react'
import screenContext from './screenContext'
import ScreenReducer from './screenReducer'
import {
  OPEN_HOME_SCREEN,
  OPEN_RESUME_SCREEN,
  OPEN_COVER_LETTER_SCREEN,
  OPEN_PROJECTS_SCREEN
} from '../types'

const ScreenState = (props) => {
  const initialState = {
    home: true,
    resume: false,
    coverLetter: false,
    projects: false
  }

  const [state, dispatch] = useReducer(ScreenReducer, initialState)

  // Open Home Screen
  const openHomeScreen = () => {
    dispatch({
      type: OPEN_HOME_SCREEN
    })
  }

  // Open Resume Screen
  const openResumeScreen = () => {
    dispatch({
      type: OPEN_RESUME_SCREEN
    })
  }

  // Open Cover Letter Screen
  const openCoverLetterScreen = () => {
    dispatch({
      type: OPEN_COVER_LETTER_SCREEN
    })
  }

  // Open Projects Screen
  const openProjectsScreen = () => {
    dispatch({
      type: OPEN_PROJECTS_SCREEN
    })
  }

  return <screenContext.Provider
    value={{
      home: state.home,
      resume: state.resume,
      coverLetter: state.coverLetter,
      projects: state.projects,
      openHomeScreen,
      openResumeScreen,
      openCoverLetterScreen,
      openProjectsScreen
    }}
  >
    {props.children}
  </screenContext.Provider>
}

export default ScreenState