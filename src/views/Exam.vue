<template>
  <div class="exam">
    <div class="exam__questions">
      <div class="exam__questions__exam-title">Midterm Exam Linear Algebra</div>   
      <div class="exam__questions__question">
        <b-form-group
          label="this is the question?"
          label-for="textarea-formatter"
        >
          <b-form-textarea
            id="textarea-formatter"
            v-model="text1"
            placeholder="Enter your answer"
          ></b-form-textarea>
        </b-form-group>  
      </div>   
      <div class="exam__questions__question">
        <b-form-group
          label="this is the question?"
          label-for="textarea-formatter"
        >
          <b-form-textarea
            id="textarea-formatter"
            v-model="text1"
            placeholder="Enter your answer"
          ></b-form-textarea>
        </b-form-group>  
      </div>   
    </div>
    <div class="exam__status">
      <div class="exam__status__exam-information">
        <div class="exam__status__exam-information__title">Title: Midterm Exam Linear Algebra</div>
        <div class="exam__status__exam-information__start_time">Start Time: Tue Jul 28 2020 18:09:10</div>
        <div class="exam__status__exam-information__end_time">End Time: Tue Jul 28 2020 19:09:10</div>
        <div class="exam__status__exam-information__duration">Duration: 1:00:00</div>
        <div class="exam__status__exam-information__user-name">Name: Amirerfan Siamaki</div>
        <div class="exam__status__exam-information__email">Email: amirerfan.siamaki@gmail.com</div>
      </div>
      <hr>
      <div class="exam__status__time">
        00:53:06
      </div>
      <div class="exam__status__actions">
        <b-button variant="success">Save Answers</b-button>
        <b-button variant="danger">Exit Exam</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "exam",
  data() {
    return {

    }
  },
  props: {
    exam: {
      type: Object,
      required: true
    }
  }
}
</script>