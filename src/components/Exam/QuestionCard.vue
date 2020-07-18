<template>
  <div class="question-card">
    <div class="question-card__question-number">Question 1</div>
    <div class="question-card__text">
      <b-form-textarea
        v-model="text"
        debounce="500"
        rows="1"
        max-rows="5"
        placeholder="Question Text"
      ></b-form-textarea>
    </div>
    <b-button class="question-card__delete-question" variant="danger">Delete</b-button>
  </div>
</template>

<script>
export default {
  name: "QuestionCard"
};
</script>