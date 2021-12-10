
import React from 'react';
import '../App.scss';
import Navbar from './navbar';
import Footer from './footer';

function ContentPage() {
  return (
    <div className='content' id='content'>
        <Navbar></Navbar>
        <Footer></Footer>
    </div>
  );
}

export default ContentPage;
