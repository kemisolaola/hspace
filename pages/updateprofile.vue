<template>
  <div class="main-container">
    <div>
      <!-- NAVIGATION
    ================================================== -->

      <nav id="sidebar" class="navbar navbar-vertical fixed-left navbar-expand-md ">
        <Sidebar/>
      </nav>
      <!-- MAIN CONTENT
    ================================================== -->
      <div class="main-content">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12 col-lg-10 col-xl-8">
              <!-- Header -->
              <div class="header mt-md-5">
                <div class="header-body">
                  <div class="row align-items-center">
                    <div class="col">
                      <!-- Pretitle -->
                      <h6 class="header-pretitle">
                        UPDATE
                      </h6>

                      <!-- Title -->
                      <h1 class="header-title">
                        PROFILE
                      </h1>
                    </div>
                  </div> <!-- / .row -->
                  <div class="row align-items-center">
                    <div class="col" />
                  </div>
                </div>
              </div>

              <!-- Form -->
              <form>
                <div class="row justify-content-between align-items-center">
                  <div class="col">
                    <div class="row align-items-center">
                      <div class="col-auto" />
                    </div> <!-- / .row -->
                  </div>
                </div> <!-- / .row -->
                <div class="row">
                  <div class="col-12">
                    <!-- Hospital name name -->
                    <div class="form-group">
                      <!-- Label -->
                      <label>
                      First Name
                      </label>

                      <!-- Input -->
                      <input v-model="input.firstName" type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-12">
                    <!-- Last name -->
                    <div class="form-group">
                      <!-- Label -->
                      <label>
                        Last Name
                      </label>
                      <!-- Input -->
                      <input v-model="input.email" type="email" class="form-control">
                    </div>
                  </div><div class="col-12 col-md-6" />
                </div> <!-- / .row -->
                <!-- Button -->
                <button v-if="!isLoading" type="button" class="btn btn-lg btn-block btn-primary mb-3" @click="update()">
                  Update Profile
                </button>
                <button v-if="isLoading" type="button" class="btn btn-lg btn-block btn-primary mb-3">
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                  Update Profile
                </button>
              </form>
              <br><br>
            </div>
          </div> <!-- / .row -->
        </div>
      </div> <!-- / .main-content -->
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import apiService from '../api/apiservice'
import urls from '../api/apiUrl'
import '../assets/css/theme-dark.min.css'
export default {
  components: {
    Sidebar
  },
  data () {
    return {
      input: {
        firstName: '',
        lastName: ''
      },
      isLoading: false
    }
  },
  methods: {
    async update () {
      this.isLoading = true
      const res = await apiService.request(true, urls.UPDATEPROFILE, this.input, 'PUT')
      const result = await res.json()
      if (result.statuscode === 200) {
        apiService.setToken()
        console.log(result)
        this.isLoading = true
        this.isLoading = false
      } else if (result.statuscode === 400) {
        this.isLoading = false
        alert(result.message)
        console.log(result)
      }
    }
  }
}
</script>

<style scoped>
.main-container {
  background: white
}
a {
  color: #013c78
}
</style>
