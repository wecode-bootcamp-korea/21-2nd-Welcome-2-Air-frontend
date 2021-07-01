import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Modal from 'react-modal';

export default function ConfirmList() {
  const [eticketModal, setEticketModal] = useState(false);
  return (
    <ReserveList>
      <TicketInfo>
        <div>
          <NameTag># 1</NameTag>
        </div>
        <LocationSec>
          <DepLocation>
            <DepAirCode>GMP</DepAirCode>
            <DepName>서울/김포</DepName>
          </DepLocation>
          <hr />
          <ArrLocation>
            <ArrAirCode>CJU</ArrAirCode>
            <ArrName>제주</ArrName>
          </ArrLocation>
        </LocationSec>
        <DateSec>
          2021년 07월 06일 (화) 10:00
          <SeatCount>2석</SeatCount>
        </DateSec>
        <PdfSec>
          <PdfBtn onClick={() => setEticketModal(true)}>e-ticket</PdfBtn>
          <Modal
            isOpen={eticketModal}
            onRequestClose={() => setEticketModal(false)}
            style={{
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
            }}
          ></Modal>
        </PdfSec>
      </TicketInfo>
      <ReserveStatus>
        <StatusTitle>예약 완료</StatusTitle>
        <ReserveNum>예약번호 73917798</ReserveNum>
        <CheckinBtn>체크인 확인</CheckinBtn>
      </ReserveStatus>
    </ReserveList>
  );
}

const ReserveList = styled.li`
  min-height: 200px;
  margin: 0 auto;
  background-color: #f8fbff;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 20px 0;
  border-radius: 2px;
  border: 1px solid #d9dbe1;
  border-top: 4px solid #c7f3ff;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -4px;
    right: 0;
    width: 28.125%;
    height: 4px;
    background: url('/images/planing-lookup__edge.svg') 0 0/20px 4px no-repeat
      #00256c;
  }
`;

const TicketInfo = styled.div`
  width: 71.1%;
  padding: 23px 0 23px 20px;
`;

const ReserveStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28.9%;
  margin: 0;
  padding: 40px 50px 25px;
  border-top: 0;
  border-left: 1px dashed #d9dbe1;
`;

const StatusTitle = styled.div`
  color: #0064de;
  font-weight: 700;
`;

const ReserveNum = styled.div`
  font-weight: 700;
`;

const CheckinBtn = styled.button`
  background: #0064de;
  color: #fff;
  font-size: 16px;
  line-height: 1.58;
  min-height: 48px;
  margin-top: 10px;
  border: 0;
  outline: 0;
  border-radius: 2px;
`;

const NameTag = styled.span`
  display: inline-block;
  border: 0;
  background-color: transparent;
  color: #555;
  font-size: 14px;
  line-height: 1.58;
  vertical-align: top;
  cursor: pointer;
`;

const LocationSec = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 560px;
  margin: 15px auto;
  position: relative;
`;

const DepLocation = styled.div`
  display: block;
  width: 140px;
  text-align: center;
`;

const DepAirCode = styled.span`
  display: inline-block;
  font-size: 40px;
  padding-bottom: 15px;
  font-weight: bold;
`;

const DepName = styled.span`
  display: block;
`;

const ArrLocation = styled.div`
  display: block;
  width: 140px;
  text-align: center;
`;

const ArrAirCode = styled.span`
  display: inline-block;
  font-size: 40px;
  padding-bottom: 15px;
  font-weight: bold;
`;

const ArrName = styled.span`
  display: block;
`;

const DateSec = styled.div`
  font-size: 18px;
  line-height: 1.5;
  margin: 25px auto 10px;
  text-align: center;
  font-weight: bold;
`;

const SeatCount = styled.span`
  padding-left: 10px;
  font-weight: 700;
`;

const PdfSec = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-right: 30px;
`;

const PdfBtn = styled.button`
  color: #fff;
  font-size: 16px;
  background: #0064de;
  padding: 3px 10px;
  border: 0;
  outline: 0;
`;
