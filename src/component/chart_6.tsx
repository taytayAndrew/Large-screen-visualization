import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import { createEchartOptions } from "../shared/createEchartsOption";
import {px} from '../shared/px';
import china from '../geo/china.json';

export const Chart_6 = () => {
  const divRef = useRef(null);
  const colors = {'青海省': '#BB31F7', '甘肃省': '#15B8FD', '四川省': '#06E1EE'};
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    // @ts-ignore
    echarts.registerMap('CN', china);
    myChart.setOption(createEchartOptions({
      xAxis: {show: false},
      yAxis: {show: false},
      series: [
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
            label: {
            normal: {  
                textStyle: {
                    fontSize: px(15),
                    fontWeight: 'bold',
                    color: 'white'
                }
            }
        }, 
          
          itemStyle: {
            areaColor: '#010D3D',
            borderColor: '#01A7F7',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },
        
      ],
    }));
  }, []);

  return (
    <div className="bordered mapInfo">
      <div className="wrapper">
        <div ref={divRef} className="chart"/>
        <div className="legend bordered">
        </div>
        <div className="notes">此地图仅显示了中国的部分区域</div>
      </div>
    </div>
  );
};