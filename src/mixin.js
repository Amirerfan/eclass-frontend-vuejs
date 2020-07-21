/* eslint-disable */
import store from './store/index'
import axios from 'axios'

const mixin = {
  data() {
    return {
      URL: "http://127.0.0.1:8000/",
    }
  },
  methods: {

    baseRequest(config) {
      const instance = axios.create({
        baseURL: "http://127.0.0.1:8000/"
      });
      return instance.request(config);
    },

    request(config) {
      const instance = axios.create({
        baseURL: "http://127.0.0.1:8000/",
        headers: {
          authorization: "Token " + "a7c1caf0514413ccc94ed7499a470a49467d7863",
          "Content-Type": "application/json"
        }
      })
      instance.interceptors.response.use((response) => {
        // do something with the response data\
        // this.loading = false

        return response;
      }, error => {
        // this.loading = false
        // handle the response error
        if (error.response) {
          if (error.response.data && error.response.status !== 404 && error.response.status !== 500) {
            // let errors = Object.values(error.response.data)
            // errors.forEach(msg => { M.toast({ html: msg, classes: 'red' }) });
          }
          // if (error.response.status == 503) { M.toast({ html: 'خطا در ارتباط با سرور', classes: 'red' }) }
          // if (error.response.status == 403) store.dispatch("GetUserData");
          if (error.response.status == 401) this.$router.push('/login')
        }
        return Promise.reject(error);
      });
      return instance.request(config);
    },

    checkAuth() {
    },

    deleteDropFile(index) {
      this.dropFiles.splice(index, 1)
    },
  },
  computed: {
    token() {
      return store.state.token
    },
  }
}

export default mixin