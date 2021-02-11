import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CircleNavState from './context/circleNav/CircleNavState'
import ScreenState from './context/screen/ScreenState'
import ResumeState from './context/resume/ResumeState'
import EducationState from './context/education/EducationState'
import ProjectsState from './context/projects/ProjectsState'
import UnderNav from './components/screens/UnderNav'
import HomeScreen from './components/screens/HomeScreen'
import CircleNav from './components/utils/CircleNav'

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '5rem',
      '@media (max-width: 600px)': {
        fontSize: '1rem'
      }
    },
    h2: {
      fontSize: '3rem',
      '@media (max-width: 600px)': {
        fontSize: '1rem'
      }
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}

export default App;
