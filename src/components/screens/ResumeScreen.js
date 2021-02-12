import React, { useContext } from 'react'
import CircleNavContext from '../../context/circleNav/circleNavContext'
import ResumeContext from '../../context/resume/resumeContext'
import Recommendations from '../sections/Recomendations'
import Summary from '../sections/Summary'
import Skills from '../sections/Skills'
import Experience from '../sections/Experience'
import Education from '../sections/Education'
import ResumeNav from '../utils/ResumeNav'

const ResumeScreen = () => {
  const circleNavContext = useContext(CircleNavContext)
  const resumeContext = useContext(ResumeContext)

  const {
    recommendations,
    summary,
    skills,
    education,
    experience
  } = resumeContext

  const bodyId = circleNavContext.bodyId

  return (
    <div>
      <ResumeNav />
      {recommendations &&
        <Recommendations recommendations={recommendations} />
      }
      {summary &&
        <Summary summary={summary} />
      }
      {skills &&

        <Skills skills={skills} />
      }
      {education &&
        <Education />
      }
      {experience &&
        <Experience experience={experience} />
      }
    </div>
  )
}

export default ResumeScreen;
