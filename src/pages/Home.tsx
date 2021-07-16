import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/counter';

export const Home = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      This is is the home page
      <div>
        <span>And this the value in redux store</span>
        <div>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <p className='text-xl'>{counter}</p>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      </div>
    </div>
  );
};

export default Home;