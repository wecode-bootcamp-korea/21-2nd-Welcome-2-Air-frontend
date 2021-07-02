import React, { useRef } from 'react';
import Counter from '../Counter/Counter';
import styled from 'styled-components/macro';

const PASSENGERS = ['성인', '소아', '유아'];

export default function PassengerCount({ toClose, setAmount }) {
  const passengerAmountRef = useRef({ 성인: 0, 소아: 0, 유아: 0 });

  const confirmPassengerCount = () => {
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
  margin-right: 20px;
  font-weight: 700;
  font-size: 21px;
  line-height: 1.5;
  margin-bottom: 8px;
`;

const CountAligner = styled.div`
  margin: 20px 35px 0;
  padding-bottom: 40px;
`;

const PassengerItems = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const PassengerItem = styled.div`
  margin: 20px 0;
  width: 152px;
`;

const PassengerLabel = styled.span`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
`;

const ConfirmContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0;
  margin-top: 40px;
`;

const ConfirmButton = styled.button`
  display: inline-block;
  min-width: 200px;
  min-height: 48px;
  padding: 12px 10px;
  width: auto;
  font-size: 16px;
  line-height: 1.5;
  border: 1px solid #013066;
  border-radius: 2px;
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
  top: 42px;
  right: 30px;
  width: 44px;
  height: 44px;
  border: 0;
  background: url('/images/close.svg') 50% 50% / 24px 24px no-repeat;
  border-radius: 2px;
  cursor: pointer;
  white-space: nowrap;
`;
