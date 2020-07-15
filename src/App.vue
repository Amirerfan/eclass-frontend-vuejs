<template>
  <div id="app">
    <NavigationBar v-if="!fullScreen" />
    <router-view />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";

export default {
  name: "App",
  components: {
    NavigationBar
  },
  computed: {
    fullScreen() {
      return this.$route.path == "/login" || this.$route.path == "/register";
    }
  }
};
</script>
