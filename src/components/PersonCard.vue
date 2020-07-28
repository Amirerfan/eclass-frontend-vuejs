<template>
  <div class="person-card">
    <div class="person-card__person-name">{{ person.user.first_name + ' ' + person.user.last_name }}</div>
    <b-form-checkbox @change="handelSelectAsAdmin" :value="person.id" v-if="!isAdmin"></b-form-checkbox>
  </div>
</template>

<script>
export default {
  name: "PersonCard",
  props: {
    person: {
      type: Object,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false
    },
    selectAsAdmin: {
      type: Function,
    }
  },
  methods: {
    handelSelectAsAdmin() {
      this.selectAsAdmin(this.person.id)
    }
  }
};
</script>