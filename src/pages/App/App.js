import React, { Component } from 'react';
import './App.css';
// import { Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar';
import StartshipList from '../StartshipList/StartshipList';


class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <StartshipList />
      </>
    );
  }
}

export default App;