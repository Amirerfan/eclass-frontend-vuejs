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

    <b-modal
      id="create-exam-modal"
      modal-class="create-exam-modal"
      size="lg"
      ok-only
      no-stacking
      hide-header
      hide-footer
    >
      <p class="create-exam-modal__title">Setup New Exam</p>

      <div class="create-exam-modal__exam-title">
        <label for="example-datepicker">Exam Title</label>
        <b-form-input id="input-horizontal"></b-form-input>
      </div>
      <div class="create-exam-modal__start-time">
        <label for="example-datepicker">Start Time</label>
        <b-form-datepicker id="example-datepicker" class="mb-2"></b-form-datepicker>
        <b-form-timepicker locale="en"></b-form-timepicker>
      </div>
      <div class="create-exam-modal__end-time">
        <label for="example-datepicker">End Time</label>
        <b-form-datepicker class="mb-2" id="example-datepicker"></b-form-datepicker>
        <b-form-timepicker class="create-exam-modal__end-time_input" locale="en"></b-form-timepicker>
      </div>

      <section class="create-exam-modal__questions">
        <div class="create-exam-modal__questions__header">QUESTIONS</div>
        <div class="create-exam-modal__questions__body">
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
        </div>
      </section>
    </b-modal>

    <b-modal id="modal-multi-3" size="sm" title="Third Modal" ok-only>
      <p class="my-1">Third Modal</p>
    </b-modal>
  </div>
</template>

<script>
import ExamCard from "@/components/Exam/ExamCard.vue";
import PersonCard from "@/components/PersonCard.vue";

export default {
  name: "RoomPageHeader",
  components: {
    ExamCard,
    PersonCard
  }
};
</script>