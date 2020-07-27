<template>
  <div class="home">
    <div class="home__nav-bar">
      <NavigationBar v-if="!fullScreen" />
    </div>
    <div class="home__body">
      <div class="home__body__rooms-list-container">
        <RoomsList :selectedRoom="selectedRoom" :handleRoomClick='handleRoomClick'/>
      </div>
      <div class="home__body__room-page-container">
        <RoomPage :selectedRoom="selectedRoom" />
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
  data() {
    return {
      selectedRoom: null
    }
  },
  methods: {
    handleRoomClick(room) {
      this.selectedRoom = room
    }
  },
  computed: {
    fullScreen() {
      return this.$route.path == "/login" || this.$route.path == "/register";
    }
  },
  created() {
    let interval = setInterval(() => {
      if (this.$store.getters.rooms.length) {
        this.selectedRoom = this.$store.getters.rooms[0]
        clearInterval(interval)
      }
    }, 500);
  }
};
</script>
