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
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        },
        isCompleted,
        dateCompleted,
        body,
        gitHubLink,
        deployedLink,
        "type": category->title,
        "typeImage": category->image
      }`)

    dispatch({
      type: GET_PROJECTS_DETAILS,
      payload: res
    })

    // save res to session storage - if user comes back, don't need to fetch again
    sessionStorage.setItem('projects', JSON.stringify(res))
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