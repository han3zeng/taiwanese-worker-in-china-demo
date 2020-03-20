import React from 'react';
import ReactDOMServer from 'react-dom/server';
import styled from 'styled-components';

import personOneIconSrc from '../assets/shenzhen-icon.svg';
import personTwoIconSrc from '../assets/shaihai-icon.svg';
import personThreeIconSrc from '../assets/beijing-icon.svg';
import personFourIconSrc from '../assets/conclusion-icon.svg';

import { setup } from '../config/config';

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
    content: `企業、工廠急需回穩的人力需求湧現，${createHighlight('許多台幹、台商陷入「保住生命還是保住飯碗」的兩難。')}他們如何在夾縫中抉擇、思考生涯的下一步？`,
  }),
]


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
    content: '「一月底的時候，我就在想怎麼跟公司說要延後回去。」均豪工作的廠區原定2月2日開工，因為疫情未見趨緩，一併延到2月10日，但由於申請復工的企業大排長龍，幾位台灣、香港的幹部順水推舟，建議17日後再開始上班。',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `截至3月20日，除了出身湖北的人，多數員工都已回到崗位。即便如此，${createHighlight('能容納兩萬人的廠區，到工人數只有去年同期的八成。')}均豪說，長期以來，廣東有大量來自湖北的移民工，但如今來自疫區者，一律不被任用。`,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: '每個人都在觀望。',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `「台灣同事我們都密切聯絡，」均豪說。${createHighlight('四個台灣幹部，都在群組裡討論究竟何時回深圳。')}在公司協調下，其他人包括均豪在內，必須要在3月2日回到廠區。`,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: '一開始，幾個台灣同事都暫時答應了下來，但均豪仍然向主管表示，希望多觀望一些時間再回去，幾週以來在微信和主管上演多場復工拉鋸戰，「最壞的打算就是被開除。」',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: '均豪才三十歲，還算年輕，對他來說，健康比工作重要。因為不知道疫情實際狀況如何，他希望至少能觀察開工一個月後的狀況，如果沒有傳出大規模感染，要回去比較安心。',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: '深圳在2月8日實施社區封閉式管理，小區之間禁止出入，嚴格盤查檢測居民體溫，熟諳品管原則的均豪說，這些都不足以讓他安心。',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `「我們這行都知道，良率不是檢查出來、而是做出來的，得病的你檢查出來有什麼用？」${createHighlight('不信任官方防疫作法，是他持續觀望的原因。')}`,
  }),
  generateContentBlock({
    type: blockTypes.narration,
    videoSrc: {
      mp4: `${cdnUrlBase}/shenzhen-infect.mp4`,
      webm: `${cdnUrlBase}/shenzhen-infect.webm`,
      poster: `${cdnUrlBase}/shenzhen-cover.jpg`,
      videoTitlle: '深圳台幹如何看官方疫情數字？',
    },
  }),
  generateContentBlock({
    type: blockTypes.headerThree,
    content: '不願返工  是害怕生病後回不了家',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: '身為港商企業裡少數的台灣人，均豪最怕的是生病的時候回不了台灣。「他們可以回去香港治療，萬一我在深圳確診，連香港都不能去了，因為沒有地方會願意讓你過去。」',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: '部分人對於台幹回台就醫的不諒解，也讓他有所顧忌。「得病了再回來超糟的呀，還是會怕被罵。」',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `均豪說，網路上有些講法，指台商台幹是「沒事祖國好棒棒、有事逃回台灣」，但並不是所有在中國工作的台灣人都是這樣。${createHighlight('對他而言，在那邊就是一份工作，自己並不會特別讚賞或追捧中國。')}`,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `最早曾在越南工作，均豪不是沒有想過要回台灣，但現實是薪水直接砍半，「發現怎麼這麼低。」政大經濟系畢業的他，沒有工程背景，憑著多年歷練，在海外能做到技術職位，不甘心明明有能力卻低就，均豪最終還是選擇出國。`,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `雖然有協商不成被開除的心裡準備，他還是希望盡可能保留工作，說自己以無薪假名義工作到二、三月都可以，但話一講完他就猶豫了，「恩...連續兩個月好像有點多…」內心的掙扎溢於言表。`,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `整個二月，均豪和主管的復工協商，呈現且戰且走的局面。`,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `${createHighlight('均豪坦承，主管不接受三月中才回去的時程，但也沒有要開除他的意思。')}他跟主管建議過放無薪假，但港商並沒有這樣的前例。`,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `他在台灣期間，每天都還是會遠端處理信件，但真正能做的事情不多。他在家上班仍然算出勤，但是會把自己累積的14天年假用掉。`,
  }),
  generateContentBlock({
    type: blockTypes.narration,
    videoSrc: {
      mp4: `${cdnUrlBase}/shenzhen-work.mp4`,
      webm: `${cdnUrlBase}/shenzhen-work.webm`,
      poster: `${cdnUrlBase}/shenzhen-cover.jpg`,
      videoTitlle: '深圳台幹如何跟中企老闆協商？',
    },
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `經過一個月的漫長拉鋸，均豪最終選擇了工作，在三月中回到深圳。他表示，一方面是因為疫情暫時趨緩，另一方面也是捨不得現在這份工作。`,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `雖然他整個二月都在台灣待命，但公司的薪水仍然照發，疫情期間請的假，可以用之後的加班時數補，等於讓員工預支休假但不減薪，相當大方。`,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `由於蘋果公司3月14日宣布關閉大中華區以外的全球門市，均豪坦承目前公司處於無單可接、人力過剩的狀態，但是預計三、四月的薪資仍會如期發放。`,
  }),
]


const contentSectionTwo = [
  generateContentBlock({
    type: blockTypes.backgoundImage,
    backgroundImageSrc: {
      desktop: `${cdnUrlBase}/shanghai-bg-desktop.jpg`,
      mobile: `${cdnUrlBase}/shanghai-bg-mobile.jpg`,
    },
    bgCatchPhrases: {
      one: null,
      two: null,
    },
  }),
  generateContentBlock({
    type: blockTypes.headerThree,
    content: '寧被隔離也要撤  台幹夫妻三天兩夜快閃搬家',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: '當許多台幹身陷復工困境，有的人已經準備回台發展，甚至不惜被隔離14天也要回中國搶救家當。',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `${createHighlight('「因為安全問題，就不考慮回去了。」')}電話那頭38歲的啟祥（化名），2月25日終於踏出商旅房門，結束為期14天的居家隔離。`,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: '原本在上海連鎖日本料理店擔任總廚的啟祥，和太太在上海工作約兩年，1月23日回台灣過年，沒想到因為這波疫情，啟祥的老闆在1月30日結清所有員工薪水就結束營業。',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: '後續聽說上海可能封城，夫妻倆趕在2月10日官方開工日之前，把大部分東西收完，三天兩夜內來回台灣。',
  }),
  generateContentBlock({
    type: blockTypes.narration,
    videoSrc: {
      mp4: `${cdnUrlBase}/shanghai.mp4`,
      webm: `${cdnUrlBase}/shanghai.webm`,
      poster: `${cdnUrlBase}/shanghai-cover.jpg`,
      videoTitlle: '上海台幹夫妻如何快閃打包行李？',
    },
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: '夫妻倆寧願冒險也要撤回台灣，醫療問題是背後最大的擔憂。',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `「最壞的打算是寧願在這邊看醫生。」一年多前赴陸工作的啟祥說，之前有中國同事在回診時，${createHighlight('被醫院告知之前打錯針或開錯藥，讓他對當地的醫療品質缺乏信心，')}「他們都不會覺得離譜，但我們怎麼敢去看。」`,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `目前廣告業的妻子是遠距辦公，工作進度受到影響。除了跟客戶提案或開會，沒辦法面對面進行，一天之中的工作時刻表也拉長。雖然只有六到八小時，但公司多數同事都遠距上班，溝通不如在辦公室方便，${createHighlight('有時到晚上十點、十一點都還在處理公事。')}`,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `經過討論，太太近期工作告一段落後就會離職，兩人打算在台灣重新開始。`,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `啟祥表示，兩年前到中國工作，是想見見世面、開拓眼界，夫妻兩人的薪水也都比在台灣時高，因為疫情要放棄工作回台，難免覺得可惜，${createHighlight('但疫情短期難見好轉，安全還是第一考量。')}`,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `復工進入第三週，許多台幹都陸續被「逼工」。啟祥認識的一個餐飲業高階主管，在公司要求下，已在2月24日回到上海，理由是高管做榜樣、樹立表率，底下員工才會願意跟進。`,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `雖然人回去了，公司政策是二月不給薪，三、四月的薪水延遲發，至於何時發薪仍不確定，${createHighlight('「他知道這不太合理，但又不能做什麼。」')}`,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `相對於年輕族群，在對岸發展已久的台灣人，仍然期待能盡快回去上班。`,
  }),
]


const contentSectionThree = [
  generateContentBlock({
    type: blockTypes.backgoundImage,
    backgroundImageSrc: {
      desktop: `${cdnUrlBase}/beijing-bg-desktop.jpg`,
      mobile: `${cdnUrlBase}/beijing-bg-mobile.jpg`,
    },
    bgCatchPhrases: {
      one: null,
      two: null,
    },
  }),
  generateContentBlock({
    type: blockTypes.headerThree,
    content: '北京豐臺第一位台灣中醫師  他的選擇是什麼？',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: '「畢竟花了十年時間在北京打下基礎，不可能隨便就說不回去了。」南投竹山一間中藥鋪裡，五十七歲的中醫師謝茂源，頭髮灰白，笑容和藹。',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: '謝茂源的父親習武多年，對跌打傷科頗有研究，五十多年前在竹山開了中藥房，因此謝茂源年輕時在父親耳濡目染下，對中醫產生興趣。',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: '2005年考取中國中醫師執照的他，今年從醫屆滿十年，他的中醫執業證，在北京豐臺區是TW編號的第一號，如今因不孕症門診小有名氣，在北京市六醫院等五家醫療院所都有設診。',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `北京2月9日發布實施社區管理，消息一出，人已回台灣過年的謝茂源，不停聽到微信訊息聲咚咚作響。${createHighlight('許多中醫診所陸續暫停門診，至今不確定何時恢復')}，他和太太兩個人目前先留在台灣，等待開工。`,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `由於中國不少中醫診所是零底薪，收入以掛號費為主，${createHighlight('這波停業，讓他收入驟減。')}`,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `謝茂源一次掛號費是人民幣100元（約新台幣420元），要價不斐。即使如此，一診平均仍有30到40個病人，${createHighlight('一天不看診就至少損失6000元人民幣（約新台幣2萬5千元）')}。「損失大了呀。」謝茂源嘆道。`,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `不過，中國由於數位服務發達，醫生即使人在台灣，還是能用手機線上看診。`,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `打開一個APP軟體，謝茂源在上面的病患已經排到1210號，除了初診病人不適用之外，複診病患可以填問診單，附上如舌頭、臉部的照片，讓醫生診斷。年後以來，他已經線上看了至少50多個病人。`,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `在中國十多年，謝茂源已經習慣北京的生活，「我們只要一支手機就可以搞定所有的開支，生活幾乎不用帶錢。」他的兒子目前在北京念醫學院，孫子也即將在六月誕生，北京早已是謝茂源的第二個家。`,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `子孫根留北京，謝茂源一則以喜、一則以憂。事實上，謝茂源的兒子過年期間從未踏出北京，${createHighlight('因為正巧轉到醫院急診科接受培訓，幾乎是疫情爆發之際的第一線人員，')}但他卻不急著離開，想留守急診科繼續服務。`,
  }),
  generateContentBlock({
    type: blockTypes.narration,
    videoSrc: {
      mp4: `${cdnUrlBase}/beijing.mp4`,
      webm: `${cdnUrlBase}/beijing.webm`,
      poster: `${cdnUrlBase}/beijing-cover.jpg`,
      videoTitlle: '台灣中醫師的兒子在北京現況如何？',
    },
  }),
]


const contentSectionFour = [
  generateContentBlock({
    type: blockTypes.backgoundImage,
    backgroundImageSrc: {
      desktop: `${cdnUrlBase}/conclusion-bg-desktop.jpg`,
      mobile: `${cdnUrlBase}/conclusion-bg-mobile.jpg`,
    },
    bgCatchPhrases: {
      one: null,
      two: null,
    },
  }),
  generateContentBlock({
    type: blockTypes.headerThree,
    content: '結語',
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `2020春天，一場意料之外的疫災，在中國工作的台灣人，脫離原本預期的軌道，提前遭遇留下或離開的轉折。`,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `選擇留下的人，要面臨幾個月內出不了城、回不了台灣的長期抗戰。轉身離開的，需要有放下一切、重新開始的勇氣。是搬回台灣重新開始，或繼續奮鬥等待下一波榮景，他們都必須思考，未來的生存之道。`,
  }),
  generateContentBlock({
    type: blockTypes.paragraph,
    content: `超過40萬人的決定，牽動中國復工的節奏，也影響台灣人西進就業的腳步。儘管中國官方疫情通報顯示，新增病例已大幅減少，最終台幹還是得用腳投票，決定是否買單。`,
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
    label: '深圳',
    iconSrc: personOneIconSrc,
  },
  {
    id: 'second-stop',
    label: '上海',
    iconSrc: personTwoIconSrc,
  },
  {
    id: 'third-stop',
    label: '北京',
    iconSrc: personThreeIconSrc,
  },
  {
    id: 'fourth-stop',
    label: '結語',
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
