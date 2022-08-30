
<template>
  <div>
    <el-tag @click="$router.push('/table')">表格</el-tag>
    <el-tag type="success" @click="$router.push('/tab')">选项卡</el-tag>
    <div class="cen">
      <el-button type="primary" @click="dels">删除选中</el-button>

      <el-select v-model="value" placeholder="地址" @change="souadress">
        <el-option
          v-for="item in options"
          :key="item.seclvalue"
          :label="item.label"
          :value="item.seclvalue"
        >
        </el-option>
      </el-select>
      <el-input v-model="input" placeholder="用户名" @change="sou"></el-input>
    </div>

    <!-- 表格 -->
    <template>
      <el-table
        :data="
          tableData.slice((currentPage - 1) * pagesize, currentPage * pagesize)
        "
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
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
            <el-tag type="warning" v-else>失败</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="create_time" label="注册时间"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope" >
            <el-button size="mini" @click="bj(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="del(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </template>
    <!-- 编辑 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>
        姓名：<el-input v-model="from.name" placeholder="用户名"></el-input>
        地址：<el-input v-model="from.address" placeholder="地址"></el-input>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="xgadd">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 分页、 -->
    <el-pagination
      :current-page.sync="currentPage"
      :pagesize="pagesize"
      layout="prev, pager, next, jumper"
      :total="tableData.length"
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  components: {},
  data() {
    return {
      // 分页
      pagesize: 10,
      currentPage: 1,
      dialogVisible: false,
      options: [
        {
          seclvalue: "广东",
          label: "广东",
        },
        {
          seclvalue: "河南",
          label: "河南",
        },
        {
          seclvalue: "湖南",
          label: "湖南",
        },
      ],
      value: "",
      carlist: [],
      tableData: [],
      input: "",
      all: [],
      from: {
        name: "",
        address: "",
        id: "",
      },
    };
  },
  created() {
    axios.get("books.json").then((res) => {
      this.tableData = res.data;
      this.carlist = res.data;
    });
  },
  mounted() {},
  methods: {
    // 地址搜索
    souadress() {
      this.tableData = this.carlist.filter((item) =>
        item.address.includes(this.value)
      );
    },
    sou() {
      this.tableData = this.carlist.filter((item) =>
        item.name.includes(this.input)
      );
    },
    // 全选
    handleSelectionChange(val) {
      console.log(val);
      this.all = val; //映射
    },
    // 选中删除
    dels() {
      this.tableData = this.carlist.filter((item) => this.all.includes(item)==false
      );
    },
    // 编辑
    bj(row) {
      this.dialogVisible = true;
      this.from.name = row.name;
      this.from.address = row.address;
      this.from.id = row.id;
    },
    xgadd() {
      this.dialogVisible = false;
      let idn = this.tableData.find((item) => item.id == this.from.id);
      if (idn) {
        idn.name = this.from.name;
        idn.address = this.from.address;
        //  this.tableData.id=this.from.id
      }
    },
    // 删除
    del(row) {
      console.log(row);
      let ind = this.tableData.findIndex((item) => item.id == row.id);
      if (ind != -1) {
        this.tableData.splice(ind, 1);
      }
    },
  },
};
</script>
<style scoped lang='scss'>
img {
  width: 100px;
  height: 100px;
}
.cen {
  width: 500px;
  display: flex;
  justify-content: space-around;
  padding: 10px 10px;
  input {
    width: 100px;
  }
}
</style>
