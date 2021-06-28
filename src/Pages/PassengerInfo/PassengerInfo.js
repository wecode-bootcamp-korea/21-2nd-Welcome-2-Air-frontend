import React, { useState } from 'react';
import AccordianInfo from './Accordian/AccordianInfo';
import AccordianCoution from './Accordian/AccordianCaution';
import TravelInfo from './TracelInfo/TravelInfo';
import PriceInfo from './Price/PriceInfo';
import styled from 'styled-components';
import { fetchPost } from '../../utils/fetches';
import { API } from '../../config';

const FROMROUTEINFO = { selected: [{}, {}], count: 3 };

const a = Array(3).fill({
  korean_name: '',
  english_name: '',
  gender: '',
  birth: '',
  phone: '',
  email: '',
  passport: '',
});

function PassengerInfo(props) {
  // const selectedFlight = props.location.state.selected;
  // const headCount = props.location.state.count;

  const [passengerLists, setPassengerLists] = useState(a);

  function handlePassengerInfo(e) {
    const { name, value, dataset } = e.target;
    const nextPassengerLists = JSON.parse(JSON.stringify(passengerLists));
    nextPassengerLists[name][`${dataset.row}`] = value;
    setPassengerLists(nextPassengerLists);
  }

  function submitForm() {
    fetchPost(API, {
      flight_id: props.loaction.state.selectedDep.flight_id,
      seat_name: 'economy',
      passengers: passengerLists,
    })
      .then((res) => res.json())
      .then((res) =>
        fetchPost(API, { ticket_id: res })
          .then((res) => res.json())
          .then((res) => console.log(res)),
      );
    fetchPost(API, {
      flight_id: props.loaction.state.selectedArr.flight_id,
      seat_name: 'economy',
      passengers: passengerLists,
    })
      .then((res) => res.json())
      .then((res) =>
        fetchPost(API, { ticket_id: res })
          .then((res) => res.json())
          .then((res) => console.log(res)),
      );
    props.history.push('/main');
  }

  return (
    <ContentsAll>
      <Reservation>
        <span>여정 정보</span>
        <TravelInfo />
        <Passenger>
          <span>탑승자 정보</span>
          {passengerLists.map((passenger, idx) => (
            <AccordianInfo
              key={idx}
              id={idx}
              list={passenger}
              handlePassengerInfo={handlePassengerInfo}
              submitForm={submitForm}
            />
          ))}
          <AccordianCoution />
        </Passenger>
      </Reservation>
      <Price>
        <PriceInfo />
      </Price>
      <SubBtnBar>
        <SubBtnBarWrap>
          <SubBtnBarTitle>예상 결제 금액</SubBtnBarTitle>
          <SubBtnBarFare>
            <TotalFare>
              <FareNum>
                {/* {!selectedArr.price
                    ? selectedDep.price.toLocaleString()
                    : (selectedDep.price + selectedArr.price).toLocaleString()} */}
              </FareNum>
              원
            </TotalFare>
          </SubBtnBarFare>
          {/* <PaymentBtn isActive={!!selectedDep.id} onClick={submitForm}>
              다음 여정
            </PaymentBtn> */}
        </SubBtnBarWrap>
      </SubBtnBar>
    </ContentsAll>
  );
}

const ContentsAll = styled.article`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const Reservation = styled.div`
  width: 1000px;

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

const SubBtnBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-shadow: 4px 0 16px 0 rgb(105 138 161 / 33%);
  background-color: #fff;
  z-index: 10;
`;

const SubBtnBarWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SubBtnBarTitle = styled.h2`
  padding: 0 40px 0 0;
  font-size: 18px;
  line-height: 1.6;
`;

const SubBtnBarFare = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex: 1 1 0;
`;

const TotalFare = styled.span`
  display: block;

  color: #00256c;
  font-size: 18px;
  line-height: 2;
  padding: 11px 40px 11px 0;
`;

const FareNum = styled.em`
  margin-right: 4px;
  font-size: 24px;
  font-weight: bold;
  vertical-align: -3px;
  line-height: 1.5;
`;

const PaymentBtn = styled.button`
  border: 1px solid #bcbcbc;
  background-color: ${(props) => (props.isActive ? '#118fe4;' : '#bcbcbc')};
  color: #fff;
  min-width: 240px;
  height: 60px;
  font-size: 18px;
  line-height: 1.6;
  padding: 16px 20px;
  font-weight: bold;
  text-align: center;
  appearance: none;
`;
export default PassengerInfo;
