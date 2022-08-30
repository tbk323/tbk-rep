
<template>
  <div>
    <div class="cen">手机</div>
    <div class="box">
      <img src="http://101.132.181.9:3000/public/imgs/phone/phone.png" alt="" class="big">
      <ul>
        <li v-for="(i, index) in phonelist" :key="index" @click="tz(i)">
          <p><img :src="i.product_picture" alt="" /></p>
          <p>{{ i.product_name }}</p>
          <p>￥{{ i.product_selling_price }}</p>
          <p>{{ i.product_title }}</p>
        </li>
      </ul>
    </div>
    <div class="cen">家电</div>
    <div class="box">
      <img src="http://101.132.181.9:3000/public/imgs/appliance/appliance-promo2.png" alt="" class="big">
        <ul>
            <li v-for="i,index in watchlist" :key="index" @click="tz(i)">
        <p><img :src="i.product_picture" alt="" /></p>
          <p>{{ i.product_name }}</p>
          <p>￥{{i.product_selling_price}}</p>
          <p>{{i.product_title}}</p>
            </li>
        </ul>
    </div>
    <div class="cen">配件</div>
    <div class="box">
      <img src="http://101.132.181.9:3000/public/imgs/accessory/accessory-promo1.png" alt="" class="big">
        <ul>
            <li v-for="i,index in helplist" :key="index" @click="tz(i)">
        <p><img :src="i.product_picture" alt="" /></p>
          <p>{{ i.product_name }}</p>
          <p>￥{{i.product_selling_price}}</p>
          <p>{{i.product_title}}</p>
            </li>
        </ul>
    </div>
    <div class="box shou">
      <img src="http://101.132.181.9:3000/public/imgs/accessory/accessory-promo2.png" alt="" class="big">
        <ul>
            <li v-for="i,index in beastlist" :key="index" @click="tz(i)">
        <p><img :src="i.product_picture" alt="" /></p>
          <p>{{ i.product_name }}</p>
          <p>￥{{i.product_selling_price}}</p>
          <p>{{i.product_title}}</p>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      phonelist: [],
      watchlist: [],
      helplist:[],
      beastlist:[]
    };
  },
  
  mounted() {},
   created() {
    this.phone();
    this.watch();
    this.help();
    this.beast();
  },
  methods: {
    // 跳转页面
    tz(i){
      console.log(i);
      this.$router.push({
        path:'/xq',
        query:{
          id:i.product_id
        }
      })
    },
    phone() {
      this.$axios
        .post(`product/getPromoProduct`, { categoryName: ["手机"] })
        .then((res) => {
          // console.log(res.data.Product);
          this.phonelist = res.data.Product;
        });
    },

    watch() {
      this.$axios
        .post("product/getPromoProduct", { categoryName: ["电视机"] })
        .then((res) => {
          // console.log(res.data.Product);
          this.watchlist=res.data.Product
        });
    },

    help(){
       this.$axios
        .post("product/getPromoProduct", { categoryName: ["保护套"] })
        .then((res) => {
          // console.log(res.data.Product);
          this.helplist=res.data.Product
        });
    },
    beast(){
       this.$axios
        .post("product/getPromoProduct", { categoryName: ["充电器"] })
        .then((res) => {
          // console.log(res.data.Product);
          this.beastlist=res.data.Product
        });
    }
  },
 
};
</script>
<style scoped lang='scss'>

.cen {
  font-size: 25px;
  height: 30px;
  width: 100%;
  padding: 20px;
}
.box,.shou:hover{
  cursor:pointer;
  display: flex;
  width: 100%;
  padding: 5px;
  .big{
    flex: 2;
    width: 95%;
    height: 95%;
  }
  ul {
    flex: 8;
    text-align: center;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    li {
     flex: 23%;
      list-style: none;
      background-color: #fff;
      img {
    width: 150px;
    height: 200px;
  }
    }
  }
}
</style>
