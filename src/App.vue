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
    }
  }
};
</script>
