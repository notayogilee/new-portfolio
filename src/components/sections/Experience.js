import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Typography,
  Slide,
  Link
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '92.5vh',
    width: '100%',
    padding: '0.5rem',
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
  link: {
    color: '#333',
    display: 'inline !important',
    '&:hover': {
      textDecoration: 'none',
      color: '#F1B24B'
    }
  }
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
          <Link className={classes.link} href="https://icam.com" target="_blank" referrer="norefferer">
            <Typography
              variant="h3"
              paragraph
            >
              ICAM Technologies
            </Typography>
          </Link>

          <Typography
            paragraph
            variant="h6">
            Full Stack Developer - Marketing Team
          </Typography>
          <Typography
            paragraph
            variant="h6">
            August 2021 - present
          </Typography>
          <Typography
            variant="h6">
            Refactoring, maintaining and adding features to online quoting app using Vue.js and PHP. Add and improve
            features on intranet using PHP. Contribute ideas for marketing strategies.
          </Typography>
          <Link className={classes.link} href="https://quote.icam.com/getting-started/solution" target="_blank" referrer="norefferer">
            <Typography variant='h3'>
              quote.icam.com
            </Typography>
          </Link>

        </div>
      </Slide>
    </Container>
  )
}

export default Experience

