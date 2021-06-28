import React from 'react';
import styled from 'styled-components';

function TravelInfo() {
  return (
    <JourneyContent>
      <JourneyInfo>
        <h3>가는 편 </h3>
        <Details>
          <div>
            <DepartureCity>ICN 서울/인천</DepartureCity>
            <img src="/images/Arrow.svg" alt="방향" />
            <ArrivalCity>NRT 도쿄/나리타</ArrivalCity>
          </div>
          <AddInfo>
            <p>날짜</p>
            <p>항공편</p>
            <p>좌석</p>
          </AddInfo>
        </Details>
      </JourneyInfo>
    </JourneyContent>
  );
}
const JourneyContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2px;
`;
const JourneyInfo = styled.div`
  display: flex;
  flex-wrap: row wrap;
  padding: 30px 40px;
  margin-bottom: 20px;
  border: 1px solid lightgray;
  h3 {
    width: 105px;
    height: 60px;
    font-size: 18px;
    font-weight: bold;
  }
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    img {
      margin: 0 15px 10px 15px;
    }
  }
`;
const DepartureCity = styled.div`
  font-size: 18px;
`;
const ArrivalCity = styled.div`
  font-size: 18px;
`;

const AddInfo = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 15px;
  p {
    margin-right: 10px;
  }
`;
export default TravelInfo;
