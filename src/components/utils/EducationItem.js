import React from 'react'
import {
  Typography,
  Card,
  CardContent,
  CardMedia
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles({
  root: {
    height: 'auto',
    width: '100%',
    padding: '1rem'
  },
  media: {
    height: 0,
    paddingTop: '80%'
  }
})

const EducationItem = ({ name, fromDate, toDate, description, diploma, image, link }) => {
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
          image={image} />
        <CardContent>
          <Typography variant='h4'>
            {name}
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
