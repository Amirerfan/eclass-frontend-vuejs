<template>
  <div class="auth">
    <img src="../assets/img/logo/logo_name.png" alt />
    <section class="auth__form">
      <Login />
      <Register />
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
  }
};
</script>