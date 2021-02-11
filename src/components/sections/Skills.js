import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import laptop from '../../images/laptopSkills.jpg'

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
    position: 'relative'
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
    justifyContent: 'center'
  }
}))

const Skills = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography component="div" variant="h1">Skills</Typography>
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
    </div>
  )
}

export default Skills
