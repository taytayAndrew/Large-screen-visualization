import React, { useEffect, useRef } from "react"
import * as echarts from 'echarts';
import { baseChartshare } from "../shared/base-echart-share";
import { createEchartOptions } from "../shared/createEchartsOption";

const px = (n) => n/2420 * (window as any).PageWidth

export const Chart_3 = () =>{
    const divRef = useRef(null)
    useEffect(() =>{
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartOptions({
    ...baseChartshare,
    title: {
      show:false
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
       },
    },
    legend: {
      data: ['风控审批','资料处理','银行放款','平均贷款'] ,
      top: 0,
      left:5,
      icon: "circle", // 修改形状
      itemHeight: 5, // 修改icon图形大小
      itemGap: 5, // 修改间距
      textStyle: {
        fontSize: px(20),
        color: "white",
        padding: [0, 0, 0, -8], // 修改文字和图标距离
      },
    },
    grid: {
      left: 5,
      right: '4%',
      bottom:10,
      containLabel: true
    },
    toolbox: {
      show:false
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      
    },
    yAxis: {
      type: 'value',
      splitLine:{show:false},

    },
    animation: true,
    animationDuration: 10000,
    series: [
      {
        name: '风控审批',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '资料处理',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '银行放款',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '平均贷款',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      ]
    })
    )},[])
 return (
 
    <div className='border soldTotal'>
    <h2>上周业务统计时间</h2>
    <div ref={divRef} className='chart'></div>
  </div>
 

  )
}