import styled from 'styled-components/macro';

export default function Footer() {
  return (
    <footer>
      <TextContainer>
        <TextAligner>
          <div>
            <Content>
              {INFO.map((name, index) => {
                return (
                  <ContentList key={index}>
                    <ContentName>{name.contentName}</ContentName>
                    {name.contentItem.map((item, id) => {
                      return (
                        <ContentItems href="#" key={id}>
                          {item}
                        </ContentItems>
                      );
                    })}
                  </ContentList>
                );
              })}
            </Content>
          </div>
          <SnsContainer>
            <ul>
              {IMAGE.map((image, index) => {
                return (
                  <SnsList key={index}>
                    <SnsLink href={image.imageLink} />
                    <SnsImage src={image.imageIcon} alt="sns이미지" />
                  </SnsList>
                );
              })}
            </ul>
          </SnsContainer>
          <AppstoreContainer>
            <AppstoreWrapper>
              <AppList>
                <a href="https://play.google.com/store/apps/details?id=com.koreanair.passenger">
                  <AppImage src="/images/googleplay.svg" />
                </a>
              </AppList>
              <AppList>
                <a href="https://apps.apple.com/kr/app/%EB%8C%80%ED%95%9C%ED%95%AD%EA%B3%B5-my/id1512918989">
                  <AppImage src="/images/appstore.svg" />
                </a>
              </AppList>
            </AppstoreWrapper>
          </AppstoreContainer>
        </TextAligner>
      </TextContainer>
      <ContactContainer>
        <ContactAligner>
          <div>
            <ContactItem>
              <Business>(주)웰컴투에어</Business>
              대표 : 우기홍 외 1명
            </ContactItem>
            <ul>
              <ContactList>주소 : 서울특별시 강서구 하늘길 260</ContactList>
              <ContactList>전화 : 1588-2001 / 02-2656-2001</ContactList>
              <BusinessList>사업자등록번호 : 110-81-14794</BusinessList>
              <ContactList>통신판매업신고 : 강서 제 16-3010</ContactList>
              <ContactList>
                개인정보보호책임자 : 여객사업본부장 이진호 전무
              </ContactList>
            </ul>
          </div>
          <MarkInfo>
            <ul>
              <MarkList>
                <MarkButton>
                  <MarkImage src="/images/mark1.webp" alt="trustmark" />
                  <MarkImage src="/images/mark2.webp" alt="trustmark" />
                  <MarkImage src="/images/mark3.webp" alt="trustmark" />
                  <MarkImage src="/images/mark4.webp" alt="trustmark" />
                </MarkButton>
              </MarkList>
            </ul>
          </MarkInfo>
        </ContactAligner>
        <CopyRight>© 1997-2021 Welcome 2 AIR</CopyRight>
      </ContactContainer>
    </footer>
  );
}

const TextContainer = styled.div`
  padding: 39px 20px 35px;
  border-top: 1px solid #d9dbe1;
  background-color: #f3f4f8;
`;

const TextAligner = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
`;

const Content = styled.ul`
  display: flex;
  padding-right: 26.57%;
`;

const ContentList = styled.li`
  width: 25%;
`;

const ContentName = styled.h6`
  margin-bottom: 11px;
  font-weight: 700;
  font-size: 13px;
`;

const ContentItems = styled.a`
  display: block;
  padding: 5px 0;
  margin: 2px 0;
  line-height: 1.58;
  color: #555;
  font-size: 11px;
  text-decoration: none;
`;

const SnsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 0;
`;

const SnsList = styled.li`
  padding: 0 0 0 8px;
  display: table-cell;
  vertical-align: middle;
`;

const SnsLink = styled.a`
  display: block;
`;

const SnsImage = styled.img`
  width: 44px;
  height: 44px;
`;

const AppstoreContainer = styled.div`
  position: absolute;
  top: 56px;
  right: 0;
`;

const AppstoreWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 252.5.px;
`;

const AppList = styled.li`
  margin: 0 0 20px 16px;
`;

const AppImage = styled.img`
  width: 108px;
  height: 34px;
`;

const ContactContainer = styled.div`
  padding: 20px 20px 70px 20px;
`;

const ContactAligner = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

const ContactItem = styled.div`
  float: left;
  color: #767676;
  font-size: 14px;
  line-height: 1.58;
`;

const Business = styled.strong`
  margin-right: 20px;
  color: #00256c;
  font-weight: 700;
`;

const ContactList = styled.li`
  position: relative;
  margin-left: 10px;
  padding-left: 10px;
  float: left;
  color: #767676;
  font-size: 14px;
  line-height: 1.58;

  :before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 1px;
    height: 11px;
    background-color: #d9dbe1;
    transform: translateY(-50%);
  }
`;

const BusinessList = styled.li`
  clear: left;
  float: left;
  color: #767676;
  font-size: 14px;
  line-height: 1.58;
`;

const CopyRight = styled.p`
  clear: both;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  color: #555;
  font-size: 14px;
  line-height: 0.58;
`;

const MarkInfo = styled.div`
  position: relative;
  float: right;
  min-width: 30px;
  margin-top: -8px;
`;

const MarkList = styled.li`
  padding: 0 10px;
`;

const MarkButton = styled.button`
  border: 0;
  background-color: transparent;
`;

const MarkImage = styled.img`
  display: inline-block;
  width: 60px;
  height: 60px;
`;

const INFO = [
  {
    contentName: '회사소개',
    contentItem: [
      '대한항공에 대하여',
      '기업지배구조',
      '투자정보',
      '지속가능경영',
      '뉴스룸',
    ],
  },
  {
    contentName: '고객지원',
    contentItem: [
      '공지사항',
      '챗봇 서비스',
      '자주 묻는 질문',
      '고객의 말씀',
      '서비스 센터',
      '지점 연락처',
      'e-서식함',
    ],
  },
  {
    contentName: '약관 및 규정',
    contentItem: [
      '개인정보 처리방침',
      '이용약관',
      '운송약관 및 고지사항',
      '소비자 안전 관련 정보',
      '운임 및 서비스 요금표',
    ],
  },
  {
    contentName: '기타안내',
    contentItem: [
      '초등학생 견학 신청',
      '고객 안내 서비스',
      '항공교통이용자 서비스 계획',
      '항공교통이용자 피해 구제',
      '관련 사이트',
      '사이트맵',
    ],
  },
];

const IMAGE = [
  {
    imageIcon: '/images/youtube.svg',
    imageLink: 'https://www.youtube.com/user/KoreanAirHome',
  },
  {
    imageIcon: '/images/facebook.svg',
    imageLink: 'https://www.facebook.com/koreanair/',
  },
  {
    imageIcon: '/images/instagram.svg',
    imageLink: 'https://www.instagram.com/KoreanAir',
  },
  {
    imageIcon: '/images/twitter.svg',
    imageLink: 'https://www.twitter.com/KoreanAir',
  },
];
