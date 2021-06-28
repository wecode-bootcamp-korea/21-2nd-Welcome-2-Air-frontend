import React from 'react';
import styled from 'styled-components';

function PriceInfo() {
  return (
    <Price>
      <p>총액 :</p>
      <div>
        <KoreanWon type="text" /> 원
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
  height: 130px;
  padding: 50px 0;
  font-size: 20px;
  font-weight: bold;
  p {
    margin-top: 5px;
    text-align: left;
  }
`;
const KoreanWon = styled.span`
  text-align: right;
  width: 120px;
  height: 30px;
  font-weight: bold;
  font-size: 20px;
  color: blue;
  border: none;
  padding: 0;
`;
export default PriceInfo;
