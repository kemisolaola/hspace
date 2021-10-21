<template>
  <div class="main-container">
    <div>
      <!-- NAVIGATION
    ================================================== -->

      <nav id="sidebar" class="navbar navbar-vertical fixed-left navbar-expand-md ">
        <Sidebar />
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
                        Add
                      </h6>

                      <!-- Title -->
                      <h1 class="header-title">
                        Admin
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
                        Hospital Name
                      </label>
                      <!-- Input -->
                    </div>
                  </div>
                  <div class="col-12 mb-4">
                    <!-- Last name -->
                    <!-- Label -->
                    <select v-model="input.hospitalID" class="form-control form-select" style="width: 100%; height: 35px" aria-label="Default select example">
                      <option selected>
                        Open this select menu
                      </option>
                      <option v-for="(name, index) in responseDatas" :key="index" :value="name._id">
                        {{ name.name }}
                      </option>
                    </select>
                  </div>
                  <div class="col-12">
                    <!-- Last name -->
                    <div class="form-group">
                      <!-- Label -->
                      <label>
                        Email
                      </label>
                      <!-- Input -->
                      <input v-model="input.adminEmail" type="email" class="form-control">
                    </div>
                  </div><div class="col-12 col-md-6" />
                </div> <!-- / .row -->
                <!-- Button -->
                <button v-if="!isLoading" type="button" class="btn btn-lg btn-block btn-primary mb-3" @click="addAdmin()">
                  Add Admin
                </button>
                <button v-if="isLoading" type="button" class="btn btn-lg btn-block btn-primary mb-3" @click="addAdmin()">
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                  Add Admin
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
        adminEmail: '',
        hospitalID: ''
      },
      isLoading: false,
      responseDatas: []
    }
  },
  async mounted () {
    const res = await apiService.request(true, urls.HOSPITAL, {}, 'GET', 'ADMIN_TOKEN')
    const result = await res.json()
    if (result.statuscode === 200) {
      this.responseDatas = result.data
      apiService.getToken(this.tokenKey)
    } else if (result.statuscode === 400) {
      alert(result.message)
    }
  },
  methods: {
    async addAdmin () {
      this.isLoading = true
      const res = await apiService.request(true, urls.ADDADMIN, this.input, 'POST', 'ADMIN_TOKEN')
      const result = await res.json()
      if (result.statuscode === 200) {
        this.isLoading = true
        this.isLoading = false
      } else if (result.statuscode === 400) {
        this.isLoading = false
        alert(result.message)
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
