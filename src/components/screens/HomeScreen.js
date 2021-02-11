import React, { useContext } from 'react'
import CircleNavContext from '../../context/circleNav/circleNavContext'
import ScreenContext from '../../context/screen/screenContext'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import LandingScreen from './LandingScreen'
import ResumeScreen from '../screens/ResumeScreen'
import CoverLetterScreen from '../screens/CoverLetterScreen'
import ProjectsScreen from '../screens/ProjectsScreen'
// import ResumeNav from '../utils/ResumeNav'

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '5rem',
      '@media (max-width: 600px)': {
        fontSize: '2rem'
      }
    },
    h3: {
      fontSize: '1.8rem',
      '@media (max-width: 600px)': {
        fontSize: '1rem'
      }
    },
    h6: {
      fontSize: '1.2rem',
      '@media (max-width: 600px)': {
        fontSize: '0.9rem'
      }
    }
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    height: '100%',
    width: 'auto',
    background: '#d68438',
    color: '#F1B24B',
    padding: '50px',
    overflowX: 'hidden',
    transformOrigin: 'top left',
    transition: 'transform 0.5s linear',
    zIndex: 90,
  }
}))

const HomeScreen = () => {
  const circleNavContext = useContext(CircleNavContext)
  const screenContext = useContext(ScreenContext)

  const classes = useStyles();

  const bodyId = circleNavContext.bodyId
  const circleNavOpen = circleNavContext.open

  const { home, resume, coverLetter, projects } = screenContext

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root} id={bodyId}>
        {home &&
          <LandingScreen />
        }
        {resume &&
          <ResumeScreen />
        }
        {coverLetter &&
          <CoverLetterScreen />
        }
        {projects &&
          <ProjectsScreen />
        }
      </div>
    </ThemeProvider>
  )
}

export default HomeScreen;
