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
    height: 'auto',
    minHeight: '80vh',
    width: '100%',
    padding: '0.5rem'
  },
  container: {
    backgroundImage: `url(${laptop})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: 'auto',
    minHeight: '60vh',
    width: '100%',
    position: 'relative',
    '@media (max-width: 700px)': {
      minHeight: '100vh'
    }
  },
  text: {
    position: 'absolute',
    height: 'auto',
    minHeight: '100%',
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
        <Slide in={summary} direction="left">
          <Typography
            variant="h1"
            style={{
              margin: '3rem 0 1rem 0'
            }}
          >
            Summary
          </Typography>
        </Slide>
        <Slide in={summary} direction="right">
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
