<template>
	<div>
		<div class="login">
			<top></top>
			<shopcen></shopcen>
			<div class="cen">
				<h3>我的订单</h3>
			</div>
			<div class="box">
				<!-- 商品、 -->
				<div class="shang" v-for="(i, index) in tableData" :key="index">
					<ul>
						<div class="cen-one">
							<p>订单编号:{{ i[0].order_id }}</p>
						</div>
						<li>
							<div class="shang-one">
								<table>
									<tr>
										<td></td>
										<td>商品名称</td>
										<td>单价</td>
										<td>数量</td>
										<td>小计</td>
									</tr>
									<tr v-for="(child, ind) in i" :key="ind">
										<td><img :src="child.product_picture" alt="" /></td>
										<td>{{ child.product_name }}</td>
										<td>{{ child.product_price }}元</td>
										<td>{{ child.product_num }}</td>
										<td>{{ child.product_price * child.product_num }}元</td>
									</tr>
								</table>
							</div>
						</li>
						<p class="left">
							共
							<span>{{ getnum(index) }}</span>
							件商品
						</p>
						<p class="right">
							合计：
							<span>{{ getprice(index) }}元</span>
						</p>
					</ul>
				</div>
				<!-- 商品结束 -->
			</div>
			
		</div>
		<bto></bto>
	</div>
</template>

<script>
	import shopcen from '../components/shopcen.vue';
	import top from '../components/top.vue';
	import bto from '../components/bto.vue';
	export default {
		name: '',
		components: {
			shopcen,
			top,
			bto,
		},
		data() {
			return {
				tableData: [],
				id: '',
			};
		},
		created() {
			this.getlist();
		},
		mounted() {},
		methods: {
			getlist() {
				const id = JSON.parse(localStorage.getItem('user'));
				this.$axios
					.post('user/order/getOrder', { user_id: id.user_id })
					.then((res) => {
						this.tableData = res.data.orders;
						console.log(this.tableData);
					});
			},
			getnum(index) {
				let sub = 0;
				this.tableData[index].forEach((item) => {
					sub += item.product_num;
				});
				return sub;
			},
			getprice(index) {
				let sub = 0;
				this.tableData[index].forEach((item) => {
					sub += item.product_num * item.product_price;
				});
				return sub;
			},
		},
	};
</script>
<style scoped lang="scss">
	.cen-one {
		width: 93%;
		height: 50px;
		line-height: 50px;
		padding-left: 60px;
		border-bottom: 2px solid orange;
	}
	.shang {
		width: 95%;
		height: 250px;
		background-color: #eee;
		margin-top: 30px;
		.left {
			float: left;
			span {
				color: orange;
			}
		}
		.right {
			float: right;
			margin-right: 30px;
			color: orange;
			span {
				font-size: 25px;
			}
		}
		table {
			width: 650px;
			text-align: center;
		}
		li {
			list-style: none;
			border-bottom: orange 1px solid;
		}
	}
	.box {
		padding: 10px;
		img {
			width: 100px;
			height: 100px;
		}
	}
	.login {
		width: 1080px;
	}
	.cen {
		width: 100%;
		height: 50px;
		line-height: 50px;
		padding-left: 60px;
		border-bottom: 2px solid orange;
	}
</style>
