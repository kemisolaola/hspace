<template>
  <!-- CONTENT
    ================================================== -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-5 col-xl-4 my-5">
        <div class="mb-5 logo-image text-center">
          <img class="justify-content-center" width="200px" height="60px" src="Hspace.png">
        </div>
        <h2 class="text-center mb-3">
          We sent a code to your email
        </h2>
        <!-- Form -->
        <form>
          <!-- Email address -->
          <div class="form-group">
            <!-- Label -->
            <label>Token</label>
            <!-- Input -->
            <input v-model="input.token" class="form-control" placeholder="6 digit code" required>
            <small v-if="errorMessage" class="text-center" style="color:red">
              {{ errorText }}
            </small>
            <small v-if="errormessage" class="text-center" style="color:red">
              {{ errorText }}
            </small>
          </div>
          <div class="text-left mb-1">
            <small class=" text-left"  >
              <nuxt-link to="/resetpasswordadminreq" style="color: #013c78;">Resend Token</nuxt-link>.
            </small>
          </div>
           <!-- Password -->
          <!-- Submit -->
          <button v-if="!isLoading" type="submit" class="btn btn-lg btn-block btn-primary mb-3" @click="validate (input.token)">
            Validate
          </button>
          <button v-if="isLoading" type="button" class="btn btn-lg btn-block btn-primary mb-3">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
            Validate
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

export default {
  data () {
    return {
      errorText: '',
      errorMessage: false,
      errormessage: false,
      input: {
        token: ''
      },
      isLoading: false
    }
  },
  methods: {
    async validate (token) {
      if (this.input.token === '') {
        this.errorMessage = true
        this.errorText = 'Please enter token sent to your email.'
      } else {
        let storeToken = ''
        storeToken = token
        this.$store.commit('saveToken', storeToken)
        this.isLoading = true
        const res = await apiService.request(true, urls.VALIDATETOKENADMIN, this.input, 'POST')
        const result = await res.json()
        if (result.statuscode === 200 && this.$store.state.tokenData !== '') {
          this.isLoading = false
          this.$router.push('/resetpasswordadmin')
        } else if (result.statuscode === 400) {
          this.isLoading = false
          this.errorMessage = false
          this.errormessage = true
          this.errorText = 'Token does not exist or is expired'
        }
      }
    }
  }
}
</script>

<style>

</style>
