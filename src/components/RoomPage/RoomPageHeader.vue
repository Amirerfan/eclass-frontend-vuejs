<template>
  <div @click="$bvModal.show('room-detail-modal')" class="room-page-header">
    <div class="room-page-header__room-name">{{ selectedRoom.name }}</div>

    <div class="room-page-header__video-call">
      <b-icon icon="camera-video-fill" @click="$router.push('/video-call')"></b-icon>
    </div>

    <b-modal
      v-if="selectedRoom"
      modal-class="room-detail-modal"
      id="room-detail-modal"
      hide-header
      hide-footer
      no-stacking
    >
      <p class="room-detail-modal__room-name">{{ selectedRoom.name }}</p>
      <div class="room-detail-modal__room-link">
        <p class="room-detail-modal__room-link__title">Room Link</p>
        <p class="room-detail-modal__room-link__link">{{ selectedRoom.link }}</p>
      </div>

      <section>
        <div class="section-header">
          <p class="section-header__title">EXAMS</p>
          <div class="section-header__button" v-if="userIsAdmin" @click="$bvModal.show('create-exam-modal')">+</div>
        </div>
        <div class="section-body">
          <ExamCard v-for="exam in selectedRoom.exams" :key="exam.id" :exam="exam" :userIsAdmin="userIsAdmin"/>
        </div>
      </section>

      <section>
        <div class="section-header">
          <p class="section-header__title">ADMINS</p>
          <div class="section-header__button" v-if="userIsAdmin" @click="addAdmins">+</div>
        </div>
        <div class="section-body">
          <PersonCard v-for="admin in selectedRoom.adminProfiles" 
                      :key="admin.id" 
                      :person="admin" 
                      isAdmin
                      :userIsAdmin='userIsAdmin'/>
        </div>
      </section>

      <section>
        <div class="section-header">
          <p class="section-header__title">SUBSCRIBERS</p>
        </div>
        <div class="section-body">
          <PersonCard v-for="participate in selectedRoom.participateProfiles" 
                      :key="participate.id"  
                      :person="participate"
                      :selectAsAdmin='handelSelectAsAdmin'/>
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
      <section>
        <div class="create-exam-modal__exam-title">
          <label for="example-datepicker">Exam Title</label>
          <b-form-input id="input-horizontal" v-model="exam.title"></b-form-input>
        </div>
        <div class="create-exam-modal__start-time">
          <label for="example-datepicker">Start Time</label>
          <b-form-datepicker id="example-datepicker_1" class="mb-2" v-model="start_date"></b-form-datepicker>
          <b-form-timepicker locale="en" v-model="start_time"></b-form-timepicker>
        </div>
        <div class="create-exam-modal__end-time">
          <label for="example-datepicker">End Time</label>
          <b-form-datepicker class="mb-2" id="example-datepicker_2" v-model="end_date"></b-form-datepicker>
          <b-form-timepicker class="create-exam-modal__end-time_input" locale="en" v-model="end_time"></b-form-timepicker>
        </div>
      </section>

      <section class="create-exam-modal__questions">
        <div class="create-exam-modal__questions__header">QUESTIONS</div>
        <div class="create-exam-modal__questions__body">
          <QuestionCard v-for="question in this.exam.questions" :key="question.number" :question='question'/>
        </div>
        <b-button class="create-exam-modal__questions__add-question" variant="primary" @click="addQuestion">Add Question</b-button>
      </section>
      <div class="create-exam-modal__submit-exam">
        <b-button class="create-exam-modal__submit-exam__button" variant="success" @click="submitExam">Submit Exam</b-button>
      </div>
    </b-modal>

    <b-modal id="modal-multi-3" size="sm" title="Third Modal" ok-only>
      <p class="my-1">Third Modal</p>
    </b-modal>
  </div>
</template>

<script>
import QuestionCard from "@/components/Exam/QuestionCard.vue";
import ExamCard from "@/components/Exam/ExamCard.vue";
import PersonCard from "@/components/PersonCard.vue";

export default {
  name: "RoomPageHeader",
  components: {
    QuestionCard,
    PersonCard,
    ExamCard
  },
  data() {
    return {
      numberOfQuestions: 1,
      start_date: '',
      start_time: '',
      end_date: '',
      end_time: '',

      selectAsAdmin: [],

      exam: {
        title: '',
        start_time: '',
        end_time: '',
        questions: [
          {
            number: 1,
            text: '',
            credit: 1
          }
        ]
      },
    }
  },
  props: {
    selectedRoom: {
      type: Object,
      required: true
    }
  },
  computed: {
    start_datetime() {
      return this.start_date + 'T' + this.start_time
    },
    end_datetime() {
      return this.end_date + 'T' + this.end_time
    },
    userIsAdmin() {
      if(this.selectedRoom.adminProfiles.some(admin => admin.id == this.$store.state.user.id)){
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    submitExam() {
      let payload = this.exam
      payload.start_time = this.start_datetime
      payload.end_time = this.end_datetime
      payload.room = this.selectedRoom.id
      this.$store.dispatch('createExam', payload)
      this.$bvModal.hide('create-exam-modal')
    },
    addQuestion() {
      this.numberOfQuestions++
      this.exam.questions.push({
        number: this.numberOfQuestions,
        text: '',
        credit: 1
      })
    },
    handelSelectAsAdmin(userId) {
      if(this.selectAsAdmin.includes(userId)){
        this.selectAsAdmin = this.selectAsAdmin.filter(id => id != userId)
      } else {
        this.selectAsAdmin.push(userId)
      }
    },
    addAdmins() {
      if(this.selectAsAdmin.length){
        this.$store.dispatch('addAdmins', {room: this.selectedRoom, admins: this.selectAsAdmin})
      }
    }
  }
};
</script>