<template>
  <div class="exam-card" @click="enterExam(exam)">
    <div class="exam-card__left">
      <div class="exam-card__exam-title">{{ exam.title }}</div>
      <div class="exam-card__exam-time">{{ Date(exam.start_time).toLocaleString() }}</div>
    </div>
    <b-icon class="exam-card__delete" icon="trash"></b-icon>
    <b-icon class="exam-card__edit" icon="file-diff"></b-icon>
  </div>
</template>

<script>
export default {
  name: "ExamCard",
  props: {
    exam: {
      type: Object,
      required: true
    }
  },
  methods: {
    enterExam(exam) {
      let startTime = new Date(exam.start_time)
      let endTime = new Date(exam.end_time)
      
      if (Date.now() > startTime && Date.now() < endTime) {
        this.$router.push({name: 'exam', params: {exam}})
      }
    }
  }
};
</script>