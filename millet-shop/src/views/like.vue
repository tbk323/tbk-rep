
<template>
<div>
    <top></top>
    <shopcen></shopcen>
    <div class="cen">
        <h2>我的收藏</h2>
    </div>
    <ul class="box" @mouseover="hua">
        <li v-for="i,index in list " :key="index" >
            <img :src="i.product_picture" alt="">
            <span v-show="show" @click="del(i)">x</span>
            <p>{{i.product_name}}</p>
            <p>{{i.product_title}}</p>
            <p style="color:orange">{{i.product_selling_price}}元</p>
        </li>
    </ul>
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
    shopcen,top,bto
  },
  data () {
    return {
        list:[],
        show:true,
        proid:''
    }
  },
  created () {
    this.getlike()
    this.getdel()
   },
  mounted () { },
  methods: {
    // 划过
    hua(){
        // this.show=!this.show
    },
     // 删除收藏
    del(i){
        this.proid=i.product_id
        let ind=this.list.findIndex(item=>item.product_id==i.product_id)
        if(ind!=-1){
            this.list.splice(ind,1)
            this.getdel()
        }
    },
    // 收藏列表
    getlike(){
        const id=JSON.parse(localStorage.getItem('user'))
        this.$axios.post('user/collect/getCollect',{user_id:id.user_id}).then(res=>{
            console.log(res.data.collectList);
            this.list=res.data.collectList
        })
    },
    // 删除收藏接口
    getdel(){
         const id=JSON.parse(localStorage.getItem('user'))
        this.$axios.post(' user/collect/deleteCollect',{user_id:id.user_id,product_id:this.proid}).then(res=>{
            console.log(res);
        })
    }
  }
}
</script>
<style scoped lang='scss'>
.cen{
    width: 100%;
    height: 50px;
    border-bottom: 2px solid orange;
    padding-left: 50px;
    line-height: 50px;
}
.box{
    width: 100%;
    display: flex;
    align-items: center;
   flex-wrap: wrap;
   li{
    margin: 20px;
    list-style: none;
    width: 150px;
    height: 180px;
    background-color: #eee;
    padding: 10px;
    text-align: center;
    img{
        width: 125px;
        height: 100px;
    }
    span{
        float: right;
    }
   }
}
</style>
