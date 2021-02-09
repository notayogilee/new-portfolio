import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Typography,
  Grid
} from '@material-ui/core'
import EducationItem from '../utils/EducationItem'
import diploma from '../../images/diploma.jpg'
import college from '../../images/college.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    minHeight: '92.5vh',
    width: '100%',
    paddingBottom: '5rem',
    overflow: 'hidden',
    margin: 'auto'
  }
}))

const Education = () => {
  const classes = useStyles()
  return (
    <Container className={classes.root} maxWidth="lg" disableGutters name="education">
      <Typography variant="h1">Education</Typography>
      <Grid container spacing={5} style={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item xs={12} md={12} lg={5}>
          <EducationItem
            image={diploma}
            name={'Lighthouse Labs'}
            fromDate={'Feb 2020'}
            toDate={'May 2020'}
            description={'Condensed immersion based learning of languages, libraries, frameworks, databases and testing. Development techniques such as debugging, pair programming, and team version control.'}
            diploma={'Manifesto of Software Craftmanship'}
            link={'https://www.lighthouselabs.ca/'}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={5}>
          <EducationItem
            image={college}
            name={'John Abbott College'}
            fromDate={'1998'}
            toDate={'2001'}
            description={'Natural Sciences'}
            diploma={'diplôme d\'études collégiales'}
            link={'http://www.johnabbott.qc.ca/'}
          />
        </Grid>
      </Grid>

      <Typography variant="h1">Online Education</Typography>
      <Grid container>
        <Grid item item xs={12} md={12} lg={5}>

        </Grid>
      </Grid>
    </Container>
  )
}

export default Education

