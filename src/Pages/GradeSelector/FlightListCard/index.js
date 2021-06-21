import moment from 'moment';
import styled from 'styled-components/macro';

function FlightListCard(props) {
  const arrivalTime = moment(props.list.arrival_datetime).format('hh:mm');
  const departureTime = moment(props.list.departure_datetime).format('hh:mm');
  const price = props.list.price;
  const [hour, minute] = props.list.duration.split(':');
  const depCode = props.list.departure_airport_code;
  const arrCode = props.list.arrival_airport_code;

  function handleInput() {
    props.handleSelected(props.list);
  }

  return (
    <FlightLine>
      <FlightInfo>
        <FlightInfoWrap>
          <FlightTime>
            <FlightFrom>
              <Timeline>{departureTime}</Timeline>
              <AirCode>{depCode}</AirCode>
            </FlightFrom>
            <FlightTo>
              <Timeline>{arrivalTime}</Timeline>
              <AirCode>{arrCode}</AirCode>
            </FlightTo>
          </FlightTime>
          <FlightDir>
            <FlightDuration>
              {+hour}시간 {+minute}분
            </FlightDuration>
          </FlightDir>
          <FlightDesc>
            <FlightNum>{props.list.flight_number}</FlightNum>
            <DescBtn>상세 보기</DescBtn>
          </FlightDesc>
        </FlightInfoWrap>
      </FlightInfo>
      <SeatSelection>
        <SeatSelectionWrap>
          <SeatGrade>
            <input
              id={props.list.id}
              type="radio"
              name="selectedTicket"
              onChange={handleInput}
            />
            <label htmlFor={props.list.id}></label>
            <FareWrap>
              <GradeTitle>{`일반석`}</GradeTitle>
              <GradeFare>
                <Fare>{price.toLocaleString()}</Fare>원
              </GradeFare>
              <SeatStock>
                {props.list.seat_stock <= 5 && `${props.list.seat_stock} 석`}
              </SeatStock>
            </FareWrap>
          </SeatGrade>
        </SeatSelectionWrap>
      </SeatSelection>
    </FlightLine>
  );
}

const FlightLine = styled.li`
  display: flex;
  margin: 20px 0 40px;
`;

const FlightInfo = styled.div`
  position: relative;
  width: 472px;
  border: 1px solid #d9dbe1;
`;

const FlightInfoWrap = styled.div`
  position: relative;
  padding: 32px 40px 30px;
`;

const FlightTime = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FlightDir = styled.div`
  position: absolute;
  top: 32px;
  left: 50%;
  margin-left: -100px;
  width: 200px;
  &::before {
    display: block;
    position: absolute;
    top: 24px;
    left: 0;
    height: 8px;
    width: 100%;
    content: '';
    background: url('/images/direction-large.svg') 50% 50% / cover no-repeat;
  }
`;

const FlightDuration = styled.span`
  font-size: 14px;
  line-height: 1.58;
  display: block;
  color: #00256c;
  text-align: center;
`;

const FlightDesc = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const FlightNum = styled.div`
  font-size: 14px;
  line-height: 1.58;
  display: inline-block;
  vertical-align: top;
`;

const DescBtn = styled.button`
  display: inline-block;
  white-space: nowrap;
  border: 1px solid #969696;
  border-radius: 14px;
  padding: 2px 10px;
  color: #555;
  font-size: 14px;
  line-height: 1.58;
  cursor: pointer;
  background: 0 0;
`;

const FlightFrom = styled.div`
  flex: 1;
  font-size: 12px;
  text-align: left;
`;
const Timeline = styled.span`
  display: block;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.5;
`;

const AirCode = styled.span`
  display: inline-block;
  color: #767676;
  vertical-align: top;
  white-space: nowrap;
  font-size: 14px;
  line-height: 1.5;
`;

const FlightTo = styled.div`
  flex: 1;
  font-size: 12px;
  text-align: right;
`;

const SeatSelection = styled.div`
  width: calc(1281px - 472px);
  margin-left: -1px;
`;

const SeatSelectionWrap = styled.div`
  display: flex;
  overflow: visible;
  height: 100%;
  border: 1px solid #d9dbe1;
  box-shadow: none;
`;

const SeatGrade = styled.div`
  flex: 1 1 30%;
  position: relative;
  border-right: 1px solid #d9dbe1;
  text-align: center;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -1px;
    left: -1px;
    right: 0;
    border-radius: 2px;
    border-top: 2px solid #00256c;
  }
  &:hover {
    border: 1px solid #118fe4;
  }
  input {
    display: none;
  }
  label {
    display: block;
    position: absolute;
    content: '';
    width: 807px;
    height: 163px;
  }
  input:checked + label {
    background: url('/images/class_edge.svg') 100% 100% no-repeat #c7f3ff;
    z-index: -1;
    &:after {
    }
  }
`;

const FareWrap = styled.div`
  padding: 48px 10px 20px;
  z-index: 2;
`;

const GradeTitle = styled.span`
  display: inline-block;
  width: 100%;
  margin: 0 2px;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

const GradeFare = styled.span`
  font-size: 16px;
  line-height: 1.8;
`;

const Fare = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-right: 4px;
`;

const SeatStock = styled.span`
  position: relative;
  width: 100%;
  display: inline-block;
  color: #de001b;
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
`;

export default FlightListCard;
