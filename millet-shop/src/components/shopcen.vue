<template>
	<div>
		<div class="box">
			<img src="shop.png" alt="" />
			<div
				class="box-one"
				v-for="(i, index) in list"
				:key="index">
				<span @click="tiao(i)" :class="{ gl: curpath == i.path }" class="shou">{{ i.name }}</span>
			</div>
			<div class="inp">
				<el-input placeholder="请输入内容" v-model="soucon" @change="sou">
					<template slot="append">
						<span class="el-icon-search"></span>
					</template>
				</el-input>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: '',
		components: {},
		data() {
			return {
				soucon: '',
				curpath: '/login',
				list: [
					{
						name: '首页',
						path: '/login',
					},
					{
						name: '全部商品',
						path: '/allshop',
					},
					{
						name: '关于我们',
						path: '/mine',
					},
				],
			};
		},
		watch: {
			$route: {
				deep: true,
				immediate: true,
				handler(val) {
					this.curpath = val.path;
				},
			},
		},
		created() {
			this.getsou()
		},
		mounted() {},
		methods: {
			sou(){
				console.log(1);
				this.$router.push('/allshop')
				this.getsou()
			},
			tiao(i) {
				this.curpath = i.path;
				this.$router.push(i.path);
			},
			// 搜索接口
			getsou(){
				this.$axios.post('product/getProductBySearch',{search:this.soucon,currentPage:1,pageSize:10}).then(res=>{
					console.log(res);
				})
			}
		},
	};
</script>
<style scoped lang="scss">
.shou:hover{
	cursor:pointer;
}
	.gl {
		color: #39f;
        border-bottom: 1px solid #39f;
	}
	.box {
		width: 100%;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #eee;
		img {
			width: 250px;
			height: 150px;
		}
	}
	.box-one {
		width: 150px;
		height: 150px;
		display: flex;
		justify-content: space-between;
		line-height: 150px;
        span{
            display: inline-block;
            width: 80px;
            height: 100px;
            text-align: center;
        }
	}
	.inp {
		width: 350px;
		height: 150px;
		line-height: 150px;
	}
	.el-icon-search {
		width: 10px;
	}
</style>
