import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { fetchGet } from '../../../../utils/fetches';

export default function CityPicker(props) {
  const [toggleState, setToggleState] = useState(0);
  const [airportData, setAirportData] = useState([]);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    fetchGet('/Datas/airportData.json')
      .then((res) => res.json())
      .then((data) => {
        setAirportData(data.country_list);
      });
  }, []);

  const country = airportData.flatMap((el) => Object.keys(el));
  const CITY = airportData.map((el, idx) => el[country[idx]]);
  return (
    <div>
      <CityContainer>
        <CityWrapper>
          <CityTitle>지역과 도시 선택</CityTitle>
          <CityTab>
            <Vertical>
              {country.map((item, index) => {
                return (
                  <li key={index}>
                    <div
                      className={
                        toggleState === index ? 'cityButtonTab' : 'cityButton'
                      }
                      onClick={() => toggleTab(index)}
                    >
                      {item}
                    </div>
                  </li>
                );
              })}
            </Vertical>
            {CITY.map((item, id) => {
              return (
                <div
                  key={id}
                  className={toggleState === id ? 'rightTabOn' : 'rightTab'}
                >
                  <LocalTitle>대한항공 취항지</LocalTitle>
                  <ul>
                    {item.map((city, index) => {
                      return (
                        <LocalList key={index}>
                          <LocalButton>
                            <LocalCode>{city.airport_code}</LocalCode>
                            <span>{city.city_name}</span>
                          </LocalButton>
                        </LocalList>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </CityTab>
        </CityWrapper>
      </CityContainer>
      <CloseButton onClick={props.onRequestClose} />
    </div>
  );
}

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 40px;
  width: 44px;
  height: 44px;
  border: 0;
  background: url('/images/closeModal.svg') 50% 50%/ 24px 24px no-repeat;
  border-radius: 2px;
  cursor: pointer;
`;

const CityContainer = styled.div`
  position: relative;
  width: 820px;
  padding: 20px 30px 0;
  outline: 0;
`;

const CityWrapper = styled.div`
  padding-bottom: 40px;
  /* height: 100%; */
  /* transform: translate(0, 0); */
`;

const CityTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 8px;
  color: #000;
`;

const CityTab = styled.div`
  position: relative;
  display: flex;
  margin: 20px 0 0;
  border: 1px solid #dfe2e5;
  .rightTabOn,
  .rightTab {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 70%;
    padding: 0 24px 0 20px;
  }
  .rightTab {
    display: none;
  }
`;

const Vertical = styled.ul`
  width: 30%;
  /* display: flex;
  flex-direction: column; */
  .cityButton,
  .cityButtonTab {
    width: 100%;
    padding: 13px 10px 13px 20px;
    border: 0;
    color: #000;
    text-align: left;
    cursor: pointer;
    background-color: #f4f7f9;
    font-size: 16px;
    line-height: 1.5;
  }
  .cityButtonTab {
    background-color: #fff;
    font-weight: 700;
  }
`;

const LocalTitle = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 14px;
  padding: 0 12px 12px;
  color: #00256c;
`;

const LocalList = styled.li`
  /* margin-top: 0; */
  margin: 16px 0;
`;

const LocalButton = styled.button`
  /* display: flex; */
  border: 0;
  background: none;
  color: #000;
  text-align: left;
  cursor: pointer;
  font-size: 16px;
  line-height: 1.5;
`;

const LocalCode = styled.span`
  min-width: 68px;
  padding: 0 14px 0 37px;
  font-weight: 700;
  background: url('/images/code.svg') 0 50%/37px 26px no-repeat;
`;

const AREA = [
  '대한민국',
  '동북아시아',
  '동남아시아/서남아시아',
  '미주',
  '유럽',
  '대양주/괌',
  '러시아/몽골/중앙아시아',
  '중동/아프리카',
];

const AIRPORT = [
  {
    country: [
      { code: 'SEL', airport: '서울/모든 공항' },
      { code: 'PUS', airport: '부산/김해' },
      { code: 'CJU', airport: '제주' },
    ],
  },
  {
    country: [
      { code: 'KOJ', airport: '가고시마' },
      { code: 'KMQ', airport: '고마쓰' },
      { code: 'KKJ', airport: '기타큐슈' },
    ],
  },
];
