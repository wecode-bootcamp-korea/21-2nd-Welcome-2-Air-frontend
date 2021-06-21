import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components/macro';
import SearchWidget from '../SearchWidget';
import FlightListCard from '../FlightListCard';
import FilterSelector from '../FilterSelector';
import { fetchGet } from '../../../utils/fetches';

const MOCK_SEARCH = {
  departure_city_id: 1,
  departure_city_name: '서울 / 김포',
  departure_airport_code: 'GMP',
  arrival_city_id: 2,
  arrival_city_name: '제주',
  arrival_airport_code: 'CJU',
  departure_datetime: '2021-07-02',
  arrival_datetime: '2021-07-04',
  headCount: 3,
  seat_name: 'economy',
};

function Departure(props) {
  const [flightLists, setFlightLists] = useState([]);
  const [selectedDep, setSelectedDep] = useState({});
  const [isDropdownActive, setDropdownActive] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  // const [searchInfo, setSearchInfo] = useState(props.location.state.searchInfo);

  useEffect(() => {
    fetchGet('/Datas/toData.json')
      .then((res) => res.json())
      .then((data) => {
        setFlightLists(data.flights_view);
      });
  }, []);

  function makeQueryString(obj) {
    return Object.keys(obj)
      .map((i) => obj[i] && i + '=' + obj[i])
      .filter((item) => !!item)
      .join('&');
  }

  function makeQuery(searchInfo) {
    const queryObj = {
      arrival_city_id: searchInfo.arrival_city_id,
      departure_city_id: searchInfo.departure_city_id,
      arrival_datetime: searchInfo.departure_datetime,
      departure_datetime: searchInfo.departure_datetime,
      seat_name: searchInfo.seat_name,
    };
    return queryObj;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll(e) {
    const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
    scrollTop <= 120 && setScrollTop(scrollTop);
  }

  function toggleDropdown() {
    setDropdownActive(!isDropdownActive);
  }

  function toGoNextStage(e) {
    e.preventDefault();
    // !!props.location.state.arrival_city
    props.history.push({
      pathname: '/gradeselect/arrival',
      state: {
        selectedDep: selectedDep,
        // count: props.location.state.searchInfo.count,
        // order 폼에서 구성
      },
    });
    // : props.history.push({
    //     pathname: '/orderform',
    //     state: {
    //       selectedDep: selectedDep,
    //       count: props.location.state.searchInfo.count,
    //     },
    //   });
  }

  function handleSelected(target) {
    setSelectedDep(...flightLists.filter((el) => el.id === target.id));
  }

  return (
    <div>
      {console.log(makeQueryString(makeQuery(MOCK_SEARCH)))}
      <GradeSelectMain>
        <Wrap>
          <SearchWidget scrollTop={scrollTop} />
          {/* num navi */}
          <NumNavi>
            <NaviLists>
              <NaviList>
                <NaviLink to="/main">
                  <Numbering>1</Numbering>
                  <NaviTitle>검색</NaviTitle>
                </NaviLink>
              </NaviList>
              <NaviList>
                <NaviLink to="/gradeselect">
                  <Numbering className="active">2</Numbering>
                  <NaviTitle className="focus">항공편</NaviTitle>
                </NaviLink>
              </NaviList>
              <NaviList>
                <NaviLink to="orderform">
                  <Numbering className="undone">3</Numbering>
                  <NaviTitle className="undone">결제</NaviTitle>
                </NaviLink>
              </NaviList>
            </NaviLists>
          </NumNavi>
          {/* title*/}
          <Title>
            <TitleWrap>
              <TitleHead> 가는 편 </TitleHead>
              <p>
                {/* searchdata 활용 */}
                <TitlePara>GMP 서울/김포</TitlePara>
                <TitlePara>→</TitlePara>
                <TitlePara>CJU 제주</TitlePara>
              </p>
            </TitleWrap>
          </Title>

          <FlightList>
            <FlightListWrap>
              <FilterSelector
                flightLists={flightLists}
                setFlightLists={setFlightLists}
                toggleDropdown={toggleDropdown}
                isDropdownActive={isDropdownActive}
              />
              <ul>
                {flightLists.length > 0 &&
                  flightLists.map((flightList) => {
                    return (
                      <FlightListCard
                        flightLists={flightLists}
                        key={flightList.id}
                        list={flightList}
                        handleSelected={handleSelected}
                        selectedDep={selectedDep}
                      />
                    );
                  })}
              </ul>
            </FlightListWrap>
          </FlightList>
          <SubBtnBar>
            <SubBtnBarWrap>
              <SubBtnBarTitle>예상 결제 금액</SubBtnBarTitle>
              <SubBtnBarFare>
                <TotalFare>
                  <FareNum>
                    {!selectedDep.price
                      ? 0
                      : selectedDep.price.toLocaleString()}
                  </FareNum>
                  원
                </TotalFare>
              </SubBtnBarFare>
              <PaymentBtn isActive={!!selectedDep.id} onClick={toGoNextStage}>
                다음 여정
              </PaymentBtn>
            </SubBtnBarWrap>
          </SubBtnBar>
        </Wrap>
      </GradeSelectMain>
    </div>
  );
}

const GradeSelectMain = styled.div`
  margin-top: 89px;
`;

const Wrap = styled.div`
  padding: 0px 20px 40px;
`;

const NumNavi = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 35px 0;
`;

const NaviLists = styled.ol`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NaviList = styled.li`
  display: list-item;
  .active {
    background-color: #00256c;
    color: #fff;
    font-weight: 700;
    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: -5px;
      left: 50%;
      width: 20px;
      height: 1px;
      background-color: #00256c;
      transform: translateX(-50%);
    }
  }
  .undone {
    border: 0;
    background-color: #f3f4f8;
    color: #555;
  }
  .focus {
    font-weight: 700;
  }
`;

const NaviLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 8px;
  text-decoration: none;
  cursor: pointer;
`;

const Numbering = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
  position: relative;
  width: 28px;
  height: 28px;
  border: 1px solid #00256c;
  border-radius: 14px;
  color: #00256c;
  font-size: 14px;
  line-height: 1.58;
`;

const NaviTitle = styled.span`
  display: block;
  margin-left: 8px;
  color: #00256c;
  font-size: 16px;
`;

const Title = styled.div`
  padding: 0 20px;
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  color: #00256c;
  font-size: 20px;
`;
const TitleHead = styled.h1`
  font-weight: bold;
`;

const TitlePara = styled.span`
  display: inline-block;
  margin-left: 16px;
`;

const FlightList = styled.div`
  max-width: 1280px;
  margin: 30px auto 40px;
`;

const FlightListWrap = styled.div`
  position: relative;
  min-height: 440px;
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

export default withRouter(Departure);
