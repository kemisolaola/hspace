<template>
  <div>
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
          </h1>          <!-- Form -->
          <form>
            <!-- Email address -->
            <div class="form-group">
              <!-- Label -->
              <label>New Password</label>
              <!-- Input -->
              <input v-model="input.newPassword" class="form-control" type="password" placeholder="new password">
              <!-- <div class="invalid-feedback">
                <span v-if="!$v.input.newPassword.required">Password word is required.</span>
                <span v-if="!$v.input.newPassword.required">Password word is required.</span>
              </div> -->
            </div>
            <div class="form-group">
              <!-- Label -->
              <label>Confirm Password</label>
              <!-- Input -->
              <input v-model="confirmPassword" class="form-control" type="password" placeholder="confirm password">
            </div>
            <button type="button" class="btn btn-lg btn-block btn-primary mb-3" @click="validate">
              Reset Password
            </button>
            <!-- Link -->
            <div class="text-center">
              <small class="text-muted text-center">
                Remember your password?<router-link to="/signinadmin">Sign in</router-link>.
              </small>
            </div>
          </form>
        </div>
      </div> <!-- / .row -->
    </div> <!-- / .container -->
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import apiService from '../api/apiservice'
import urls from '../api/apiUrl'
import '../assets/css/theme-dark.min.css'

export default {
  data () {
    return {
      input: {
        token: this.$store.state.tokenData,
        newPassword: ''
        // confirmPassword: ''
      },
      confirmPassword: '',
      isLoading: false,
      validations: {
        input: {
          newPassword: {
            required,
            minLength: minLength(8)
          }
        },
        confirmPassword: {
          required,
          minLength: minLength(8)
        }
      }
    }
  },
  methods: {
    async validate () {
      this.isLoading = true
      if (this.input.newPassword === this.confirmPassword) {
        const res = await apiService.request(true, urls.RESETPASSWORDADMIN, this.input, 'POST', 'ADMIN_TOKEN')
        const result = await res.json()
        console.log(result)
        if (result.statuscode === 200) {
          this.isLoading = false
          console.log(result)
          this.$router.push('/confirmreset')
          console.log(result.data)
        } else if (result.statuscode === 400) {
          console.log(result.data)
          this.isLoading = false
          alert(result.message)
        }
      } else { alert('Password do not match. Kindly check and try again') }
    }
  }
}
</script>

<style>

</style>
