import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

function TravelInfo(props) {
  return (
    <JourneyContent>
      <JourneyInfo>
        <h3>운항 정보</h3>
        <Details>
          <div>
            <DepartureCity>
              {`${props.flight.departure_airport_code}  ${props.flight.departure_city_name}`}
            </DepartureCity>
            <img src="/images/Arrow.svg" alt="방향" />
            <ArrivalCity>
              {`${props.flight.arrival_airport_code}  ${props.flight.arrival_city_name}`}
            </ArrivalCity>
          </div>
          <AddInfo>
            <p>항공편 {props.flight.flight_number}</p>
            <p>
              날짜{' '}
              {`${moment(props.flight.departure_datetime).format(
                'YYYY-MM-DD hh:mm',
              )} → ${moment(props.flight.arrival_datetime).format(
                'YYYY-MM-DD hh:mm',
              )}`}
            </p>
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
  padding: 40px 30px;
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
