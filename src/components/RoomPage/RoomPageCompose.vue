<template>
  <div class="room-page-compose">
    <div class="room-page-compose__text">
      <b-form-textarea v-model="text" debounce="500" rows="1" max-rows="3" placeholder="Compose"></b-form-textarea>
    </div>
    <div class="room-page-compose__buttons">
      <b-icon icon="chevron-right" class="room-page-compose__buttons__send-button"></b-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoomPageCompose",
  data() {
    return {
      text: ""
    };
  }
};
</script>
