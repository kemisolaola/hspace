<template>
  <!-- CONTENT
    ================================================== -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-5 col-lg-6 col-xl-4 my-5">
        <div class="mb-5 logo-image text-center">
          <img class="justify-content-center" width="200px" height="60px" src="/Hspace.png">
        </div>
        <h1 class="display-4 text-center mb-3">
          Sign in
        </h1>
        <div v-if="errorMessage" class="alert alert-light mt-2" role="alert">
           {{errorText}} Try again.
      </div>
        <!-- Form -->
        <form>
          <!-- Email address -->
          <div class="form-group">
            <!-- Label -->
            <label for="email-address">Email Address</label>
            <!-- Input -->
            <input
             v-model="input.email"
              type="email"
               class="form-control"
               placeholder="name@address.com"
                name="email-address"
             required>
          </div>
          <!-- Password -->
          <div class="form-group">
            <div class="row">
              <div class="col">
                <!-- Label -->
                <label for="password">Password</label>
              </div>
              <div class="col-auto">
                <!-- Help text -->
                <a class="form-text small text-muted" @click="showPassword()">
                  {{ text }}
                </a>
              </div>
            </div> <!-- / .row -->
            <!-- Input group -->
            <div class="input-group input-group-merge">
              <!-- Input -->
              <input
               name="password"
                v-model="input.password"
                 :type="type"
                  class="form-control"
                   placeholder="Enter your password"
               required>
              <!-- Icon -->
            </div>
          </div>
          <div class="col-auto">
            <!-- Help text -->
            <nuxt-link to="/hspace/resetpasswordadminreq" class="form-text small text-muted">
              Forgot password?
            </nuxt-link>
          </div>
          <!-- Submit -->
          <button v-if="!isLoading" type="button" class="btn btn-lg btn-block btn-primary mb-3" @click="signin()">
            Sign in
          </button>
          <button v-if="isLoading" type="button" class="btn btn-lg btn-block btn-primary mb-3">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
            Sign in
          </button>
          <!-- Link -->
          <div class="text-center">
            <small class="text-muted text-center">
              Don't have an account yet? <nuxt-link to="/hspace">Sign up</nuxt-link>.
            </small>
          </div>
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
      errorText: '',
      input: {
        email: '',
        password: ''
      },
      isLoading: false,
      type: 'password',
      text: 'Hide Password'
    }
  },
  methods: {
    async signin () {
      if (this.input.email === '' || this.input.password === '') {
        this.errorMessage = true
        this.errorText = 'Please enter your email address or mobile number.'
      } else {
        this.isLoading = true
        const res = await apiService.request(false, urls.SIGNINSUPERADMIN, this.input, 'POST')
        const result = await res.json()
        if (result.statuscode === 200) {
          apiService.setToken('SUPERADMIN_TOKEN', result.data.token)
          this.isLoading = false
          this.$router.push('/hspace/hospitals')
        } else if (result.statuscode === 400) {
          this.isLoading = false
          this.errorMessage = true
          this.errorText = result.message
        }
      }
    },
    showPassword () {
      if (this.type === 'password') {
        this.type = 'text'
        this.text = 'Hide Password'
      } else {
        this.type = 'password'
        this.text = 'Show Password'
      }
    }
  }
}
</script>

<style>

</style>
