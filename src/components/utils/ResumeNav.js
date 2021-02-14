import React, { useContext } from 'react'
import ResumeContext from '../../context/resume/resumeContext'
import EducationContext from '../../context/education/educationContext'
import {
  IconButton
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
    justifyContent: 'space-between',
    position: 'sticky',
    margin: 'auto',
    marginBottom: '1rem',
    top: '20px',
    zIndex: 5,
    color: '#333',
    '@media (max-width: 600px)': {
      justifyContent: 'space-evenly'
    }
  },
}))

const ResumeNav = () => {
  const classes = useStyles()
  const resumeContext = useContext(ResumeContext)
  const educationContext = useContext(EducationContext)

  const {
    showRecommendationsSection,
    showSummarySection,
    showSkillsSection,
    showEducationSection,
    showExperienceSection
  } = resumeContext

  const { fetchEducationDetails } = educationContext

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
    if (!sessionStorage.getItem('education')) {
      fetchEducationDetails()
    }
    showEducationSection()
  }

  const showExperience = () => {
    showExperienceSection()
  }


  return (
    <nav className={classes.root}>
      <IconButton onClick={showRecommendations}>
        <ThumbUp fontSize="large" style={{ color: '#333' }} />
      </IconButton>

      <IconButton onClick={showSummary}>
        <MoreHoriz fontSize="large" style={{ color: '#333' }} />
      </IconButton>

      <IconButton onClick={showSkills}>
        <Check fontSize="large" style={{ color: '#333' }} />
      </IconButton>

      <IconButton onClick={showEducation}>
        <AccountBalance fontSize="large" style={{ color: '#333' }} />
      </IconButton>

      <IconButton onClick={showExperience}>
        <Work fontSize="large" style={{ color: '#333' }} />
      </IconButton>
    </nav>
  )
}

export default ResumeNav
