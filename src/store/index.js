import Vue from "vue";
import Vuex from "vuex";
import mixin from '../mixin'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: null,
      first_name: null,
      last_name: null,
      username: null,
      token: null,
      isLogedin: false
    },
    rooms: {
      admin: [],
      participated: []
    }
  },
  mutations: {
    setUserData(state, payload){
      state.user.id = payload.id
      state.user.token = payload.token
      state.user.first_name = payload.user.first_name
      state.user.last_name = payload.user.last_name
      state.user.username = payload.user.username
      state.user.isLogedin = true
    },
    setUserRooms(state, payload){
      if(payload != undefined){
        state.rooms = payload
      } 
    },
    indexCreatedRoom(state, payload){
      state.rooms.admin.push(payload)
    },
    indexJoinedRoom(state, payload){
      state.rooms.participated.push(payload)
    },
    setRoomExams(state, room_id, payload) {
      let room = state.rooms.admin.find(room => room.id == room_id)
      room.exams.push(payload)
      room = state.rooms.participated.find(room => room.id == room_id)
      room.exams.push(payload)
    }
  },
  actions: {
    login(context, payload) {
			mixin.methods.baseRequest({	// login user api call
				url: 'user/login/',
				method: 'POST',
				data: payload
			}).then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token) // save token into localstorage
				context.commit('setUserData', res.data) // create related cafe classes				
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
      mixin.methods.baseRequest({	
				url: 'user/create/',
				method: 'POST',
				data: { 'user': payload }
			}).then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token) 
				context.commit('setUserData', res.data) 			
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
    getUserRooms(context) {
      mixin.methods.request({	
				url: 'rooms/'+ context.state.user.id +'/',
				method: 'GET',
			}).then(res => {
        console.log(res)
        context.commit('setUserRooms', res.data) 			
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
    createRoom(context, payload) {
      mixin.methods.request({	
				url: 'room/create/',
        method: 'POST',
        data: { name: payload,
                admin: [context.state.user.id]
              }
			}).then(res => {
        console.log(res)
        context.commit('indexCreatedRoom', res.data) 			
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
    joinRoom(context, payload) {
      mixin.methods.request({	
				url: 'room/' + payload + '/user/' + context.state.user.id + '/join/',
        method: 'POST',
      }).then(res => {
        console.log(res)
        context.commit('indexJoinedRoom', res.data) 			
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
    createExam(context, payload) {
      mixin.methods.request({	
				url: 'exam/create/',
        method: 'POST',
        data: payload
      }).then(res => {
        console.log(res)
        context.dispatch('getRoomExam', res.data.room) 			
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
    getRoomExam(context, room_id) {
      mixin.methods.request({	
        url: 'exams/'+ room_id +'/',
        method: 'GET',
      }).then(res => {
        console.log(res)
        context.commit('setRoomExams', room_id, res.data)
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
    getRoomsExams(context) {
      context.state.rooms.admin.forEach(room => {
        mixin.methods.request({	
          url: 'exams/'+ room.id +'/',
          method: 'GET',
        }).then(res => {
          console.log(res)
          room['exams'] = res.data
        }).catch(err => {
          context.state.localLoading = false // deactive loading mode
          if (err.response) {
            console.log(err.response)
            if (err.response.status == 400) {
              console.log({ message: 'اطلاعات ورودی معتبر نیست' })
            }
          }
        })
      });
      context.state.rooms.participated.forEach(room => {
        mixin.methods.request({	
          url: 'exams/'+ room.id +'/',
          method: 'GET',
        }).then(res => {
          console.log(res)
          room['exams'] = res.data
        }).catch(err => {
          context.state.localLoading = false // deactive loading mode
          if (err.response) {
            console.log(err.response)
            if (err.response.status == 400) {
              console.log({ message: 'اطلاعات ورودی معتبر نیست' })
            }
          }
        })
      });
    },
    getRoomUsers(context, room) {
      room.adminProfiles = []
      room.participateProfiles = []

      room.participate.forEach(user => {
        mixin.methods.request({	
          url: 'user/'+ user +'/',
          method: 'GET',
        }).then(res => {
          console.log(res)
          room.participateProfiles.push(res.data)
        }).catch(err => {
          context.state.localLoading = false // deactive loading mode
          if (err.response) {
            console.log(err.response)
            if (err.response.status == 400) {
              console.log({ message: 'اطلاعات ورودی معتبر نیست' })
            }
          }
        })
      });
      room.admin.forEach(user => {
        mixin.methods.request({	
          url: 'user/'+ user +'/',
          method: 'GET',
        }).then(res => {
          console.log(res)
          room.adminProfiles.push(res.data)
        }).catch(err => {
          context.state.localLoading = false // deactive loading mode
          if (err.response) {
            console.log(err.response)
            if (err.response.status == 400) {
              console.log({ message: 'اطلاعات ورودی معتبر نیست' })
            }
          }
        })
      });
    },
    addAdmins(context, {room, admins}) {
      admins.forEach(user => {
        mixin.methods.request({	
          url: 'room/' + room.id + '/user/'+ user +'/admin/',
          method: 'POST',
        }).then(res => {
          console.log(res)
        }).catch(err => {
          context.state.localLoading = false // deactive loading mode
          if (err.response) {
            console.log(err.response)
            if (err.response.status == 400) {
              console.log({ message: 'اطلاعات ورودی معتبر نیست' })
            }
          }
        })
      });
    }
  },
  getters: {
    rooms: state => {
      let rooms = state.rooms
      let processedRooms = rooms.admin
      rooms.participated.forEach(participated => {
        if (!processedRooms.some(room => room.id == participated.id)) {
          processedRooms.push(participated)
        }
      });
      return processedRooms
    }
  },
  modules: {}
});
