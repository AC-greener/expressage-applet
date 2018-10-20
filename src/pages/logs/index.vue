<template>
  <div>
    abc
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'

export default {
  components: {
    
  },

  data () {
    return {
      logs: []
    }
  },

  created () {
    const logs = (wx.getStorageSync('logs') || [])
    this.logs = logs.map(log => formatTime(new Date(log)))
  }
}
</script>

<style>

</style>
