<template>
  <div class="single-message" :class="{'single-message--sender-you': sender=='YOU', 'single-message--sender-other': sender=='OTHER'}">
    <div
      class="single-message__sender"
    > YOU OR OTHER </div>
    <div class="single-message__text">this is a message from you or other so lets talk about something, for example let's <br/> talk about your work</div>
    <div class="single-message__time">12:35 p.m</div>
  </div>
</template>

<script>
export default {
  name: "SingleMessage",
  props: {
    sender: {
      type: String
    }
  }
};
</script>