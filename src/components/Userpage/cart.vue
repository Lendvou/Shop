<template>
	<div>
		<h2 v-if="!addedItems">Your cart is empty.</h2>
		<div v-for="item in addedItems">
			<app-item :item="item" />
		</div>
	</div>
</template>

<script>
	import item from './item.vue'
	export default {
		computed: {
			addedItems() {
				return this.$store.state.addedItems[0] ? this.$store.getters.addedItems : false
			}	
		},
		components: {
			appItem: item
		}
	}
</script>