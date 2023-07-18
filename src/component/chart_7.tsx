import React, { useEffect, useRef } from "react"
import * as echarts from 'echarts';
import { baseChartshare } from "../shared/base-echart-share";
import { createEchartOptions } from "../shared/createEchartsOption";

const px = (n) => n/2420 * (window as any).PageWidth

export const Chart_7 = () =>{
    const divRef = useRef(null)
    const myChart = useRef(null);
    const data = [
      { value: 40, name: '小型车' },
      { value: 38, name: '中等车型' },
      { value: 32, name: ' 高级车型' },
      { value: 30, name: 'CDV车型' },
      { value: 28, name: 'SUV车型' },
      { value: 26, name: '三厢车型' },

    ];
    useEffect(() =>{
      setInterval(() => {
        const newData = [
          { value: parseInt((Math.random() * 100).toString()), name: '小型车' },
          { value:parseInt((Math.random() * 100).toString()), name: '中等车型' },
          { value: parseInt((Math.random() * 100).toString()), name: ' 高级车型' },
          { value:parseInt((Math.random() * 100).toString()), name: 'CDV车型' },
          { value: parseInt((Math.random() * 100).toString()), name: 'SUV车型' },
          { value: parseInt((Math.random() * 100).toString()), name: '三厢车型' },
    
        ];
        x(newData);
      }, 2000);
    }, []);
    const x = (data) => {
            myChart.current.setOption(createEchartOptions({
    ...baseChartshare,
    xAxis: {show: false},
    yAxis: {show: false},
    legend: {
        itemWidth: px(20),
        itemHeight: px(20),
        textStyle: {
          color: "#1890FF",
          fontSize: px(25)
        },
        width:100,
        x:'right',
        y:'center',
        right:"20%",
      },

      series: [
        {
          name: 'Nightingale Chart',
          type: 'pie',
          radius: ['15%', '90%'],
          avoidLabelOverlap: false,
          label: {
            show: true, position: 'outside', textStyle: {color: 'white', fontSize: px(20)},
            distanceToLabelLine: 0,
            formatter(options) {
              return options.value + '%';
            }
          },
          roseType: 'area',
          itemStyle: {
            borderRadius: 8
          },
          data: data
        }
      ]
    })
    )} 
    useEffect(() => {
      myChart.current = echarts.init(divRef.current);
      x(data);
    }, []);
 return (
 
    <div className='border eleTotal'>
    <h2>车型销售基础数据</h2>
    <div ref={divRef} className='chart'></div>
  </div>
 

  )
}