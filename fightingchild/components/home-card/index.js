
Component({

  options: {
    addGlobalClass: true,
  },

  /**
   * 组件的属性列表
   */
  properties: {
    id: {
      type: String,
      value: ''
    },
    data: {
      type: Object,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    uniqueId: '',
    card: { id: '', text: '', img: '', label: '', isOnline: true}
  },

  observers: {
    'data': function(data) {
      if (!data) {
        return;
      }
      console.log("datainfo: ")
      console.log(data)
      this.setData({ card: data, });
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    init() {
      const id = this.properties.id
      this.genUniqueID(id)

    },

    // 生成唯一id
    genUniqueID(id) {
      let uniqueId;
      if (id) {
        uniqueId = id;
      } else {
        uniqueId = `home-card-${~~(Math.random() * 10 ** 8)}`;
      }
      this.setData({ uniqueId });
    },

    tapHandle() {
      this.triggerEvent('click', { card: this.data.card });
    },
  }
})
