<template>
	<div class="col-sm-4">
		<div class="panel panel-warning">
			<div class="panel-body">
				<img :src="item.image" alt="galosha-winter" width="250" height="200">
			</div>
			<div class="panel-heading">
				<router-link to="/">{{item.name}} <span style="color: green">[Price: {{item.price}}$]</span></router-link>
				<button 
						class="btn btn-warning" 
						@click="addToCart(item)">Add to Cart</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['item'],
		methods: {
			addToCart(item) {
				this.$store.dispatch('buyItem', item);
				this.$router.replace('/user/cart')
			}
		}
	}
</script>

<style scoped>
	.panel-body {
		display: flex;
		justify-content: center;
	}

	.panel-heading {
		font-size: 15px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	a {
		text-decoration: none;
		color: black;
	}
</style>