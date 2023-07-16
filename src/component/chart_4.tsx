import React, { useEffect, useRef } from "react"
import * as echarts from 'echarts';
import { baseChartshare } from "../shared/base-echart-share";
import { createEchartOptions } from "../shared/createEchartsOption";

const px = (n) => n/2420 * (window as any).PageWidth

export const Chart_4 = () =>{
    const divRef = useRef(null)
    useEffect(() =>{
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartOptions({
    ...baseChartshare,
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['六月', '七月','八月','九月','十月'],
        splitLine:{show: true}
      },
      animation: true,
      animationDuration: 8000,
      yAxis: {
        type: 'value'
      },
      grid: {
        x: px(60),
        y: px(10),
        x2: px(30),
        y2: px(50),
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {
            color:new echarts.graphic.LinearGradient(0,0,0,1,[{
              offset:0,
              color:'#414a9f'
            },{
              offset:1,
              color:'#1b1d52'
            }])
          }
        }
      ].map(obj => ({
        ...obj,
        symbol:'circle',
        symbolSize:px(12),
        lineStyle:{width:px(2)}
      }))

    
      
    })
    )},[])
 return (
 
    <div className='border soldMonthTotal'>
    <h2>月订单及数额</h2>
    <div ref={divRef} className='chart'></div>
  </div>
 

  )
}