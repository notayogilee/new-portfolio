import React, { useContext } from 'react'
import CircleNavContext from '../../context/circleNav/circleNavContext'
import ScreenContext from '../../context/screen/screenContext'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import {
  Container,
  Typography,
  Fade
} from '@material-ui/core'

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '5rem',
      '@media (max-width: 600px)': {
        fontSize: '1rem'
      }
    },
    h2: {
      fontSize: '3rem',
      '@media (max-width: 600px)': {
        fontSize: '1rem'
      }
    }
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    height: '100%',
    background: '#d68438',
    color: '#F1B24B',
    padding: '50px',
    overflowX: 'hidden',
    transformOrigin: 'top left',
    transition: 'transform 0.5s linear',
    zIndex: 100
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '65vh',
    height: 'auto'
  },
}))

const CoverLetterScreen = () => {
  const circleNavContext = useContext(CircleNavContext)
  const screenContext = useContext(ScreenContext)

  const classes = useStyles();

  const bodyId = circleNavContext.bodyId
  const { coverLetter } = screenContext
  return (
    <ThemeProvider theme={theme}>
      <Fade in={coverLetter} timeout={500}>
        <Container className={classes.content}>
          <Typography variant="h1">
            Cover Letter Screen
      </Typography>
        </Container>
      </Fade>
    </ThemeProvider>
  )
}

export default CoverLetterScreen;
