// page/home/home.js

import { fetchHome } from "../../services/home/home"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSrcs: [],
    homeCards: [],
    current: 1,
    autoplay: true,
    duration: 500,
    interval: 5000,
    indicatorDots: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.init()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  init() {
    this.loadHomePage()
  },

  loadHomePage() {
    fetchHome().then(({swiperImages, homeCards}) => {
      this.setData({
        imgSrcs: swiperImages,
        homeCards: homeCards
      })
      console.log("load finish")
      console.log(homeCards)
    })
  },

  homeCardClickHandle(e) {
    const { index } = e.detail;
    const { selectId } = this.data.homeCards[index];
    wx.navigateTo({
      url: `/pages/goods/details/index?spuId=${selectId}`,
    });
  },
})