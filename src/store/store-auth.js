import router from '../router'
import axios from '../axios-auth'
import globalAxios from 'axios'

export default {
  state: {
  	idToken: null,
  	userId: null,
  	user: null
  },
  mutations: {
  	authUser(state, userData) {
  		state.idToken = userData.token;
  		state.userId = userData.userId;
  	},
  	getUser(state, user) {
  		state.user = user;
  	},
  	logout(state) {
  		state.idToken = null;
		  state.userId = null;
  	}
  },
  actions: {
  	setLogoutTimer({commit, dispatch}, expirationTime) {
  		setTimeout(() => {
  			dispatch('logout')
  		}, expirationTime * 1000)
  	},
	signup({commit, dispatch}, authData) {
		axios.post('/accounts:signUp?key=AIzaSyAj6BLquQcikMw5NSeT0n5XHKEWRdH9gBI', {email: authData.email, password: authData.password, returnSecureToken: true})
            .then(res => {
              console.log(res);
              commit('authUser', { token: res.data.idToken, userId: res.data.localId });
              let now = new Date();
              let expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000);
              localStorage.setItem('token', res.data.idToken);
              localStorage.setItem('userId', res.data.localId);
              localStorage.setItem('expirationDate', expirationDate);
              dispatch('storeUser', authData);
              dispatch('setLogoutTimer', res.data.expiresIn);
              router.replace('/')
            })
            .catch(error => console.log(error))
	},
	login({commit, dispatch}, authData) {
		axios.post('/accounts:signInWithPassword?key=AIzaSyAj6BLquQcikMw5NSeT0n5XHKEWRdH9gBI', {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
            .then(res => {
              console.log(res);
              commit('authUser', { token: res.data.idToken, userId: res.data.localId });
              let now = new Date();
              let expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000);
              localStorage.setItem('token', res.data.idToken);
              localStorage.setItem('userId', res.data.localId);
              localStorage.setItem('expirationDate', expirationDate);
              dispatch('setLogoutTimer', res.data.expiresIn)
              router.replace('/')
            })
            .catch(error => console.log(error))
	},
	autoLogin({commit}) {
		let token = localStorage.getItem('token');
		if (!token) return;

		let expirationDate = localStorage.getItem('expirationDate');
		let now = new Date();
		if (now >= expirationDate) return;

		let userId = localStorage.getItem('userId');
		commit('authUser', { token, userId })
	},
	logout({commit}) {
		commit('logout');
		localStorage.removeItem('expirationDate')
		localStorage.removeItem('token')
		localStorage.removeItem('userId')
		router.replace('/')
	},
	storeUser({commit, state}, userData) {
		if (!state.idToken) {
			return
		};

 		globalAxios.post('users.json' + '?auth=' + state.idToken, userData)
			.then(res => console.log('storeUser ', res))
			.catch(err => console.log(err))
	},
	fetchUser({commit, state}) {
		if (!state.idToken) {
			return
		};

		globalAxios.get('/users.json' + '?auth=' + state.idToken)
        .then(res => {
       	  console.log(res)
      	  const data = res.data;
	      let users = [];
	      for (let key in data) {
	        let user = data[key];
	        user.id = key;
	        users.push(user)
	      }
	      commit('getUser', users[0])
	      console.log(new Date().getTime())
        })
        .catch(error => console.log(error))
	}
  },
  getters: {
  	user(state) {
  		return state.user;
  	},
  	isAuthenticated(state) {
  		return state.idToken !== null
  	}
  }
}