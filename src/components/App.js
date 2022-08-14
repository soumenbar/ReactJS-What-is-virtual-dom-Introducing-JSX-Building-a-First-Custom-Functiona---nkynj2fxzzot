import React, { Component, useState, useEffect, useRef } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  let[timee, setTimee]=useState("");
  let id=useRef();

  let num;
  
  let regx = /^\d+$/;

  /*useEffect(()=>{
    return()=>{
      clearInterval(id.current);
    }
  },[])*/
  
  
  function countDown(e){
    if(e.keyCode==13){
      clearInterval(id.current);
      num=Math.floor(document.getElementById("timeCount").value);
      if(num===0 || !regx.test(num) ){
        clearInterval(id.current);
        //setTimee(0);
        document.getElementById("current-time").innerText=0;
      
      }
      else{
      
      
      setTimee(num--);
      id.current=setInterval(()=>{
        setTimee(num--);
        if(num<0)
          clearInterval(id.current);
      },1000);
    }
  }
  }

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={(e)=>{
            countDown(e);

          }}/> sec.
        </h1>
      </div>
      <div id="current-time">{timee}</div>
    </div>
  )
}


export default App;
