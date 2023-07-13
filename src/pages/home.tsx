import React, { useEffect } from 'react';
import './home.scss';
import imgBg from '../img/header.png'
import '../assets/iconfont/iconfont.css'

const updateDateTime = () => {
  var now = new Date();
  document.getElementById('time').innerHTML = now.toLocaleTimeString();
  document.getElementById('date').innerHTML = now.toDateString()
}
export const Home = () => {
  const a = useEffect(() => 
  {
    setInterval(updateDateTime, 1000);
  },[]);
  return (
    <div className='home'>
      <header>
        <div className='time' text-white >
          <div id='time'></div>
          <div id='date'></div>
        </div>
        <div className='title' style={{backgroundImage:`url(${(imgBg)})`}}>
        </div>
        <div className='weather'>
          <h3>深圳</h3>
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-weather"></use>
            </svg>
        </div>
      </header>
      <main>
        <section className="border section1">
          <div className='governTotal'>
            案发
          </div>
        </section>
        <section className="border section2"></section>
        <section className="border section3"></section>
        <section className="border section4"></section>
        <section className="border section5"></section>
      </main>
    </div>
    
  );
};
