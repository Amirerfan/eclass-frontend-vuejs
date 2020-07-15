<template>
  <div class="rooms-list">
    <RoomCard />
    <RoomCard />
    <RoomCard />
    <RoomCard />
    <RoomCard />
    <RoomCard />
  </div>
</template>

<script>
import RoomCard from "@/components/RoomCard.vue";
export default {
  name: "RoomsList",
  components: {
    RoomCard
  }
};
</script>