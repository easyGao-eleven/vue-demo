<template>
  <div>
    <!-- <div>{{moment('20200711').format('YYYY-MM-DD')}}</div> -->
    <div @click="showInfo">showInfo</div>
    <test-comp v-if="step === 1" :info="obj" @changeStep="handleChangeStep"></test-comp>
    <test-comp2 v-else @changeStep="handleChangeStep"></test-comp2>
    <span :style="{'color':num === 1? 'red':'blue'}">123</span>
    <div @click="addWidth">addWitdh</div>
    <div :style="styleObj">1211111</div>
    <!-- <span >123</span> -->
  </div>
</template>

<script>
import moment from 'moment'
import TestComp from './components/TestComp'
import TestComp2 from './components/TestComp2'
import index from '../../mixins'
export default {
  name: '',
  data () {
    var that = this
    console.log(that)
    let name1 = that.name
    const table = [{
      name: name1
    }]
    return {
      table,
      num: 1,
      step: 1,
      numNew: 1, 
      obj: {
        name: 'mike'
      },
      styleObj: {
        width: '30px',
        backgroundColor: 'blue'
      }
    }
  },
  mixins: [index],
  components: { TestComp, TestComp2 },

  created () {
    //初始化方法
    this.init()
  },

  computed: {},

  methods: {
    moment,
    init () {
      // moment('20200711').format('YYYY-MM-DD')
      console.log(moment('20200711').format('YYYY-MM-DD'))
      console.log(this.table)
    },
    // 动态改变style
    addWidth () {
      this.numNew = this.numNew +1
      let width = this.numNew * 10 + 30
      this.styleObj.width = `${width}px`
    },
    showInfo () {
      console.log(this.obj, 'obj')
    },
    handleChangeStep (val) {
      console.log('1111111')
      this.step = val
    }
  },

}

</script>
<style lang='scss' scoped>
</style>