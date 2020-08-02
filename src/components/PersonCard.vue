<template>
  <div class="person-card">
    <div class="person-card__person-name">{{ person.user.username }}</div>
    <b-form-checkbox v-if="userIsAdmin && !isAdmin" @change="handelSelectAsAdmin" :value="person.id"></b-form-checkbox>
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
    },
    userIsAdmin: {
      type: Boolean,
    }
  },
  methods: {
    handelSelectAsAdmin() {
      this.selectAsAdmin(this.person.id)
    }
  }
};
</script>