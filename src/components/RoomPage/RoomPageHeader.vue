<template>
  <div @click="$bvModal.show('room-detail-modal')" class="room-page-header">
    <div class="room-page-header__room-name">Cafepay</div>

    <div class="room-page-header__video-call">
      <b-icon icon="camera-video-fill"></b-icon>
    </div>

    <b-modal id="room-detail-modal" title="Cafepay" ok-only no-stacking>
      <p class="my-2">First Modal</p>
      <b-button @click="$bvModal.show('create-exam-modal')">+</b-button>
    </b-modal>

    <b-modal id="create-exam-modal" size="lg" title="Setup New Exam" ok-only no-stacking>
      <p class="my-2">Label</p>
      <b-button v-b-modal.modal-multi-3 size="sm">Set Exam</b-button>
    </b-modal>

    <b-modal id="modal-multi-3" size="sm" title="Third Modal" ok-only>
      <p class="my-1">Third Modal</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "RoomPageHeader"
};
</script>