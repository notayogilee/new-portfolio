import React, { useContext } from 'react'
// import { Link, animateScroll as scroll } from 'react-scroll'
import ResumeContext from '../../context/resume/resumeContext'
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
  const resumeContext = useContext(ResumeContext)

  const {
    showRecommendationsSection,
    showSummarySection,
    showSkillsSection,
    showEducationSection,
    showExperienceSection
  } = resumeContext

  const showRecommendations = () => {
    showRecommendationsSection()
  }

  const showSummary = () => {
    showSummarySection()
  }

  const showSkills = () => {
    showSkillsSection()
  }

  const showEducation = () => {
    showEducationSection()
  }

  const showExperience = () => {
    showExperienceSection()
  }

  return (
    <nav className={classes.root}>
      <IconButton onClick={showRecommendations}>
        <ThumbUp fontSize="large" style={{ color: '#fff' }} />
      </IconButton>

      <IconButton onClick={showSummary}>
        <MoreHoriz fontSize="large" style={{ color: '#fff' }} />
      </IconButton>

      <IconButton onClick={showSkills}>
        <Check fontSize="large" style={{ color: '#fff' }} />
      </IconButton>

      <IconButton onClick={showEducation}>
        <AccountBalance fontSize="large" style={{ color: '#fff' }} />
      </IconButton>

      <IconButton onClick={showExperience}>
        <Work fontSize="large" style={{ color: '#fff' }} />
      </IconButton>
    </nav>
  )
}

export default ResumeNav
