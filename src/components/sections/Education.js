import React, { useContext } from 'react'
import BlockContent from '@sanity/block-content-to-react'
import EducationContext from '../../context/education/educationContext'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Typography,
  Grid
} from '@material-ui/core'
import EducationItem from '../utils/EducationItem'
import TopButton from '../utils/TopButton'
import Particles from '../utils/particles'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    minHeight: '92.5vh',
    width: '100%',
    paddingBottom: '5rem',
    overflow: 'hidden',
    margin: 'auto'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem'
  },
  title: {
    margin: '4rem 0 1rem 0'
  }
}))

const Education = () => {
  const classes = useStyles()
  const educationContext = useContext(EducationContext)

  const { education, loading } = educationContext

  const onlineEducation = education.filter((course) => course.isOnline)
  const schoolEducation = education.filter((course) => !course.isOnline)

  return (
    <Container className={classes.root} maxWidth="lg" disableGutters>
      {loading && <Particles />}

      <Typography
        variant="h1"
        className={classes.title}
      >
        Education
      </Typography>
      <Grid container spacing={5} className={classes.container}>
        {schoolEducation.length > 0 && schoolEducation.map((item) => {
          return (

            <Grid item key={item._id} xs={12} md={12} lg={5}>
              <EducationItem
                image={item.mainImage.asset.url}
                schoolName={item.school}
                course={item.title}
                fromDate={item.fromDate ? moment(item.fromDate).format("MMM YYYY") : ""}
                toDate={item.toDate ? moment(item.toDate).format("MMM YYYY") : ""}
                // BlockContent is a package to facilitate the description content of sanity 
                // because styling and fonts, etc can be added via backend
                description={<BlockContent blocks={item.description} projectId="kd4r1s4u" dataset="production" />}
                diploma={item.diploma}
                link={item.link}
              />
            </Grid>

          )
        })}
      </Grid>

      <Typography
        variant="h1"
        className={classes.title}
      >
        Online Education
      </Typography>
      <Grid container spacing={5} className={classes.container}>
        {onlineEducation.length > 0 && onlineEducation.map((item) => {
          return (

            <Grid item key={item._id} xs={12} md={12} lg={4}>
              <EducationItem
                image={item.mainImage.asset.url}
                schoolName={item.school}
                course={item.title}
                fromDate={item.fromDate ? moment(item.fromDate).format("MMM YYYY") : ""}
                toDate={item.toDate ? moment(item.toDate).format("MMM YYYY") : ""}
                // BlockContent is a package to facilitate the description content of sanity 
                // because styling and fonts, etc can be added via backend
                description={item.description ? <BlockContent blocks={item.description} projectId="kd4r1s4u" dataset="production" /> : ""}
                diploma={item.diploma}
                link={item.link}
              />
            </Grid>

          )
        })}
      </Grid>
      <TopButton />
    </Container>
  )
}

export default Education

