import React, { useEffect, useRef } from "react"
import {px} from '../shared/px';


export const NumberBox = () =>{
 return ( 
     <>
   <h2>全国本月内完成金额</h2>
   <div className="numberMainBox">
        <div className="numberBox"><div className='box'>5</div></div>
        <div className="numberBox"><div className='box'>9</div></div>
        <div className="numberBox"><div className='box'>6</div></div>
        <span><div>,</div></span>
        <div className="numberBox"><div className='box'>4</div></div>
        <div className="numberBox"><div className='box'>7</div></div>
        <div className="numberBox"><div className='box'>2</div></div>
        <span><div>,</div></span>
        <div className="numberBox"><div className='box'>8</div></div>
        <div className="numberBox"><div className='box'>5</div></div>
   </div>
  
     </>


  )
}
