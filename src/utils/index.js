
import config from '@/config.js'

export function get(url) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host+url,
      success: function(res) {
        console.log('请求成功', res.data)
        resolve()
      }
    })
  }) 
}
