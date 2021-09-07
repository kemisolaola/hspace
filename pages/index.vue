<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-5 col-xl-4 my-5">
        <!-- Heading -->
        <h1 class="display-4 text-center mb-3">
          <img class="justify-content-center text-center mx-auto" width="200px" height="60px" src="Hspace.png">
          <br><br>
          Sign up
        </h1>
        <!-- Form -->
        <form>
          <!-- Email address -->
          <div class="form-group">
            <!-- Label -->
            <label>
              Phone Number
            </label>
            <!-- Input -->
            <input v-model="input.phone" type="text" class="form-control" placeholder="phone number">
          </div>
          <div class="form-group">
            <!-- Label -->
            <label>
              Email Address
            </label>
            <!-- Input -->
            <input v-model="input.email" type="email" class="form-control" placeholder="name@address.com">
          </div>
          <!-- Password -->
          <div class="form-group">
            <!-- Label -->
            <div class="row">
              <div class="col">
            <label>
              Password
            </label>
              </div>
               <a to="" @click="showPassword()" class="form-text small text-right">
                  {{text}}
                </a>
            </div>
                <!-- Help text -->
                 <!-- Input group -->
            <div class="input-group input-group-merge">
              <!-- Input -->
              <input v-model="input.password" class="form-control" placeholder="Enter your password">
              </div>
          </div>
          <!-- Submit -->
          <button v-if="!isLoading" type="button" class="btn btn-lg btn-block btn-primary mb-3" @click="signup()">
            Sign up
          </button>
          <button v-if="isLoading" type="button" class="btn btn-lg btn-block btn-primary mb-3" @click="signup()">
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
import '../assets/css/theme-dark.min.css'
export default {
  data () {
    return {
      input: {
        phone: '',
        email: '',
        password: ''
      },
      isLoading: false,
      type: 'password',
      text: 'Hide Password'
    }
  },
  methods: {
    async signup () {
      this.isLoading = true
      const res = await apiService.request(false, urls.SIGNUPADMIN, this.input, 'POST')
      const result = await res.json()
      if (result.statuscode === 200) {
        console.log(result)
        this.isLoading = false
        this.$router.replace('/signinadmin')
      } else if (result.statuscode === 400) {
        this.isLoading = false
        alert('All fields are required')
        console.log(result)
      }
    },
    showPassword () {
      if (this.type === 'password') {
        this.type = 'text'
        this.text = 'Hide Password'
      } else {
        this.type == 'password'
        this.text = 'Show Password'
      }
    }
  }
}
</script>

<style scoped>
</style>
