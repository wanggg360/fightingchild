// 主页常量
const homeSwiperImages = [
  {
    img: '../resources/image/homeswiper/mother_teach.png',
    index:'1'
  },
  {
    img: '../resources/image/homeswiper/happy_friends.png',
    index:'2'
  },
]

const homeCards = [
  {
    id: 0,
    img: '../../page/resources/image/homecard/arithmetic.png',
    text: '算术',
    label: 'arithmetic',
    isOnline: true
  },
  {
    id: 1,
    img: '../../page/resources/image/homecard/literacy.png',
    text: '识字',
    label: 'literacy',
    isOnline: true
  },
  {
    id: 2,
    img: '../../page/resources/image/homecard/english.png',
    text: '英语',
    label: 'english',
    isOnline: false
  },
  {
    id: 3,
    img: '../../page/resources/image/homecard/wiki.png',
    text: '百科',
    label: 'wiki',
    isOnline: false
  },
]

export function getHomeSwiperImageList() {
  return homeSwiperImages;
}

export function getHomeCardList() {
  return homeCards;
}