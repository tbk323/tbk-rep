
<template>
  <div>
    <el-tag>表格</el-tag>
    <el-tag type="success">选项卡</el-tag>

    <div class="cen">
      <el-button type="primary" @click="dels">选中删除</el-button>
      <el-select v-model="value" placeholder="请选择" @change="souad">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-input
        v-model="soucon"
        placeholder="用户名"
        class="inp"
        @change="sou"
      ></el-input>
    </div>
    <!-- 表格 -->
    <div class="tb">
      <el-table
        :data="tableData"
        style="width: 100%"
       @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection"> </el-table-column>
        <el-table-column prop="id" label="ID" width="180"> </el-table-column>
        <el-table-column prop="name" label="用户名" width="180">
        </el-table-column>
        <el-table-column prop="price" label="账户余额"> </el-table-column>
        <el-table-column label="头像（查看大图）">
          <template slot-scope="scope">
            <el-image
              style="width: 100px; height: 100px"
              :src="scope.row.img"
              :preview-src-list="[scope.row.img]"
            >
            </el-image>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
        <el-table-column prop="state" label="状态">
          <template slot-scope="scope">
            <el-tag type="success" v-if="scope.row.state == 1">成功</el-tag>
            <el-tag type="danger" v-else>失败</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="create_time" label="注册时间"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index,scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 编辑 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
     <p>用户名：<el-input v-model="bjname"  class="inp" ></el-input></p>
     <p>地址：<el-input v-model="adr"  class="inp" ></el-input></p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="bjok"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      dialogVisible:false,
      soucon: "",
      value: "",
      options: [
        {
          value: "河南省",
          label: "河南省",
        },
        {
          value: "广东省",
          label: "广东省",
        },
        {
          value: "山西省",
          label: "山西省",
        },
      ],
      tableData: [],
      curlist: [],
      bjname:'',
      adr:'',
      index:'',
      id:''
    };
  },
  created() {
    this.$axios.get("books.json").then((res) => {
      console.log(res);
      this.tableData = res.data;
      this.curlist = res.data;
    });
  },
  mounted() {},
  methods: {
    handleSelectionChange(val){
      console.log(val);
      this.id=val.id
    },
    // 搜索地区
    souad() {
      this.tableData = this.curlist.filter((item) =>
        item.address.includes(this.value)
      );
    },
    // 搜索名字
    sou() {
      this.tableData = this.curlist.filter((item) =>
        item.name.includes(this.soucon)
      );
    },
    // 编辑
    handleEdit(index,row) {
      this.dialogVisible=true
            this.index=index
      this.bjname=row.name
      this.adr=row.address
    },
    bjok(){
      this.dialogVisible = false
     this.tableData[this.index].name =this.bjname
      this.tableData[this.index].address=this.adr
    },
    // 删除
    handleDelete(index) {
      this.tableData.splice(index,1)
    },
    dels(){
      let ind=this.tableData.findIndex(item=>item.id==this.id)
       this.tableData.splice(ind,1)
    }
  },
};
</script>
<style scoped lang='scss'>
.cen {
  width: 100%;
}
.inp {
  width: 250px;
}
</style>
