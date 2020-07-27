<template>
  <div class="exam-card">
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
  }
};
</script>