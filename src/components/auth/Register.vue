<template>
  <div class="register">
    <b-form class="register__form" @submit="onRegister" v-if="show">
      <b-form-group id="input-group-1" label="Username" label-for="input-1">
        <b-form-input
          class="register__form__username"
          placeholder="Username"
          type="text"
          size="lg"
          v-model="form.username"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="Email Address" label-for="input-1">
        <b-form-input
          class="register__form__email"
          placeholder="Email"
          type="email"
          size="lg"
          v-model="form.email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="Password" label-for="input-1">
        <b-form-input
          class="register__form__password"
          placeholder="Password"
          type="password"
          size="lg"
          v-model="form.password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="Confirm Password" label-for="input-1">
        <b-form-input
          class="register__form__password"
          placeholder="Confirm"
          type="password"
          size="lg"
          v-model="form.confirmPassword"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-checkbox
        class="register__form__remember-me"
        value="True"
        v-model="form.rememberMe"
      >Remember Me!</b-form-checkbox>

      <b-button class="register__form__register-button" type="submit" variant="primary">REGISTER</b-button>
      <b-button
        class="register__form__login-button"
        @click="onRegister"
        variant="outline-primary"
      >LOGIN</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      form: {
        email: "",
        password: "",
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
