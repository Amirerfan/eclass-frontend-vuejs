<template>
  <div id="app">
    <div><video ref="video" id="video" autoplay></video></div>
  </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            video: {},
            canvas: {},
            captures: []
        }
    },
    mounted() {
      this.video = this.$refs.video;
      if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
              this.video.src = window.URL.createObjectURL(stream);
              this.video.play();
          });
      }
    },
    methods: {
      capture() {
        this.canvas = this.$refs.canvas;
        //var context = this.canvas.getContext("2d").drawImage(this.video, 0, 0, 640, 480);
        this.captures.push(this.canvas.toDataURL("image/png"));
      }
    }
}
</script>

<style scoped>

#video {
    background-color: #000000;
    width: 100vw;
    height: 99vh;
}
</style>
