<template>
	<div class="col-sm-4">
		<div class="panel panel-warning">
			<div class="panel-body">
				<img :src="item.image" alt="galosha-winter" width="250" height="200">
			</div>
			<div class="panel-heading">
				<p style="padding: 3px">
					<router-link to="/" class="align-text">{{item.name}} <span style="color: gray">[Price: {{item.price}}$]</span></router-link>
					<button 
							class="btn btn-warning align-button" 
							style="float: right"
							@click="addToCart(item)">Buy</button>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['item'],
		methods: {
			buy(item) {
				
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