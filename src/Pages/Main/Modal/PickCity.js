import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { fetchGet } from '../../../utils/fetches';
import { country_list } from './CityData';

export default function PickCity(props) {
  const [toggleState, setToggleState] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetchGet(API)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setData(res.country_list);
    //   });
    setData(country_list);
  }, []);

  const handleCity = (airport_code, city_name, city_id) => {
    if (props.name === 'arr') {
      props.setArrLocation([airport_code, city_name]);
      props.setArrLocationId(city_id);
    } else if (props.name === 'dep') {
      props.setDepLocation([airport_code, city_name]);
      props.setDepLocationId(city_id);
    }
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const country = data.flatMap((el) => Object.keys(el));
  const CITY = data.map((el, idx) => el[country[idx]]);

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
                          <LocalButton
                            onClick={(e) => {
                              handleCity(
                                city.airport_code,
                                city.city_name,
                                city.city_id,
                              );
                              props.toClose(e);
                            }}
                          >
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
      <CloseButton onClick={props.toClose} />
    </div>
  );
}

const CloseButton = styled.button`
  position: absolute;
  top: 4.2rem;
  right: 5rem;
  width: 4.4rem;
  height: 4.4rem;
  border: 0;
  background: url('/images/close.svg') 50% 50%/24px 24px no-repeat;
  border-radius: 0.2rem;
  cursor: pointer;
`;

const CityContainer = styled.div`
  position: relative;
  width: 88rem;
  padding: 2rem 3rem 0;
  outline: 0;
`;

const CityWrapper = styled.div`
  padding-bottom: 4rem;
`;

const CityTitle = styled.h2`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 1.5;
  margin-bottom: 0.8rem;
  color: #000;
`;

const CityTab = styled.div`
  position: relative;
  display: flex;
  margin: 2rem 0 0;
  border: 1px solid #dfe2e5;

  .rightTabOn,
  .rightTab {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 70%;
    padding: 0 2.4rem 0 2rem;
  }

  .rightTab {
    display: none;
  }
`;

const Vertical = styled.ul`
  width: 30%;

  .cityButton,
  .cityButtonTab {
    width: 100%;
    padding: 1.3rem 1rem 1.3rem 2rem;
    border: 0;
    color: #000;
    text-align: left;
    cursor: pointer;
    background-color: #f4f7f9;
    font-size: 1.6rem;
    line-height: 1.5;
  }

  .cityButtonTab {
    background-color: #fff;
    font-weight: 700;
  }
`;

const LocalTitle = styled.h3`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  margin-top: 1.4rem;
  padding: 0 1.2rem 1.2rem;
  color: #00256c;
`;

const LocalList = styled.li`
  margin: 1.6rem 0;
`;

const LocalButton = styled.button`
  border: 0;
  background: none;
  color: #000;
  text-align: left;
  cursor: pointer;
  font-size: 1.6rem;
  line-height: 1.5;
`;

const LocalCode = styled.span`
  min-width: 6.8rem;
  padding: 0 1.4rem 0 2.4rem;
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
