import { useReducer } from 'react';

export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

export default function useCounter(init) {
  const [count, dispatch] = useReducer(counterReducer, init);

  return [count, dispatch];
}

const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;

    case DECREASE:
      return state - 1;

    default:
      break;
  }
};
