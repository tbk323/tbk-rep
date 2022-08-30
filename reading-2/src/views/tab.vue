
<template>
<div>
    <el-tag>表格</el-tag>
    <el-tag type="success">选项卡</el-tag>

    <div class="tab">
         <el-tabs v-model="activeName" >
    <el-tab-pane :label="`未读(${getnum})`" name="1">
      <div class="bo" v-for="i,index in list.filter(item=>item.flag==false)" :key="index" >
        <p>{{i.title}}</p>
        <p>{{i.create_time}}</p>
        <p><el-button type="warning" size="mini"@click="i.flag=!i.flag">已读</el-button></p>
      </div>
    </el-tab-pane>
    <el-tab-pane :label="`已读(${getnum1})`" name="2">
      <div class="bo" v-for="i,index in list.filter(item=>item.flag==true)" :key="index" >
        <p>{{i.title}}</p>
        <p>{{i.create_time}}</p>
        <p><el-button type="warning" size="mini" @click="i.flag=false">还原未读</el-button>
  <el-button type="danger" size="mini" @click="i.flag=null">删除</el-button></p>
      </div>
    </el-tab-pane>
    <el-tab-pane :label="`回收站(${getnum2})`" name="3">
       <div class="bo" v-for="i,index in list.filter(item=>item.flag==null)" :key="index" >
        <p>{{i.title}}</p>
        <p>{{i.create_time}}</p>
        <p><el-button type="warning" size="mini" @click="i.flag=false">还原已读</el-button></p>
      </div>
    </el-tab-pane>
  </el-tabs>
    </div>
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      activeName: '1',
      list:[]
    }
  },
  created () { 
    this.$axios.get('text.json').then(res=>{
      // console.log(res);
      this.list=res.data
    })
  },
  mounted () { },
  methods: {},
  computed:{
    getnum(){
      let num=0
      num+=this.list.filter(item=>item.flag==false).length
      return num
    },
    getnum1(){
      let num=0
      num+=this.list.filter(item=>item.flag==true).length
      return num
    },
    getnum2(){
      let num=0
      num+=this.list.filter(item=>item.flag==null).length
      return num
    }
  }
}
</script>
<style scoped lang='scss'>
.bo{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
