import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../../client'
import {
  Typography,
  Card,
  CardContent,
  CardMedia
} from '@material-ui/core'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import inProgress from '../../images/inProgress.png'

// image builder tailored for the image in the response from sanity backend
const builder = imageUrlBuilder(sanityClient)

function urlFor(source) {
  return builder.image(source)
}

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#fff'
    }
  },
  typography: {
    h4: {
      fontSize: '1.8rem',
      '@media (max-width: 600px)': {
        fontSize: '1.2rem'
      }
    },
    h6: {
      fontSize: '1.2rem',
      '@media (max-width: 600px)': {
        fontSize: '1rem'
      }
    }
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    width: '100%',
    padding: '1rem',
    background: '#d68438',
    '@media (max-width: 600px)': {
      padding: 0
    }
  },
  media: {
    height: 0,
    paddingTop: '80%'
  }
}))

const EducationItem = ({ schoolName, fromDate, toDate, description, course, diploma, image, link }) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root} elevation={0}>
        <Link
          href={link}
          rel='noopener'
          target='_blank'
          style={{ textDecoration: 'none' }}
        >
          <CardMedia
            className={classes.media}
            style={{
              backgroundImage: `url(${image})`,
              borderRadius: "5px"
            }}
            alt={schoolName} />
          <CardContent>
            <Typography
              variant='h4'
              color='secondary'
            >
              {course}
            </Typography>
            <Typography
              variant='h6'
              color='secondary'
              style={{ marginTop: '0.5rem' }}
            >

              {diploma ? (`${schoolName} | ${diploma}`) : (schoolName)}
            </Typography>
            <Typography
              variant='h6'
              color='secondary'
              style={{ marginTop: '0.5rem' }}
            >
              {fromDate ?
                (
                  `${fromDate} - ${toDate}`
                ) : toDate ? (
                  `Completed ${toDate}`
                ) : (
                    ''
                  )
              }
            </Typography>
            <Typography
              variant='subtitle1'
              color='secondary'
              style={{ textAlign: 'justify', marginTop: '0.5rem' }}
            >
              {description}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </ThemeProvider>
  )
}

export default EducationItem
