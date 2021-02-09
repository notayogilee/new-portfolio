import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../../client'
import {
  Typography,
  Card,
  CardContent,
  CardMedia
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'

// image builder tailored for the image in the response from sanity backend
const builder = imageUrlBuilder(sanityClient)

function urlFor(source) {
  return builder.image(source)
}

const useStyles = makeStyles({
  root: {
    height: 'auto',
    width: '100%',
    padding: '1rem',
    '@media (min-width: 600px)': {
      minHeight: '700px',
    }
  },
  media: {
    height: 0,
    paddingTop: '80%'
  }
})

const EducationItem = ({ schoolName, fromDate, toDate, description, course, diploma, image, link }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Link
        href={link}
        rel='noopener'
        target='_blank'
        style={{ textDecoration: 'none' }}
      >
        <CardMedia
          className={classes.media}
          image={`urlFor(${image})`}
          alt={schoolName} />
        <CardContent>
          <Typography variant='h4'>
            {schoolName}
          </Typography>
          <Typography
            paragraph
            variant='h6'
          >
            {course}
          </Typography>
          <Typography
            paragraph
            variant='h6'
          >
            {fromDate} - {toDate}
          </Typography>
          <Typography
            paragraph
            variant='subtitle1'
            style={{ textAlign: 'justify' }}
          >
            {description}
          </Typography>
          <Typography variant='h6'>
            {diploma}
          </Typography>
        </CardContent>
      </Link>

    </Card>
  )
}

export default EducationItem
