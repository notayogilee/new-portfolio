import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core'
import { Menu, Close } from '@material-ui/icons'
import CircleNavContext from '../../context/circleNav/circleNavContext'

const useStyles = makeStyles({
  circle: {
    position: 'relative',
    height: '200px',
    width: '200px',
    background: '#333',
    borderRadius: '50%',
    zIndex: 200,
  },
  circleContainer: {
    position: 'fixed',
    top: '-100px',
    left: '-100px',
    transition: 'transform 0.5s linear'
  },
  iconButton: {
    color: '#fff',
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: '100px'
  },
  openButton: {
    position: 'absolute',
    left: '70%',
    color: '#F1B24B'
  },
  closeButton: {
    position: 'absolute',
    top: '50%',
    left: '-180%',
    color: '#F1B24B'
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

  const rotateCircleNav = circleNavContext.navId

  return (
    <div className={classes.circleContainer} id={rotateCircleNav}>
      <div className={classes.circle} >

        <IconButton
          className={classes.iconButton}
          onClick={handleOpen}
          disableRipple="true"
          aria-label="open main menu"
        >
          <Menu fontSize="large" className={classes.openButton} />
        </IconButton>
        <IconButton
          className={classes.iconButton}
          onClick={handleClose}
          disableRipple="true"
          aria-label="close main menu"
        >
          <Close fontSize="large" className={classes.closeButton} />
        </IconButton>

      </div>
    </div>
  )
}

export default CircleNav
