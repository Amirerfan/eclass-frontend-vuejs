<template>
  <div @click="$bvModal.show('room-detail-modal')" class="room-page-header">
    <div class="room-page-header__room-name">Cafepay</div>

    <div class="room-page-header__video-call">
      <b-icon icon="camera-video-fill"></b-icon>
    </div>

    <b-modal
      modal-class="room-detail-modal"
      id="room-detail-modal"
      hide-header
      hide-footer
      no-stacking
    >
      <p class="room-detail-modal__room-name">Cafepay</p>
      <div class="room-detail-modal__room-link">
        <p class="room-detail-modal__room-link__title">Room Link</p>
        <p class="room-detail-modal__room-link__link">room link</p>
      </div>

      <section>
        <div class="section-header">
          <p class="section-header__title">EXAMS</p>
          <div class="section-header__button" @click="$bvModal.show('create-exam-modal')">+</div>
        </div>
        <div class="section-body">
          <ExamCard />
          <ExamCard />
          <ExamCard />
        </div>
      </section>

      <section>
        <div class="section-header">
          <p class="section-header__title">ADMINS</p>
          <div class="section-header__button" @click="$bvModal.show('create-exam-modal')">+</div>
        </div>
        <div class="section-body">
          <PersonCard />
          <PersonCard />
          <PersonCard />
        </div>
      </section>

      <section>
        <div class="section-header">
          <p class="section-header__title">SUBSCRIBERS</p>
        </div>
        <div class="section-body">
          <PersonCard />
          <PersonCard />
          <PersonCard />
        </div>
      </section>
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