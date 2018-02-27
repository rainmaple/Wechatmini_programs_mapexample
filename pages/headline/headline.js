// pages/headline/headline.js
var app =getApp()
Page({

  
  // map.js

  data: {
      motto:'fnsdjfnk',
      userInfo:{},
      //默认未获取地址
      hasLocation:false
     },
     //事件处理函数
     bindViewTap:function(){
       wx.navigateTo({
         //跳转新页面
         url: '../me/me'
       }) 
     },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // console.log('onload')
    // var that =this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })

    // wx.request({
    //   url:'https://cn.faceplusplus.com',
    //   data:{},
    //   method:'GET',
    //   header:{
    //     'content-type':'Application/json'
    //   },
    //   success:function(res){
    //     console.log(res);
    //   }
    // }
    // )
  
  },
  //获取经纬度
  getLocation:function(e){
    console.log(e)
    var that=this
    wx.getLocation({
      success: function(res) {
        //success
        console.log(res)
        that.setData({
          hasLocation:true,
          location:{
            longitude:res.longitude,
            latitude:res.latitude
          }
        })
      },
    })
  },
  //根据经纬度在地图上显示
  openLocation:function(e){
    console.log('openLocation'+e)
    var value =e.detail.value
    wx.openLocation({
      longitude: Number(value.longitude),
      latitude: Number(value.latitude)
      
    })
  },
  //选择位置
  chooseLocation:function(e){
    console.log(e)
    var that =this
    wx.chooseLocation({
      success: function(res) {
          //success
          console.log(res)
          that.setData({
            hasLocation:true,
            location:{
              longitude: res.longitude,
              latitude: res.latitude
            }
          })

      },

      fail:function(){
        console.log('fail')
      },
      complete:function(){
        //complete
      }
    })
  },
  face_Recognize_phototake: function () {
    wx.navigateTo({
      //跳转新页面
      url: 'face_recognize/face_recognize'
    })
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
  
  }


  
})