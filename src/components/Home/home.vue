<template>
	<div class="panel panel-default">
		<div class="panel-body">
			<h1>Welcome to <span style="font-family: comic sans ms">Galosha shop</span>!</h1>
			<br>
			<h4>Don't know what to wear? Winter is coming and you don't want to freeze?</h4>
			<h4>Then go ahead and choose one of Galosh from wide variety available in our shop!</h4>

			<hr>

			<div v-for="item in items">
				<app-item :item="item" />
			</div>
		</div>
	</div>
</template>

<script>
	import Item from './item.vue'
	export default {
		computed: {
			items() {
				return this.$store.getters.items;
			}
		},
		components: {
			appItem: Item
		}
	}
</script>

<style>
	.panel-body {
		padding: 30px;
	}
</style>