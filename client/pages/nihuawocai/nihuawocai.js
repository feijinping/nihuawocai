// pages/nihuawocai.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    point:{x:0,y:0},
    time:60,
    friendlist:[],
    title:'九尺钉耙'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.context = wx.createCanvasContext('draw_area')
    this.context2 = wx.createCanvasContext('secondCanvas');
    var friendlist= [{
      avatarUrl:"",
      nickName:"123"
    }];
    this.setData({ friendlist, friendlist});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },
  setStyle: function () {
    // this.context.setStrokeStyle("#000000")
    // this.context.setLineWidth(2)
    // this.context.setLineCap('round') // 让线条圆润
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  drawArr:[],
  touchStart:function(e){
    var point = e.touches[0];
    this.setData({point:point});
    this.context.beginPath();
  },
  touchMove:function(e){
    var point = e.touches[0];
    var front_point = this.data.point;
    this.context.moveTo(front_point.x, front_point.y);
    this.context.lineTo(point.x, point.y)
    //this.context.stroke()
    //this.context.closePath()
    this.context.stroke()
    this.context.draw(true)
    // wx.drawCanvas({
    //   canvasId: 'draw_area',
    //   reserve: true,
    //   actions: this.context.getActions() // 获取绘图动作数组
    // })
   // this.context.clearActions();
    this.drawArr.push(point)
    this.setData({ point: point });
  },
  touchEnd:function(e){
    this.context2.beginPath();
    for (var i = 0; i < this.drawArr.length - 1; i++) {
      var front_point = this.drawArr[i];
      var point = this.drawArr[i + 1];
      this.context2.moveTo(front_point.x, front_point.y);
      this.context2.lineTo(point.x, point.y);
      this.context2.stroke();
    }
    this.context2.draw(true);
    this.drawArr = [];
  }, 
  clearContext:function(e){
    this.context.draw();
    this.context2.draw();
  }
})