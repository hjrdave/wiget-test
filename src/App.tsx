import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import SideNav from './components/SideNav';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/styles.global.scss';

function App() {
  return (
    <div className="App">
      <Router basename='/'>
        <Header/>
        <div className={'d-flex'}>
          <SideNav/>
          <div className={'d-flex flex-column justify-content-between'} style={{width: '100%'}}>
            <Body>
              <Routes/>
            </Body>
            <Footer/>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
