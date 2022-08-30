
<template>
  <div>
    <div class="mar">
    <top></top>
    <shopcen></shopcen>
    <div class="cen">
      <h2>我的购物车</h2>
      <p>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p>
    </div>

    <div class="tab">
      <el-table :data="tableData" style="width: 100%"  @selection-change="handleSelectionChange" >
          <el-table-column label="全选" type="selection" >
        </el-table-column>
        <el-table-column prop="productName" label="商品名称" width="180">
        </el-table-column>
        <el-table-column  >
          <template slot-scope="scope">
            <img :src="scope.row.productImg" alt="">
      </template>
        </el-table-column>
        <el-table-column prop="price" label="单价"> </el-table-column>
        <el-table-column label="数量" width="180px">
           <template slot-scope="scope">
        <el-input-number v-model="scope.row.num" @change="handleChange(scope.row)" :min="1" :max="10" ></el-input-number>
      </template>
           </el-table-column>
        <el-table-column  label="小计"> 
          <template slot-scope="scope">
            {{scope.row.num*scope.row.price}}
      </template>
        </el-table-column>
        <el-table-column  label="操作"> 
             <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit( scope.row)">x</el-button>
      </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="bto">
      <p @click="$router.go(-1)">继续购物</p>
      <p>共{{getnum}}件商品，已选择{{1}}件</p>
      <p>合计：{{getprice}}元</p>
      <p @click="buy">去结算</p>
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
  name: "",
  components: {
    shopcen,
    top,bto
  },
  data() {
    return {
        tableData:[],
        rowid:'',
    };
  },
  created() {
   this.getlist()
      this.getdel()
  },
  mounted() {},
  methods: {
    // 跳转订单
    buy(){
      this.$router.push('/order')
       this.getdel()
    },
    // 购物车商品接口
    getlist(){
       const id=JSON.parse(localStorage.getItem('user'))
      this.$axios.post('user/shoppingCart/getShoppingCart',{user_id:id.user_id}).then(res=>{
          // console.log(res.data.shoppingCartData[0].num);
          this.tableData=res.data.shoppingCartData
      })
    },
    // 删除接口
    getdel(){
      const id=JSON.parse(localStorage.getItem('user'))
      this.$axios.post('user/shoppingCart/deleteShoppingCart',{user_id:id.user_id,product_id:this.rowid}).then(res=>{
          // console.log(res);
      })
    },
    // 删除
    handleEdit(row){
      console.log(row);
      this.rowid=row.productID
      let index=this.tableData.findIndex(item=>item.productID==row.productID)
      if(index!=-1){
         this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.tableData.splice(index,1)
          // this.rowid=row.productID
          this.getdel()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    },
      handleSelectionChange(val){
        console.log(val[0]);
         val[0].check=!val[0].check
      },
      // 加数量
      handleChange(row) {
        console.log(row.num);
        const id=JSON.parse(localStorage.getItem('user'))
      this.$axios.post('user/shoppingCart/updateShoppingCart',{user_id:id.user_id,product_id:row.productID,num:row.num}).then(res=>{
        // console.log(res);
      })
      }
  },
  computed:{
    getprice(){
      let sub=0
     this.tableData.forEach(item=>{
         sub+=item.price*item.num
      })
      return sub
    },
    getnum(){
      let sub=0
     this.tableData.forEach(item=>{
         sub+=item.num
         this.$store.commit('addnum',sub)
      })
      return sub
    }
   }
};
</script>
<style scoped lang='scss'>
.mar{
  width: 1080px;
}
.bto{
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #eee;
  display: flex;
  justify-content: space-around;
  p:nth-child(3){
    color: orange;
    font-size: 20px;
  }
  p:nth-child(4){
    width: 150px;
    text-align: center;
    color: #eee;
    font-size: 20px;
    background-color: orange;
  }
}
img{
  width: 100px;
  height: 100px;
}
.cen {
  width: 100%;
  display: flex;
  border-bottom: 2px solid orange;
  align-items: center;
  justify-content: space-around;
  p {
    font-size: 14px;
    color: gray;
  }
}
</style>
