<template>
  <div>
    <!-- CONTENT
    ================================================== -->
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-5 col-xl-4 my-5">
          <div class="mb-5 logo-image text-center">
            <img class="justify-content-center" width="200px" height="60px" src="Hspace.png">
          </div>
          <h1 class="display-4 text-center mb-3">
            Reset Password
          </h1>          <!-- Form -->
          <form>
            <!-- Email address -->
            <div class="form-group">
            <div
            class="row">
              <!-- Label -->
              <div class="col">
              <label>New Password</label>
              </div>
              <div class="col-auto">
                <!-- Help text -->
                <a class="form-text small text-muted" @click="showPassword()">
                  {{ text }}
                </a>
              </div></div>
              <!-- Input -->
              <input
               v-model="input.newPassword"
                class="form-control"
                 :type='type'
                  placeholder="new password"
                   minlength="6"
               required>
              <!-- <div class="invalid-feedback">
                <span v-if="!$v.input.newPassword.required">Password word is required.</span>
                <span v-if="!$v.input.newPassword.required">Password word is required.</span>
              </div> -->
            </div>
            <div class="form-group">
              <!-- Label -->
              <label>Confirm Password</label>
              <!-- Input -->
              <input
               v-model="confirmPassword"
                class="form-control"
                 type="password"
                  placeholder="confirm password"
                   minLength="6"
               required>
               <small v-if="alerts" class="text-center mt-1" style="color:red">
              Passwords do not match
            </small>
            </div>
              <small v-if="errorCode" class="text-center" style="color:red">
              Something unexpected happened. Please try again.
            </small>
            <button type="button" class="btn btn-lg btn-block btn-primary mb-3" @click="validate">
              Reset Password
            </button>
            <!-- Link -->
            <div class="text-center mt-1">
              <small class="text-muted text-center">
                Remember your password?<nuxt-link to="/signinadmin">Sign in</nuxt-link>.
              </small>
            </div>
          </form>
        </div>
      </div> <!-- / .row -->
    </div> <!-- / .container -->
  </div>
</template>

<script>
import apiService from '../api/apiservice'
import urls from '../api/apiUrl'

export default {
  data () {
    return {
      text: 'Show Password',
      type: 'password',
      alerts: false,
      errorCode: false,
      input: {
        token: this.$store.state.tokenData,
        newPassword: ''
        // confirmPassword: ''
      },
      confirmPassword: '',
      isLoading: false
      // validations: {
      //   input: {
      //     newPassword: {
      //       required,
      //       minLength: minLength(8)
      //     }
      //   },
      //   confirmPassword: {
      //     required,
      //     minLength: minLength(8)
      //   }
      // }
    }
  },
  methods: {
    async validate () {
      this.isLoading = true
      if (this.input.newPassword === this.confirmPassword) {
        const res = await apiService.request(true, urls.RESETPASSWORDADMIN, this.input, 'POST', 'ADMIN_TOKEN')
        const result = await res.json()
        if (result.statuscode === 200) {
          this.isLoading = false
          this.$router.push('/confirmreset')
        } else if (result.statuscode === 400) {
          this.isLoading = false
          this.alerts = false
          this.errorCode = true
        }
      } else {
        this.errorCode = false
        this.alerts = true
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
