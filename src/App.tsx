import React from 'react';
import logo from './logo.svg';
import { Container, Grid } from '@material-ui/core';
import './App.css';
import Profile from './components/Profile';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';

function App() {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} sm={12} md={4} lg={3} style={{ backgroundColor: 'red' }}>
                    <Profile />
                </Grid>
                <Grid item xs style={{ backgroundColor: 'blue' }}>
                    <Header />
                    <Portfolio />
                    <Footer />
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
