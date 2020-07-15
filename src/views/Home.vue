<template>
  <div class="home">
    <RoomCard />
    <RoomCard />
    <RoomCard />
    <RoomCard />
  </div>
</template>

<script>
import RoomCard from "@/components/RoomCard.vue";
export default {
  name: "Home",
  components: {
    RoomCard
  }
};
</script>
