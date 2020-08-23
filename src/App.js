import React from 'react';
import './App.css';
import News from './components/News.js'
import Today from './components/Today.js'
import Welcome from './components/Welcome.js'
import ToDo from './components/ToDo.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Test project in React</h1>
        </div>
        <div className="container">
          <div className="item-a">
            <News title="News"/>
            <p>There is not that much new to tell you right now!</p>
          </div>
          <div className="item-b">
            <Today title="Today"/>
          </div>
          <div className="item-c">
            <Welcome title="Welcome"/>
            <p>This is just a test project</p>
          </div>
          <div className="item-d">
            <ToDo title="ToDo"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
