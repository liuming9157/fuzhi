<template>
	<view>
		<!--城市及搜索框-->
		<uni-nav-bar color="#333333" background-color="#FFFFFF" fixed="false" right-icon="scan" @click-left="showCity"
		@click-right="share">
			<block slot="left">
				<view class="city">
					<text>{{city}}</text>
					<uni-icon type="arrowdown" color="#333333" size="22"></uni-icon>
				</view>
			</block>
			<view class="input-view">
				<uni-icon type="search" size="22" color="#666666"></uni-icon>
				<input confirm-type="search" @confirm="confirm" class="input" type="text" placeholder="输入搜索关键词" />
			</view>
		</uni-nav-bar>
		<!--swiper-->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in slide1">
				<image class="swiper-item" :src="item.img">{{item}}</image>
			</swiper-item>	
		</swiper>
		<!--导航栏-->
		<view class="grids">
			<navigator class="grid" v-for="item in nav1">
				<image :src="item.img" mode="" class="grid_img"></image>
				<view class="grid_name">
					{{item.name}}
				</view>	
			</navigator>
		</view>
		<!--图片宣传部分-->
		<!--Segment Control部分-->
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="button" active-color="#ff9900"></uni-segmented-control>
		<view class="content">
			<view v-show="current === 0">
				选项卡1的内容
			</view>
			<view v-show="current === 1">
				选项卡2的内容
			</view>
			<view v-show="current === 2">
				选项卡3的内容
			</view>
			<view v-show="current === 3">
				选项卡4的内容
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import uniNavBar from '../../../components/uni-nav-bar.vue'
		import uniIcon from '../../../components/uni-icon.vue'
	import uniSegmentedControl from '../../../components/uni-segmented-control.vue'
	export default {
		components: {
			uniNavBar,
			uniIcon,
			uniSegmentedControl
		},
		data() {
			return {
				slide1:['1','2','3'],
				nav1:[{img:'../../../static/mine.jpg',name:'grid1'},{img:'../../../static/mine.jpg',name:'grid1'},{img:'../../../static/mine.jpg',name:'grid1'}],
				city:'北京',
				current:0,
				items:['距离最近','销量最高','秒杀商品','拼团团购']
			};
			
		},
		onLoad() {
			
		},
		methods: {
        onClickItem(index) {
            if (this.current !== index) {
                this.current = index;
            }
        }
    }
	}
</script>

<style>
	/**城市及搜索栏样式**/
		.city {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			width: 100%;
			margin-left:8px;
		}
	
		.input-view {
			width: 92%;
			display: flex;
			background-color: #e7e7e7;
			height: 30px;
			border-radius: 15px;
			padding: 0 4%;
			flex-wrap:nowrap;
			margin:7px 0;
			line-height:30px;
		}
		
		.input-view .uni-icon{
			line-height:30px !important;
		}
	
		.input-view .input {
			height:30px;
			line-height:30px;
			width:94%;
			padding: 0 3%;
		}
	/**导航栏样式**/
.girds{
background-color: #FFFFFF;	
}
.grid{
	position: relative;
	float: left;
	width: 20%;
	padding: 10px 10px;
}
.grid_img{
	display: block;
	width: 28px;
	height: 28px;
	margin: 0 auto;
}
.grid_name{
	font-size: 14px;
	text-align: center;
}
</style>
