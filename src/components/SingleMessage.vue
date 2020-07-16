<template>
  <div class="single-message single-message--sender-you">
    <div
      class="single-message__sender"
    >{this.props.message.sender}{this.props.message.sender}{this.props.message.sender}</div>
    <div class="single-message__text">{this.props.message.text}</div>
    <div class="single-message__time">{this.props.message.time}</div>
  </div>
</template>

<script>
export default {
  name: "SingleMessage"
};
</script>