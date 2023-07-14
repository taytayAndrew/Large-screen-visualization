import React, { useEffect, useRef } from "react"
import * as echarts from 'echarts';
import { baseChartshare } from "../shared/base-echart-share";
import { createEchartOptions } from "../shared/createEchartsOption";

const px = (n) => n/2420 * (window as any).PageWidth

export const Chart_2 = () =>{
    const divRef = useRef(null)
    useEffect(() =>{
        var myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartOptions({
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
                    x: px(0),
                    y: px(50),
                    x2: px(10),
                    y2: px(60),
                
                containLabel: true
              },
              xAxis: {
                axisTick: {show: false},
                splitLine:{show:false},
                axisLabel:{show: false}
    
              },
              yAxis: {
                type: 'category',
                data: ['综合业务通过率', '银行征信通过率', '社会征信通过率', '电审通过率', '开卡通过率', '综合逾期通过率'],
                splitLine:{show:false},
                axisTick: {show: false},
              },
              series: [
                {
                  name: '2023',
                  type: 'bar',
                  data: [56 ,80 ,78 ,65 ,77 ,49],
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
                  data: [87 ,26 ,36 ,54 ,67 ,28],
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

        
        
    },[])
 return (
 
    <div className='border billsTotal'>
    <h2>订单处理数据</h2>
    <div ref={divRef} className='chart'></div>
  </div>
 

  )
}