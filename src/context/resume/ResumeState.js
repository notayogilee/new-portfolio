import React, { useReducer } from 'react'
import resumeContext from './resumeContext'
import ResumeReducer from './resumeReducer'
import {
  SHOW_RECOMMENDATIONS_SECTION,
  SHOW_SUMMARY_SECTION,
  SHOW_SKILLS_SECTION,
  SHOW_EDUCATION_SECTION,
  SHOW_EXPERIENCE_SECTION
} from '../types'

const ResumeState = (props) => {
  const initialState = {
    recommendations: true,
    summary: false,
    skills: false,
    education: false,
    experience: false,
  }

  const [state, dispatch] = useReducer(ResumeReducer, initialState)

  // Show recommendations section
  const showRecommendationsSection = () => dispatch({ type: SHOW_RECOMMENDATIONS_SECTION })

  // Show summary section
  const showSummarySection = () => dispatch({ type: SHOW_SUMMARY_SECTION })

  // Show skills section
  const showSkillsSection = () => dispatch({ type: SHOW_SKILLS_SECTION })

  // Show education section
  const showEducationSection = () => dispatch({ type: SHOW_EDUCATION_SECTION })

  // Show experience section
  const showExperienceSection = () => dispatch({ type: SHOW_EXPERIENCE_SECTION })

  return <resumeContext.Provider
    value={{
      recommendations: state.recommendations,
      summary: state.summary,
      skills: state.skills,
      education: state.education,
      experience: state.experience,
      showRecommendationsSection,
      showSummarySection,
      showSkillsSection,
      showEducationSection,
      showExperienceSection
    }}
  >
    {props.children}
  </resumeContext.Provider>
}

export default ResumeState