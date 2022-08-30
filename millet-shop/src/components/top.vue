
<template>
<div>
    <div class="top">
        <div class="top-one" >
            <span class="shou">欢迎 {{name}}</span>
            <span class="shou" @click="$router.push('/okorder')">我的订单</span>
            <span @click="$router.push('/like')" class="shou">我的收藏</span>
            <span class="shou gwc" @click="gwc">购物车（{{$store.state.numadd}}）</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
       name:JSON.parse(localStorage.getItem('user')).userName,
    }
  },
  created () { },
  mounted () { },
  methods: {
    gwc(){
        this.$router.push('/shopcar')
    }
  }
}
</script>
<style scoped lang='scss'>
.shou:hover{
    cursor:pointer;
    // display: inline-block;
    // width: 90px;
    height: 100%;
    background-color: gray;
    text-align: center;
    line-height: 40px;
}
.top{
    width: 100%;
    height: 40px;
    background-color: #333;
    color: #eee;
   .top-one{
       width: 450px;
       height: 40px;
       justify-content: space-around;
       display: flex;
       float: right;
       align-items: center;
       
       .gwc {
      color: orange;
    }
   }
}
</style>
