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
import Spinner from '../utils/Spinner'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    minHeight: '92.5vh',
    width: '100%',
    padding: '0.5rem',
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

  return (
    <Container className={classes.root} maxWidth="lg" disableGutters>
      {loading &&
        <Spinner />}
      {education && education.length > 0 && education.map((educationItem) => {
        return (
          <>
            <Typography
              variant="h1"
              className={classes.title}
            >
              {educationItem[0].isOnline ? 'Online Education' : 'Education'}
            </Typography>

            <Grid container spacing={5} className={classes.container}>
              {educationItem.map((item) => {
                return (
                  <Grid item key={item._id} xs={12} md={12} lg={6}>
                    <EducationItem
                      image={item.mainImage.asset.url}
                      schoolName={item.school}
                      title={item.title}
                      fromDate={item.fromDate ? moment(item.fromDate).format("MMM YYYY") : ""}
                      toDate={item.toDate ? moment(item.toDate).format("MMM YYYY") : ""}
                      // BlockContent is a package to facilitate the description content of sanity 
                      // because styling and fonts, etc can be added via backend
                      description={<BlockContent blocks={item.description} projectId="kd4r1s4u" dataset="production" />}
                      diploma={item.diploma}
                      link={item.link}
                      isCompleted={item.isCompleted}
                    />
                  </Grid>
                )
              })}
            </Grid>
          </>
        )
      })
      }
      <TopButton />
    </Container>
  )
}

export default Education

