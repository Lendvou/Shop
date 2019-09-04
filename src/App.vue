<template>
	<div>
		<app-header />
		<div class="container-70">
			<router-view></router-view>
			<!-- <router-link to="/server-side">To server</router-link> -->
		</div>
	</div>
	
</template>

<script>
	import Header from './components/Header.vue'
	export default {
		components: {
			appHeader: Header
		},
		created() {
			this.$store.dispatch('setItems')
			this.$store.dispatch('autoLogin')
		}
	}
</script>

<style>
	.container-70 {
		width: 70%;
		margin: 0 auto;
	}
</style>