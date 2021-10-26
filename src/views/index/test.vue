<template>
  <div>
    <div @click="test">123123</div>
    <div>{{num|handleNum}}</div>
    <the-one v-model="visible" v-if="visible"></the-one>
  </div>
</template>

<script>
// import Vue from 'vue'
import TheOne from './components/TheOne'
export default {
  name: '',
  inject: ['$root'],
  data () {
    return {
      visible: false,
      num: 45.123456
    }
  },
  components: {
    TheOne
  },
  filters: {
    handleNum (val) {
      if (val) {
        return val.toFixed(2)
      }
    }
  },
  created () {
    //初始化方法
    this.init()
  },

  computed: {},

  methods: {
    init () {
      console.log(this.$root, 'appData')
    },
    test () {
      // let nums = Vue.filter('toFixed')(this.num)
      // let num1 = this.$options.filters['handleNum'](this.num)
      // console.log(nums, 'nums', num1)
      // console.log(this.visible, 'before')
      this.visible = true
      // window.close();
      // window.opener=null;window.close();
      //  if (navigator.userAgent.indexOf("Firefox") != -1 || navigator.userAgent.indexOf("Chrome") !=-1) {
      //       window.location.href="about:blank";
      //       window.close();
      //   } else {
      //       window.opener = null;
      //       window.open("", "_self");
      //       window.close();
      //   }
    }
  },

}

</script>
<style lang='scss' scoped>
</style>