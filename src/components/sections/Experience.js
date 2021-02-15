import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Typography,
  Slide
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '92.5vh',
    width: '100%',
    paddingBottom: '5rem',
    display: 'flex',
    flexDirection: 'column',
    margin: '2rem 0 4rem 0',
    '@media (max-width: 700px)': {
      padding: '0.5rem'
    }
  },
  container: {
    height: 'auto',
    color: '#333',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '2rem 0 4rem 0',
    padding: '2rem',
    '@media (max-width: 700px)': {
      padding: '0.5rem'
    }
  },
}))

const Experience = ({ experience }) => {
  const classes = useStyles()

  return (
    <Container className={classes.root} maxWidth="lg" disableGutters>
      <Slide in={experience} direction="left" timeout={250}>
        <Typography variant="h1">Employment</Typography>
      </Slide>
      <Slide in={experience} direction="right" timeout={250}>
        <div
          className={classes.container}
        >
          <Typography
            variant="h3"
            paragraph
          >
            McGill University Health Center
        </Typography>
          <Typography
            paragraph
            variant="h6">
            2008-2020
        </Typography>
          <Typography
            variant="h6">
            Worked in various departments: main pharmacy, I.C.U., O.R., and oncology.
            Specializing in oncology, part of a team that processed and prepared medications and chemotherapy.
            Adapted to constantly changing protocols, norms and procedures.
            Involved in relocating and setting up pharmacy in new hospital.
        </Typography>
        </div>
      </Slide>
    </Container>
  )
}

export default Experience

