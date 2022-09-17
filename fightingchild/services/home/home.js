import { config } from '../../config/config'
import { getHomeCardList, getHomeSwiperImageList } from '../../mockdata/homepage'

function fetchHomeWithMock() {
  return new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
    return {
      swiperImages: getHomeSwiperImageList(),
      homeCards: getHomeCardList()
    }
  });
}


export function fetchHome() {
  if (config.useMock) {
    return fetchHomeWithMock();
  } else {
    return new Promise((resolve) => {
      resolve('real api');
    });
  }
}