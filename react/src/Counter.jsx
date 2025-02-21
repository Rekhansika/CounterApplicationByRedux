import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament } from './redux/counterSlice';

const Counter = () => {
    const count = useSelector((state)=>state.reducer.count);
    const dispatch = useDispatch();
    

    function dec(){
        dispatch(decreament(1))
    }

    function inc(){
        dispatch(increament(1))
    }

  return (
    <div>
        <button onClick={dec}>dec</button>
        <h3>{count}</h3>
        <button onClick={inc}>inc</button>
    </div>
  )
}

export default Counter
