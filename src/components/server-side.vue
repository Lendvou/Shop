<template>
	<div>
		<button class="btn btn-primary" @click="sendToServer">Send pictures to server</button>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		methods: {
			sendToServer() {
				let items = this.$store.state.items;
				axios.put('items.json', items)
					.then(response => {console.log(response)})
					.catch(error => {console.log(error)});
			}
		}
	}
</script>