import React, { useContext } from 'react'
import CircleNavContext from '../../context/circleNav/circleNavContext'
import ScreenContext from '../../context/screen/screenContext'
import { makeStyles } from '@material-ui/core/styles'
import LandingScreen from './LandingScreen'
import ResumeScreen from '../screens/ResumeScreen'
import CoverLetterScreen from '../screens/CoverLetterScreen'
import ProjectsScreen from '../screens/ProjectsScreen'
import ResumeNav from '../sections/ResumeNav'

const useStyles = makeStyles({
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
})

const HomeScreen = () => {
  const circleNavContext = useContext(CircleNavContext)
  const screenContext = useContext(ScreenContext)

  const classes = useStyles();

  const bodyId = circleNavContext.bodyId
  const circleNavOpen = circleNavContext.open

  const { home, resume, coverLetter, projects } = screenContext

  return (
    <>
      <div style={{ position: 'sticky', top: 0, zIndex: 5, background: 'rgba(0,0,0,0.3' }}>
        {resume && !circleNavOpen &&
          <ResumeNav />
        }
      </div>
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
    </>
  )
}

export default HomeScreen;
