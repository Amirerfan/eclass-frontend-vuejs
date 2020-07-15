<template>
  <div class="home">
    <NavigationBar v-if="!fullScreen" />
    <RoomsList />
  </div>
</template>

<script>
import RoomsList from "@/components/RoomsList.vue";
import NavigationBar from "@/components/NavigationBar";

export default {
  name: "Home",
  components: {
    RoomsList,
    NavigationBar
  },
  computed: {
    fullScreen() {
      return this.$route.path == "/login" || this.$route.path == "/register";
    }
  }
};
</script>
