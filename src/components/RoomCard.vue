<template>
  <div @click="handleRoomClick(room)" class="room-card">
    <div class="room-card__img">
      <img
        src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
        alt
      />
    </div>
    <div class="room-card__info">
      <div class="room-card__info__name">{{ room.name }}</div>
      <div class="room-card__info__msg">Hello, How are you! Where are these days?</div>
      <div class="room-card__info__time">12:32</div>
      <!-- <b-badge class="room-card__info__number" pill variant="danger">12</b-badge> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "RoomCard",
  data() {
    return {};
  },
  props: {
    room: {
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