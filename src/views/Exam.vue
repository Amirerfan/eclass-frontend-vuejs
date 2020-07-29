<template>
  <div class="exam">
    <div class="exam__questions">
      <div class="exam__questions__exam-title">{{ exam.title }}</div>   
      <div class="exam__questions__question" 
        v-for="question in questions"
        :key="question.id">
        <b-form-group
          :label="question.text"
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
        <div class="exam__status__exam-information__title"><strong>Title:</strong> {{exam.title}}</div>
        <div class="exam__status__exam-information__start_time">Start Time: {{ new Date(exam.start_time) }}</div>
        <div class="exam__status__exam-information__end_time">End Time: {{ new Date(exam.end_time) }} </div>
        <div class="exam__status__exam-information__duration">Duration: {{ duration }} </div>
        <div class="exam__status__exam-information__user-name">Name: {{ $store.state.user.first_name +' '+ $store.state.user.last_name }}</div>
        <div class="exam__status__exam-information__email">Email: {{ $store.state.user.username }}</div>
      </div>
      <hr>
      <div class="exam__status__time">
        {{remaining_time}}
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
      questions: [],
      remaining_time: ''
    }
  },
  props: {
    exam: {
      type: Object,
      required: true
    }
  },
  created() {
    this.request({	
          url: 'exam/'+ this.exam.id +'/questions/',
          method: 'GET',
        }).then(res => {
          console.log(res)
          this.questions = res.data.questions
        }).catch(err => {
          if (err.response) {
            console.log(err.response)
            if (err.response.status == 400) {
              console.log({ message: 'اطلاعات ورودی معتبر نیست' })
            }
          }
        })
  
    setInterval(() => {
      this.remaining();
    }, 1000);
  },
  computed: {
    duration() {
      let duration = new Date(new Date(this.exam.end_time) - new Date(this.exam.start_time))
      let duration_string = duration.getUTCDate() + " " + duration.getUTCHours() + ":" + duration.getUTCMinutes() + ":" + duration.getUTCSeconds();
      return duration_string
    },
  },
  methods :{
    remaining() {
      let remaining = new Date(new Date(this.exam.end_time) - new Date())
      let remaining_string = remaining.getUTCDate() + " " + remaining.getUTCHours() + ":" + remaining.getUTCMinutes() + ":" + remaining.getUTCSeconds();
      this.remaining_time = remaining_string
    }
  }
}
</script>