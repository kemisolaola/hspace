<template>
  <!-- CONTENT
    ================================================== -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-5 col-xl-4 my-7">
        <h1 class="display-4 text-center mb-3">
          Validate Token
        </h1>
        <!-- Form -->
        <form>
          <!-- Email address -->
          <div class="form-group">
            <!-- Label -->
            <label>Token</label>
            <!-- Input -->
            <input v-model="input.token" type="email" class="form-control" placeholder="token">
          </div>
          <!-- Password -->
          <!-- Submit -->
          <button type="button" class="btn btn-lg btn-block btn-primary mb-3" @click="validate ()">
            Validate Token
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
        token: ''
      }
    }
  },
  methods: {
    async validate () {
      const res = await apiService.request(true, urls.VALIDATETOKENADMIN, this.input, 'POST')
      const result = await res.json()
      if (result.statuscode === 200) {
        console.log(result)
        this.$router.replace('/resetpasswordadmin')
      } else if (result.statuscode === 400) {
        alert(result.message)
      }
      console.log(result)
    }
  }
}
</script>

<style>

</style>
