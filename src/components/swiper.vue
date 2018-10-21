<template>
  <div>
    <swiper 
      :indicator-dots="indicatorDots"
      :autoplay="autoplay" 
      :interval="interval" 
      :duration="duration"
      :indicator-active-color="indicatorColor"
      >
      <div v-for="(item, index) in imgUrls" :key="index">
        <swiper-item>
        <image :src="item" class="slide-image" width="355" height="150"/>
      </swiper-item>
      </div>
      </swiper>
  </div>
</template>
<script>
export default {
  onReady () {
    console.log("11111111111111",this.imgUrls)
      console.log("11111111111111")
   },
  data() {
    return {
      imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      indicatorColor: 'rgba(0, 0, 0, .7)',
      interval: 3000,
      duration: 1000
    }  
  },
 
  methods: {
    intervalChange: function(e) {
      console.log(1)

      this.setData({
        interval: e.detail.value
      })
    },
    durationChange: function(e) {
      console.log(1)

      this.setData({
        duration: e.detail.value
      })
    }
  }
}
</script>

