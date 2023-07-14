import React, { useEffect, useRef } from 'react';
import './home.scss';
import imgBg from '../img/header.png'
import '../assets/iconfont/iconfont.js'
import * as echarts from 'echarts';

const px = (n) => n/2420 * (window as any).PageWidth
const updateDateTime = () => {
  const now = new Date();
  document.getElementById('time').innerHTML = now.toLocaleTimeString();
  document.getElementById('date').innerHTML = now.toDateString()
}
export const Home = () => {
  const divRef = useRef(null)

 useEffect(() => 
  {
    var myChart = echarts.init(divRef.current);
    myChart.setOption({
      textStyle: {
        fontSize: px(100),
        color: '#79839E'
      },
      title: {show: false},
      legend: {show: false},
      xAxis: {
        data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区'],
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          fontSize: px(12),
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');

              //从字符串变为数组 然后从数组变为字符串
            } else {
              return val;
            }
          }
        },
      },
      grid: {
        x: px(40),
        y: px(40),
        x2: px(40),
        y2: px(40),
      },
      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          fontSize: px(12)
        }
      },
      series: [{
        type: 'bar',
        data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
      }]
    });
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
          <div className='border infoTotal'>
            <h2>业务综合数据统计</h2>
            <div ref={divRef} className='chart'></div>
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
