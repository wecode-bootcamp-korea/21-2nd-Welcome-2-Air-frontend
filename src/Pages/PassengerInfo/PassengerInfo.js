import React, { useState } from 'react';
import AccordianInfo from './Accordian/AccordianInfo';
import AccordianCoution from './Accordian/AccordianCaution';
import TravelInfo from './TravelInfo/TravelInfo';
import PriceInfo from './Price/PriceInfo';
import styled from 'styled-components/macro';
import { fetchPost } from '../../utils/fetches';
import { FORM_API, PDF_API } from '../../config';

function PassengerInfo(props) {
  const selectedFlight = props.location.state.selected;
  const prices = selectedFlight.map((el) => +el.price);
  const count = props.location.state.count;
  const seat_name = props.location.state.seat_name;
  const [passengerLists, setPassengerLists] = useState(
    Array(count).fill({
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
    const nextPassengerLists = JSON.parse(JSON.stringify(passengerLists));
    nextPassengerLists[name][`${dataset.row}`] = value;
    setPassengerLists(nextPassengerLists);
  }

  const checkedForm = () => {
    const checkedLogin = localStorage.getItem('LogToken');
    if (!checkedLogin) {
      alert('로그인이 필요합니다.');
    } else {
      submitForm();
    }
  };

  function submitForm() {
    console.log(selectedFlight);
    fetchPost(FORM_API, {
      flight_id: selectedFlight[0].flight_id,
      seat_name: seat_name,
      passengers: passengerLists,
    })
      .then((res) => res.json())
      .then((res) => {
        fetchPost(PDF_API, { ticket_id: res.ticketId })
          .then((res) => res.json())
          .then((res) => console.log(res));
      });
    fetchPost(FORM_API, {
      flight_id: selectedFlight[1].flight_id,
      seat_name: seat_name,
      passengers: passengerLists,
    })
      .then((res) => res.json())
      .then((res) => {
        fetchPost(PDF_API, { ticket_id: res.ticketId })
          .then((res) => res.json())
          .then((res) => console.log(res));
      });
    props.history.push('/main');
  }

  return (
    <ContentsAll>
      <Reservation>
        <SubTitle>여정 정보</SubTitle>
        {selectedFlight.map((flight, idx) => (
          <TravelInfo key={idx} flight={flight} />
        ))}
        <Passenger>
          <SubTitle>탑승자 정보</SubTitle>
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
        <PriceInfo selectedFlight={selectedFlight} count={count} />
      </Price>
      <SubBtnBar>
        <SubBtnBarWrap>
          <SubBtnBarTitle>예상 결제 금액</SubBtnBarTitle>
          <SubBtnBarFare>
            <TotalFare>
              <FareNum>
                {!selectedFlight.length === 1
                  ? prices[0].toLocaleString() * count
                  : prices
                      .reduce((acc, cur) => acc + cur * count, 0)
                      .toLocaleString()}
              </FareNum>
              원
            </TotalFare>
          </SubBtnBarFare>
          <ReserveBtn onClick={checkedForm}>예약 하기</ReserveBtn>
        </SubBtnBarWrap>
      </SubBtnBar>
    </ContentsAll>
  );
}

const ContentsAll = styled.article`
  display: flex;
  justify-content: center;
  margin: 100px auto;
`;

const Reservation = styled.div`
  width: 1000px;
  padding: 20px 0;
  background-color: #fff;
`;

const Passenger = styled.div`
  margin-top: 30px;
`;

const SubTitle = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  color: #00256c;
  line-height: 1.5;
`;

const Price = styled.label`
  width: 250px;
  height: 100px;
  margin: 65px 0 15px 20px;
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

const ReserveBtn = styled.button`
  border: 1px solid #bcbcbc;
  background-color: #118fe4;
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
