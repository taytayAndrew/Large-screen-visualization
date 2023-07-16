import React, { useEffect, useRef } from 'react';
import './home.scss';
import imgBg from '../img/header.png'
import '../assets/iconfont/iconfont.js'
import { Chart_1 } from '../component/chart_1';
import { Chart_2 } from '../component/chart_2'
import { Chart_3 } from '../component/chart_3';
import { Chart_4 } from '../component/chart_4';
import { Chart_5 } from '../component/chart_5';
import { Chart_6 } from '../component/chart_6';
import { NumberBox } from '../component/numberbox';
import { Chart_7 } from '../component/chart_7';
import { Chart_9 } from '../component/chart_9';
import { Chart_8 } from '../component/chart_8';

const updateDateTime = () => {
  const now = new Date();
  document.getElementById('time').innerHTML = now.toLocaleTimeString();
  document.getElementById('date').innerHTML = now.toDateString()
}
export const Home = () => {
  const year = new Date().getFullYear();
 useEffect(() => 
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
        <section className=" section1">
          <Chart_2 />
          <Chart_3 />
        </section>
        <section className=" section2">
          <Chart_1 />
          <Chart_4 />
        </section>
        <section className="border section3">
          <Chart_5 />
        </section>
        <section className=" section4">
          <NumberBox />
          <Chart_6 />
        </section>
        <section className=" section5">
          <Chart_7 />
          <Chart_9 /> 
          <Chart_8 />
        </section>
      </main>
      <footer>
        &copy; fishy 2020-{year}
      </footer>
    </div>
    
  );
};


