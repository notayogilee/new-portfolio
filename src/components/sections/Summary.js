import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%'
  }
}))

const Summary = () => {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <Typography>Summary</Typography>
    </Container>
  )
}

export default Summary
