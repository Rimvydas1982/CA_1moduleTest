import React, { useReducer, useRef } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { FaThumbsDown } from 'react-icons/fa';

//useReducer initial state

let initialClickState = { clicks: 0 };

const clickReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, clicks: state.clicks + 1 };
    case 'DECREMENT':
      return { ...state, clicks: state.clicks - 1 };
    default:
      return state;
  }
};

function Task2() {
  const [state, dispatch] = useReducer(clickReducer, initialClickState);
  let liked = useRef(false);
  const clickHandler = () => {
    if (!liked.current) {
      dispatch({ type: 'INCREMENT' });
      liked.current = true;
    }
    return;
  };

  const clickHandler2 = () => {
    if (!liked.current) {
      dispatch({ type: 'DECREMENT' });
      liked.current = true;
    }
    return;
  };
  return (
    <div>
      <h3>Task 2</h3>
      <button onClick={clickHandler}>
        <FaThumbsUp />
        {state.clicks}
      </button>
      <button onClick={clickHandler2}>
        <FaThumbsDown />
        {state.clicks}
      </button>
    </div>
  );
}

export default Task2;

/* Task 2
Atkurkite šį komponentą: https://prnt.sc/1296zmk

Pastabos, vartotojui leidžiama balsuoti, tik vieną kartą. 
Paspaudus ant vieno mygtuko, antrą kartą paspausti ant jo 
negalima, tačiau leidžiama pakeisti nuomonę ir paspausti 
ant kito. Tokiu atveju nuo prieš tai paspausto balsas "nuimamas"
ir perduodamas kitam.

Pastaba: būtina panaudoti useReducer
*/
