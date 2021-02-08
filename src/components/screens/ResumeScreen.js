import React, { useContext } from 'react'
import CircleNavContext from '../../context/circleNav/circleNavContext'
import ScreenContext from '../../context/screen/screenContext'
import Recommendations from '../sections/Recomendations'
import Summary from '../sections/Summary'
import Skills from '../sections/Skills'
import Experience from '../sections/Experience'
import Education from '../sections/Education'

const ResumeScreen = () => {
  const circleNavContext = useContext(CircleNavContext)
  const screenContext = useContext(ScreenContext)

  const bodyId = circleNavContext.bodyId
  const { resume } = screenContext
  return (

    <div>
      <Recommendations />
      <Summary />
      <Skills />
      <Education />
      <Experience />
    </div>
  )
}

export default ResumeScreen;
