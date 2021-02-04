import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './components/screens/HomeScreen';

function App() {
  return (
    <div className="body">
      <Router>
        <Switch>
          <Route component={HomeScreen} exact path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
