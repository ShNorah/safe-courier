import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Container} from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Quote from './components/Quote/Quote';
import Footer from './components/Footer/Footer';

const App = () => (
    <Router>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
        <Route path="/quote" exact component={Quote} />
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
        <Footer/>
      </Container>
    </Router>
  );

export default App;