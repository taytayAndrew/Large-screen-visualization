import { baseChartshare } from "./base-echart-share"
import { px } from "./px"


export const createEchartOptions = (options) => {
    const result ={
        ...baseChartshare,
        ...options
    }
    if(!(options?.xAxis?.axisLabel?.fontSize)){
        result.xAxis = result.xAxis || {}
        result.xAxis.axisLabel = result.xAxis.axisLabel || {}
        result.xAxis.axisLabel.fontSize = px(15)
    }
    if(!(options?.yAxis?.axisLabel?.fontSize)){
        result.yAxis = result.yAxis || {}
        result.yAxis.axisLabel = result.yAxis.axisLabel || {}
        result.yAxis.axisLabel.fontSize = px(15)
    }
    return result
}