<template>
  <div>
      <div @click="changeValue">change</div>
  </div>
</template>

<script>
export default {
name:'',
props: {
    value: {
        type: Boolean
    }
},
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
console.log(this.value)
},
changeValue () {
    this.$emit('input', !this.value)
}
},

}

</script>
<style lang='scss' scoped>
</style>