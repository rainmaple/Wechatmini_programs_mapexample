//获取应用实例  
var app = getApp()
Page({
  data: {
    tempFilePaths: ''
  },
  onLoad: function () {
  },
  chooseimage: function () {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9  
      sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: [ 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片 
        var tempFilePaths =res.tempFilePaths
        wx.uploadFile({
          url: 'http://localhost:8080/Wxface_version1/servlet/WxUploadFileServlet',
          filePath: tempFilePaths[0],
          name: 'name',
          header:{
            'content-type':'Application/json'
          },
          formData:{
            imgName:'我是图片名称',
            imgSize:'122kb'
          },
          success:function(res){
            console.log(res)
          }
        }) 
        _this.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })
  }
})  