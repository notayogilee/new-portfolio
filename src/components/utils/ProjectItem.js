import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../../client'
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
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
    paddingTop: '56.25%'
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1rem'
  },
  button: {
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    border: 'solid 1px #333',
    borderRadius: '20px',
    marginRight: '1rem',
    background: '#F1B24B',
    width: '140px'
  }
}))

const ProjectItem = ({ image, gitHubLink, isCompleted, dateCompleted, title, description, type, typeImage, deployedLink }) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root} elevation={0}>
        <CardMedia
          className={classes.media}

          style={{
            backgroundImage: `url(${image})`,
            borderRadius: '15px'
          }}
          alt={title} />
        <CardContent>
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

          <Typography
            variant='h5'
            color='secondary'
            style={{ textAlign: 'justify', marginTop: '0.5rem' }}
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
