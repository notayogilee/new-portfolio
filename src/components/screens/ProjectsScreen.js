import React, { useContext } from 'react'
import CircleNavContext from '../../context/circleNav/circleNavContext'
import ScreenContext from '../../context/screen/screenContext'
import ProjectsContext from '../../context/projects/projectsContext'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Typography,
  Fade
} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    height: '100%',
    background: '#d68438',
    color: '#F1B24B',
    padding: '50px',
    overflowX: 'hidden',
    transformOrigin: 'top left',
    transition: 'transform 0.5s linear',
    zIndex: 100
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '65vh',
    height: 'auto'
  },
})

const ProjectsScreen = () => {
  const circleNavContext = useContext(CircleNavContext)
  const screenContext = useContext(ScreenContext)
  const projectsContext = useContext(ProjectsContext)

  const classes = useStyles();

  const bodyId = circleNavContext.bodyId
  const { projects } = screenContext
  const { projects: myProjects } = projectsContext

  // const personalProjects = 

  return (
    <>
      <Fade in={projects} timeout={500}>
        <Container className={classes.content}>
          <Typography variant="h1">
            Projects Screen
      </Typography>
        </Container>
      </Fade>
    </>
  )
}

export default ProjectsScreen;
