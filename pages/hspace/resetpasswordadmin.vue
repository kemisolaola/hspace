<template>
  <div>
    <!-- CONTENT
    ================================================== -->
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-5 col-xl-4 my-5">
          <div class="mb-7 logo-image text-center">
            <img class="justify-content-center" width="200px" height="60px" src="/Hspace.png">
          </div>
          <h1 class="display-4 text-center mb-3">
            Reset Password
          </h1>          <!-- Form -->
          <form>
            <!-- Email address -->
            <div class="form-group">
              <!-- Label -->
              <label>Token</label>
              <!-- Input -->
              <input type="text" class="form-control" placeholder="token">
            </div>
            <div class="form-group">
              <!-- Label -->
              <label>New Password</label>
              <!-- Input -->
              <input class="form-control" placeholder="new password">
            </div>
            <button v-if="!isLoading" type="button" class="btn btn-lg btn-block btn-primary mb-3" @click="validate()">
              Reset Password
            </button>
            <button v-if="isLoading" type="button" class="btn btn-lg btn-block btn-primary mb-3">
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
              Reset Password
            </button>
            <!-- Link -->
            <div class="text-center">
              <small class="text-muted text-center">
                Remember your password?<router-link to="./signin">Sign in</router-link>.
              </small>
            </div>
          </form>
        </div>
      </div> <!-- / .row -->
    </div> <!-- / .container -->
  </div>
</template>

<script>
import apiService from '~/api/apiservice'
import urls from '~/api/apiUrl'
import '~/assets/css/theme-dark.min.css'

export default {
  data () {
    return {
      input: {
        token: '',
        newPassword: ''
      },
      isLoading: false
    }
  },
  methods: {
    async validate () {
      this.isLoading = true
      const res = await apiService.request(true, urls.RESETPASSWORDADMIN, this.input, 'POST')
      const result = await res.json()
      if (result.statuscode === 200) {
        this.isLoading = false
        this.$router.push('/hspace/signin')
      } else if (result.statuscode === 400) {
        this.isLoading = false
        alert(result.message)
      }
    }
  }
}
</script>

<style>

</style>
