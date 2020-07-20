import Vue from "vue";
import Vuex from "vuex";
import mixin from '../mixin'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      first_name: null,
      last_name: null,
      email: null,
      username: null,
      token: null
    }
  },
  mutations: {
    setToken(state, payload){
      state.user.token = payload.token
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
        // context.dispatch('getUserData')
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
        // context.dispatch('getUserData')
			}).catch(err => {
				context.state.localLoading = false // deactive loading mode
				if (err.response) {
					console.log(err.response)
					if (err.response.status == 400) {
						console.log({ message: 'اطلاعات ورودی معتبر نیست' })
					}
				}
			})
    }
  },
  modules: {}
});
