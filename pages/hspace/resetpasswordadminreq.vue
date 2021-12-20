<template>
  <!-- CONTENT
    ================================================== -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-5 col-xl-4 my-5">
        <div class="mb-5 logo-image text-center">
          <img class="justify-content-center" width="200px" height="60px" src="/Hspace.png">
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
          <small v-if="errorMessage" class="text-center" style="color:red">
           {{errorText}} Try again.
           </small>
            <small v-if="errormessages" class="text-center" style="color:red">
              Something unexpected happened. Please try again.
            </small>
          </div>
          <!-- Password -->
          <!-- Submit -->
          <button v-if="!isLoading" class="btn btn-lg btn-block btn-primary mb-3" type="button" @click="reset()">
            Reset Password
          </button>
          <button v-if="isLoading" type="button" class="btn btn-lg btn-block btn-primary mb-3">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
            Reset Password
          </button>
          <!-- Link -->
        </form>
      </div>
    </div> <!-- / .row -->
  </div> <!-- / .container -->
</template>

<script>
import apiService from '~/api/apiservice'
import urls from '~/api/apiUrl'

export default {
  data () {
    return {
      errorMessage: false,
      errormessages: false,
      errorText: '',
      message: '',
      input: {
        email: ''
      },
      isLoading: false
    }
  },
  methods: {
    async reset () {
      if (this.input.email === '') {
        this.errorMessage = true
        this.errorText = 'Please enter your email address.'
      } else {
        this.isLoading = true
        const res = await apiService.request(true, urls.RESETPASSWORDREQSUPERADMIN, this.input, 'POST')
        const result = await res.json()
        if (result.statuscode === 200) {
          this.isLoading = false
          this.$router.push('/hspace/validatetokenadmin')
        } else if (result.statuscode === 400) {
          this.isLoading = false
          this.errorMessage = false
          this.errormessages = true
          this.message = result.message
        }
      }
    }
  }
}
</script>

<style>

</style>
