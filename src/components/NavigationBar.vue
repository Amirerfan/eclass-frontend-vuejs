<template>
  <b-navbar class="nav-bar">
    <b-navbar-brand href="/" class="nav-bar__logo">
      <img src="@/assets/img/logo/logo_name_2.jpg" height="40" />
    </b-navbar-brand>

    <b-navbar-nav class="ml-auto nav-bar__right">
      <div class="nav-bar__right__buttons">
        <b-button class="nav-bar__right__buttons__join" variant="outline-primary" @click="$bvModal.show('join-room-modal')">Join</b-button>
        <b-button class="nav-bar__right__buttons__create" variant="outline-primary" @click="$bvModal.show('create-room-modal')">Create</b-button>
      </div>

      <b-nav-item-dropdown>
        <template v-slot:button-content class="nav-bar__right__username">Amirerfan Siamaki</template>
        <b-dropdown-item class="nav-bar__right__profile" href="#">Profile</b-dropdown-item>
        <b-dropdown-item class="nav-bar__right__sign-out" href="#">Sign Out</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

    <b-modal
      id="create-room-modal"
      modal-class="create-room-modal"
      ok-only
      no-stacking
      hide-header
      hide-footer
    >
      <p class="create-room-modal__title">Setup New Room</p>
      <section>
        <div class="create-room-modal__room-title">
          <label for="example-datepicker">Room Title</label>
          <b-form-input id="input-horizontal"></b-form-input>
        </div>
      </section>
      <div class="create-room-modal__submit-room">
        <b-button class="create-room-modal__submit-room__button" variant="success">Submit Room</b-button>
      </div>
    </b-modal>
    
    <b-modal
      id="join-room-modal"
      modal-class="join-room-modal"
      ok-only
      no-stacking
      hide-header
      hide-footer
    >
      <p class="join-room-modal__title">Join Room</p>
      <section>
        <div class="join-room-modal__room-link">
          <label for="example-datepicker">Room Link</label>
          <b-form-input id="input-horizontal"></b-form-input>
        </div>
      </section>
      <div class="join-room-modal__join-room">
        <b-button class="join-room-modal__join-room__button" variant="success">Join Room</b-button>
      </div>
    </b-modal>
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
