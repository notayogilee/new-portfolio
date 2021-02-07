import React, { useContext } from 'react'
import CircleNavContext from '../../context/circleNav/circleNavContext'
import ScreenContext from '../../context/screen/screenContext'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Fade
} from '@material-ui/core'
import Recommendations from '../sections/Recomendations'
import Summary from '../sections/Summary'
import Skills from '../sections/Skills'
import Experience from '../sections/Experience'
import Education from '../sections/Education'

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    height: 'auto',
    background: '#d68438',
    color: '#F1B24B',
    padding: '50px',
    overflowX: 'hidden',
    transformOrigin: 'top left',
    transition: 'transform 0.5s linear',
    zIndex: 100
  }
})

const ResumeScreen = () => {
  const circleNavContext = useContext(CircleNavContext)
  const screenContext = useContext(ScreenContext)

  const classes = useStyles();

  const bodyId = circleNavContext.bodyId
  const { resume } = screenContext
  return (
    <>
      <Fade in={resume} timeout={500}>
        <Container>
          <Recommendations />
          <Summary />
          {/* <Skills />
          <Experience />
          <Education /> */}
        </Container>
      </Fade>
    </>
  )
}

export default ResumeScreen;
