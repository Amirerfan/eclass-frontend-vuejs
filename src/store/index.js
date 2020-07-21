import Vue from "vue";
import Vuex from "vuex";
import mixin from '../mixin'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      first_name: null,
      last_name: null,
      username: null,
      token: null
    }
  },
  mutations: {
    setToken(state, payload){
      state.user.token = payload.token
    },
    setUserData(state, payload){
      state.user.first_name = payload.first_name
      state.user.last_name = payload.last_name
      state.user.username = payload.username
    }
  },
  actions: {
    login(context, payload) {
			mixin.methods.baseRequest({	// login user api call
				url: 'login/',
				method: 'POST',
				data: payload
			}).then(res => {
        console.log(res)
				context.commit('setToken', res.data) // create related cafe classes				
        localStorage.setItem('token', res.data.token) // save token into localstorage
        context.dispatch('getUserData')
			}).catch(err => {
				context.state.localLoading = false // deactive loading mode
				if (err.response) {
					console.log(err.response)
					if (err.response.status == 400) {
						console.log({ message: 'اطلاعات ورودی معتبر نیست' })
					}
				}
			})
    },
    register(context, payload) {
      mixin.methods.baseRequest({	// login user api call
				url: 'register/',
				method: 'POST',
				data: payload
			}).then(res => {
        console.log(res)
				context.commit('setToken', res.data) // create related cafe classes				
        localStorage.setItem('token', res.data.token) // save token into localstorage
        context.dispatch('getUserData')
			}).catch(err => {
				context.state.localLoading = false // deactive loading mode
				if (err.response) {
					console.log(err.response)
					if (err.response.status == 400) {
						console.log({ message: 'اطلاعات ورودی معتبر نیست' })
					}
				}
			})
    },
    getUserData(context) {
      mixin.methods.request({
				url: 'user-profile/',
				method: 'GET',
			}).then(res => {	
        console.log(res)			
        context.commit('setUserData', res.data)
			}).catch(err => {
        console.log(err)
			})
    }
  },
  modules: {}
});
