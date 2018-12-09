<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in slide1">
				<image class="swiper-item" :src="item.img">{{item}}</image>
			</swiper-item>
			
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				slide1:['1','2','3']
				
			};
			
		},
		onLoad() {
			
		}
	}
</script>

<style>

</style>
