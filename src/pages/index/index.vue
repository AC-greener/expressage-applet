<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <my-swiper/>
    <div class="express-brand">
      <div class="row">
        <div class="brand-item"></div>
        <div class="brand-item"></div>
      </div>
      <div class="row">
        <div class="brand-item"></div>
        <div class="brand-item"></div>
      </div>
    </div>
  </div>
</template>

<script>
import MySwiper from '@/components/swiper'
import { get } from '@/utils/index.js'
export default {
  components: {
    MySwiper,
  },
  data () {
    return {
      imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      indicatorColor: 'rgba(0, 0, 0, .7)',
      userInfo: {}
    }
  },
  methods: {
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      // console.log('clickHandle:', msg, ev)
    }
  },

  async created () {
    // 调用应用实例的方法获取全局数据
    await this.getUserInfo()
    await get('/weapp/demo')
    console.log('成功4')
    
  }
}
</script>

<style scoped>

 .container {
    height: 100%;
  }
  * {
    margin: 0;
    padding: 0;
  }
  * {
    transition: width 2s;
    -moz-transition: width 2s;
    -webkit-transition: width 2s;
    -o-transition: width 2s;
  }
  .container {
    height: 700px;
  }
  .express-brand {
    border:1px solid black;
    display: flex;
    flex-direction: column;
    width: 99%;
    justify-content: center;
    align-items: center;
  }
  .row {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
  .brand-item {
    margin: 20rpx;
    height: 300rpx;
    width: 300rpx;
    border: 1px solid #1296db;
  }
 
</style>
