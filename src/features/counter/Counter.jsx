import React, { useState } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import {
  increment,decrement, reset , input

} from '../counter/CounterSlice';
function Counter() {
  const counter = useSelector((state)=> state.counter.count)
  const dispatch = useDispatch();

  const [inputValue,setInput ] = useState("");

  return(
    <>
    <h2>{counter}</h2>
    <button onClick={()=> dispatch(increment())}>+</button>
    <input value={inputValue} onChange={(e)=> setInput(e.target.value)} placeholder='enter amount you want to add by' type="text"></input>
    
    <button onClick={()=>   dispatch(input(inputValue))}>Add this amount</button>
    
    <button onClick={()=> dispatch(reset())}>reset</button>
    <div>Counter</div>
    </> 
  )  
}
export default Counter