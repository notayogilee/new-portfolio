import React, { useContext } from 'react'
import CircleNavContext from '../../context/circleNav/circleNavContext'
import {
  Typography,
  Slide,
  Button
} from '@material-ui/core'

const UnderNav = () => {
  const circleNavContext = useContext(CircleNavContext)

  const open = circleNavContext.open

  return (
    <div style={{
      height: '100vh',
      width: '100%',
      background: '#333',
      zIndex: 1,
      overflowX: 'hidden'
    }}>
      <nav style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'fixed',
        bottom: '60px',
        left: 0,
        color: '#fff',
        paddingLeft: '30px'
      }}>
        <Slide in={open} direction="right" timeout={500}>
          <Button>
            <Typography style={{ textTransform: 'uppercase', margin: '20px 0', color: '#fff' }}>Resume</Typography>
          </Button>

        </Slide>
        <Slide in={open} direction="right" timeout={500}>
          <Button>
            <Typography style={{ textTransform: 'uppercase', margin: '20px 0', color: '#fff' }}>Cover Letter</Typography>
          </Button>

        </Slide>
        <Slide in={open} direction="right" timeout={500}>
          <Button>
            <Typography style={{ textTransform: 'uppercase', margin: '20px 0', color: '#fff' }}>Projects</Typography>
          </Button>

        </Slide>
      </nav>
    </div>
  )
}

export default UnderNav
