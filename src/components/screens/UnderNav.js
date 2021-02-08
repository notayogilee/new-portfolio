import React, { useContext } from 'react'
import CircleNavContext from '../../context/circleNav/circleNavContext'
import ScreenContext from '../../context/screen/screenContext'
import {
  Typography,
  Slide,
  Button
} from '@material-ui/core'

const UnderNav = () => {
  const circleNavContext = useContext(CircleNavContext)
  const screenContext = useContext(ScreenContext)

  const { open, closeCircleNav } = circleNavContext

  const { openHomeScreen, openResumeScreen, openCoverLetterScreen, openProjectsScreen } = screenContext

  const openHome = async () => {
    await openHomeScreen()
    closeCircleNav()
  }
  const openResume = async () => {
    await openResumeScreen()
    closeCircleNav()
  }
  const openCoverLetter = () => {
    openCoverLetterScreen()
    closeCircleNav()
  }
  const openProjects = () => {
    openProjectsScreen()
    closeCircleNav()
  }

  return (
    <div style={{
      height: '100vh',
      width: '100%',
      background: '#333',
      overflowX: 'hidden',
      position: 'absolute'
    }}>
      <nav style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'fixed',
        bottom: '60px',
        left: 0,
        color: '#fff',
        paddingLeft: '30px',
        zIndex: 100
      }}>
        <Slide in={open} direction="right" timeout={500}>
          <Button onClick={openHome} style={{ zIndex: 100 }}>
            <Typography style={{ textTransform: 'uppercase', margin: '20px 0', color: '#fff' }}>Home</Typography>
          </Button>

        </Slide>
        <Slide in={open} direction="right" timeout={500}>
          <Button onClick={openResume}>
            <Typography style={{ textTransform: 'uppercase', margin: '20px 0', color: '#fff' }}>Resume</Typography>
          </Button>

        </Slide>
        <Slide in={open} direction="right" timeout={500}>
          <Button onClick={openCoverLetter}>
            <Typography style={{ textTransform: 'uppercase', margin: '20px 0', color: '#fff' }}>Cover Letter</Typography>
          </Button>

        </Slide>
        <Slide in={open} direction="right" timeout={500}>
          <Button onClick={openProjects}>
            <Typography style={{ textTransform: 'uppercase', margin: '20px 0', color: '#fff' }}>Projects</Typography>
          </Button>

        </Slide>
      </nav>
    </div>
  )
}

export default UnderNav
