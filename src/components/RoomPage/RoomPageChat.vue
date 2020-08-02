<template>
  <div class="room-page-chat">
    <SingleMessage sender="YOU" />
    <SingleMessage sender="OTHER" />
    <SingleMessage sender="YOU" />
    <SingleMessage sender="OTHER" />
    <SingleMessage sender="YOU" />
    <SingleMessage sender="OTHER" />
    <SingleMessage sender="YOU" />
    <SingleMessage sender="OTHER" />
    <SingleMessage sender="YOU" />
    <SingleMessage sender="OTHER" />
    <SingleMessage sender="YOU" />
    <SingleMessage sender="OTHER" />
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