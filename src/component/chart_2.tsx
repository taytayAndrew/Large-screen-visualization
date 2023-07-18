import React, { useEffect, useRef } from "react"
import * as echarts from 'echarts';
import { baseChartshare } from "../shared/base-echart-share";
import { createEchartOptions } from "../shared/createEchartsOption";

const px = (n) => n/2420 * (window as any).PageWidth

export const Chart_2 = () =>{
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
        {name: '综合业务通过率', 2022: Math.random() * 100, 2023: Math.random() * 100},
        {name: '银行征信通过率', 2022: Math.random() * 100, 2023: Math.random() * 100},
        {name: '社会征信通过率', 2022: Math.random() * 100, 2023: Math.random() * 100},
        {name: '电审通过率', 2022: Math.random() * 100, 2023: Math.random() * 100},
        {name: '开卡通过率', 2022: Math.random() * 100, 2023: Math.random() * 100},
        {name:  '综合逾期通过率', 2022: Math.random() * 100, 2023: Math.random() * 100},
        ];
        x(newData);
      }, 2000);
    }, []);
    const x = (data) => {
            myChart.current.setOption(createEchartOptions({
            ...baseChartshare,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                 type: 'none'
                },
    
              },
              legend: {
                top: 0,
                left:5,
                icon: "circle", // 修改形状
                itemHeight: 6, // 修改icon图形大小
                itemGap: 24, // 修改间距
                textStyle: {
                  fontSize: 12,
                  color: "white",
                  padding: [0, 0, 0, -8], // 修改文字和图标距离
                },
              },
              
              grid: {
                    x: px(15),
                    y: px(50),
                    x2: px(0),
                    y2: px(40),
                
                containLabel: true
              },
              xAxis: {
                axisTick: {show: false},
                splitLine:{show:false},
                axisLabel:{show: false}
    
              },
              yAxis: {
                type: 'category',
                data:data.map(i => i.name),
                splitLine:{show:false},
                axisTick: {show: false},
              },
              series: [
                {
                  name: '2023',
                  type: 'bar',
                  data: data.map(i => i[2023]),
                  backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                  },
                  itemStyle: { 
                    color: {
                      type: 'linear',
                      x: 0,  //右
                      y: 0,  //下
                      x2: 1,  //左
                      y2: 0,  //上
                      colorStops: [
                        {
                          offset: 0,
                          color: 'violet' // 0% 处的颜色
                        },
                        {
                          offset: 0.7,
                          color: '#2378f7' // 70% 处的颜色
                        },
                        {
                          offset: 1,
                          color: '#83bff6' // 100% 处的颜色
                        }
                      ]
                    }
                  },
                 
                },
                {
                  name: '2022',
                  type: 'bar',
                  data: data.map(i => i[2022]),
                  itemStyle: { 
                    color: {
                      type: 'linear',
                      x: 0,  //右
                      y: 0,  //下
                      x2: 1,  //左
                      y2: 0,  //上
                      colorStops: [
                        {
                          offset: 0,
                          color: 'blue' // 0% 处的颜色
                        },
                        {
                          offset: 0.7,
                          color: '#2378f7' // 70% 处的颜色
                        },
                        {
                          offset: 1,
                          color: '#83bff6' // 100% 处的颜色
                        }
                      ]
                    }
                  },
                
                }
              ]
        }))

        
    }
    useEffect(() => {
      myChart.current = echarts.init(divRef.current);
      x(data);
    }, []);
 return (
 
    <div className='border billsTotal'>
    <h2>订单处理数据</h2>
    <div ref={divRef} className='chart'></div>
  </div>
 

  )
}