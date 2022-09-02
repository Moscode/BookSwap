import React from 'react';
import DevoftheWeek from '../components/DevoftheWeek';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainBody from '../components/MainBody';
import './Landing.css';

function Landing() {
  return (
    <div>
        <Header />
        <MainBody />
        <DevoftheWeek />
        <Footer />
    </div>
  )
}

export default Landing;