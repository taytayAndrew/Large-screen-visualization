import React, { useEffect, useRef } from "react"
import * as echarts from 'echarts';
import { baseChartshare } from "../shared/base-echart-share";
import { createEchartOptions } from "../shared/createEchartsOption";

const px = (n) => n/2420 * (window as any).PageWidth

export const Chart_1 = () =>{
    const divRef = useRef(null)
    const myChart = useRef(null);
    const data = [
      {name: '综合业务通过率', 2022: 55, 2023: 98},
      {name: '银行征信通过率', 2022: 56, 2023: 94},
      {name: '社会征信通过率', 2022: 40, 2023: 70},
      {name: '电审通过率', 2022: 32, 2023: 75},
      {name: '开卡通过率', 2022: 40, 2023: 90},
      {name:  '综合逾期通过率', 2022: 45, 2023: 80},

    ];
    useEffect(() =>{
      setInterval(() => {
        const newData = [
        {name: '新疆地区', 2022: Math.random() * 100, 2023: Math.random() * 10},
        {name: '兰州地区', 2022: Math.random() * 100, 2023: Math.random() * 10},
        {name: '河北地区', 2022: Math.random() * 100, 2023: Math.random() * 10},
        {name: '东北地区', 2022: Math.random() * 100, 2023: Math.random() * 10},
        {name: '山东地区', 2022: Math.random() * 100, 2023: Math.random() * 10},
        {name:  '珠三角地区', 2022: Math.random() * 100, 2023: Math.random() *10},
        {name: '河南地区', 2022: Math.random() * 100, 2023: Math.random() * 10},
        {name: '湖北地区', 2022: Math.random() * 100, 2023: Math.random() * 10},
        {name:  '四川地区', 2022: Math.random() * 100, 2023: Math.random() * 10},
        ];
        x(newData);
      }, 2000);
    }, []);
    const x = (data) => {
      myChart.current.setOption(createEchartOptions({
    ...baseChartshare,
      textStyle: {
        fontSize: px(100),
        color: '#79839E'
      },
      title: {show: false},
      legend: {show: false},
      xAxis: {
        data: data.map(i => i.name),
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
        data: data.map(i => i[2022]),
      }]
    })
    )}
    useEffect(() => {
      myChart.current = echarts.init(divRef.current);
      x(data);
    }, []);
 return (
 
    <div className='border infoTotal'>
    <h2>业务综合数据统计</h2>
    <div ref={divRef} className='chart'></div>
  </div>
 

  )
}