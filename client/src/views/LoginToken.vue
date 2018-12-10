<template>
  <h1>Logging in...</h1>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: "LoginToken",
    mounted() {
      const { token } = this.$route.params;
      if(token) {
        this.login(token)
        this.$router.push('/admin')
      } else {
        this.$router.push('/')
      }
    },
    methods: {
      ...mapActions(['login']),
    }
  }
</script>

<style scoped>

</style>
