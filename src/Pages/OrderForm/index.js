import React, { useState } from 'react';
import AccordianInfo from './PassengerForm';
// import AccordianCoution from './Accordian/AccordianCaution';
// import TravelInfo from './TracelInfo/TravelInfo';
// import PriceInfo from './Price/PriceInfo';
import styled from 'styled-components';
import Nav from '../../Components/Nav/index';

const FROMROUTEINFO = { selected: [{}, {}], count: 3 };
// const selectedFlight = props.location.state.selected;
// const headCount = props.location.state.count;

function PassengerForm(props) {
  const [passengerLists, setPassengerLists] = useState(
    Array(3).fill({
      id: '',
      korean_name: '',
      english_name: '',
      gender: '',
      birth: '',
      phone: '',
      email: '',
      passport: '',
    }),
  );

  function handlePassengerInfo(e) {
    const { name, value, dataset } = e.target;
    const nextPassengerLists = [...passengerLists];
    nextPassengerLists[name][`${dataset.row}`] = value;
    setPassengerLists(nextPassengerLists);
  }

  return (
    <>
      {console.log(passengerLists)}
      <Nav />
      <ContentsAll>
        <Reservation>
          <span>여정 정보</span>
          {/* <TravelInfo /> */}
          <Passenger>
            <span>탑승자 정보</span>
            {passengerLists.map((passengerList, idx) => (
              <AccordianInfo
                key={idx}
                id={idx}
                list={passengerList}
                handlePassengerInfo={handlePassengerInfo}
              />
            ))}
            {/* <AccordianCoution /> */}
          </Passenger>
        </Reservation>
        <Price>{/* <PriceInfo /> */}</Price>
      </ContentsAll>
    </>
  );
}

const ContentsAll = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 100px;
`;
const Reservation = styled.div`
  width: 1000px;
  min-height: 100vh;
  padding: 20px 0;
  background-color: #fff;
  span {
    display: inline-block;
    margin-bottom: 10px;
    font-size: 23px;
    font-weight: bold;
  }
`;

const Passenger = styled.div`
  span {
    font-size: 23px;
    font-weight: bold;
  }
`;

const Price = styled.label`
  width: 250px;
  height: 100px;
  margin: 50px 0 15px 20px;
  background-color: #fff;
`;

export default PassengerForm;
