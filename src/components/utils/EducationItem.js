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
      main: '#333'
    }
  },
  typography: {
    h3: {
      fontSize: '2.2rem',
      '@media (max-width: 700px)': {
        fontSize: '1.4rem'
      },
    },
    h4: {
      fontSize: '1.8rem',
      '@media (max-width: 600px)': {
        fontSize: '1.2rem'
      }
    },
    h5: {
      fontSize: '1.6rem',
      '@media (max-width: 600px)': {
        fontSize: '1.1rem'
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
  },
  image: {
    position: 'relative',
    height: '315px',
    width: '558px',
    margin: 'auto',
    '@media (max-width: 700px)': {
      height: '155px',
      width: '280px'
    }
  },
  imageOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(0,0,0,0.3)',
    width: 'inherit',
    height: 'inherit'
  },
}))

const EducationItem = ({ schoolName, fromDate, toDate, description, diploma, image, link, isCompleted, title }) => {
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
          <Typography
            variant='h3'
            color='secondary'
            style={{ marginBottom: '0.5rem' }}
          >
            {title}
          </Typography>
          <div className={classes.image}>
            <img
              style={{ height: 'inherit', width: 'inherit' }}
              src={
                urlFor(image)
                  .url()
              }
              alt={title}
            />
            {!isCompleted &&
              <img src={inProgress} alt="" className={classes.imageOverlay} />
            }
          </div>

          {/* <CardMedia
            className={classes.media}
            style={{
              backgroundImage: `url(${image})`,
              borderRadius: '15px'
            }}
            alt={schoolName} /> */}
          <CardContent>
            <Typography
              variant='h6'
              color='secondary'
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
              variant='h5'
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
