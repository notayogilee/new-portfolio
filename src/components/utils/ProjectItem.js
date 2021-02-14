import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../../client'
import {
  Typography,
  Card,
  CardContent,
  IconButton
} from '@material-ui/core'
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles'
import {
  GitHub,
  Language
} from '@material-ui/icons'
import comingSoon from '../../images/comingSoon.png'

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
  content: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '700px',
    justifyContent: 'center',
    margin: 'auto'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem'
  },
  image: {
    position: 'relative',
    height: '315px',
    width: '558px',
    margin: 'auto',
    background: '#d68438',
    '@media (max-width: 700px)': {
      height: '155px',
      width: '280px'
    }
  },
  imageOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50.15%)',
    background: 'rgba(0,0,0,0.3)',
    width: 'inherit',
    height: 'inherit'
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1rem',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
    }
  },
  button: {
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: '20px',
    marginRight: '1rem',
    background: '#F1B24B',
    width: '140px',
    '@media (max-width: 600px)': {
      marginTop: '0.5rem'
    }
  }
}))

const ProjectItem = ({ image, gitHubLink, isCompleted, dateCompleted, title, description, type, typeImage, deployedLink }) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root} elevation={0}>
        <CardContent className={classes.content}>
          <div className={classes.header}>
            <Typography
              variant='h3'
              color='secondary'
            >
              {title}
            </Typography>
            <Typography
              variant='h6'
              color='secondary'
              style={{ marginTop: '0.5rem' }}
            >
              {dateCompleted &&
                `Completed ${dateCompleted}`
              }
            </Typography>
          </div>

          <div className={classes.image}>
            <img
              style={{
                height: 'inherit',
                width: 'inherit',
                background: '#d68438',
              }}
              src={
                urlFor(image)
                  .url()
              }
              alt={title}
            />
            {!isCompleted &&
              <img src={comingSoon} alt="" className={classes.imageOverlay} />
            }
          </div>

          <Typography
            variant='h5'
            color='secondary'
            style={{ textAlign: 'justify', marginTop: '0.5rem', width: '100%' }}
          >
            {description}
          </Typography>
          <div className={classes.links}>
            {gitHubLink &&
              <IconButton
                className={classes.button}
                href={gitHubLink}
                target="_blank"
                rel="noopener norefferrer"
                aria-label="github link"
              >
                <GitHub fontSize="large" />

                <Typography
                  variant="div"
                >
                  Code
                </Typography>
              </IconButton>
            }
            {deployedLink &&
              <IconButton
                className={classes.button}
                href={deployedLink}
                target="_blank"
                rel="noopener norefferrer"
                aria-label="deployed website link"
              >
                <Language fontSize="large" />
                <Typography
                  variant="div"
                >
                  Website
                </Typography>
              </IconButton>
            }
          </div>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}

export default ProjectItem
