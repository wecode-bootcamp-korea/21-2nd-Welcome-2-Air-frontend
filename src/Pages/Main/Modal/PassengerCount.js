import React, { useRef } from 'react';
import Counter from '../Counter/Counter';
import styled from 'styled-components/macro';

const PASSENGERS = ['성인', '소아', '유아'];

export default function PassengerCount({ toClose, setAmount }) {
  const passengerAmountRef = useRef({ 성인: 0, 소아: 0, 유아: 0 });

  const confirmPassengerCount = () => {
    // state로 관리할 필요가 없었음 (불필요한 render)
    const amount = Object.values(passengerAmountRef.current).reduce(
      (acc, cur) => acc + cur,
      0,
    );

    setAmount(amount);
    toClose();
  };

  return (
    <>
      <CountTitle>승객 선택</CountTitle>
      <CountAligner>
        <div>
          <PassengerItems>
            {PASSENGERS.map((item, index) => {
              return (
                <PassengerItem key={index}>
                  <div>
                    <PassengerLabel>{item}</PassengerLabel>
                  </div>
                  <Counter item={item} amountRef={passengerAmountRef} />
                </PassengerItem>
              );
            })}
          </PassengerItems>
        </div>
        <ConfirmContainer>
          <ConfirmButton onClick={confirmPassengerCount}>확인</ConfirmButton>
        </ConfirmContainer>
      </CountAligner>
      <CloseButton onClick={toClose} />
    </>
  );
}

const CountTitle = styled.h2`
  margin-right: 2rem;
  font-weight: 700;
  font-size: 2.1rem;
  line-height: 1.5;
  margin-bottom: 0.8rem;
`;

const CountAligner = styled.div`
  margin: 2rem 3.5rem 0;
  padding-bottom: 4rem;
`;

const PassengerItems = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

const PassengerItem = styled.div`
  margin: 2rem 0;
  width: 15.2rem;
`;

const PassengerLabel = styled.span`
  margin-bottom: 0.4rem;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.56;
`;

const ConfirmContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0;
  margin-top: 4rem;
`;

const ConfirmButton = styled.button`
  display: inline-block;
  min-width: 20rem;
  min-height: 4.8rem;
  padding: 1.2rem 1rem;
  width: auto;
  font-size: 1.6rem;
  line-height: 1.5;
  border: 1px solid #013066;
  border-radius: 0.2rem;
  background-color: #013066;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
`;

const CloseButton = styled.button`
  display: block;
  position: absolute;
  top: 4.2rem;
  right: 3rem;
  width: 4.4rem;
  height: 4.4rem;
  border: 0;
  background: url('/images/close.svg') 50% 50%/24px 24px no-repeat;
  border-radius: 0.2rem;
  cursor: pointer;
  white-space: nowrap;
`;
