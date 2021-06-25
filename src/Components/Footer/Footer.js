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
  padding: 3.9rem 2rem 3.5rem;
  border-top: 1px solid #d9dbe1;
  background-color: #f3f4f8;
`;

const TextAligner = styled.div`
  position: relative;
  max-width: 128rem;
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
  margin-bottom: 1.1rem;
  font-weight: 700;
  font-size: 1.3rem;
`;

const ContentItems = styled.a`
  display: block;
  padding: 5px 0;
  margin: 0.2rem 0;
  line-height: 1.58;
  color: #555;
  font-size: 1.1rem;
  text-decoration: none;
`;

const SnsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 0;
`;

const SnsList = styled.li`
  padding: 0 0 0 0.8rem;
  display: table-cell;
  vertical-align: middle;
`;

const SnsLink = styled.a`
  display: block;
`;

const SnsImage = styled.img`
  width: 4.4rem;
  height: 4.4rem;
`;

const AppstoreContainer = styled.div`
  position: absolute;
  top: 5.6rem;
  right: 0;
`;

const AppstoreWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 25.25.rem;
`;

const AppList = styled.li`
  margin: 0 0 2rem 1.6rem;
`;

const AppImage = styled.img`
  width: 10.8rem;
  height: 3.4rem;
`;

const ContactContainer = styled.div`
  padding: 2rem 2rem 7rem 2rem;
`;

const ContactAligner = styled.div`
  width: 100%;
  max-width: 128rem;
  margin: 0 auto;
`;

const ContactItem = styled.div`
  float: left;
  color: #767676;
  font-size: 1.4rem;
  line-height: 1.58;
`;

const Business = styled.strong`
  margin-right: 2rem;
  color: #00256c;
  font-weight: 700;
`;

const ContactList = styled.li`
  position: relative;
  margin-left: 1rem;
  padding-left: 1rem;
  float: left;
  color: #767676;
  font-size: 1.4rem;
  line-height: 1.58;

  :before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 1px;
    height: 1.1rem;
    background-color: #d9dbe1;
    transform: translateY(-50%);
  }
`;

const BusinessList = styled.li`
  clear: left;
  float: left;
  color: #767676;
  font-size: 1.4rem;
  line-height: 1.58;
`;

const CopyRight = styled.p`
  clear: both;
  width: 100%;
  max-width: 128rem;
  margin: 0 auto;
  color: #555;
  font-size: 1.4rem;
  line-height: 0.58;
`;

const MarkInfo = styled.div`
  position: relative;
  float: right;
  min-width: 30rem;
  margin-top: -0.8rem;
`;

const MarkList = styled.li`
  padding: 0 1rem;
`;

const MarkButton = styled.button`
  border: 0;
  background-color: transparent;
`;

const MarkImage = styled.img`
  display: inline-block;
  width: 6rem;
  height: 6rem;
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
