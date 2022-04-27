import logos from '@images/blog';
import {ImageSourcePropType, ImageURISource} from 'react-native';

interface SitesType {
  [site: string]: SiteType;
}

interface SiteType {
  name: string;
  imageSource: ImageSourcePropType & ImageURISource;
}

export const siteName: SitesType = {
  kakao: {name: '카카오', imageSource: logos.lkakao},
  woowa: {name: '우아한형제들', imageSource: logos.lwoowa},
  banksalad: {name: '뱅크샐러드', imageSource: logos.lbanksalad},
  watcha: {name: '왓챠', imageSource: logos.lwatcha},
  daangn: {name: '당근마켓', imageSource: logos.ldaangn},
  wanted: {name: '원티드', imageSource: logos.lwanted},
  line: {name: '라인', imageSource: logos.lline},
  ridi: {name: '리디북스', imageSource: logos.lridi},
  toss: {name: '토스', imageSource: logos.ltoss},
  zigbang: {name: '직방', imageSource: logos.lzigbang},
  yanolja: {name: '야놀자', imageSource: logos.lyanolja},
  musinsa: {name: '무신사', imageSource: logos.lmusinsa},
  kakaoenterprise: {
    name: '카카오엔터프라이즈',
    imageSource: logos.lkakaoenterprise,
  },
  '11st': {name: '11번가', imageSource: logos.l11st},
  idus: {name: '아이디어스', imageSource: logos.lidus},
  bbros: {name: '비브로스', imageSource: logos.lbbros},
  kakaoent: {name: '카카오엔터테인먼트', imageSource: logos.lkakaoent},
  class101: {name: '클래스101', imageSource: logos.lclass101},
  spoon: {name: '스푼', imageSource: logos.lspoon},
  soomgo: {name: '숨고', imageSource: logos.lsoomgo},
  remember: {name: '드라마앤컴퍼니', imageSource: logos.lremember},
  liner: {name: '라이너', imageSource: logos.lliner},
  athenaslab: {name: '아테나스랩', imageSource: logos.lathenaslab},
  ssg: {name: '신세계', imageSource: logos.lssg},
  zum: {name: 'ZUM', imageSource: logos.lzum},
  petfriends: {name: '펫프렌즈', imageSource: logos.lpetfriends},
  opgg: {name: 'OP.GG', imageSource: logos.lopgg},
  kimjeonghwan: {name: '김정환블로그', imageSource: logos.ldefault},
  toast: {name: 'TOAST', imageSource: logos.ltoast},
  jojoldu: {name: '기억보단 기록을', imageSource: logos.ldefault},
  yogiyo: {name: '요기요', imageSource: logos.lyogiyo},
  hyperconnect: {name: '하이퍼커넥트', imageSource: logos.lhyperconnect},
  '29cm': {name: '29CM', imageSource: logos.l29cm},
};
