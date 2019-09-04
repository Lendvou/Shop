import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home/home.vue'
import Signup from './components/Authentification/signup.vue'
import Login from './components/Authentification/login.vue'
import User from './components/Userpage/user.vue'
import Userhome from './components/Userpage/userhome.vue'
import Cart from './components/Userpage/cart.vue'
import ServerSide from './components/server-side.vue'

Vue.use(VueRouter);

const routes = [
	{ path: '/', component: Home },
	{ path: '/signup', component: Signup },
	{ path: '/login', component: Login },
	{ path: '/user', component: User, children: [
			{ path: '', component: Userhome },
			{ path: 'cart', component: Cart }
		]
	},
	{ path: '/server-side', component: ServerSide}
]

export default new VueRouter({
	mode: 'history',
	routes
})