<template>
  <b-navbar class="nav-bar">
    <b-navbar-brand href="/" class="nav-bar__logo">
      <img src="@/assets/img/logo/logo_name_2.jpg" height="40" />
    </b-navbar-brand>

    <b-navbar-nav class="ml-auto nav-bar__right">
      <div class="nav-bar__right__buttons">
        <b-button class="nav-bar__right__buttons__join" variant="outline-primary">Join</b-button>
        <b-button class="nav-bar__right__buttons__create" variant="outline-primary">Create</b-button>
      </div>

      <b-nav-item-dropdown>
        <template v-slot:button-content class="nav-bar__right__username">Amirerfan Siamaki</template>
        <b-dropdown-item class="nav-bar__right__profile" href="#">Profile</b-dropdown-item>
        <b-dropdown-item class="nav-bar__right__sign-out" href="#">Sign Out</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {};
  }
};
</script>
