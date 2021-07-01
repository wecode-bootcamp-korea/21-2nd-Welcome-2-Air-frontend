import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
function Nav() {
  const getLogOut = () => {
    const loginInfo = localStorage.getItem('LogToken');

    if (!loginInfo) {
    } else {
      localStorage.removeItem('LogToken');
      alert('로그아웃 되었습니다.');
    }
  };

  return (
    <NavBar>
      <NavBarWrap>
        <Logo>
          <MainLink to="/main"></MainLink>
          <SkyTeamLink to="/"></SkyTeamLink>
        </Logo>
        <Menu>
          <MenuLists>
            <li>
              <MenuListBtn>예매</MenuListBtn>
            </li>
            <li>
              <MenuListBtn>공항</MenuListBtn>
            </li>
            <li>
              <MenuListBtn>기내</MenuListBtn>
            </li>
            <li>
              <MenuListBtn>스카이패스</MenuListBtn>
            </li>
          </MenuLists>
        </Menu>
        <Utils>
          <UtilLists>
            <li>
              <LoginIcon onClick={getLogOut} to="/login">
                {`${!localStorage.getItem('LogToken') ? '로그인' : '로그아웃'}`}
              </LoginIcon>
            </li>
            <li>
              <AlramIcon></AlramIcon>
            </li>
            <li>
              <CartIcon></CartIcon>
            </li>
            <li>
              <SearchIcon></SearchIcon>
            </li>
          </UtilLists>
        </Utils>
      </NavBarWrap>
    </NavBar>
  );
}

const NavBar = styled.nav`
  position: absolute;
  top: 0;
  height: 90px;
  border-bottom: 1px solid #d9dbe1;
  width: 100%;
  padding: 0 20px;
  z-index: 200;
`;

const NavBarWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1280px;
  height: 90px;
`;

const Logo = styled.div`
  display: flex;
  flex: 1 1 0;
  align-items: center;
`;

const MainLink = styled(Link)`
  width: 175px;
  height: 50px;
  background: url('/images/logo.png') center center / 175px 50px no-repeat;
  display: inline-block;
  text-decoration: none;
  overflow: hidden;
`;

const SkyTeamLink = styled(Link)`
  width: 38px;
  height: 54px;
  background: url('/images/skyteam_logo.png') center center / 38px 54px
    no-repeat;
`;

const Menu = styled.div`
  flex: 1 1 0;
`;

const MenuLists = styled.ul`
  display: flex;
  justify-content: center;
`;

const MenuListBtn = styled.button`
  display: block;
  position: relative;
  width: 100%;
  padding: 0 23px;
  height: 90px;
  border: 0;
  outline: 0;
  background-color: transparent;
  color: #000;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;
  cursor: pointer;
`;

const Utils = styled.div`
  flex: 1 1 0;
  padding: 21px 0;
`;

const UtilLists = styled.ul`
  display: flex;
  justify-content: flex-end;
  height: 48px;
`;

const LoginIcon = styled(Link)`
  display: block;
  outline: 0;
  color: #00256c;
  font-weight: 700;
  font-size: 16px;
  line-height: 48px;
  text-decoration: none;
  width: 55px;
`;

const AlramIcon = styled.button`
  overflow: hidden;
  text-decoration: none;
  width: 44px;
  height: 44px;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background: url('/images/alramIcon.svg') center center / 44px 44px no-repeat;
  background-color: transparent;
`;

const CartIcon = styled.button`
  overflow: hidden;
  text-decoration: none;
  width: 44px;
  height: 44px;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background: url('/images/cartIcon.svg') center center / 44px 44px no-repeat;
  background-color: transparent;
`;

const SearchIcon = styled.button`
  overflow: hidden;
  text-decoration: none;
  width: 44px;
  height: 44px;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background: url('/images/searchIcon.svg') center center / 44px 44px no-repeat;
  background-color: transparent;
`;

export default withRouter(Nav);
