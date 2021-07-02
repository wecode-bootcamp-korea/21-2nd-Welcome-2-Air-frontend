import React from 'react';
import styled from 'styled-components/macro';

export default function PdfModal({ eTicketLists }) {
  console.log(eTicketLists);
  return (
    <div>
      <Title>e-ticket 리스트</Title>
      {isValidObject(eTicketLists, 'passenger_info') &&
        eTicketLists.passenger_info.map((ticket) => (
          // <a href={ticket.pdf_url} target="_blank" rel="noreferrer">
          //   {ticket.pdf_url}
          // </a>
          <>
            <Iframe
              src={ticket.pdf_url}
              width="100%"
              height="250px"
              title="pdf"
              scrolling="no"
            ></Iframe>
            <Link href={ticket.pdf_url} target="_blank" rel="noreferrer">
              <Btn>새창으로 열기</Btn>
            </Link>
          </>
        ))}
    </div>
  );
}

const isValidObject = (obj, keyword) => {
  return Object.getOwnPropertyNames(obj).includes(keyword);
};

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #00256c;
`;

const Iframe = styled.iframe`
  margin-bottom: 0px;
`;

const Link = styled.a`
  display: flex;
  flex-direction: row-reverse;
`;

const Btn = styled.button`
  padding: 5px;
  border: 0;
  background-color: #00256c;
  outline: 0;
  color: #fff;
`;
