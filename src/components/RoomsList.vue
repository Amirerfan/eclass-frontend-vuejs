<template>
  <div class="rooms-list">
    <RoomCard v-for="room in $store.getters.rooms" 
              :key="room.id" 
              :room='room'
              :handleRoomClick='handleRoomClick' 
              :class="{'room-card--selected': room==selectedRoom}"/>  
  </div>
</template>

<script>
import RoomCard from "@/components/RoomCard.vue";
export default {
  name: "RoomsList",
  components: {
    RoomCard
  },
  props: {
    selectedRoom: {
      type: Object,
      required: true
    },
    handleRoomClick: {
      type: Function,
      required: true
    }
  }
};
</script>