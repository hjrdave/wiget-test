import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Header from './components/organisms/Header';
import Body from './components/organisms/Body';
import Footer from './components/organisms/Footer';
import SideNav from './components/organisms/SideNav';
import './styles.global.scss';

function App() {
  return (
    <div className="App">
      <Router basename='/'>
        <Header />
        <div className={'d-flex'}>
          <SideNav />
          <div className={'d-flex flex-column justify-content-between'} style={{ width: '100%' }}>
            <Body>
              <Routes />
            </Body>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
