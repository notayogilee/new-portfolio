import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Typography,
  Grid,
  Slide
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: '5rem',

  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100vw'
  },
  content: {
    padding: '1rem 1rem 0 1rem',
    color: '#333',
    '@media (max-width: 600px)': {
      padding: 0
    }
  },
  footer: {
    width: '100%',
    textAlign: 'right',
    padding: '0 1rem 1rem 1rem',
    fontStyle: 'italic',
    color: '#333'
  }
}))

const Recomendations = ({ recommendations }) => {
  const classes = useStyles()

  return (
    <>
      <Container>
        <Slide direction="left" in={recommendations} timeout={250}>
          <Typography
            variant="h1"
            style={{
              margin: '3rem 0 1rem 0'
            }}
          >
            Recomendations
        </Typography>
        </Slide>
      </Container>
      <Container className={classes.root} disableGutters>
        <Grid container spacing={4} style={{ margin: 'auto' }} >
          <Slide direction="right" in={recommendations} timeout={250}>
            <Grid item className={classes.item} xs={12} sm={10} md={6} lg={4}>
              {/* <div className={classes.paper} elevation={5}> */}
              <Typography
                component="div"
                align="justify"
                className={classes.content}
                variant="h5"
              >
                It was impressive to observe Lee's progress, dedication, and persistence through the course. Lee showed to be curious, thoughtful, constructive in approaching the high workloads, as well as a great team player.
              </Typography>
              <Typography
                component="div"
                align="center"
                className={classes.footer}
              >
                -Max Kay was Lee's mentor at Lighthouse Labs
                </Typography>
              {/* </div> */}
            </Grid>
          </Slide>
          <Slide direction="up" in={recommendations} timeout={250}>
            <Grid item className={classes.item} xs={12} sm={10} md={6} lg={4}>
              {/* <div className={classes.paper} elevation={5}> */}
              <Typography
                align="justify"
                className={classes.content}
                variant="h5"
              >
                I mentored Lee during his time through Lighthouse Labs' intensive web development bootcamp. He is extremely hard-working and consistently put in the work needed to finish the curriculum, even when the going was tough. Lee quickly transformed from being uncertain about his work to fearlessly tackling difficult challenges head-on. I believe that he has the tenacity, persistence, and dedication to both excel as a junior developer and grow into a valuable member of any software team.
                </Typography>
              <Typography
                className={classes.footer}
              >
                -David Newman was Lee's mentor at Lighthouse Labs
                </Typography>
              {/* </div> */}
            </Grid>
          </Slide>
          <Slide direction="left" in={recommendations} timeout={250}>
            <Grid item className={classes.item} xs={12} sm={10} md={6} lg={4}>
              {/* <div className={classes.paper} elevation={5}> */}
              <Typography
                align="justify"
                className={classes.content}
                variant="h5"
              >
                If I had the ability to clone any of the hundreds of students I've had the pleasure of assisting during my time at LHL, Lee would be my first choice. (sorry, other grads). He's such a hard-working guy, never gives up, always up for a challenge, and so positive to top it off. He'll be the best junior dev you'll hire!
                </Typography>
              <Typography
                align="center"
                className={classes.footer}
              >
                -Marie Lecourt was Lee's career counselor at Lighthouse Labs
                </Typography>
              {/* </div> */}
            </Grid>
          </Slide>
        </Grid>
      </Container>
    </>
  )
}

export default Recomendations
