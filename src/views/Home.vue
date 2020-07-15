<template>
  <div class="home">
    <div class="home__nav-bar">
      <NavigationBar v-if="!fullScreen" />
    </div>
    <div class="home__body">
      <div class="home__body__rooms-list-container">
        <RoomsList />
      </div>
      <div class="home__body__room-page-container">
        <RoomPage />
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import RoomsList from "@/components/RoomsList.vue";
import RoomPage from "@/components/RoomPage/RoomPage.vue";

export default {
  name: "Home",
  components: {
    NavigationBar,
    RoomsList,
    RoomPage
  },
  computed: {
    fullScreen() {
      return this.$route.path == "/login" || this.$route.path == "/register";
    }
  }
};
</script>
