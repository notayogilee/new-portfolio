import React from 'react'
import CircleNavState from './context/circleNav/CircleNavState'
import ScreenState from './context/screen/ScreenState'
import UnderNav from './components/screens/UnderNav'
import HomeScreen from './components/screens/HomeScreen'
import CircleNav from './components/utils/CircleNav'

function App() {
  return (
    <CircleNavState>
      <ScreenState>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'fixed', zIndex: 200 }}>
            <CircleNav />
          </div>
          <div style={{ position: 'relative', top: 0, left: 0, bottom: 0, right: 0 }}>
            <UnderNav />
          </div>
          <div style={{ position: 'relative', overflowX: 'hidden', width: '100vw' }}>
            <HomeScreen />
          </div>
        </div>
      </ScreenState>
    </CircleNavState>
  );
}

export default App;
