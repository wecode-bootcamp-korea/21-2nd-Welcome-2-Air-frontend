import React from 'react';
import styled from 'styled-components';

function PriceInfo(props) {
  const price = props.selectedFlight.map((flight) => +flight.price);
  return (
    <Price>
      <p>총액 :</p>
      <div>
        {price
          .reduce((acc, cur) => acc + cur * props.count, 0)
          .toLocaleString()}{' '}
        원
      </div>
    </Price>
  );
}
const Price = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  width: 250px;
  height: 145px;
  padding: 50px 0;
  font-size: 20px;
  font-weight: bold;
  p {
    margin-top: 5px;
    text-align: left;
  }
  div {
    text-align: right;
    width: 120px;
    height: 30px;
    font-weight: bold;
    font-size: 20px;
    color: #0064de;
    text-decoration: underline;
    text-underline-position: under;
    padding: 0;
    line-height: 1.5;
  }
`;

export default PriceInfo;
