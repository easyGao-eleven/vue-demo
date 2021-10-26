<!--
/**
* Author: GaoHui
* Date: 2020-09-27 21:45
* Desc: 测试 解决flex布局问题
*/
-->
<template>
  <div>
    <!--
      <div>123</div>
      <iframe src="https://www.baidu.com" frameborder="0"></iframe> -->
    <!-- <iframe src="static/test1.html" frameborder="0" class="main"></iframe> -->
    <div @click="addItem">test</div>
    <div class="list-box">
      <div class="list-box__item" v-for="item in listBox" :key="item.id"></div>
    </div>
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>

      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test1',
  data () {
    return {
      listBox: [{
        name: '1',
        id: '1'
      }
      ]

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
    addItem () {
      let itemIndex = this.listBox.length + 1
      let obj = {
        name: String(itemIndex),
        id: String(itemIndex)
      }
      this.listBox.push(obj)
      console.log(this.listBox.length, 'length')
    }
  },

}

</script>
<style lang='scss' scoped>
.main {
  width: 200px;
  height: 300px;
}
//最外层盒子
.list-box {
  display: flex;
  margin-top: 200px;
  margin-left: 100px;
  width: 1000px;
  height: 600px;
  background: skyblue;
}
// 每个item公共样式抽离
.list-box__item {
  height: 100%;
  background: yellowgreen;
  border: 1px solid #303030;
  margin-right: 2px;
}
/* 只有一个item元素 */
.list-box__item:only-child {
  width: 100%;
}

/* 有两个item元素 */
.list-box__item:first-child:nth-last-child(2),
.list-box__item:first-child:nth-last-child(2) ~ .list-box__item {
  width: 50%;
}

/* 有三个item元素的第1个元素 */
.list-box__item:first-child:nth-last-child(3) {
  width: 33%;
}

/* 有三个item元素的第2个及以后元素 */
.list-box__item:nth-child(2):nth-last-child(2),
.list-box__item:nth-child(2):nth-last-child(2) ~ .list-box__item {
  width: 33%;
}

/* 有四个及四个以上的item元素 */
.list-box__item:first-child:nth-last-child(n + 4),
.list-box__item:first-child:nth-last-child(n + 4) ~ .list-box__item {
  width: 25%;
}
</style>