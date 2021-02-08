import React, { useContext } from 'react'
import CircleNavContext from '../../context/circleNav/circleNavContext'
import ScreenContext from '../../context/screen/screenContext'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Typography,
  Fade
} from '@material-ui/core'
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
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '65vh',
    height: 'auto'
  },
  home: {
    height: 'auto',
    minHeight: '100vh'
  }
})

const HomeScreen = () => {
  const circleNavContext = useContext(CircleNavContext)
  const screenContext = useContext(ScreenContext)

  const classes = useStyles();

  const bodyId = circleNavContext.bodyId
  const { home, resume, coverLetter, projects } = screenContext

  return (
    <>
      <div style={{ position: 'sticky', top: 0, zIndex: 5, background: 'rgba(0,0,0,0.3' }}>
        {resume &&

          <ResumeNav />}
      </div>
      <div className={classes.root} id={bodyId}>
        {home &&
          <Fade in={home} timeout={500}>
            <Container className={classes.content}>
              <Typography variant="h1">
                Lee Castelani
      </Typography>
            </Container>
          </Fade>
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
