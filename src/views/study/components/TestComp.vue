<template>
  <div>
      <div>{{info.name}}</div>
      <div @click="changeInfo">change</div>
  </div>
</template>

<script>
export default {
  name: 'TestComp',
  props: {
      info: {
          type: Object,
          default:() => {}
      }
  },
  data () {
    return {

    }
  },
  components: {},

  created () {
    //初始化方法
    this.init()
  },

  computed: {},

  methods: {
    init () {

    },
    changeInfo () {
        this.info.name = "hahahh"
        this.$emit('changeStep', 2)
        console.log(123)
    }
  },

}

</script>
<style lang='' scoped>
</style>