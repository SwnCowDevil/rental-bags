Page({
  data: {
    state: {
      name: '',
      components: [],
      navigationBar: {},
      page: {}
    }
  },
  onLoad(options) {
    let id = options.id;
    
    // 小程序预览自定义页面
    if (options.scene) {
      const sceneParams = decodeURIComponent(options.scene).split('=');
      id = sceneParams[1];
    }
    
    // 获取页面数据
    this.getDiyPage(id);
  },
  
  getDiyPage(id) {
    // 支付宝小程序获取自定义页面数据
    // 由于无法直接调用原项目的API，这里只是模拟数据结构
    // 实际项目中需要根据支付宝小程序规范调用API
    this.setData({
      'state.name': '自定义页面',
      'state.components': [],
      'state.navigationBar': {},
      'state.page': {}
    });
  },
  
  onPageScroll() {}
}); 