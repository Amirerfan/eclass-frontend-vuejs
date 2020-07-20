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
      return this.$store.state.user.token;
    }
  },
  watch: {
    user: function(newValue) {
      if (newValue){
        this.$router.push('/')
      }
    }
  }
};
</script>
