<template>
  <div class="rooms-list">
    <RoomCard v-for="room in this.rooms" :key="room.id" :room='room'/>  
  </div>
</template>

<script>
import RoomCard from "@/components/RoomCard.vue";
export default {
  name: "RoomsList",
  components: {
    RoomCard
  },
  computed: {
    rooms() {
      let rooms = this.$store.state.rooms
      let processedRooms = rooms.admin
      console.log('processed rooms:' , processedRooms)
      rooms.participated.forEach(participated => {
        if (!processedRooms.some(room => room.id == participated.id)) {
          processedRooms.push(participated)
        }
      });
      return processedRooms
    }
  }
};
</script>