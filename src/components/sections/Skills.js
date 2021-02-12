import React from 'react'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { Typography, Slide } from '@material-ui/core'
import laptop from '../../images/laptopSkills.jpg'

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: '3rem',
      '@media (max-width: 700px)': {
        fontSize: '1.8rem'
      }
    },
    h3: {
      fontSize: '2.2rem',
      '@media (max-width: 700px)': {
        fontSize: '1.4rem'
      }
    },
    h4: {
      fontSize: '1.8rem',
      '@media (max-width: 700px)': {
        fontSize: '1.2rem'
      }
    },
    h6: {
      fontSize: '1.2rem',
      '@media (max-width: 700px)': {
        fontSize: '1rem'
      }
    }
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    height: '90vh',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    backgroundImage: `url(${laptop})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '80%',
    width: '100%',
    position: 'relative',
    borderRadius: '15px'
  },
  text: {
    height: '100%',
    width: '100%',
    padding: '2rem',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: '15px'
  }
}))

const Skills = ({ skills }) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Slide in={skills} direction="left" timeout={250}>
          <Typography component="div" variant="h1">Skills</Typography>
        </Slide>
        <Slide in={skills} direction="right" timeout={250}>
          <div className={classes.container}>
            <div className={classes.text}>

              <Typography variant="h2">Languages: </Typography>
              <Typography variant="h3">
                HTML, CSS, javaScript, SQL, Ruby
          </Typography>

              <Typography variant="h2">Frameworks & Libraries: </Typography>
              <Typography variant="h3">
                ReactJS, NodeJS, Express, Rails, jQuery,Material-UI, Bootstrap, Jest, Cypress, Mocha, Chai
          </Typography>
              <Typography variant="h2">Databases: </Typography>
              <Typography variant="h3">
                postgreSQL, MongoDB, Sanity
          </Typography>
            </div>
          </div>
        </Slide>
      </div>
    </ThemeProvider>
  )
}

export default Skills
