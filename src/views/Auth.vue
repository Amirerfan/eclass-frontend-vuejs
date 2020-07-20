<template>
  <div class="auth">
    <img src="../assets/img/logo/logo_name.png" alt />
    <section class="auth__form">
      <Login v-if="state == 'login'" :changeToRegister="changeToRegister"/>
      <Register v-if="state == 'register'" :changeToLogin="changeToLogin" />
    </section>
  </div>
</template>

<script>
import Login from "@/components/auth/Login.vue";
import Register from "@/components/auth/Register.vue";

export default {
  name: "Auth",
  components: {
    Login,
    Register
  },
  data() {
    return {
      state: 'login'
    };
  },
  methods: {
    changeToRegister() {
      this.state = 'register'
    },
    changeToLogin() {
      this.state = 'login'
    }
  }
};
</script>