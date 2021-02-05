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

  // Open Resume Screen

  // Open Cover Letter Screen

  // Open Projects Screen

  return <screenContext.Provider
    value={{
      home: state.home,
      resume: state.resume,
      coverLetter: state.coverLetter,
      projects: state.projects
    }}
  >
    {props.children}
  </screenContext.Provider>
}

export default ScreenState