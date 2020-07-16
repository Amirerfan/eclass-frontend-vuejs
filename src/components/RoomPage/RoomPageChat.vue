<template>
  <div class="room-page-chat">
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
  </div>
</template>

<script>
import SingleMessage from "@/components/SingleMessage.vue";

export default {
  name: "RoomPageChat",
  components: {
    SingleMessage
  },
  mounted() {
    let roomPageChat = document.getElementsByClassName("room-page-chat")[0];
    roomPageChat.scrollTop = roomPageChat.scrollHeight;
  }
};
</script>