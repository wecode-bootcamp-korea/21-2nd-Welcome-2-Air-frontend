import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ko';

import PassengerCount from './Modal/PassengerCount';
import Calendar from './Modal/Calendar';
import PickCity from './Modal/PickCity';
import Modal from './Modal/Modal';
import Footer from '../../Components/Footer/Footer';
import styled from 'styled-components/macro';

function Main() {
  const [countOn, setCountOn] = useState(false);
  const [calendarOn, setCalendarOn] = useState(false);
  const [cityOn, setCityOn] = useState(false);

  const [amount, setAmount] = useState(0);
  const [depDate, setDepDate] = useState(moment().format('YYYY.MM.DD'));
  const [arrDate, setArrDate] = useState(moment().format('YYYY.MM.DD'));
  const [depLocation, setDepLocation] = useState(['GMP', '서울/김포']);
  const [depLocationId, setDepLocationId] = useState('');
  const [arrLocation, setArrLocation] = useState(['To', '도착지']);
  const [arrLocationId, setArrLocationId] = useState('');
  const [currentName, setCurrentName] = useState('');
  const [seatInfo, SetSeatInfo] = useState('economy');

  const handleCountModal = () => {
    setCountOn(!countOn);
  };

  const handleCalendarModal = () => {
    setCalendarOn(!calendarOn);
  };

  const handleCityModal = (name) => {
    if (name) {
      setCurrentName(name);
    }
    setCityOn(!cityOn);
  };

  const handleChange = () => {
    setDepLocation(arrLocation);
    setArrLocation(depLocation);
  };

  const handleSeatChange = (e) => {
    SetSeatInfo(e.target.value);
  };

  function handleTimeView(start, end) {
    setDepDate(moment(start).format('YYYY.MM.DD'));
    setArrDate(moment(end).format('YYYY.MM.DD'));
  }

  return (
    <div>
      <MainBooking>
        <Title>항공권 예매</Title>
        <BookingWrapper>
          <Journey>왕복/편도</Journey>
          <BookingBox>
            <BookingContainer>
              <BookingItem>
                <BookingAligner>
                  <Button onClick={() => handleCityModal('dep')}>
                    <Code>{depLocation[0]}</Code>
                    <Area>{depLocation[1]}</Area>
                  </Button>
                  <SecondButton onClick={() => handleCityModal('arr')}>
                    <Code>{arrLocation[0]}</Code>
                    <Area>{arrLocation[1]}</Area>
                  </SecondButton>
                  <SwitchButton onClick={handleChange}>
                    <img src="/images/booking__swap.jpg" alt="전환이미지" />
                    <Line />
                  </SwitchButton>
                </BookingAligner>
                <DateButton>
                  <DateWrapper onClick={handleCalendarModal}>
                    <Date>{depDate}</Date>
                    <Date>~</Date>
                    <Date>{arrDate}</Date>
                  </DateWrapper>
                </DateButton>
              </BookingItem>
              <OptionContainer>
                <div>
                  <Passengers onClick={handleCountModal}>
                    <PassengerType>총 {amount} 명</PassengerType>
                  </Passengers>
                </div>
                <Form>
                  <Seating value={seatInfo} onChange={handleSeatChange}>
                    <option value="economy" className="seatingOption">
                      economy
                    </option>
                    <option value="business" className="seatingOption">
                      business
                    </option>
                    <option value="firstclass" className="seatingOption">
                      firstclass
                    </option>
                  </Seating>
                </Form>
              </OptionContainer>
            </BookingContainer>
          </BookingBox>
        </BookingWrapper>
        <SearchLink
          to={{
            pathname: '/gradeselect/departure',
            state: {
              departure_city_id: depLocationId,
              departure_city_name: depLocation[1],
              departure_city_code: depLocation[0],
              arrival_city_id: arrLocationId,
              arrival_city_name: arrLocation[1],
              arrival_city_code: arrLocation[0],
              departure_datetime: depDate,
              arrival_datetime: arrDate,
              headCount: amount,
              seat_name: seatInfo,
            },
          }}
        >
          <Search>항공편 검색</Search>
        </SearchLink>
      </MainBooking>
      <MainImage src="/images/airplane.jpg" alt="메인이미지" />
      {countOn && (
        <Modal>
          <PassengerCount setAmount={setAmount} toClose={handleCountModal} />
        </Modal>
      )}
      {calendarOn && (
        <Modal>
          <Calendar
            toClose={handleCalendarModal}
            handleTimeView={handleTimeView}
          />
        </Modal>
      )}
      {cityOn && (
        <Modal>
          <PickCity
            name={currentName}
            toClose={handleCityModal}
            setDepLocation={setDepLocation}
            setDepLocationId={setDepLocationId}
            setArrLocation={setArrLocation}
            setArrLocationId={setArrLocationId}
          />
        </Modal>
      )}
      <Footer />
    </div>
  );
}

const MainBooking = styled.section`
  max-width: 1390px;
  padding: 9rem 0 6rem;
  margin: 0 auto;
`;
const Title = styled.h1`
  font-weight: 400;
  font-size: 2.6rem;
  color: #000;
`;

const BookingWrapper = styled.div`
  margin: 4rem 0;
`;

const Journey = styled.h2`
  margin-bottom: 20px;
  font-size: 1.6rem;
  line-height: 1.5;
`;

const BookingBox = styled.div`
  margin: 1rem 0 0;
`;

const BookingContainer = styled.div`
  position: relative;
  margin-bottom: 2.4rem;
  padding: 0 34% 0 0;
  border-top: 0.4rem solid #c7f3ff;
  border-radius: 0 0 0.4rem 0.4rem;
  box-shadow: 0.2rem 1.6rem 2rem 0 rgb(35 55 94 / 14%);
  background-color: #fff;

  ::before {
    content: '';
    display: block;
    position: absolute;
    top: -0.35rem;
    right: 0;
    width: 35.125%;
    height: 0.3rem;
    background: url('http://localhost:3000/images/booking--edge.svg') 0 0/20px
      5px no-repeat #00256c;
  }
`;

const BookingItem = styled.div`
  position: relative;
  display: block;
  margin: 0 64px;
  padding: 42px 0 21px;
`;

const Button = styled.button`
  float: left;
  line-height: 1.5;
  border: none;
  width: 12rem;
  background-color: white;
  cursor: pointer;
`;

const Code = styled.span`
  font-size: 3.4rem;
  display: inline-block;
  width: 100%;
  font-weight: 700;
`;

const Area = styled.span`
  font-size: 1.4rem;
  line-height: 1.58;
  margin-left: -0.4rem;
  color: #555;
`;

const SecondButton = styled.button`
  float: right;
  line-height: 1.5;
  border: none;
  width: 12rem;
  background-color: white;
  cursor: pointer;
`;

const SwitchButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;

  img {
    position: absolute;
    left: 43%;
    top: 25%;
    width: 65px;
    height: 65px;
    z-index: 100;
  }
`;

const Line = styled.hr`
  position: absolute;
  left: 27%;
  top: 38%;
  display: inline-block;
  border: 1px dashed #749ee3;
  width: 18rem;
  margin: 0 1rem;
  z-index: 0;
`;

const BookingAligner = styled.div`
  padding-bottom: 0.9rem;
  height: 120px;
`;

const DateButton = styled.button`
  display: block;
  width: 100%;
  padding: 1.1rem 0;
  border: 0;
  background: none;
  font-weight: 700;
  cursor: pointer;
`;

const DateWrapper = styled.span`
  display: inline-block;
  font-size: 1.8rem;
  line-height: 1.56;
  padding-left: 2.8rem;
  background: url('http://localhost:3000/images/booking__date.svg') 0 50%/24px
    24px no-repeat;
  font-weight: 700;
`;

const Date = styled.span`
  font-size: 1.8rem;
  line-height: 1.56;
  font-weight: 700;
  margin-right: 8px;
`;

const OptionContainer = styled.div`
  position: absolute;
  top: 1.6rem;
  bottom: 4rem;
  right: 0;
  width: 34%;
  padding: 16px 44px 22px;
  border-left: 1px dashed gray;
`;

const Passengers = styled.button`
  min-height: 4.8rem;
  padding: 5px 34px 0 0;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #00256c;
  background: url('http://localhost:3000/images/booking__passengers.svg') 100%
    50%/24px 24px no-repeat #fff;
  text-align: left;
  cursor: pointer;
`;

const PassengerType = styled.span`
  font-size: 1.2rem;
`;

const Form = styled.div`
  position: relative;
`;

const Seating = styled.select`
  height: 4.8rem;
  font-size: 1.2rem;
  padding-right: 2.4rem;
  background: url('http://localhost:3000/images/ico-select.svg') right
    center/24px 24px no-repeat #fff;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #00256c;
  appearance: none;
  transition: border 0.2s 0.3s, color 0.2s 0.3s, box-shadow 0.2s 0.3s;
`;

const Search = styled.button`
  display: block;
  width: auto;
  min-width: 27rem;
  margin: 6rem auto 0;
  height: 5.2rem;
  font-size: 1.5rem;
  padding: 1.5rem 2rem;
  border: 1px solid #00256c;
  border-radius: 0.2rem;
  background-color: #00256c;
  font-weight: 700;
  color: #fff;
  text-align: center;
  cursor: pointer;
`;

const SearchLink = styled(Link)`
  text-decoration: none;
`;

const MainImage = styled.img`
  width: 100%;
  height: 550px;
`;

export default Main;
