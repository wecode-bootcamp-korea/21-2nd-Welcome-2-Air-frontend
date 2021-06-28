import React, { useState, useRef } from 'react';
import styled from 'styled-components';

function Accordian() {
  const content = useRef(null);
  const [height, setHeight] = useState(110);
  const toggleAccordion = () => {
    setHeight(height === 0 ? content.current.scrollHeight + 30 : 0);
  };

  return (
    <AccordianAll>
      <AccordionHeading>
        <Container>
          <TitleStyle>유의 사항</TitleStyle>
          <button onClick={toggleAccordion}>Click</button>
        </Container>
      </AccordionHeading>

      <AccrodionContent height={height} ref={content}>
        <Container1>
          <Precaution>
            <li type="disc">
              예약 후 성명 변경은 불가하오니 실제 탑승하실 분의 여권에 기재된
              영문 성명으로 정확하게 입력하시기 바랍니다.
            </li>
            <li type="disc">
              성명 입력 안내 입력하신 회원번호로 탑승 마일리지가 적립되며,
              마일리지 적립율은 항공사에 따라 다를 수 있습니다.
            </li>
          </Precaution>
        </Container1>
      </AccrodionContent>
    </AccordianAll>
  );
}
const AccordianAll = styled.div`
  margin: 18px auto;
`;
const AccordionHeading = styled.div`
  background-color: #eaf4f7;

  font-weight: bold;
  padding: 14px 0;
  border: 1px solid lightgray;
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
    background-color: #eaf4f7;
    color: #000;
    border: none;
  }
`;

const TitleStyle = styled.div`
  letter-spacing: 1.2px;
  color: #000;
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
  height: auto;
  color: black;
  padding: 30px 40px;
`;

const Precaution = styled.ul`
  font-size: 15px;
  line-height: 1.8;
`;

export default Accordian;
