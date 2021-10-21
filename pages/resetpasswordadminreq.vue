<template>
  <!-- CONTENT
    ================================================== -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-5 col-xl-4 my-5">
        <div class="mb-7 logo-image text-center">
          <img class="justify-content-center" width="200px" height="60px" src="Hspace.png">
        </div>
        <h1 class="display-4 text-center mb-3">
          Reset Password
        </h1>
        <!-- Form -->
        <form>
          <!-- Email address -->
          <div class="form-group">
            <!-- Label -->
            <label>Email Address</label>
            <!-- Input -->
            <input v-model="input.email" type="email" class="form-control" placeholder="name@address.com">
          </div>
          <!-- Password -->
          <!-- Submit -->
          <button v-if="!isLoading" type="button" class="btn btn-lg btn-block btn-primary mb-3" @click="reset()">
            Reset
          </button>
          <button v-if="isLoading" type="button" class="btn btn-lg btn-block btn-primary mb-3">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
            Reset
          </button>
          <!-- Link -->
        </form>
      </div>
    </div> <!-- / .row -->
  </div> <!-- / .container -->
</template>

<script>
import apiService from '../api/apiservice'
import urls from '../api/apiUrl'
import '../assets/css/theme-dark.min.css'

export default {
  data () {
    return {
      input: {
        email: ''
      },
      isLoading: false
    }
  },
  methods: {
    async reset () {
      this.isLoading = true
      const res = await apiService.request(true, urls.RESETPASSWORDREQADMIN, this.input, 'POST')
      const result = await res.json()
      if (result.statuscode === 200) {
        this.isLoading = false
        this.$router.replace('/validatetokenadmin')
      } else if (result.statuscode === 400) {
        alert(result.message)
        this.isLoading = false
      }
    }
  }
}
</script>

<style>

</style>
