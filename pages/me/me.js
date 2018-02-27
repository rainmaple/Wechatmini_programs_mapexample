Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    poster: 'http://p1.music.126.net/cCyPSxi-BE2h-SmpLBztbA==/18635622580993683.jpg',
    name: 'Into you',
    author: 'Matisse & Sadko / Hanne Mjøen',
    src: 'http://music.163.com/song/media/outer/url?id=523042017.mp3',
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  }
})