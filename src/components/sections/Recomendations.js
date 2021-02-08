import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Typography,
  Grid,
  Paper
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    minHeight: '100vh',
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    // padding: theme.spacing(4),
    height: '600px',
    margin: 'auto'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    minHeight: '550px'
  },
  content: {
    position: 'absolute',
    top: '20px',
    padding: '1rem',
    height: '550px',
    minHeight: '550px'

  },
  footer: {
    position: 'absolute',
    bottom: 0,
    padding: '1rem',
    background: '#333',
    color: '#fff',
    width: '100%',
    minHeight: '75px'
  }
}))

const Recomendations = () => {
  const classes = useStyles()

  return (
    <div>
      <Container className={classes.root} disableGutters name="recommendations" id="recommendations">
        <Grid container spacing={4} >
          <Grid item className={classes.item} xs={12} sm={10} md={6} lg={4}>
            <Paper className={classes.paper} elevation={5}>
              <Typography
                align="justify"
                className={classes.content}
              >
                It was impressive to observe Lee's progress, dedication, and persistence through the course. Lee showed to be curious, thoughtful, constructive in approaching the high workloads, as well as a great team player.
          </Typography>
              <Typography
                align="center"
                className={classes.footer}
              >
                Max Kay was Lee's mentor at Lighthouse Labs
          </Typography>
            </Paper>
          </Grid>
          <Grid item className={classes.item} xs={12} sm={10} md={6} lg={4}>
            <Paper className={classes.paper} elevation={5}>
              <Typography
                align="justify"
                className={classes.content}
              >
                I mentored Lee during his time through Lighthouse Labs' intensive web development bootcamp. He is extremely hard-working and consistently put in the work needed to finish the curriculum, even when the going was tough. Lee quickly transformed from being uncertain about his work to fearlessly tackling difficult challenges head-on. I believe that he has the tenacity, persistence, and dedication to both excel as a junior developer and grow into a valuable member of any software team.
        </Typography>
              <Typography
                align="center"
                className={classes.footer}
              >
                David Newman was Lee's mentor at Lighthouse Labs
        </Typography>
            </Paper>
          </Grid>
          <Grid item className={classes.item} xs={12} sm={10} md={6} lg={4}>
            <Paper className={classes.paper} elevation={5}>
              <Typography
                align="justify"
                className={classes.content}
              >
                If I had the ability to clone any of the hundreds of students I've had the pleasure of assisting during my time at LHL, Lee would be my first choice. (sorry, other grads). He's such a hard-working guy, never gives up, always up for a challenge, and so positive to top it off. He'll be the best junior dev you'll hire!
          </Typography>
              <Typography
                align="center"
                className={classes.footer}
              >
                Marie Lecourt was Lee's career counselor at Lighthouse Labs
          </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Recomendations
