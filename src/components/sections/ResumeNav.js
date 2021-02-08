import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import {
  IconButton,
  Typography
} from '@material-ui/core'
import {
  ThumbUp,
  MoreHoriz,
  Check,
  AccountBalance,
  Work
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '8vh',
    width: '60vw',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    position: 'sticky',
    margin: 'auto',
    top: 0,
    zIndex: 5,
  },

}))

const ResumeNav = () => {
  const classes = useStyles()

  return (
    <nav className={classes.root}>
      <Link
        activeClass="active"
        to="recommendations"
        spy={true}
        smooth={true}
        // offset={10}
        duration={500}
      >
        <IconButton>
          <ThumbUp fontSize="large" style={{ color: '#fff' }} />
        </IconButton>
      </Link>

      <Link
        activeClass="active"
        to="summary"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        <IconButton>
          <MoreHoriz fontSize="large" style={{ color: '#fff' }} />
        </IconButton>
      </Link>

      <Link
        activeClass="active"
        to="skills"
        spy={true}
        offset={-100}
        smooth={true}
        duration={500}
      >
        <IconButton>
          <Check fontSize="large" style={{ color: '#fff' }} />
        </IconButton>
      </Link>

      <Link
        activeClass="active"
        to="education"
        spy={true}
        smooth={true}
        duration={500}
      >
        <IconButton>
          <AccountBalance fontSize="large" style={{ color: '#fff' }} />
        </IconButton>
      </Link>

      <Link
        activeClass="active"
        to="experience"
        spy={true}
        smooth={true}
        duration={500}
      >
        <IconButton>
          <Work fontSize="large" style={{ color: '#fff' }} />
        </IconButton>
      </Link>
    </nav>
  )
}

export default ResumeNav
