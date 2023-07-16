import React, { useEffect, useRef } from "react"
import * as echarts from 'echarts';
import { baseChartshare } from "../shared/base-echart-share";
import { createEchartOptions } from "../shared/createEchartsOption";

const px = (n) => n/2420 * (window as any).PageWidth

export const Chart_9 = () =>{
    const divRef = useRef(null)
    useEffect(() =>{
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartOptions({
    ...baseChartshare,
    title:{
        show:false
    },
    legend: {
        top: 0,
        left:0,
        itemHeight: 6, // 修改icon图形大小
        itemGap: 24, // 修改间距
        textStyle: {
          fontSize: px(25),
          color: "white",
          padding: [0, 0, 0, -8], // 修改文字和图标距离
        },
      },
      animation: true,
      animationDuration: 8000,
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisPointer: {
            type: 'shadow'
          },
          splitLine:{show: true}
        }
      ],  
      grid: {
        x: px(40),
        y: px(37),
        x2: px(70),
        y2: px(60),
      },
      yAxis: [
        {
          type: 'value',
          name: '清蒸鱼',
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            show:false
          }
        },
        {
          type: 'value',
          name: '乔治亚',
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            formatter: '{value} k'
          }
        }
      ],
      series: [
        {
          name: '乔治亚',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value) {
              return value ;
            }
          },
          data: [
            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
          ]
        },
        {
          name: '清蒸鱼',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value) {
              return value ;
            }
          },
          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
          ]
        },
        {
          name: '乔治亚',
          type: 'line',
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value) {
              return value ;
            }
          },
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
      ]})
    )},[])
 return (
 
    <div className='border manTotal'>
    <h2>上周合伙人数据</h2>
    <div ref={divRef} className='chart'></div>
  </div>
 

  )
}