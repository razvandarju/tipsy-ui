import React from 'react';
import Menu from './components/menu/menu'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Sport from './components/sport/sport'
import Footer from './components/footer/footer';
import { Container } from 'react-bootstrap';


function App() {
  return (

    <div className="App">
      <Router>

        <Menu />
        <Container className="main-content">
          <Switch>
            <Route path="/sport">
              <Sport />
            </Route>
            <Route path="/stoks">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Container>


        <Footer />
      </Router>
    </div >

  );
}

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function About() {
  return <h2>About us</h2>
}


export default App;
