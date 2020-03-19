import React from 'react';
import ReactDOMServer from 'react-dom/server';
import styled from 'styled-components';

import testImageOne from '../assets/test01.jpg';
import testImageTwo from '../assets/test02.jpg';
import testImageThree from '../assets/test03.jpg';

import personOneIconSrc from '../assets/person_one_icon.svg';
import personTwoIconSrc from '../assets/person_two_icon.svg';
import personThreeIconSrc from '../assets/person_three_icon.svg';
import personFourIconSrc from '../assets/person_four_icon.svg';

import { setup } from '../config/config';

import poster from '../assets/poster.png';

const { cdnUrlBase } = setup;

const Highlight = styled.div`
  display: inline;
  background: linear-gradient(0, rgba(255, 234, 70, 0.4) 50%, #393939 50%);
`

const blockTypes = Object.freeze({
  headerOne: 'headerOne',
  headerTwo: 'headerTwo',
  headerThree: 'headerThree',
  backgoundImage: 'backgoundImage',
  paragraph: 'paragraph',
  narration: 'narration',
});


/**
 * @param {Object} block - content block
 * @param {string} block.type - title, subtitle, img, note, introduction, paragraph
 * @param {string} block.content - text content for the block if the block is not image || backgroundImage
 * @param {string} block.backgroundImageSrc - src for background image
 * @param {Object} block.bgCatchPhrases - catchphrase inside background image
 * @param {string} block.videoSrc - src of video of narration
 */
const generateContentBlock = ({
  type = null,
  content = null,
  backgroundImageSrc = {
    desktop: null,
    mobile: null,
  },
  bgCatchPhrases = {
    one: null,
    two: null,
  },
  videoSrc = {
    mp4: null,
    webm: null,
    poster: null,
  },
}) => {
  const block = {
    type,
    content,
    backgroundImageSrc,
    bgCatchPhrases,
    videoSrc,
  }
  return block;
}

const createLink = ({
  alt = '',
  text = '',
  externalLink = '',
}) => {
  return `<a target="_blank" rel="noopener noreferer" href="${externalLink}" alt="${alt}">${text}</a>`
}


const createHighlight = (text) => ReactDOMServer.renderToString((
  <Highlight>
    {text}
  </Highlight>
));

const contentSectionOne = [
  generateContentBlock({
    type: blockTypes.backgoundImage,
    backgroundImageSrc: {
      desktop: `${cdnUrlBase}/shenzhen-bg-desktop.jpg`,
      mobile: `${cdnUrlBase}/shenzhen-bg-mobile.jpg`,
    },
    bgCatchPhrases: {
      one: null,
      two: null,
    },
  }),
  generateContentBlock({
    type: blockTypes.headerThree,
    content: '人心惶惶 復工日期一延再延',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: '「一月底的時候，我就在想怎麼跟公司說要延後回去。」均豪在深圳工作的廠區原定2月2日開工，因為武漢肺炎疫情未見趨緩，一併延到2月10日，但由於申請復工的企業大排長龍，幾位台灣、香港的幹部順水推舟，建議17日後再開始上班。',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: ' 至今公司復工狀況仍不理想。能容納兩萬人的廠區，到這週只來了兩千人，僅有去年同期的四分之一。 均豪說，長期以來，廣東有大量來自湖北的移民工，但如今來自疫區者，一律不被任用。',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: ' 另一方面，許多外地人對於深圳──這個湖北以外，新冠肺炎人數第二高的城市──也是戒慎恐懼。 每個人都在觀望。 「台灣同事我們都密切聯絡，」均豪說。幾個台灣幹部，都在群組裡討論究竟何時回深圳，至今四個人，只回去一個。在公司協調下，其他人包括均豪在內，都要在3月2日回到廠區。 其他兩個台灣同事都暫時答應了下來，但均豪仍然希望三月中再回去，這兩週來在微信和主管上演多場復工拉鋸戰，「最壞的打算就是被開除。」',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `均豪才三十歲，還算年輕，對他來說，健康比工作重要。因為不知道疫情實際狀況如何，他希望至少能觀察開工一個月後的狀況，${createHighlight('如果沒有傳出大規模感染，要回去比較安心。')} 深圳在2月8日實施社區封閉式管理，小區之間禁止出入，嚴格盤查檢測居民體溫，熟諳品管原則的均豪說，這些都不足以讓他安心，「我們這行都知道，良率不是檢查出來、而是做出來的，得病的你檢查出來有什麼用？」不信任官方防疫作法，是他持續觀望的原因。`,
  }),
  generateContentBlock({
    type: blockTypes.narration,
    videoSrc: {
      mp4: 'https://d3prffu8f9hpuw.cloudfront.net/shenzhen-infect.mp4',
      webm: 'https://d3prffu8f9hpuw.cloudfront.net/shenzhen-infect.webm',
      poster: poster,
    },
  }),
]


const contentSectionTwo = [
  generateContentBlock({
    type: blockTypes.backgoundImage,
    backgroundImageSrc: testImageTwo,
    bgCatchPhrases: {
      one: '第二站：深圳',
      two: '他與老闆的復工拉鋸戰',
    },
  }),
  generateContentBlock({
    type: blockTypes.headerThree,
    content: '人心惶惶 復工日期一延再延',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: '「一月底的時候，我就在想怎麼跟公司說要延後回去。」均豪在深圳工作的廠區原定2月2日開工，因為武漢肺炎疫情未見趨緩，一併延到2月10日，但由於申請復工的企業大排長龍，幾位台灣、香港的幹部順水推舟，建議17日後再開始上班。',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: ' 至今公司復工狀況仍不理想。能容納兩萬人的廠區，到這週只來了兩千人，僅有去年同期的四分之一。 均豪說，長期以來，廣東有大量來自湖北的移民工，但如今來自疫區者，一律不被任用。',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: ' 另一方面，許多外地人對於深圳──這個湖北以外，新冠肺炎人數第二高的城市──也是戒慎恐懼。 每個人都在觀望。 「台灣同事我們都密切聯絡，」均豪說。幾個台灣幹部，都在群組裡討論究竟何時回深圳，至今四個人，只回去一個。在公司協調下，其他人包括均豪在內，都要在3月2日回到廠區。 其他兩個台灣同事都暫時答應了下來，但均豪仍然希望三月中再回去，這兩週來在微信和主管上演多場復工拉鋸戰，「最壞的打算就是被開除。」',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `均豪才三十歲，還算年輕，對他來說，健康比工作重要。因為不知道疫情實際狀況如何，他希望至少能觀察開工一個月後的狀況，${createHighlight('如果沒有傳出大規模感染，要回去比較安心。')} 深圳在2月8日實施社區封閉式管理，小區之間禁止出入，嚴格盤查檢測居民體溫，熟諳品管原則的均豪說，這些都不足以讓他安心，「我們這行都知道，良率不是檢查出來、而是做出來的，得病的你檢查出來有什麼用？」不信任官方防疫作法，是他持續觀望的原因。`,
  }),
  generateContentBlock({
    type: blockTypes.narration,
    videoSrc: {
      mp4: null,
      webm: 'https://d3prffu8f9hpuw.cloudfront.net/shenzhen-infect.webm',
      poster: poster,
    },
  }),
]


const contentSectionThree = [
  generateContentBlock({
    type: blockTypes.backgoundImage,
    backgroundImageSrc: testImageThree,
    bgCatchPhrases: {
      one: '第三站：深圳',
      two: '他與老闆的復工拉鋸戰',
    },
  }),
  generateContentBlock({
    type: blockTypes.headerThree,
    content: '人心惶惶 復工日期一延再延',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: '「一月底的時候，我就在想怎麼跟公司說要延後回去。」均豪在深圳工作的廠區原定2月2日開工，因為武漢肺炎疫情未見趨緩，一併延到2月10日，但由於申請復工的企業大排長龍，幾位台灣、香港的幹部順水推舟，建議17日後再開始上班。',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: ' 至今公司復工狀況仍不理想。能容納兩萬人的廠區，到這週只來了兩千人，僅有去年同期的四分之一。 均豪說，長期以來，廣東有大量來自湖北的移民工，但如今來自疫區者，一律不被任用。',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: ' 另一方面，許多外地人對於深圳──這個湖北以外，新冠肺炎人數第二高的城市──也是戒慎恐懼。 每個人都在觀望。 「台灣同事我們都密切聯絡，」均豪說。幾個台灣幹部，都在群組裡討論究竟何時回深圳，至今四個人，只回去一個。在公司協調下，其他人包括均豪在內，都要在3月2日回到廠區。 其他兩個台灣同事都暫時答應了下來，但均豪仍然希望三月中再回去，這兩週來在微信和主管上演多場復工拉鋸戰，「最壞的打算就是被開除。」',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `均豪才三十歲，還算年輕，對他來說，健康比工作重要。因為不知道疫情實際狀況如何，他希望至少能觀察開工一個月後的狀況，${createHighlight('如果沒有傳出大規模感染，要回去比較安心。')} 深圳在2月8日實施社區封閉式管理，小區之間禁止出入，嚴格盤查檢測居民體溫，熟諳品管原則的均豪說，這些都不足以讓他安心，「我們這行都知道，良率不是檢查出來、而是做出來的，得病的你檢查出來有什麼用？」不信任官方防疫作法，是他持續觀望的原因。`,
  }),
  generateContentBlock({
    type: blockTypes.narration,
    videoSrc: {
      mp4: 'https://storage.googleapis.com/twreporter-multimedia/videos/20161215200335-b40e2785cfd721ca06d7ded5a0cb6726.mp4',
      webm: null,
      poster: poster,
    },
  }),
]


const contentSectionFour = [
  generateContentBlock({
    type: blockTypes.backgoundImage,
    backgroundImageSrc: testImageOne,
    bgCatchPhrases: {
      one: '結論',
      two: null,
    },
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `2020春天，一場意料之外的疫災，在中國工作的台灣人，脫離原本預期的軌道，提前遭遇留下或離開的轉折。`,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: ` 選擇留下的人，要面臨幾個月內出不了城、回不了台灣的長期抗戰。轉身離開的，需要有放下一切、重新開始的勇氣。是搬回台灣重新開始，或繼續奮鬥等待下一波榮景，他們都必須思考，未來的生存之道。 `,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `超過40萬人的決定，牽動中國復工的節奏，也影響台灣人西進就業的腳步。儘管官方疫情通報顯示，湖北省外的新增病例已大幅減少，最終台幹還是得用腳投票，決定是否買單。`,
  }),
]

const contentLandingSection = [
  generateContentBlock({
    type: blockTypes.paragraph,
    content: '「我國本輪疫情高峰已經過去。」中國國家衛健委發言人米鋒12日在記者會上宣布。由於中國國內經濟下滑的壓力增加，中共中央政治局常委會在18日會後指出，各級黨政單位應積極推動企業復工復產，降低疫情帶來的損失。',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: '年後以來一波波的復工潮，讓台幹備感壓力。',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: '「就是壓著我們趕快復工。」30歲的均豪（化名），在中國一間供應蘋果手機配件的港商工作。公司在深圳的工廠早在2月17日開工，身為技術經理的他，在彰化老家過完年後，遲遲難以決定該買哪一天的機票回去。',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `根據行政院主計處統計，${createHighlight('2018年赴中國大陸工作的台灣人達40萬4千人。')}全台超過40萬的台幹、台商，其中有許多人像均豪一樣，因為中國新冠肺炎疫情，滯留在家，尚未回到工作崗位。`,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: '企業、工廠急需回穩的人力需求湧現，許多台幹、台商陷入「保住生命還是保住飯碗」的兩難。他們如何在夾縫中抉擇、思考生涯的下一步？',
  }),
]

const relatedData = [{
    title: '武漢肺炎專題／戰役實錄',
    date: '2020/02/11',
    category: '疫情通報',
    imgUrl: 'https://news.pts.org.tw/home_images/banner/1.jpg?v=1584439203',
    externalLink: 'https://newmedia.pts.org.tw/chinaoutbreak/',
  },
  {
    title: '武漢封城30天，全中國開城復工待何時？',
    date: '2020/02/21',
    category: '全球公衛',
    imgUrl: 'http://newmedia.pts.org.tw/sub-chinaoutbreak/figure.jpg',
    externalLink: 'https://newmedia.pts.org.tw/sub-chinaoutbreak/',
  },
  {
    title: '報導側記／中國權威發布的疫情數據迷霧',
    date: '2020/03/04',
    category: '疫情通報',
    imgUrl: 'https://server.newslab.pts.org.tw/uploads/News/175/5e61ba1be7d2e.jpg',
    externalLink: 'https://newmedia.pts.org.tw/sub-chinaoutbreak-2-/',
  },
  {
    title: '【P觀點】武漢肺炎疫情下，待回京的台灣中醫師',
    date: '2020/02/27',
    category: '國內防疫',
    imgUrl: 'https://img.youtube.com/vi/3f0t4rxVkuA/hqdefault.jpg',
    externalLink: 'https://newslab.pts.org.tw/video/78',
  },
  {
    title: '【P觀點】病毒專家何美鄉，武漢肺炎大解密',
    date: '2020/02/20',
    category: '國內防疫',
    imgUrl: 'https://img.youtube.com/vi/-2xCFHneIMI/0.jpg',
    externalLink: 'https://newslab.pts.org.tw/video/77',
  },
  {
    title: '【疫與記憶之四】義大利篇：我在佛羅倫斯，經歷世紀之疫',
    date: '2020/03/13',
    category: '全球公衛',
    imgUrl: 'https://server.newslab.pts.org.tw/uploads/News/180/5e6b97bae9e4e.jpg',
    externalLink: 'https://newslab.pts.org.tw/news/180',
  },
]

const people = [
  {
    title: '製作人',
    name: '卓冠齊',
  },
  {
    title: '企劃',
    name: '簡毅慧',
  },
  {
    title: '採訪',
    name:  '伍芬婕',
  },
  {
    title: '文字',
    name:  '伍芬婕、簡毅慧',
  },
  {
    title: '影音製作',
    name: '許家嘉',
  },
  {
    title: '網頁設計',
    name: '曾芯敏',
  },
  {
    title: '網頁工程',
    name: '曾涵郁',
  },
  {
    title: '社群行銷',
    name: 'Nagao Kunaw',
  },
];

const anchors = [
  {
    id: 'first-stop',
    label: '第一站',
    iconSrc: personOneIconSrc,
  },
  {
    id: 'second-stop',
    label: '第二站',
    iconSrc: personTwoIconSrc,
  },
  {
    id: 'third-stop',
    label: '第三站',
    iconSrc: personThreeIconSrc,
  },
  {
    id: 'fourth-stop',
    label: '總結',
    iconSrc: personFourIconSrc,
  },
]

const contentSections = [
  contentSectionOne,
  contentSectionTwo,
  contentSectionThree,
  contentSectionFour,
];

export {
  contentSections,
  contentLandingSection,
  blockTypes,
  relatedData,
  people,
  anchors,
}
