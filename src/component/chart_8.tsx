import React, { useEffect, useRef } from "react"
import * as echarts from 'echarts';
import { baseChartshare } from "../shared/base-echart-share";
import { createEchartOptions } from "../shared/createEchartsOption";

const px = (n) => n/2420 * (window as any).PageWidth

export const Chart_8 = () =>{
    const divRef = useRef(null)
    const myChart = useRef(null);
    const data = [
      { value: 1048, name: '工商业贷款' },
      { value: 735, name: '农业贷款' },
      { value: 580, name: '消费者贷款' },
      { value: 484, name: '活期贷款' },
      { value: 300, name: '定期贷款' }
    ];
    useEffect(() =>{
      setInterval(() => {
        const newData = [
          { value: parseInt((Math.random() * 1000).toString()), name: '工商业贷款' },
          { value:parseInt((Math.random() * 1000).toString()), name: '农业贷款' },
          { value: parseInt((Math.random() * 1000).toString()), name: '消费者贷款' },
          { value:parseInt((Math.random() * 1000).toString()), name: '活期贷款' },
          { value: parseInt((Math.random() * 1000).toString()), name: '定期贷款' },
    
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
        x:'left',
        y:'center',
        right:"20%",
      },
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '70%',
          label: {
            show: true, position: 'outside', textStyle: {color: 'white', fontSize: px(20)},
            distanceToLabelLine: 0,
            formatter(options) {
              return options.value/10 + '%';
            }
          },
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    })
    )}
    useEffect(() => {
      myChart.current = echarts.init(divRef.current);
      x(data);
    }, []);
 return (
 
    <div className='border typeTotal'>
    <h2>贷款类型数据</h2>
    <div ref={divRef} className='chart'></div>
  </div>
 

  )
}