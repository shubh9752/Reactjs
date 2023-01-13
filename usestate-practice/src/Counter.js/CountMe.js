import React,{useState} from 'react'
import "./CountMe.css";

function CountMe() {
    const [count,setCount]=useState(0);

    const increaseCount=()=>{
        setCount(count+1);
    }
    const decreaseCount=()=>{
        if(count===0){
            return;
        }else{
            setCount(count-1)

        }
        
    }
  return (
    <div className='counter-wrapper'>
    <div className='counter'>
       {count}
    </div>
    <button  onClick={increaseCount}>Increase</button>
    <button  onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default CountMe