import React, { useContext } from 'react'
import CircleNavContext from '../../context/circleNav/circleNavContext'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles({
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
})

const ResumeScreen = () => {
  const circleNavContext = useContext(CircleNavContext)
  const classes = useStyles();

  const bodyId = circleNavContext.bodyId
  return (
    <div className={classes.root} id={bodyId}>
      <Container className={classes.content}>
        <Typography variant="h1">
          Lee Castelani
      </Typography>
      </Container>
    </div>
  )
}

export default ResumeScreen;
