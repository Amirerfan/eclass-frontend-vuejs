<template>
  <div class="room-page" v-if="selectedRoom">
    <div class="room-page__header-container">
      <RoomPageHeader :selectedRoom="selectedRoom"/>
    </div>
    <div class="room-page__chat-container">
      <RoomPageChat :selectedRoom="selectedRoom"/>
    </div>
    <div class="room-page__compose-container">
      <RoomPageCompose :selectedRoom="selectedRoom"/>
    </div>
  </div>
</template>

<script>
import RoomPageHeader from "@/components/RoomPage/RoomPageHeader";
import RoomPageChat from "@/components/RoomPage/RoomPageChat";
import RoomPageCompose from "@/components/RoomPage/RoomPageCompose";

export default {
  name: "RoomPage",
  components: {
    RoomPageHeader,
    RoomPageChat,
    RoomPageCompose
  },
  props: {
    selectedRoom: {
      type: Object,
      required: true
    }
  }
};
</script>