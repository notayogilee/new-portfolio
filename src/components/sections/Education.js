import React, { useContext } from 'react'
import EducationContext from '../../context/education/educationContext'

import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Typography,
  Grid
} from '@material-ui/core'
import EducationItem from '../utils/EducationItem'
// import diploma from '../../images/diploma.jpg'
// import college from '../../images/college.jpg'




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
  const educationContext = useContext(EducationContext)

  const { education, loading } = educationContext

  return (
    <Container className={classes.root} maxWidth="lg" disableGutters name="education">
      {loading && 'Loading...'}
      <Typography variant="h1">Education</Typography>
      <Grid container spacing={5} style={{ display: 'flex', justifyContent: 'center' }}>
        {education.length > 0 && education.map((item) => {
          return (
            <Grid item key={item._id} xs={12} md={12} lg={5}>
              <EducationItem
                image={item.mainImage.asset.url}
                schoolName={item.school}
                course={item.title}
                fromDate={item.fromDate}
                toDate={item.toDate}
                // description={item.description[0].children[0].text}
                diploma={item.diploma}
                link={item.link}
              />
            </Grid>
          )
        })

        }

        {/* <Grid item xs={12} md={12} lg={5}>
          <EducationItem
            image={college}
            name={'John Abbott College'}
            fromDate={'1998'}
            toDate={'2001'}
            description={'Natural Sciences'}
            diploma={'diplôme d\'études collégiales'}
            link={'http://www.johnabbott.qc.ca/'}
          />
        </Grid> */}
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

