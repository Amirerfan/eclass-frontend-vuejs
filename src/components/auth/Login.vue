<template>
  <div class="login">
    <b-form class="login__form" @submit="onLogin">
      <b-form-group label="Email Address" label-for="email">
        <b-form-input
          id="email"
          class="login__form__email"
          placeholder="Email"
          type="email"
          v-model="form.username"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Password" label-for="password">
        <b-form-input
          id="password"
          class="login__form__password"
          placeholder="Password"
          type="password"
          v-model="form.password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-checkbox
        class="login__form__remember-me"
        value="True"
        v-model="form.rememberMe"
      >Remember Me!</b-form-checkbox>

      <b-button class="login__form__login-button" type="submit" variant="primary">Login</b-button>
      <b-button
        class="login__form__register-button"
        @click="changeToRegister"
        variant="outline-primary"
      >Register</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        rememberMe: false
      }
    };
  },
  props: {
    changeToRegister: {
      type: Function,
    }
  },
  methods: {
    onLogin(event) {
      event.preventDefault();
      this.$store.dispatch('login', this.form)
    },
  }
};
</script>
