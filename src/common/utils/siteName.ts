import logos from '@images/blog';
import {ImageSourcePropType, ImageURISource} from 'react-native';

interface SitesType {
  [site: string]: SiteType;
}

interface SiteType {
  name: string;
  site: string;
  imageSource: ImageSourcePropType & ImageURISource;
}

export const siteName: SitesType = {
  kakao: {name: '카카오', site: 'kakao', imageSource: logos.lkakao},
  woowa: {name: '우아한형제들', site: 'woowa', imageSource: logos.lwoowa},
  banksalad: {
    name: '뱅크샐러드',
    site: 'banksalad',
    imageSource: logos.lbanksalad,
  },
  watcha: {name: '왓챠', site: 'watcha', imageSource: logos.lwatcha},
  daangn: {name: '당근마켓', site: 'daangn', imageSource: logos.ldaangn},
  wanted: {name: '원티드', site: 'wanted', imageSource: logos.lwanted},
  line: {name: '라인', site: 'line', imageSource: logos.lline},
  ridi: {name: '리디북스', site: 'ridi', imageSource: logos.lridi},
  toss: {name: '토스', site: 'toss', imageSource: logos.ltoss},
  zigbang: {name: '직방', site: 'zigbang', imageSource: logos.lzigbang},
  yanolja: {name: '야놀자', site: 'yanolja', imageSource: logos.lyanolja},
  musinsa: {name: '무신사', site: 'musinsa', imageSource: logos.lmusinsa},
  kakaoenterprise: {
    name: '카카오엔터프라이즈',
    site: 'kakaoenterprise',
    imageSource: logos.lkakaoenterprise,
  },
  '11st': {name: '11번가', site: '11st', imageSource: logos.l11st},
  idus: {name: '아이디어스', site: 'idus', imageSource: logos.lidus},
  bbros: {name: '비브로스', site: 'bbros', imageSource: logos.lbbros},
  kakaoent: {
    name: '카카오엔터테인먼트',
    site: 'kakaoent',
    imageSource: logos.lkakaoent,
  },
  class101: {name: '클래스101', site: 'class101', imageSource: logos.lclass101},
  spoon: {name: '스푼', site: 'spoon', imageSource: logos.lspoon},
  soomgo: {name: '숨고', site: 'soomgo', imageSource: logos.lsoomgo},
  remember: {
    name: '드라마앤컴퍼니',
    site: 'remember',
    imageSource: logos.lremember,
  },
  liner: {name: '라이너', site: 'liner', imageSource: logos.lliner},
  athenaslab: {
    name: '아테나스랩',
    site: 'athenaslab',
    imageSource: logos.lathenaslab,
  },
  ssg: {name: '신세계', site: 'ssg', imageSource: logos.lssg},
  zum: {name: 'ZUM', site: 'zum', imageSource: logos.lzum},
  petfriends: {
    name: '펫프렌즈',
    site: 'petfriends',
    imageSource: logos.lpetfriends,
  },
  opgg: {name: 'OP.GG', site: 'opgg', imageSource: logos.lopgg},
  kimjeonghwan: {
    name: '김정환블로그',
    site: 'kimjeonghwan',
    imageSource: logos.ldefault,
  },
  toast: {name: 'TOAST', site: 'toast', imageSource: logos.ltoast},
  jojoldu: {
    name: '기억보단 기록을',
    site: 'jojoldu',
    imageSource: logos.ldefault,
  },
  yogiyo: {name: '요기요', site: 'yogiyo', imageSource: logos.lyogiyo},
  hyperconnect: {
    name: '하이퍼커넥트',
    site: 'hyperconnect',
    imageSource: logos.lhyperconnect,
  },
  '29cm': {name: '29CM', site: '29cm', imageSource: logos.l29cm},
};
