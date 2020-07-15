<template>
  <div class="login">
    <b-form class="login__form" @submit="onLogin" v-if="show">
      <b-form-group id="input-group-1" label="Email Address" label-for="input-1">
        <b-form-input
          class="login__form__email"
          placeholder="Email"
          type="email"
          size="lg"
          v-model="form.email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="Password" label-for="input-1">
        <b-form-input
          class="login__form__password"
          placeholder="Password"
          type="password"
          size="lg"
          v-model="form.name"
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
        @click="onRegister"
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
        email: "",
        name: "",
        rememberMe: false
      },
      show: true
    };
  },
  methods: {
    onLogin(evt) {
      evt.preventDefault();
      console.log(JSON.stringify(this.form));
    },
    onRegister(evt) {
      evt.preventDefault();
      console.log(evt + "register");
    }
  }
};
</script>
