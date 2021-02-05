import React from 'react'
import CircleNavState from './context/circleNav/CircleNavState'
import './App.css'
import HomeScreen from './components/screens/HomeScreen'
import CircleNav from './components/utils/CircleNav'

function App() {
  return (
    <CircleNavState>
      <div className="body">
        <CircleNav />
        <HomeScreen />
      </div>
    </CircleNavState>
  );
}

export default App;
