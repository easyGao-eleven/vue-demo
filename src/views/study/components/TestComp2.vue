<template>
  <div>
      <div @click="changeStep">changeStep</div>
  </div>
</template>

<script>
export default {
name:'',
data () {
  return {

    }
  },
components: {},

created(){
//初始化方法
this.init()
},

computed: {},

methods: {
init(){

},
changeStep () {
    this.$emit('changeStep', 1)
}
},

}

</script>
<style lang='' scoped>
</style>