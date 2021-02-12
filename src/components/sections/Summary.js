import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Typography,
  Paper,
  Slide
} from '@material-ui/core'
import laptop from '../../images/bootcamp.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '92.5vh',
    width: '100%',
    paddingBottom: '5rem'
  },
  container: {
    backgroundImage: `url(${laptop})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80%',
    width: '100%',
    position: 'relative',
  },
  text: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    padding: '2rem',
    textAlign: 'justify',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center'
  }
}))

const Summary = ({ summary }) => {
  const classes = useStyles()

  return (
    <div>
      <Container className={classes.root} maxWidth="lg" disableGutters >
        <Slide in={summary} direction="left" timeout={250}>
          <Typography variant="h1">Summary</Typography>
        </Slide>
        <Slide in={summary} direction="right" timeout={250}>
          <Paper
            className={classes.container}
          >
            <Typography variant="h3" className={classes.text}>Pharmacy tech turned full-stack web developer, eager to contribute to a team, sharpen & add new skills. I transformed my hobby for coding into a passion and took the leap to make it a career. I left my job with a partial scholarship from Lighthouse Labs to get the foundation I needed and am now excited about the new challenges awaiting.</Typography>

          </Paper>
        </Slide>
      </Container>
    </div>
  )
}

export default Summary
