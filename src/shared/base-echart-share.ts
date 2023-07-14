import {px} from './px';

export const baseChartshare ={
   
    grid: {
        x: px(40),
        y: px(40),
        x2: px(40),
        y2: px(40),
      },
      textStyle: {
        fontSize: px(100),
        color: '#79839E'
      },
      axisLabel: {
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
      
      title: {show: false},
      legend: {show: false},
}