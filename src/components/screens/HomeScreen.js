import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Typography,
  IconButton,
  Box
} from '@material-ui/core'
import { Menu, Close } from '@material-ui/icons'

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    height: '100%',
    width: '100%',
    background: '#d68438',
    color: '#F1B24B',
    padding: '50px',
    overflowX: 'hidden',
    transformOrigin: 'top left',
    transition: 'transform 0.5s linear',
    border: 0
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '65vh',
    height: 'auto'
  },
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

const HomeScreen = () => {
  const classes = useStyles();

  const [open, setOpen] = useState("");

  const handleOpen = () => {
    setOpen("open")
  }

  const handleClose = () => {
    setOpen("")
  }

  return (
    <div className={classes.root} id={open}>
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

      <Container className={classes.content}>
        <Typography variant="h1">
          Lee Castelani
      </Typography>
      </Container>

    </div>
  )
}

export default HomeScreen;
