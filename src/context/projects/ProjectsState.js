import React, { useReducer } from 'react'
import sanityClient from '../../client'
import projectsContext from './projectsContext'
import ProjectsReducer from './projectsReducer'
import {
  SET_LOADING,
  GET_PROJECTS_DETAILS
} from '../types'

// look in session storage before fetching projects
const projectsFromSessionStorage = sessionStorage.getItem('projects') ? JSON.parse(sessionStorage.getItem('projects')) : []

const ProjectsState = (props) => {
  const initialState = {
    projects: projectsFromSessionStorage,
    loading: false
  }

  const [state, dispatch] = useReducer(ProjectsReducer, initialState)

  // Get project details
  const fetchProjectsDetails = async () => {

    dispatch({ type: SET_LOADING })

    const res = await sanityClient.fetch(`*[_type == "projects"] {
        _id,
        title,
        mainImage,
        isCompleted,
        dateCompleted,
        body,
        gitHubLink,
        deployedLink,
        "type": category->title,
        "typeImage": category->image
      }`)

    // Separate projects into groups to map out details of projects on projectsScreen
    const personalProjects = res.filter((project) => project.type === 'Personal Projects')
    const lighthouseProjects = res.filter((project) => project.type === 'Lighthouse Labs Projects')
    const udemyProjects = res.filter((project) => project.type === 'Udemy Projects')

    // create array to map out grouped projects for title and image of groups on projectsScreen
    const allProjects = [personalProjects, udemyProjects, lighthouseProjects]

    dispatch({
      type: GET_PROJECTS_DETAILS,
      payload: allProjects
    })

    // save res to session storage - if user comes back, don't need to fetch again
    sessionStorage.setItem('projects', JSON.stringify(allProjects))
  }

  return <projectsContext.Provider
    value={{
      projects: state.projects,
      loading: state.loading,
      fetchProjectsDetails
    }}
  >
    {props.children}
  </projectsContext.Provider>
}

export default ProjectsState