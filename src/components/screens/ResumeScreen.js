import React, { useContext } from 'react'
import CircleNavContext from '../../context/circleNav/circleNavContext'
import ScreenContext from '../../context/screen/screenContext'
import {
  Fade
} from '@material-ui/core'
import ResumeNav from '../sections/ResumeNav'
import Recommendations from '../sections/Recomendations'
import Summary from '../sections/Summary'
import Skills from '../sections/Skills'
import Experience from '../sections/Experience'
import Education from '../sections/Education'

const ResumeScreen = () => {
  const circleNavContext = useContext(CircleNavContext)
  const screenContext = useContext(ScreenContext)

  // const classes = useStyles(theme);

  const bodyId = circleNavContext.bodyId
  const { resume } = screenContext
  return (

    <div>

      <Recommendations />
      <Summary />
      <Skills />
      <Experience />
      <Education />
    </div>
  )
}

export default ResumeScreen;
