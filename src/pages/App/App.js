import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar';
import StartshipList from '../StartshipList/StartshipList';
import StartshipPage from '../StartshipPage/StartshipPage';


class App extends Component {
  render() {
    return (
      <>
        <NavBar />

        <Route exact path='/' render={() =>
           <StartshipList />
        }/>

        <Route exact path='/starship/:id' render={() =>
          <StartshipPage />
        }/>
           {/* <Route exact path='/startship' render={({ location }) => 
          <StartshipPage location={location} />
        }/> */}
      </>
    );
  }
}

export default App;