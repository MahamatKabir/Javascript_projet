import React from 'react';
import './App.css';
import Landing from './Landing/Carouselle.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header/Header.js';
import Footer from './Footer/index.js';
import Galery from './Galery/index.js';



function App() {
    return (


        <Router>
            <Header />
            <Switch>
                <Route exact path="/galeri" component={Galery} />
                <Route path="/" component={Landing} />

            </Switch>

            <Footer />
        </Router>



    );
}

export default App;
