import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Slide } from '@material-ui/core'
import laptop from '../../images/laptopSkills.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    padding: '0.5rem'
  },
  container: {
    backgroundImage: `url(${laptop})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: 'auto',
    minHeight: '80vh',
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
    <div className={classes.root}>
      <Slide in={skills} direction="left" timeout={250}>
        <Typography
          component="div"
          variant="h1"
          style={{
            margin: '3rem 0 1rem 0'
          }}
        >
          Skills
        </Typography>
      </Slide>
      <Slide in={skills} direction="right" timeout={250}>
        <div className={classes.container}>
          <div className={classes.text}>

            <Typography variant="h2">Languages: </Typography>
            <Typography variant="h3">
              HTML, CSS, JavaScript, SQL, GraphQL, Ruby
          </Typography>

            <Typography variant="h2">Frameworks & Libraries: </Typography>
            <Typography variant="h3">
              ReactJS, NodeJS, Express, Mongoose, Rails, jQuery, Material-UI, Bootstrap, Jest, Cypress, Mocha, Chai
          </Typography>
            <Typography variant="h2">Databases/CMS: </Typography>
            <Typography variant="h3">
              PostgreSQL, MongoDB, Sanity
          </Typography>
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default Skills
