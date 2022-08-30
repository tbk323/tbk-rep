
<template>
<div>
  <div class="login">
<top></top>
<shopcen></shopcen>
<div class="cen">
    <h3>确认订单</h3>
</div>
<div class="box">
    <p>收货地址</p>
    <div class="box-one">
        <p>陈同学</p>
        <p>13580018623</p>
        <p>广东省广州市</p>
        <p>广东白云学院</p>
    </div>
    <div class="box-two">
        <p>陈同学</p>
        <p>13580018623</p>
        <p>广东省茂名市</p>
        <p>**</p>
    </div>
</div>
<!-- 下面内容 -->
 <p>商品优惠券</p>
    <div class="bto" v-for="i,index in list" :key="i.productID">
      <div class="bto-one">
        <img :src="i.productImg" alt="">
        <p>{{i.productName}}</p>
      </div>
      <div class="bto-two">
        <p>{{i.price}}元x{{i.num}}</p>
        <p>{{i.price*i.num}}元</p>
      </div>
    </div>
    <div class="a">
      <p>配送方式 <span>包邮</span></p>
    </div>
    <div class="b">
       <p>发票 <span>电子发票</span> <span>个人</span> <span>商品明细</span></p>
    </div>

    <!-- 最底部 -->
    <div class="jie">
      <div class="jie-one">
        <p>商品件数：<span>{{getnum}}件</span></p>
        <p>商品总价：<span>{{getprice}}元</span></p>
        <p>活动优惠：<span>-0元</span></p>
        <p>优惠券折扣：<span>-0元</span></p>
        <p>运费：<span>0元</span></p>
        <p>应付总额：<span>{{getprice}}元</span></p>
      </div>
    </div>
    <div class="btn">
       <el-button type="warning" style="width:120px" @click="buy">结算</el-button>
       <el-button @click="$router.go(-1)">返回购物车</el-button>
    </div>
   
</div>
 <bto></bto>
</div>
</template>

<script>
import shopcen from "../components/shopcen.vue";
import top from "../components/top.vue";
import bto from "../components/bto.vue";
export default {
  name: '',
  components: {
    shopcen,
    top,bto
  },
  data () {
    return {
      list:[],
    }
  },
  created () { 
    this.getorder()
  },
  mounted () { },
  methods: {
    // 购买、
    buy(){
      this.$router.push('/okorder')
      this.getorder()
      this.$message({
          message: '购买成功',
          type: 'success'
        });
    },
    // 订单列表
    getorder(){
        const id=JSON.parse(localStorage.getItem('user'))
      this.$axios.post('user/shoppingCart/getShoppingCart',{user_id:id.user_id}).then(res=>{
          console.log(res.data.shoppingCartData);
          this.list=res.data.shoppingCartData
      })
    }
  },
  computed:{
    // 数量
    getnum(){
      let sub =0
      this.list.forEach(item=>{
        sub+=item.num
      })
      return sub
    },
    // 价格
    getprice(){
      let sub =0
      this.list.forEach(item=>{
        sub+=item.num*item.price
      })
      return sub
    }
  }
}
</script>
<style scoped lang='scss'>
.btn{
  width: 100%;
  height: 30px;
  line-height: 30px;
  padding: 20px;
  .el-button{
    float: right;
    margin-right: 60px;
  }
}
.jie{
  width: 95%;
  height: 220px;
  background-color: #eee;
  .jie-one{
    margin-left: 750px;
    width: 100%;
    height: 100%;
    padding: 10px;
    p{
      margin: 10px;
    }
    span{
      margin-left: 30px;
      color: orange;
    }
  }
}
.b{
  border-bottom: 0 !important;
}
.b ,.a{
  width: 95%;
    height: 30px;
    padding: 10px;
    line-height: 30px;
    border-bottom: 1px gray solid;
    span{
      color: orange;
      margin-left: 50px;
    }
}
.bto{
  width: 95%;
    height: 50px;
    // background-color: #eee;
    padding: 20px;
     display: flex;
     justify-content: space-between;
     border-bottom: 1px gray solid;
    .bto-one{
      margin-left: -30px;
      width: 200px;
      display: flex;
      align-items: center;
      img{
        width: 50px;
        width: 50px;
      }
    }
    .bto-two{
       width: 300px;
      display: flex;
      align-items: center;
      p:nth-child(2){
        color: orange
      }
    }
}
.box-one{
    margin: 20px;
    float: left;
    width: 250px;
    height: 150px;
    background-color: #fff;
    text-align: left;
    padding: 10px;
     border: orange 2px solid;
    p{
        margin: 10px;
    }
}
.box-two{
    margin: 20px;
    float: left;
    width: 250px;
    height: 150px;
    background-color: #fff;
    text-align: left;
    padding: 10px;
    p{
        margin: 10px;
    }
}
.box{
    overflow: hidden;
    width: 95%;
    height: 85%;
    background-color: #eee;
    padding: 20px;
}
.cen{
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding-left: 60px;
    border-bottom: 2px solid orange;
}
.login{
    width: 1080px;
}
</style>
