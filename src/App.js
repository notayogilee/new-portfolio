import React from 'react'
import CircleNavState from './context/circleNav/CircleNavState'
import ScreenState from './context/screen/ScreenState'
import ResumeState from './context/resume/ResumeState'
import EducationState from './context/education/EducationState'
import ProjectsState from './context/projects/ProjectsState'
import UnderNav from './components/screens/UnderNav'
import HomeScreen from './components/screens/HomeScreen'
import CircleNav from './components/utils/CircleNav'

function App() {
  return (
    <CircleNavState>
      <ScreenState>
        <ResumeState>
          <EducationState>
            <ProjectsState>
              <div style={{ position: 'relative', top: 0, left: 0, bottom: 0, right: 0 }}>
                <div style={{ position: 'fixed', zIndex: 200 }}>
                  <CircleNav />
                </div>
                <div style={{ position: 'relative', top: 0, left: 0, bottom: 0, right: 0 }}>
                  <UnderNav />
                </div>
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <HomeScreen />
                </div>
              </div>
            </ProjectsState>
          </EducationState>
        </ResumeState>
      </ScreenState>
    </CircleNavState>
  )
}

export default App;
