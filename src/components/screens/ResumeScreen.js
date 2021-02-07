import React, { useContext } from 'react'
import CircleNavContext from '../../context/circleNav/circleNavContext'
import ScreenContext from '../../context/screen/screenContext'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import {
  Container,
  Fade
} from '@material-ui/core'
import Recommendations from '../sections/Recomendations'
import Summary from '../sections/Summary'
import Skills from '../sections/Skills'
import Experience from '../sections/Experience'
import Education from '../sections/Education'

const theme = createMuiTheme({
  typography: {
    h3: {
      fontSize: '1.8rem',
      '@media (max-width: 600px)': {
        fontSize: '1rem'
      }
    }
  }
})

const useStyles = makeStyles((theme) => ({
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
}))

const ResumeScreen = () => {
  const circleNavContext = useContext(CircleNavContext)
  const screenContext = useContext(ScreenContext)

  const classes = useStyles(theme);

  const bodyId = circleNavContext.bodyId
  const { resume } = screenContext
  return (
    <ThemeProvider theme={theme}>
      <Fade in={resume} timeout={500}>
        <Container>
          <Recommendations />
          <Summary />
          <Skills />
          {/* <Experience />
          <Education /> */}
        </Container>
      </Fade>
    </ThemeProvider>
  )
}

export default ResumeScreen;
