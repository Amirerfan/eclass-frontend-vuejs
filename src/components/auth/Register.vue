<template>
  <div class="register">
    <b-form class="register__form" @submit="onRegister">
      <b-form-group label="first name" label-for="first-name">
        <b-form-input
          id="first-name"
          class="register__form__first-name"
          placeholder="First Name"
          type="text"
          v-model="form.first_name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="last name" label-for="last-name">
        <b-form-input
          id="last-name"
          class="register__form__last-name"
          placeholder="Last Name"
          type="text"
          v-model="form.last_name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Email Address" label-for="email">
        <b-form-input
          id="email"
          class="register__form__email"
          placeholder="Email"
          type="email"
          v-model="form.username"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Password" label-for="password">
        <b-form-input
          id="password"
          class="register__form__password"
          placeholder="Password"
          type="password"
          v-model="form.password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Confirm Password" label-for="confirm-password">
        <b-form-input
          class="register__form__password"
          placeholder="Confirm Password"
          type="password"
          v-model="form.confirmPassword"
          required
        ></b-form-input>
      </b-form-group>

      <b-button class="register__form__register-button" type="submit" variant="primary">Register</b-button>
      <b-button
        class="register__form__login-button"
        @click="changeToLogin"
        variant="outline-primary"
      >Login</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      form: {
        first_name: "Amirerfan",
        last_name: "Siamaki",
        username: "a",
        password: "asdfasdf",
        confirmPassword: "asdfasdf",
        rememberMe: false
      },
    };
  },
  props: {
    changeToLogin: {
      type: Function
    }
  },
  methods: {
    onRegister(event) {
      event.preventDefault();
      if(this.form.password == this.form.confirmPassword) {
      delete this.form['confirmPassword']
      delete this.form['rememberMe']
      console.log(this.form)
        this.$store.dispatch('register', this.form)
      }
    }
  }
};
</script>
