import React from 'react';
import { useState, useEffect } from "react";
import { Suspense } from "react";
const LargeLazyComponent =  React.lazy(()=> import('./largedata'))
// const root = ReactDOM.createRoot(document.getElementById('root'));
export function ParentData(){
    return(
        <div>
            <h2>Parent data</h2>
            <Suspense fallback={<div>Loading Data......</div>} >
              <LargeLazyComponent></LargeLazyComponent>
            </Suspense>
            
        </div>
    );
}


function Largedata() {
  const [message, setMessage] = useState("");
  const delaymessage = (msg) => {
    setTimeout(() => {
      setMessage("Large data");  
      console.log(msg);  
    }, 5000);
  };
  useEffect(() => {
    delaymessage("Custom data"); 
  }, []); 

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}
export default Largedata;
