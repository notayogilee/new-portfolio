import React from 'react'
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles'
import {
  Container,
  Typography,
  Paper
} from '@material-ui/core'
import html from '../../images/logos/HTML5.png'
import css from '../../images/logos/css3.png'
import bootstrap from '../../images/logos/bootstrap.png'
import js from '../../images/logos/javascript.png'
import jQuery from '../../images/logos/jQuery.png'
import node from '../../images/logos/node.png'
import express from '../../images/logos/express.png'
import react from '../../images/logos/react.png'
import git from '../../images/logos/git.png'
import mongoDB from '../../images/logos/mongoDB.png'
import sanity from '../../images/logos/sanity.png'
import sql from '../../images/logos/sql.png'
import ruby from '../../images/logos/ruby.png'
import jest from '../../images/logos/jest.png'
import mochaChai from '../../images/logos/mochaChai.png'
import cypress from '../../images/logos/cypress.png'
import ror from '../../images/logos/ror.png'
import postgresql from '../../images/logos/postgresql.png'
import materialUI from '../../images/logos/materialUI.png'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '80vh',
    width: '100%',
    position: 'relative',
    background: 'black',
    border: 'solid 50px black',
    borderRadius: '10px',
    top: '50px'
  }
}))

const Skills = () => {
  const classes = useStyles()

  return (
    <div>
      <Container className={classes.root} disableGutters name="skills">
        <div
          style={{
            backgroundImage: `url(${html})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '80px',
            width: '80px',
            position: 'absolute',
            top: '50%',
            left: '10%',
            transform: 'rotate(15deg)'
          }}
        />
        <div
          style={{
            backgroundImage: `url(${css})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100px',
            width: '100px',
            position: 'absolute',
            top: '25%',
            right: '20%',
            transform: 'rotate(-25deg)'
          }}
        />
        <Paper
          style={{
            backgroundImage: `url(${bootstrap})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '90px',
            width: '90px',
            position: 'absolute',
            top: '40%',
            left: '80%',
            transform: 'rotate(-25deg)'
          }}
        />
        <Paper
          style={{
            backgroundImage: `url(${js})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100px',
            width: '100px',
            position: 'absolute',
            top: '20%',
            left: '40%',
            transform: 'rotate(-5deg)'
          }}
        />
        <div
          style={{
            backgroundImage: `url(${jQuery})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '80px',
            width: '80px',
            position: 'absolute',
            top: '20%',
            left: 0,
            transform: 'rotate(-30deg)'
          }}
        />
        <div
          style={{
            backgroundImage: `url(${node})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100px',
            width: '100px',
            position: 'absolute',
            top: '10%',
            right: '5%',
            transform: 'rotate(15deg)'
          }}
        />
        <Paper
          style={{
            backgroundImage: `url(${express})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '50px',
            width: '200px',
            position: 'absolute',
            top: 0,
            right: '10%',
          }}
        />
        <Paper
          style={{
            backgroundImage: `url(${mongoDB})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '50px',
            width: '200px',
            position: 'absolute',
            bottom: 0,
            left: '10%',
            transform: 'rotate(20deg)'
          }}
        />
        <div
          style={{
            backgroundImage: `url(${react})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '120px',
            width: '135px',
            position: 'absolute',
            bottom: '20%',
            right: '10%',
            transform: 'rotate(-60deg)'
          }}
        />
        <div
          style={{
            backgroundImage: `url(${ruby})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '80px',
            width: '80px',
            position: 'absolute',
            bottom: '15%',
            right: '40%',
            transform: 'rotate(75deg)'
          }}
        />
        <div
          style={{
            backgroundImage: `url(${git})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100px',
            width: '100px',
            position: 'absolute',
            top: '35%',
            left: '20%',
            transform: 'rotate(15deg)'
          }}
        />
        <Paper
          style={{
            backgroundImage: `url(${cypress})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '80px',
            width: '80px',
            position: 'absolute',
            top: '10%',
            right: '25%',
            transform: 'rotate(30deg)'
          }}
        />
        <Paper
          style={{
            backgroundImage: `url(${mochaChai})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '50px',
            width: '50px',
            position: 'absolute',
            top: 2,
            left: 5,
            transform: 'rotate(15deg)'
          }}
        />
        <Paper
          style={{
            backgroundImage: `url(${ror})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '70px',
            width: '200px',
            position: 'absolute',
            top: '10%',
            left: '20%',
            transform: 'rotate(-45deg)'
          }}
        />
        <div
          style={{
            backgroundImage: `url(${jest})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '90px',
            width: '80px',
            position: 'absolute',
            bottom: '20%',
            left: '20%',
            transform: 'rotate(-125deg)'
          }}
        />
        <Paper
          style={{
            backgroundImage: `url(${postgresql})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '90px',
            width: '90px',
            position: 'absolute',
            bottom: '35%',
            right: '50%',
            transform: 'rotate(-225deg)'
          }}
        />
        <div
          style={{
            backgroundImage: `url(${materialUI})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '120px',
            width: '120px',
            position: 'absolute',
            top: '50%',
            right: '30%',
            transform: 'rotate(-30deg)'
          }}
        />
        <Paper
          style={{
            backgroundImage: `url(${sanity})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '50px',
            width: '50px',
            position: 'absolute',
            top: 2,
            left: 5,
            transform: 'rotate(15deg)'
          }}
        />
        <Paper
          style={{
            backgroundImage: `url(${sql})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '60px',
            width: '150px',
            position: 'absolute',
            bottom: 0,
            right: '5%',
            transform: 'rotate(-25deg)'
          }}
        />
      </Container>
    </div>
  )
}

export default Skills
