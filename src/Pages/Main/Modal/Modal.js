import React, { useEffect } from 'react';
import styled from 'styled-components/macro';

const Modal = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'auto');
  }, []);

  return (
    <ModalContainer>
      <ModalWrapper>{children}</ModalWrapper>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const ModalWrapper = styled.div`
  display: inline-block;
  position: relative;
  outline: 0;
  background-color: white;

  height: auto;
  padding: 30px;
`;

export default Modal;
