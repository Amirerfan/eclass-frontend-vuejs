<template>
  <div class="auth">
    <img src="../assets/img/logo/logo_name.png" alt />
    <section class="auth__form">
      <Login v-if="login" />
      <Register v-if="!login" />
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
      login: true
    };
  }
};
</script>