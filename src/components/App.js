import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  let[timee, setTimee]=useState("");

  let num;
  let intVal;
  
  
  function countDown(e){
    if(e.keyCode==13){
      clearInterval(intVal);
      num=document.getElementById("timeCount").value;
      
      setTimee(num--);
      intVal=setInterval(()=>{
        setTimee(num--);
        if(num<0)
          clearInterval(intVal);
      },1000);
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
