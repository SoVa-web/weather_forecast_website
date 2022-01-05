
import React from 'react';
import './styles/content_page.scss';
import Navbar from './navbar';
import Footer from './footer';
import Search from './search';
import WeatherContent from './weather_content'

function ContentPage() {
  return (
    <div className='content' id='content'>
        <Navbar></Navbar>
        <Search></Search>
        <WeatherContent></WeatherContent>
        <Footer></Footer>
    </div>
  );
}

export default ContentPage;
