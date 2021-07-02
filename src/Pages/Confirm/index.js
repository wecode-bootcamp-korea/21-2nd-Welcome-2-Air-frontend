import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import Footer from '../../Components/Footer/Footer.js';
import ConfirmList from './ConfirmList';
import { fetchGet } from '../../utils/fetches';
import { FORM_API } from '../../config.js';

export default function Confirm() {
  const [reserveLists, setReserveLists] = useState([]);

  useEffect(() => {
    fetchGet(FORM_API)
      .then((res) => res.json())
      .then((data) => setReserveLists(data.tickets));
  }, []);

  return (
    <>
      <ConfirmWrap>
        <ConfirmHeader>
          <ConfirmTitle>예약 목록</ConfirmTitle>
          <OptionBtn></OptionBtn>
          <OtherSearchBtn>예약조회</OtherSearchBtn>
        </ConfirmHeader>
        <ConfirmMain>
          <ConfirmLists>
            {!!reserveLists &&
              reserveLists.map((list, idx) => (
                <ConfirmList key={idx} list={list} />
              ))}
          </ConfirmLists>
        </ConfirmMain>
      </ConfirmWrap>
      <Footer />
    </>
  );
}

const ConfirmWrap = styled.div`
  margin: 150px auto 80px;
  max-width: 1280px;
`;

const ConfirmHeader = styled.div`
  margin-top: 120px;
  display: flex;
`;

const ConfirmTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  flex: 30 1 0;
  color: #00256c;
`;

const OptionBtn = styled.button`
  width: 40px;
  flex: 1 1 0;
  height: 35px;
  border: 0;
  outline: 0;
`;

const OtherSearchBtn = styled.button`
  flex: 3 1 0;
  border: 0;
  outline: 0;
  margin-left: 20px;
`;

const ConfirmMain = styled.div`
  margin: 20px auto;
`;

const ConfirmLists = styled.ul`
  list-style: none;
`;
