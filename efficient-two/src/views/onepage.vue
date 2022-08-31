<template>
  <div>
    <div class="box">
      <div class="left">
        <ul>
          <li>
            <p>待办事项 <span style="color: #39f">查看更多</span></p>
          </li>
          <div v-show="list.length !== 0">
            <li v-for="(i, index) in list" :key="index">
              <p>[待办事项]{{ i }} <span>2002年8月</span></p>
            </li>
          </div>
          <li v-show="list.length == 0">
            <p>暂无待办事项</p>
          </li>
        </ul>
      </div>
      <!-- 日历 -->
      <div class="right">
        <!-- <el-calendar v-model="datevalue" class="date"> </el-calendar> -->
        <!-- <date :date="value1"></date> -->
      </div>
    </div>
    <!-- 中间部分 -->
    <div class="box-cen">
      <div class="left-one">
        <div class="user">
          <p>员工数据</p>
        </div>
        <ul>
          <li>
            <p>员工总人数</p>
            <p>2000人</p>
          </li>
          <li>
            <p>正式员工</p>
            <p>2000人</p>
          </li>
          <li>
            <p>实习生</p>
            <p>2000人</p>
          </li>
          <li>
            <p>本月待入职</p>
            <p>2000人</p>
          </li>
          <li>
            <p>本月离职</p>
            <p>2000人</p>
          </li>
          <li>
            <p>本月待转正</p>
            <p>2000人</p>
          </li>
        </ul>
      </div>
      <div class="right-one">
        <p>员工地区分布</p>
        <div id="main"></div>
      </div>
    </div>
    <!-- 下部ehcars -->
    <div class="bto">
      <p>员工生日</p>
      <div id="mains"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import date from '../components/date.vue'
export default {
  components: { date },
  data() {
    return {
      datevalue: new Date(),
      value1: '',
      list: ['您申请的报批还没审批', '您申请的报批还没审批']
    }
  },
  created() {},
  // echarts
  mounted() {
    var chartDom = document.getElementById('main')
    var myChart = echarts.init(chartDom)
    var option
    var chartDoms = document.getElementById('mains')
    var myCharts = echarts.init(chartDoms)
    var options
    ;(option = {
      title: {
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'right'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 100, name: '东北' },
            { value: 150, name: '内蒙' },
            { value: 100, name: '山西' },
            { value: 200, name: '河北' },
            { value: 114, name: '河南' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }),
      (options = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月',
              '11月',
              '12月'
            ],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220, 120, 30, 449, 669, 522],
            itemStyle: {
              color: '#b886f8'
            },
            barWidth: 45
          }
        ]
      })

    option && myChart.setOption(option)
    options && myCharts.setOption(options)
  },
  methods: {}
}
</script>
<style scoped lang="scss">
.date {
  width: 90%;
  height: 30px;
}
.user {
  border: 1px solid #dddddd;
  border-right: 0;
}
.bto {
  box-sizing: border-box;
  width: 100%;
  height: 300px;
  margin-top: 30px;
  border: 1px solid #dddddd;
  padding: 10px;
  margin-left: 10px;
}
#main {
  height: 100%;
  width: 100%;
}
#mains {
  height: 100%;
  width: 100%;
}
.box-cen {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  .left-one {
    flex: 5;
    margin-right: 20px;
    border: 1px solid #dddddd;
    div {
      padding: 10px;
      height: 40px;
    }
    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    li:nth-child(3) {
      border-right: 0;
    }
    li:last-child {
      border-right: 0;
    }
    li {
      border-right: 1px solid #dddddd;
      height: 60px;
      flex: 30%;
      list-style: none;
      margin-top: 20px;
      p {
        margin: 10px;
        border-right: 0;
      }
    }
  }
  .right-one {
    width: 100%;
    p {
      padding: 10px;
      border-bottom: 1px solid #dddddd;
    }
    flex: 5;
    border: 1px solid #dddddd;
  }
}
.box {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: -27px;
  .left {
    flex: 6;
    // li:nth-child(1) {
    //   font-size: 20px;
    // }
    // li:last-child {
    //   text-align: center;
    // }
    li {
      padding: 10px;
      width: 100%;
      height: 40px;
      list-style: none;
      border: 1px solid #dddddd;
      line-height: 10px;
      span:nth-child(1) {
        margin-left: 550px;
        font-size: 15px;
      }
    }
  }
  .right {
    width: 100%;
    height: 40px;
    flex: 4;
    text-align: center;
    .el-date-picker {
      width: 80%;
      height: 30px;
      margin-left: 100px;
    }
  }
}
</style>
