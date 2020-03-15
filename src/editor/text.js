import React from 'react';
import styled from 'styled-components';

import testImageOne from '../assets/test01.jpg';
import testImageTwo from '../assets/test02.jpg';
import testImageThree from '../assets/test03.jpg';

const Highlight = styled.div`
  display: inline;
  background: linear-gradient(0, #FFEA46 50%, ${props => props.theme.backgroundColor} 50%);
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
 * @param {string} block.narrationSrc - src of video of narration
 */
const generateContentBlock = ({
  type = null,
  content = null,
  backgroundImageSrc = null,
  bgCatchPhrases = {
    one: null,
    two: null,
  },
  narrationSrc = {
    mp4: null,
    webm: null,
  },
}) => {
  const block = {
    type,
    content,
    backgroundImageSrc,
    bgCatchPhrases,
    narrationSrc,
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


const createHighlight = ({
  text=''
}) => (
  <Highlight>
    {text}
  </Highlight>
);

const contentSectionOne = [
  generateContentBlock({
    type: blockTypes.backgoundImage,
    backgroundImageSrc: testImageOne,
    bgCatchPhrases: {
      one: '第一站：深圳',
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
    narrationSrc: {
      mp4: 'https://storage.googleapis.com/twreporter-multimedia/videos/20161215200335-b40e2785cfd721ca06d7ded5a0cb6726.mp4',
      webm: null,
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
    narrationSrc: {
      mp4: 'https://storage.googleapis.com/twreporter-multimedia/videos/20161215200335-b40e2785cfd721ca06d7ded5a0cb6726.mp4',
      webm: null,
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
    narrationSrc: {
      mp4: 'https://storage.googleapis.com/twreporter-multimedia/videos/20161215200335-b40e2785cfd721ca06d7ded5a0cb6726.mp4',
      webm: null,
    },
  }),
]


const relatedData = [{
    title: '港學者：武漢肺炎1死　可能代表百人感染',
    date: '2020/03/01',
    category: '全球公衛',
    imgUrl: 'https://daf1ua3hmwh9p.cloudfront.net/news_images/468640/1583064066c.jpg',
    externalLink: 'https://news.pts.org.tw/article/468640',
  },
  {
    title: '武漢封城30天，全中國開城復工待何時？',
    date: '2020/02/21',
    category: '中國疫情',
    imgUrl: 'http://newmedia.pts.org.tw/sub-chinaoutbreak/figure.jpg',
    externalLink: 'https://newmedia.pts.org.tw/sub-chinaoutbreak/',
  },
  {
    title: '過去1天29死為2月最少　中國專家：4月底可控制',
    date: '2020/02/27',
    category: '中國疫情',
    imgUrl: 'https://daf1ua3hmwh9p.cloudfront.net/news_images/468361/1582804267v.jpg',
    externalLink: 'https://news.pts.org.tw/article/464789',
  },
  {
    title: '伊朗疫情嚴峻　議員報料官方掩蓋疫情',
    date: '2020/02/25',
    category: '全球公衛',
    imgUrl: 'https://daf1ua3hmwh9p.cloudfront.net/news_images/467924/1582598426r.jpg',
    externalLink: 'https://news.pts.org.tw/article/467924',
  },
  {
    title: '【P觀點】病毒專家何美鄉，武漢肺炎大解密',
    date: '2020/02/20',
    category: '國內防疫',
    imgUrl: 'https://img.youtube.com/vi/-2xCFHneIMI/0.jpg',
    externalLink: 'https://newslab.pts.org.tw/video/77',
  },
  {
    title: '武漢肺炎全球逾8.5萬人確診　近60國淪陷',
    date: '2020/02/29',
    category: '全球公衛',
    imgUrl: 'https://news.pts.org.tw/news_images/468564/1582976537f.jpg',
    externalLink: 'https://news.pts.org.tw/article/468564',
  },
]

export {
  contentSectionOne,
  contentSectionTwo,
  contentSectionThree,
  blockTypes,
  relatedData
}
