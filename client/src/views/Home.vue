<template>
  <div class="home">
    <div class="jumbotron">
      <h1 class="display-3">Welcome to Community!</h1>
      <p class="lead">A fully open source forum. Made with by Coding Garden.</p>
      <hr class="my-4">
      <p>This forum is all about community. Be kind! Be helpful!</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" :href="getLoginURL" role="button">Login with Google</a>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  methods: {

  },
  computed: {
    getLoginURL() {
      if(window.location.hostname === 'localhost') {
        return 'http://localhost:3000/auth/google'
      } else {
        return 'https://community-forum-tugberk-api.now.sh/auth/google'
      }
    }
  },
};

</script>
