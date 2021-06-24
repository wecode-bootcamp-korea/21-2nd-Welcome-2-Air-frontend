import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { KAKAO_LOGIN_API } from '../../config';

function Login() {
  const kakaoLoginHandler = () => {
    window.Kakao.Auth.login({
      success: (auth) => {
        fetch(`${KAKAO_LOGIN_API}/users`, {
          method: 'GET',
          headers: {
            Authorization: auth.access_token,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.token) {
              localStorage.setItem('LogToken', res.token);
              alert('로그인성공');
              this.props.history.push('/');
            } else {
              alert('다시 확인해 주세요.');
            }
          });
      },
      fail: function (err) {
        console.log('a');
        console.log('에러', err);
      },
    });
  };

  return (
    <Article>
      <LoginBox>
        <LoginForm>
          <LoginInner>
            <Head>로그인</Head>
            <InputBox>
              <IdText>
                회원 아이디/스카이패스 회원번호
                <Required>필수 입력</Required>
              </IdText>
              <IdInput type="text" />
              <PwText>
                비밀번호
                <Required>필수 입력</Required>
              </PwText>
              <PwInput type="text" />
            </InputBox>

            <BtnBox>
              <LoginBtn>로그인</LoginBtn>
              <SnsText>
                <SnsTitle>SNS 로그인</SnsTitle>
              </SnsText>
              <LoginBtn type="button" kakao onClick={kakaoLoginHandler}>
                &nbsp;카카오 계정으로 로그인
              </LoginBtn>
            </BtnBox>
          </LoginInner>
          <BtnSignup href="/signup">회원가입</BtnSignup>
        </LoginForm>
      </LoginBox>
    </Article>
  );
}

const Article = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c1dcf9;
  height: 100vh;
  margin: 89px 0 460px 0;
`;

const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1250px;
  height: 650px;
  margin: 0 600px 0 600px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 530px;
  height: 100%;
  box-shadow: 4px 10px 20px 0 lightgray;
  background-color: white;
`;

const LoginInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 60px 40px 60px;
`;

const Head = styled.h2`
  margin-bottom: 26px;
  font-size: 32px;
  font-weight: 500;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const IdText = styled.label`
  padding-top: 10px;
  margin-bottom: 10px;
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

const IdInput = styled.input`
  width: 410px;
  height: 50px;
  border: 0;
  border-bottom: 1px solid #00256c;
  &:hover {
    border: rgb(87, 124, 192) 1px solid;
    border-radius: 00.2rem;
  }
`;

const PwText = styled.label`
  margin-top: 30px;
  margin-bottom: 10px;
  padding-top: 10px;
  color: gray;
`;

const PwInput = styled.input`
  width: 410px;
  height: 50px;
  border: 0;
  border-bottom: 1px solid #00256c;
  &:hover {
    border: rgb(87, 124, 192) 1px solid;
    border-radius: 00.2rem;
  }
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const SnsText = styled.h3`
  position: relative;
  margin-top: 10px;
  font-weight: 200;
  text-align: center;
  color: #555;
  ::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 0.1rem;
    background: #d9dbe1;
  }
`;

const SnsTitle = styled.span`
  display: inline-block;
  position: relative;
  margin: 0 1rem;
  padding: 0 1.7rem;
  background: #fff;
  font-weight: 600;
`;

const LoginBtn = styled.button`
  width: 410px;
  height: 60px;
  border: 1.5px solid #fff;
  border-radius: 0.2rem;
  margin: 30px 0 20px 0;
  padding: 2px;
  cursor: pointer;
  background-color: ${(props) => (props.kakao ? '#FEE500' : '#00256c')};
  color: ${(props) => (props.kakao ? 'black' : 'white')};
  font-size: 18px;
  font-weight: 600;
  :hover {
    border: rgb(82, 167, 182) 1.5px solid;
    border-radius: 00.2rem;
  }
`;

const BtnSignup = styled(Link)`
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: rgba(217, 232, 238, 0.521);
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: black;
  &:hover {
    border: rgb(87, 124, 192) 1px solid;
    border-radius: 00.2rem;
  }
`;

export default withRouter(Login);
