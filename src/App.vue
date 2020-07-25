<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    user() {
      return this.$store.state.user
    },
    isLogedin() {
      return this.$store.state.user.isLogedin
    }
  },
  mounted() {
    if(!this.isLogedin){
      this.$router.push('/login')
    }
  },
  watch: {
    user: {
      deep: true,
      
      handler(newValue){
        console.log(newValue)
        if (newValue.isLogedin){
          this.$router.push('/')
          this.$store.dispatch('getUserRooms')
        }
      }
    },
    isLogedin(newValue) {
      if(!newValue) {
        this.$router.push('/login')
      } 
    }
  }
};
</script>
