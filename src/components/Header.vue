<template>
	<div class="header-container">
	<header class="navheader container-70">
		<div id="logo">
			<router-link to="/">
				<img src="../images/galosh1.png" alt="galosh" width="55">
	    		<span>Galosha shop</span>
	    	</router-link>
		</div>
    	<nav>
    		<ul>
    			<li>
    				<input type="text" class="form-control" placeholder="Search">
	    		</li>
	    		<li v-if="!isAuthenticated">
	    			<router-link to="/signup">Sign up</router-link>
	    		</li>
	    		<li v-if="!isAuthenticated">
	    			<button class="login-button" @click="toggleLogin = !toggleLogin">Login</button>
	    		</li>
	    		<form 
	    				@submit.prevent="login"
	    				v-if="toggleLogin"  
	    				class="toggle-login panel panel-default">
	    			<input 
	    					type="email" 
	    					placeholder="email" 
	    					class="form-control" 
	    					v-model="email">
	    			<input 
	    					type="password" 
	    					placeholder="password" 
	    					class="form-control" 
	    					v-model="password">
	    			<button class="btn btn-primary">Login</button>
	    		</form>
	    		<li v-if="isAuthenticated">
	    			<router-link to="/user/cart">Cart</router-link>
	    		</li>
	    		<li v-if="isAuthenticated">
	    			<button class="login-button" @click="toggleUser = !toggleUser">[user] <span class="caret"></span></button>
	    		</li>
	    		<div v-if="toggleUser" class="toggle-user panel panel-default">
	    			<button class="btn btn-primary" @click="goToUserpage">Userpage</button>
	    			<button class="btn btn-primary" @click="logout">Logout</button>
	    		</div>
    		</ul>	
    	</nav>
	</header>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				toggleLogin: false,
				toggleUser: false,
				email: '',
				password: ''
			}
		},
		methods: {
			login() {
				const formData = {
		        	email: this.email,
		        	password: this.password,
		        }
		        this.$store.dispatch('login', {email: formData.email, password: formData.password})
		        this.toggleOut();
			},
			logout() {
	        	this.$store.dispatch('logout');
	        	this.toggleOut();
	      	},
	      	log() {
	      		console.log(this.$store.getters.isAuthenticated)
	      	},
	      	goToUserpage() {
	      		this.$router.replace('/user');
	      		this.toggleOut();
	      	},
	      	toggleOut() {
	      		this.toggleLogin = false;
	      		this.toggleUser = false;
			},
		},
		computed: {
			isAuthenticated() {
				return this.$store.getters.isAuthenticated
			}
		}
	}
</script>

<style scoped>
	a {
		text-decoration: none;
		color: white;
	}

	.header-container {
		width: 100%;
		background-image: url(../images/dirt3.png);
		box-shadow: 0 1px 5px rgba(0,0,0,0.5);
		margin-bottom: 10px;
	}

	.navheader {
		padding: 15px 20px;
		font-size: 23.5px;
		font-family: Helvetica;
		display: flex;
	    flex-flow: row;
	    justify-content: space-between;
	    align-items: center;
	}

	#logo {
		font-family: comic sans ms;
		font-size: 27px;
	}

	nav {
    	height: 100%;
  	}

    ul {
	    list-style: none;
	    margin: 0;
	    padding: 0;
	    height: 100%;
	    display: flex;
	    flex-flow: row;
	    align-items: center;
    }

    li {
    	margin: 0 16px;
  	}

  	.login-button {
	    background-color: transparent;
	    border: none;
	    color: white;
	    font: inherit;
	    cursor: pointer;
	}

	.toggle-login {
		position: absolute;
		top: 83px;
		right: 200px;
		padding: 10px;
	}

	.toggle-login input {
		margin-bottom: 5px;
	}

	button:active, button:focus {
		outline: none;
	}

	.toggle-user {
		position: absolute;
		top:83px;
		right: 335px;
		padding: 10px;
		display: flex;
		flex-direction: column;
	}
</style>