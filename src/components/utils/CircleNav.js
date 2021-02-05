import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  IconButton
} from '@material-ui/core'
import { Menu, Close } from '@material-ui/icons'
import CircleNavContext from '../../context/circleNav/circleNavContext'

const useStyles = makeStyles({
  circle: {
    position: 'relative',
    height: '200px',
    width: '200px',
    background: '#333',
    borderRadius: '50%',
    zIndex: 100,
    transition: 'transform 0.5s linear'
  },
  circleContainer: {
    position: 'fixed',
    top: '-100px',
    left: '-100px'
  },
  iconButton: {
    color: '#fff',
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: '100px'
  },
  openButton: {
    left: '60%'
  },
  closeButton: {
    top: '60%',
    tranform: 'rotate(90deg)',
    transformOrigin: 'top left'
  }
})

const CircleNav = () => {
  const circleNavContext = useContext(CircleNavContext)

  const classes = useStyles();

  const handleOpen = () => {
    circleNavContext.openCircleNav()
  }

  const handleClose = () => {
    circleNavContext.closeCircleNav()
  }

  const open = circleNavContext.open

  return (
    <div className={classes.circleContainer}>
      <div className={classes.circle}>
        {!open &&
          <IconButton className={classes.iconButton} style={{ left: '60%' }} onClick={handleOpen}>
            <Menu fontSize="lg" className={classes.openButton} />
          </IconButton>
        }
        {open &&
          <IconButton className={classes.iconButton} style={{ left: '50%' }} onClick={handleClose}>
            <Close />
          </IconButton>
        }
      </div>
    </div>
  )
}

export default CircleNav
