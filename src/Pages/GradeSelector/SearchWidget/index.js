import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components/macro';
import DatePicker from './Calendar';
import CityPicker from './CityPicker';

function SearchWidget(props) {
  const [destination, setDestination] = useState({
    departure: '',
    arrival: '',
  });
  const [date, setDate] = useState({ start: new Date(), end: undefined });
  const [headCount, setHeadCount] = useState(1);
  const [departureModal, setDepartureModal] = useState(false);
  const [arrivalModal, setArrivalModal] = useState(false);
  const [passengerModal, setPassengerModal] = useState(false);

  return (
    <WidgetBack scrollTop={props.scrollTop}>
      <Widget>
        <WidgetBox>
          <AirprotSelector>
            <AirportBtn
              className="departure"
              onClick={() => setDepartureModal(true)}
            >
              {props.searchInfo.departure_city_code}
            </AirportBtn>
            <Modal
              isOpen={departureModal}
              onRequestClose={() => setDepartureModal(false)}
              style={modalStyle}
            >
              <CityPicker
                setDestination={setDestination}
                onRequestClose={() => setDepartureModal(false)}
              />
            </Modal>
            <SwapBtn></SwapBtn>
            <AirportBtn
              className="destination"
              onClick={() => setArrivalModal(true)}
            >
              {props.searchInfo.arrival_city_code}
            </AirportBtn>
            <Modal
              isOpen={arrivalModal}
              onRequestClose={() => setArrivalModal(false)}
              style={modalStyle}
              setArrival={setDestination}
            >
              <CityPicker
                setDestination={setDestination}
                onRequestClose={() => setArrivalModal(false)}
              />
            </Modal>
          </AirprotSelector>
          <OptionSelector>
            <DateSelector>
              <div>
                <DatePicker searchInfo={props.searchInfo} />
              </div>
            </DateSelector>
            <NumOfPassenger>
              <NumSelectBtn onClick={() => setPassengerModal(true)}>
                <span className="num">{props.searchInfo.headCount}명</span>
              </NumSelectBtn>
              <Modal
                isOpen={passengerModal}
                onRequestClose={() => setPassengerModal(false)}
                style={modalStyle}
              >
                <ModalWrap>
                  <h2>승객 선택</h2>
                </ModalWrap>
              </Modal>
            </NumOfPassenger>
            <GradeSelector>
              <GradeSelect>
                <option>{props.seat_name.toUpperCase()}</option>
                <option>economy</option>
                <option>business</option>
                <option>firstclass</option>
              </GradeSelect>
            </GradeSelector>
            <WidgetChangeBtn></WidgetChangeBtn>
          </OptionSelector>
        </WidgetBox>
      </Widget>
    </WidgetBack>
  );
}

const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.50)',
    zIndex: 400,
  },
  content: {
    position: 'absolute',
    top: '90px',
    left: '280px',
    right: '280px',
    bottom: '90px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
  },
};

const WidgetBack = styled.section`
  position: ${(props) => (props.scrollTop >= 90 ? 'fixed' : 'relative')};
  top: 0px;
  left: 0;
  right: 0;
  height: 86px;
  z-index: 5;
`;

const Widget = styled.div`
  position: absolute;
  top: 0;
  left: -20px;
  right: -20px;
  padding: 0 20px;
  height: 86px;
  background-color: #c7f3ff;
  z-index: 200;
`;

const WidgetBox = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 20px auto 0;
  padding: 0 0 6px;
  max-width: 1280px;
  min-height: 78px;
  border-radius: 1px;
  background-color: #fff;
  box-shadow: 4px 10px 20px 0 rgb(0 25 72 / 18%);
  z-index: 1;
`;

const AirprotSelector = styled.div`
  position: relative;
  display: inline-block;
  width: 240px;
  height: 44px;
  margin-top: 17px;
  .departure {
    right: 50%;
    margin-right: 28px;
  }
  .destination {
    left: 50%;
    margin-left: 28px;
  }
`;

const AirportBtn = styled.button`
  display: block;
  position: absolute;
  top: 0;
  height: 44px;
  padding: 0 10px;
  border: 0;
  background: 0 0;
  cursor: pointer;
  font-size: 24px;
  line-height: 1.83;
  font-weight: bold;
`;

const ModalWrap = styled.div`
  padding: 46px 40px 0;
`;

const SwapBtn = styled.button`
  display: block;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -22px;
  width: 44px;
  height: 44px;
  background: url('/images/swapIcon.svg') 50% 50% / 44px 44px no-repeat;
  border: 0;
  cursor: pointer;
  white-space: nowrap;
  text-indent: 100%;
  overflow: hidden;
`;

const OptionSelector = styled.div`
  display: block;
  margin-top: 17px;
`;

const DateSelector = styled.div`
  display: inline-block;
  position: relative;
  vertical-align: top;
  &::before {
    display: block;
    position: absolute;
    top: 13px;
    left: 0;
    content: '';
    width: 1px;
    height: 18px;
    background-color: #000;
    opacity: 0.4;
  }
`;

const NumOfPassenger = styled.div`
  display: inline-block;
  position: relative;
  vertical-align: top;
  &::before {
    // 중복 변수 처리
    display: block;
    position: absolute;
    top: 13px;
    left: 0;
    content: '';
    width: 1px;
    height: 18px;
    background-color: #000;
    opacity: 0.4;
  }
`;

const NumSelectBtn = styled.button`
  display: inline-block;
  width: auto;
  min-height: 40px;
  margin: 2px 35px 2px 34px;
  padding: 5px 5px 5px 34px;
  border: 0;
  font-size: 16px;
  text-align: left;
  line-height: 1.875;
  background: url('/images/passenger.svg') 0 50% / 24px 24px no-repeat;
`;

const GradeSelector = styled.div`
  display: inline-block;
  position: relative;
  vertical-align: top;
  &::before {
    // 중복 변수 처리
    display: block;
    position: absolute;
    top: 13px;
    left: 0;
    content: '';
    width: 1px;
    height: 18px;
    background-color: #000;
    opacity: 0.4;
  }
`;

const GradeSelect = styled.select`
  display: inline-block;
  margin: 2px 35px 2px 34px;
  padding: 5px 5px 7px;
  min-height: 40px;
  font-size: 16px;
  border: 0;
  line-height: 1.875;
`;

const WidgetChangeBtn = styled.button`
  display: block;
  position: absolute;
  top: 13px;
  right: 20px;
  width: 60px;
  height: 53px;
  margin: 0;
  border: 0;
  border-radius: 25px 0;
  box-shadow: 2px 8px 14px 0 rgb(0 104 179 / 30%);
  overflow: hidden;
  cursor: pointer;
  background: url('/images/widgetChangeBtn.svg') 50% 50% / 30px 31px no-repeat
    #118fe4;
  z-index: 10;
`;

export default SearchWidget;
