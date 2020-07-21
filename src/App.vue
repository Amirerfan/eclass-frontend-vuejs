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
        if (newValue.username && newValue.first_name && newValue.last_name && newValue.token){
          this.$router.push('/')
        }
      }
    }
  }
};
</script>
