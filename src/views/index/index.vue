<template>
  <div>
    <div class="main main_test" @click="test1">111</div>
    <div class="main main_test" @click="test2">222</div>
    <RenderDom :items="items"></RenderDom>
    <div id="myCharts" ref="myCharts"></div>
    <div v-if="arr.length">
    <div v-for="(item, index) in arr" :key="index" @click="add(item)">
      <div>{{item.name}}</div>
      <div>{{item.num}}</div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
      str: "hello",
      items: [{ name: "a", id: 0 }, { name: "b", id: 1 }, { name: "c", id: 2 }]
    };
  },
  components: {
    RenderDom: {
      functional: true, //指定这是一个函数式组件
      render: function(createElement, context) {
        function appropriateListComponent() {
          if (context.props.items.length == 0) {
            //当父组件传来的items元素为空时渲染这个
            return { template: "<div>Enpty item</div>" };
          }
          return "ul";
        }
        return createElement(
          appropriateListComponent(),
          Array.apply(null, { length: context.props.items.length }).map(
            function(val, index) {
              return createElement("li", context.props.items[index].name);
            }
          )
        );
      },
      props: {
        items: { type: Array, required: true },
        isOrdered: Boolean
      }
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const myCharts = this.$echarts.init(this.$refs.myCharts);
      let options = {
        title: {
          text: "未来一周气温变化", //图表顶部的标题
          subtext: "纯属虚构" //副标题
        },
        tooltip: {
          //鼠标悬浮框的提示文字
          trigger: "axis"
        },
        legend: {
          data: ["最高气温", "最低气温"]
        },
        xAxis: [
          {
            //x轴坐标数据
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            //y轴坐标数据
            type: "value",
            axisLabel: {
              formatter: "{value} °C"
            }
          }
        ],
        series: [
          //驱动图表生成的数据内容数组，几条折现，数组中就会有几个对应对象，来表示对应的折线
          {
            name: "最高气温",
            type: "line", //pie->饼状图  line->折线图  bar->柱状图
            data: [11, 11, 15, 13, 12, 13, 10]
          },
          {
            name: "最低气温",
            type: "line", //pie->饼状图  line->折线图  bar->柱状图
            data: [1, -2, 2, 5, 3, 2, 0]
          }
        ]
      };

      myCharts.setOption(options);
    },
    test1() {
      window.open('/test', "_blank");
      console.log("111");
    },
    test() {
      console.log(this.a);
    },
    test2() {
      let arr = [{
        name:'mike',
        num :1
      }]
      this.$store.commit('initArr', arr)
      this.arr = this.$store.state.cartArr
      console.log(this.$store.state.cartArr, 'cartarr')
    },
    add(item) {
      item.num +=1
      console.log(this.$store.state.cartArr, 'finalArr')
    }
  }
};
</script>

<style lang="scss" scpoed>
@import "@/assets/main.scss";
.main {
  color: $color;
  &_test {
    text-decoration: underline;
  }
}
</style>