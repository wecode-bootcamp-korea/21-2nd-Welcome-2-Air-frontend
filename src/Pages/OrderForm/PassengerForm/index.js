import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

function AccordianInfo(props) {
  const content = useRef(null);
  const [height, setHeight] = useState(0);
  const toggleAccordion = () => {
    setHeight(height === 0 ? content.current.scrollHeight + 30 : 0);
  };

  // const [users, setUsers] = useState({
  //   nameKor: '',
  //   nameEng: '',
  //   gender: '',
  //   birth: '',
  //   phone: '',
  //   email: '',
  //   passport: '',
  // });
  // const { nameKor, nameEng, gender, birth, phone, email, passport } = users;
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setUsers({
  //     ...users,
  //     [name]: value,
  //   });
  // };

  const checkInfo = () => {
    // if (korean_name === '') {
    //   alert('이름(한글)을 확인해주세요');
    // } else if (nameEng === '') {
    //   alert('이름(영문)을 확인해주세요');
    // } else if (gender === '') {
    //   alert('성별을 확인해주세요');
    // } else if (birth === '') {
    //   alert('생년월일을 확인해주세요');
    // } else if (phone === '') {
    //   alert('휴대폰 번호를 확인해주세요');
    // } else if (email === '') {
    //   alert('이메일을 확인해주세요');
    // } else if (passport === '') {
    //   alert('여권번호를 확인해주세요');
    // } else {
    setHeight(0);
    // clickSummit();
  };
  // };

  return (
    <AccordianAll>
      <AccordionHeading>
        <Container>
          <TitleStyle>승객 정보</TitleStyle>
          <button onClick={toggleAccordion}>Click</button>
        </Container>
      </AccordionHeading>

      <AccrodionContent height={height} ref={content}>
        <Container1>
          <NameText>
            <FristName>
              승객 이름(한글)<Required>필수 입력</Required>
              <InputAll
                data-row="korean_name"
                name={props.id}
                onChange={props.handlePassengerInfo}
                value={props.list.korean_name}
              />
            </FristName>
            <SecondName>
              승객 이름(영문)<Required>필수 입력</Required>
              <InputAll
                data-row="english_name"
                name={props.id}
                onChange={props.handlePassengerInfo}
                value={props.list.english_name}
              />
            </SecondName>
          </NameText>
          <AddInfo>
            <Gender>
              성별<Required>필수 입력</Required>
              <BtnRadio>
                <Ckbox
                  type="radio"
                  data-row="gender"
                  onChange={props.handlePassengerInfo}
                  name={props.id}
                  value="남자"
                />
                <GenderFont for="Ckbox">남자</GenderFont>
                <Ckbox
                  type="radio"
                  data-row="gender"
                  onChange={props.handlePassengerInfo}
                  name={props.id}
                  value="여자"
                />
                <GenderFont for="Ckbox">여자</GenderFont>
              </BtnRadio>
            </Gender>
            <Birth>
              생년월일(YYYYMMDD 8자리)<Required>필수 입력</Required>
              <InputAll
                type="text"
                data-row="birth"
                onChange={props.handlePassengerInfo}
                name={props.id}
                value={props.list.birth}
              />
            </Birth>
          </AddInfo>
          <NumText htmlFor>
            <Phone>
              전화번호<Required>필수 입력</Required>
              <InputAll
                type="text"
                data-row="phone"
                onChange={props.handlePassengerInfo}
                name={props.id}
                value={props.list.phone}
              />
            </Phone>
            <Email>
              이메일<Required>필수 입력</Required>
              <InputAll
                type="text"
                data-row="email"
                onChange={props.handlePassengerInfo}
                name={props.id}
                value={props.list.email}
              />
            </Email>
          </NumText>
          <MemberNum>
            여권번호
            <Required>필수 입력</Required>
            <InputAll
              type="text"
              data-row="passport"
              onChange={props.handlePassengerInfo}
              name={props.id}
              value={props.list.passport}
            />
          </MemberNum>
          <SummitBox>
            <button type="button" onClick={checkInfo}>
              확인
            </button>
          </SummitBox>
        </Container1>
      </AccrodionContent>
    </AccordianAll>
  );
}
const AccordianAll = styled.div`
  margin: 18px auto;
`;
const AccordionHeading = styled.div`
  background-color: navy;
  font-weight: bold;
  padding: 14px 0;
`;
const Container = styled.div`
  width: 100%;
  max-width: 930px;
  height: 30px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    font-size: 16px;
    margin-right: 20px;
    cursor: pointer;
    background-color: navy;
    color: #fff;
    border: none;
  }
`;

const TitleStyle = styled.div`
  letter-spacing: 1.2px;
  color: #fff;
`;

const AccrodionContent = styled.div`
  display: flex;
  height: ${({ height }) => height}px;
  opacity: ${({ height }) => (height > 0 ? 1 : 0)};
  background-color: #fff;
  overflow: hidden;
  transition: all 600ms ease-in-out;
  border: 1px solid lightgray;
`;
const Container1 = styled.form`
  display: flex;
  flex-direction: column;
  height: auto;
  color: black;
  padding: 30px 40px;
  p {
    font-size: 15px;
    line-height: 1.6;
  }
`;
const NameText = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const FristName = styled.div`
  width: 50%;
  padding-top: 10px;
  margin: 10px 0;
  color: gray;
`;

const SecondName = styled.div`
  width: 50%;
  margin: 10px 0;
  padding-top: 10px;
  color: gray;
`;

const Required = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-indent: 100%;
  position: relative;
  width: 0.5rem;
  font-size: inherit;
  vertical-align: bottom;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background-color: #de001b;
  }
`;

const InputAll = styled.input`
  width: 410px;
  height: 48px;
  margin-top: 10px;
  border: 0;
  border-bottom: 1px solid #00256c;
  &:hover {
    padding-left: 10px;
    transition: all 100ms;
    border: rgb(87, 124, 192) 1px solid;
    border-radius: 00.2rem;
  }
`;

const AddInfo = styled.label`
  display: flex;
  flex-wrap: row wrap;
  justify-content: space-between;
`;
const Gender = styled.div`
  width: 50%;
  padding-top: 10px;
  margin-top: 30px;
  margin-bottom: 10px;
  color: gray;
`;

const BtnRadio = styled.div`
  margin-top: 20px;
`;

const Ckbox = styled.input`
  width: 23px;
  height: 23px;
  margin-right: 10px;
  font-size: 15px;
  cursor: pointer;
  :checked + label {
    color: #3490e5;
  }
`;
const GenderFont = styled.label`
  margin-right: 15px;
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
`;

const Birth = styled.div`
  width: 50%;
  margin-top: 30px;
  margin-bottom: 10px;
  padding-top: 10px;
  color: gray;
`;
const NumText = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Phone = styled.div`
  width: 50%;
  padding-top: 10px;
  margin: 10px 0;
  color: gray;
`;

const Email = styled.div`
  width: 50%;
  margin: 10px 0;
  padding-top: 10px;
  color: gray;
`;

const MemberNum = styled.div`
  width: 460px;
  margin-top: 30px;
  margin-bottom: 10px;
  padding-top: 10px;
  color: gray;
`;

const SummitBox = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    display: inline-block;
    width: 150px;
    height: 45px;
    margin: 10px 50px 0 0;
    border: 0;
    border-radius: 0.2rem;
    background-color: #0064de;
    color: #fff;
    font-weight: 400;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    appearance: none;
  }
`;
export default withRouter(AccordianInfo);
