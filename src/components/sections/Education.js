import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Typography,
  Paper
} from '@material-ui/core'
import laptop from '../../images/bootcamp.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '92.5vh',
    width: '100%',
    paddingBottom: '5rem'
  },
  // container: {
  //   backgroundImage: `url(${laptop})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   height: '80%',
  //   width: '100%',
  //   position: 'relative',
  // },
  // text: {
  //   position: 'absolute',
  //   height: '100%',
  //   width: '100%',
  //   padding: '2rem',
  //   textAlign: 'justify',
  //   backgroundColor: 'rgba(0,0,0,0.5)',
  //   color: '#fff',
  //   display: 'flex',
  //   alignItems: 'center'
  // }
}))

const Education = () => {
  const classes = useStyles()
  return (
    <div>
      <Container className={classes.root} maxWidth="lg" disableGutters name="education">
        <Typography variant="h1">Education</Typography>
        <Paper
          className={classes.container}
        >


        </Paper>
      </Container>
    </div>
  )
}

export default Education

