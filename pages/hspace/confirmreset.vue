<template>
  <!-- CONTENT
    ================================================== -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-5 col-xl-4 my-5">
        <div class="mb-7 logo-image text-center">
          <img class="justify-content-center" width="200px" height="60px" src="/Hspace.png">
        </div>
        <h1 class="display-4 text-center">
          Reset Your Password Succesful
        </h1>
        <div class="text-center">
          <small class="text-muted text-center">
            Your password has been reset <nuxt-link to="/hspace/signin">Sign In</nuxt-link>.
          </small>
        </div>
      </div>
    </div> <!-- / .row -->
  </div> <!-- / .container -->
</template>

<script>
export default {
  data () {
    return {
      signin: 'Signin'
    }
  }
}
</script>

<style>

</style>
