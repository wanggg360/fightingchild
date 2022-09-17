// page/components/home-card-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    homeCardList: {
      type: Array,
      value: [],
    },

    id: {
      type: String,
      value: '',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    uniqueId: '',

  },

  lifetimes: {
    ready() {
      this.init();
    },

    attached() {

    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

    init() {
      this.genUniqueId(this.id || '');
    },

    genUniqueId(id) {
      if (id) {
        this.setData({ uniqueId: id });
      } else {
        this.setData({
          uniqueId: `home-card-list-${~~(Math.random() * 10 ** 8)}`,
        });
      }
    },
  }
})
