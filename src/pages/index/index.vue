<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <div class="swiper">
      轮播图
    </div>
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
      </div>
    </div>
    <div class="usermotto">
      <div class="user-motto">
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <!-- <a href="/pages/counter/main" class="counter">去往Vuex示例页面 aa</a> -->
    <div class="footerNav">
      <div class="navItem">首页</div>
      <div class="navItem">发布</div>
      <div class="navItem">
        <router-link to="/pages/my/index">我的</router-link>
        <!-- <a href="/pages/my/main">我的</a> -->
      </div>
    </div> 
  </div>
</template>

<script>

export default {
  data () {
    return {
      motto: '佩奇',
      userInfo: {}
    }
  },

  components: {
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
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
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
html {
  font-size: 10px;
}
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
    height: 1000px;
  }
  .footerNav {
    height: 30px;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid grey;
    color: #666;
    padding: 5px 25px 5px 25px;
    /* padding-left: 20px; */
  }
</style>
