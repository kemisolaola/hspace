<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-5 col-xl-4 my-5">
        <!-- Heading -->
        <div class="mb-5 logo-image text-center">
          <img class="justify-content-center" width="200px" height="60px" src="Hspace.png">
        </div>
        <h1 class="display-4 text-center mb-3">
          Sign up
        </h1>
        <div v-if="errorMessage" class="alert alert-light mt-2" role="alert">
           {{errorText}} Try again.
      </div>
        <!-- Form -->
        <form>
          <!-- Email address -->
          <div class="form-group">
            <!-- Label -->
            <label>
              Phone Number
            </label>
            <!-- Input -->
            <input v-model="input.phone" type="text" class="form-control" placeholder="phone number" required>
          </div>
          <div class="form-group">
            <!-- Label -->
            <label>
              Email Address
            </label>
            <!-- Input -->
            <input v-model="input.email" type="email" class="form-control" placeholder="name@address.com" required>
          </div>
          <!-- Password -->
          <div class="form-group">
            <!-- Label -->
            <div class="row">
              <div class="col">
                <label>
                  Password(6 or more characters)
                </label>
              </div>
              <div class="col-auto">
                <a to="" class="form-text small" @click="showPassword()">
                  {{ text }}
                </a>
              </div>
            </div>
            <!-- Help text -->
            <!-- Input group -->
            <div class="input-group input-group-merge">
              <!-- Input -->
              <input
               v-model="input.password"
                :type="type"
                 class="form-control"
                  placeholder="Enter your password"
                   required
               minlength="5">
            </div>
          </div>
          <!-- Submit -->
          <button v-if="!isLoading" type="submit" class="btn btn-lg btn-block btn-primary mb-3" @click="signup()">
            Sign up
          </button>
          <button v-if="isLoading" type="button" class="btn btn-lg btn-block btn-primary mb-3">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
            Sign up
          </button>
          <!-- Link -->
          <div class="text-center">
            <small class="text-muted text-center">
              Already have an account? <nuxt-link to="signinadmin">Log in</nuxt-link>.
            </small>
          </div>
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
      errorMessage: false,
      errorText: '',
      input: {
        phone: '',
        email: '',
        password: ''
      },
      isLoading: false,
      type: 'password',
      text: 'Show Password'
    }
  },
  methods: {
    async signup () {
      if (this.input.email === '' || this.input.phone === '') {
        this.errorMessage = true
        this.errorText = 'Please enter your email address or mobile number.'
      } else {
        this.isLoading = true
        const res = await apiService.request(false, urls.SIGNUPADMIN, this.input, 'POST')
        const result = await res.json()
        if (result.statuscode === 200) {
          this.isLoading = false
          this.$router.push('/addhospital')
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

<style scoped>
.logo-image{
  widows: 100px;
  margin-left: auto;
  margin-right: auto;
}
</style>
