import React, { useContext } from 'react'
import CircleNavContext from '../../context/circleNav/circleNavContext'
import ScreenContext from '../../context/screen/screenContext'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import LandingScreen from './LandingScreen'
import ResumeScreen from '../screens/ResumeScreen'
import ProjectsScreen from '../screens/ProjectsScreen'

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '5rem',
      '@media (max-width: 700px)': {
        fontSize: '3rem'
      }
    },
    h2: {
      fontSize: '3rem',
      '@media (max-width: 700px)': {
        fontSize: '2.2rem'
      }
    },
    h3: {
      fontSize: '2.2rem',
      '@media (max-width: 700px)': {
        fontSize: '1.6rem'
      }
    },
    h4: {
      fontSize: '2rem',
      '@media (max-width: 700px)': {
        fontSize: '1.2rem'
      }
    },
    h5: {
      fontSize: '1.6rem',
      '@media (max-width: 700px)': {
        fontSize: '1.2rem'
      }
    },
    h6: {
      fontSize: '1.2rem',
      '@media (max-width: 700px)': {
        fontSize: '1rem'
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
    '@media (max-width: 600px)': {
      padding: '4rem 0 0 0'
    }
  }
}))

const HomeScreen = () => {
  const circleNavContext = useContext(CircleNavContext)
  const screenContext = useContext(ScreenContext)

  const classes = useStyles();

  const bodyId = circleNavContext.bodyId
  const { home, resume, projects } = screenContext

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root} id={bodyId}>
        {home &&
          <LandingScreen home={home} />
        }
        {resume &&
          <ResumeScreen resume={resume} />
        }
        {projects &&
          <ProjectsScreen />
        }
      </div>
    </ThemeProvider>
  )
}

export default HomeScreen;
