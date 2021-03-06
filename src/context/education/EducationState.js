import React, { useReducer } from 'react'
import sanityClient from '../../client'
import educationContext from './educationContext'
import EducationReducer from './educationReducer'
import {
  SET_LOADING,
  GET_EDUCATION_DETAILS
} from '../types'

// look in session storage before fetchind education
const educationFromSessionStorage = sessionStorage.getItem('education') ? JSON.parse(sessionStorage.getItem('education')) : []


const EducationState = (props) => {
  const initialState = {
    education: educationFromSessionStorage,
    loading: false
  }

  const [state, dispatch] = useReducer(EducationReducer, initialState)

  // Get education details
  const fetchEducationDetails = async () => {
    dispatch({ type: SET_LOADING })

    const res = await sanityClient.fetch(`*[_type == "education"] {
      _id,
      title,
      school,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      },
      categories,
      isOnline,
      isCompleted,
      diploma,
      fromDate,
      toDate,
      description,
      link
    }`)
    // Separate education into groups to map out details of education in education section
    const onlineEducation = res.filter((course) => course.isOnline)
    const schoolEducation = res.filter((course) => !course.isOnline)

    // create array to map out grouped education for title of groups in educatin section
    const allEducation = [schoolEducation, onlineEducation]

    dispatch({
      type: GET_EDUCATION_DETAILS,
      payload: allEducation
    })

    // save res to session storage - if user comes back, don't need to fetch again
    sessionStorage.setItem('education', JSON.stringify(allEducation))
  }

  return <educationContext.Provider
    value={{
      education: state.education,
      loading: state.loading,
      fetchEducationDetails
    }}
  >
    {props.children}
  </educationContext.Provider>
}

export default EducationState