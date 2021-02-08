import {
  SHOW_RECOMMENDATIONS_SECTION,
  SHOW_SUMMARY_SECTION,
  SHOW_SKILLS_SECTION,
  SHOW_EDUCATION_SECTION,
  SHOW_EXPERIENCE_SECTION
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case SHOW_RECOMMENDATIONS_SECTION:
      return {
        ...state,
        recommendations: true,
        summary: false,
        skills: false,
        education: false,
        experience: false
      }
    case SHOW_SUMMARY_SECTION:
      return {
        ...state,
        recommendations: false,
        summary: true,
        skills: false,
        education: false,
        experience: false
      }
    case SHOW_SKILLS_SECTION:
      return {
        ...state,
        recommendations: false,
        summary: false,
        skills: true,
        education: false,
        experience: false
      }
    case SHOW_EDUCATION_SECTION:
      return {
        ...state,
        recommendations: false,
        summary: false,
        skills: false,
        education: true,
        experience: false
      }
    case SHOW_EXPERIENCE_SECTION:
      return {
        ...state,
        recommendations: false,
        summary: false,
        skills: false,
        education: false,
        experience: true
      }
    default:
      return state
  }
}