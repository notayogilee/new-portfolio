import React, { useContext } from 'react'
import CircleNavContext from '../../context/circleNav/circleNavContext'
import ScreenContext from '../../context/screen/screenContext'
import ProjectsContext from '../../context/projects/projectsContext'
import {
  Typography,
  Slide,
  Button
} from '@material-ui/core'
import Particles from '../utils/particles'

const UnderNav = () => {
  const circleNavContext = useContext(CircleNavContext)
  const screenContext = useContext(ScreenContext)
  const projectsContext = useContext(ProjectsContext)

  const { open, closeCircleNav } = circleNavContext
  const { openHomeScreen, openResumeScreen, openProjectsScreen } = screenContext
  const { fetchProjectsDetails } = projectsContext

  const noScroll = function () {
    window.scrollTo(0, 0)
  }

  const openHome = async () => {
    await openHomeScreen()
    window.removeEventListener('scroll', noScroll)
    closeCircleNav()
  }
  const openResume = async () => {
    await openResumeScreen()
    window.removeEventListener('scroll', noScroll)
    closeCircleNav()
  }

  const openProjects = () => {
    openProjectsScreen()
    if (!sessionStorage.getItem('projects')) {
      fetchProjectsDetails()
    }
    window.removeEventListener('scroll', noScroll)
    closeCircleNav()
  }

  return (
    <div style={{
      height: '100vh',
      width: '100%',
      background: 'transparent',
      overflowX: 'hidden',
      position: 'absolute',

    }}>
      <Particles />
      <nav style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'fixed',
        bottom: '60px',
        left: '30px',
        color: '#fff',
        paddingLeft: '30px',
        zIndex: 100
      }}>
        <Slide in={open} direction="right" timeout={500}>
          <Button onClick={openHome} style={{ zIndex: 100 }}>
            <Typography variant="h6" style={{ textTransform: 'uppercase', margin: '20px 0', color: '#fff' }}>Home</Typography>
          </Button>
        </Slide>

        <Slide in={open} direction="right" timeout={500}>
          <Button onClick={openResume}>
            <Typography variant="h6" style={{ textTransform: 'uppercase', margin: '20px 0', color: '#fff' }}>Resume</Typography>
          </Button>
        </Slide>

        <Slide in={open} direction="right" timeout={500}>
          <Button onClick={openProjects}>
            <Typography variant="h6" style={{ textTransform: 'uppercase', margin: '20px 0', color: '#fff' }}>Projects</Typography>
          </Button>
        </Slide>
      </nav>
    </div>
  )
}

export default UnderNav
