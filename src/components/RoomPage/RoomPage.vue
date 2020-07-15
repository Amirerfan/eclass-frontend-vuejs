<template>
  <div class="room-page">
    <div class="room-page__header-container">
      <RoomPageHeader />
    </div>
    <div class="room-page__chat-container">
      <RoomPageChat />
    </div>
    <div class="room-page__compose-container">
      <RoomPageCompose />
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
  }
};
</script>