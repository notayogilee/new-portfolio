import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Typography,
  Fade
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '65vh',
    height: 'auto'
  },
}))

const LandingScreen = () => {
  const classes = useStyles()
  return (
    // <Fade in={home} timeout={500}>
    <Container className={classes.content}>
      <Typography variant="h1">
        Lee Castelani
</Typography>
    </Container>
    // </Fade>
  )
}

export default LandingScreen
