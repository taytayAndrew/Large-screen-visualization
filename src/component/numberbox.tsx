import React, { useEffect, useRef, useState } from "react"
import {px} from '../shared/px';


 
export const NumberBox = () =>{
  const [firNum, setFirNum] = useState(0);
  const [secNum, setSecNum] = useState(0);

  
  useEffect(() => 
  {
    const intervalId = setInterval(() => {
      if (firNum === 9 && secNum === 9) {
        setFirNum(0);
        setSecNum(0);
      } else if (firNum === 9) {
        setFirNum(0);
        setSecNum((prevSecNum) => prevSecNum + 1);
      } else {
        setFirNum((prevFirNum) => prevFirNum + 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [firNum, secNum]);

 return ( 
     <>
   <h2>全国本月内完成订单数</h2>
   <div className="numberMainBox">
        <div className="numberBox"><div className='box'>5</div></div>
        <div className="numberBox"><div className='box'>9</div></div>
        <div className="numberBox"><div className='box'>6</div></div>
        <span><div>,</div></span>
        <div className="numberBox"><div className='box'>4</div></div>
        <div className="numberBox"><div className='box'>7</div></div>
        <div className="numberBox"><div className='box'>2</div></div>
        <span><div>,</div></span>
        <div className="numberBox"><div  className='box'>{secNum}</div></div>
        <div className="numberBox"><div  className='box'>{firNum}</div></div>
   </div>
  
     </>


  )

 }