<template>

  <b-navbar
    toggleable="md"
    type="dark"
    variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">BICAMPUS</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="#">Events</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search">
          </b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search
          </b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">TR</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>User</em>
          </template>
          <b-dropdown-item href="/test">AG Grid</b-dropdown-item>
          <b-dropdown-item href="/profile" v-if="!isLoggedIn">Profile</b-dropdown-item>
          <b-dropdown-item href="/signUp" v-if="isLoggedIn">Sign Up</b-dropdown-item>
          <b-dropdown-item href="/signIn" v-if="isLoggedIn">Sign In</b-dropdown-item>
          <b-dropdown-item href="/" v-if="!isLoggedIn">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        isLoggedIn: false,
      }
    },
    created() {
      this.isLoggedIn = this.$store.getters.isLoggedIn;
    },
  }
</script>
