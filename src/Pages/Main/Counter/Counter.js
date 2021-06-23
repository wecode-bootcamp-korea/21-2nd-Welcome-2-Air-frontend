import React from 'react';
import styled from 'styled-components/macro';
import useCounter, { INCREASE, DECREASE } from './useCounter';

export default function Counter({ item, amountRef }) {
  // custom hook + useReducer hook 사용
  const [count, dispatch] = useCounter(0);

  const onIncrease = () => {
    amountRef.current[item]++;
    dispatch({ type: INCREASE });
  };

  const onDecrease = () => {
    if (count === 0) return;

    amountRef.current[item]--;
    dispatch({ type: DECREASE });
  };

  return (
    <PassengerControl>
      <SubControl type="button" onClick={onDecrease} />
      <CountForm>
        <PassengerCountWrap value={count} readOnly />
      </CountForm>
      <AddControl type="button" onClick={onIncrease} />
    </PassengerControl>
  );
}

const PassengerControl = styled.div`
  display: flex;
  position: relative;
  width: 16.4rem;
  margin-left: -0.6rem;
  margin-top: 1.7rem;
`;

const SubControl = styled.button`
  position: absolute;
  left: 0;
  top: 0.2rem;
  width: 7.4rem;
  height: 4.4rem;
  padding: 0;
  border: 0;
  color: #555;
  font-size: 1.6rem;
  line-height: 1.5;
  z-index: 1;
  cursor: pointer;
  background: url('/images/control-sub.svg') 50% 50%/32px 32px no-repeat;
`;

const CountForm = styled.div`
  width: 100%;
  position: relative;
`;

const PassengerCountWrap = styled.input`
  display: block;
  width: 4rem;
  height: 4.8rem;
  margin: 0 auto;
  border: 0;
  border-bottom: 1px solid #00256c;
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.56;
`;

const AddControl = styled.button`
  position: absolute;
  right: 0;
  top: 0.2rem;
  width: 7.4rem;
  height: 4.4rem;
  padding: 0;
  border: 0;
  color: #555;
  font-size: 1.6rem;
  line-height: 1.5;
  z-index: 1;
  cursor: pointer;
  background: url('/images/control-add.svg') 50% 50%/32px 32px no-repeat;
`;
