<template>
  <div>
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
              <div class="header mt-md-5" />

              <!-- Content -->
              <div class="card card-body">
                <div class="row">
                  <div class="col text-left">
                    <div class="">
                      <div class="row">
                        <div class="col text-center">
                          <!-- Logo -->
                          <!-- Title -->
                          <h2 class="mb-2">
                            {{ responseDatas.name }}
                          </h2>

                          <!-- Text -->
                          <span v-for="(address, index) in responseDatas.address" :key="index" class=" mb-2">
                            {{ address }}
                          </span>
                          <h4 v-for="(phone, index) in responseDatas.phone" :key="index" class="">
                            {{ phone }}
                          </h4>
                          <!-- <span>{{responseDatas.address.city}}</span> -->
                        </div>
                      </div> <!-- / .row -->
                      <div class="container-fluid">
                        <div class="row justify-content-center">
                          <div class="col-12 col-lg-10 col-xl-8">
                            <div class="row mt-5">
                              <table class="table table-sm table-hover table-nowrap card-table">
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      IDENTITY
                                    </th>
                                    <th scope="col" class="text-left">
                                      DATA
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">
                                      CATEGORY
                                    </th>
                                    <td>{{ responseDatas.category }}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      ID
                                    </th>
                                    <td>{{ responseDatas.hospitalID }}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      OPENING HOUR
                                    </th>
                                    <td>{{ responseDatas.openingHours }}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      EMAIL
                                    </th>
                                    <td>{{ responseDatas.email }}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      WEBSITE
                                    </th>
                                    <td colspan="2">
                                      <a :href="responseDatas.website">{{ responseDatas.website }}</a>
                                    </td>
                                  </tr>
                                  <tr>
                                  <tr v-if="responseDatas.bedSpaces">
                                    <th>
                                      BEDSPACES
                                      </th>
                                    <td>{{ responseDatas.bedSpaces}}</td>
                                  </tr>
                                  <tr v-if="responseDatas.bedSpaces">
                                    <th>
                                      AVAILABLE BEDSPACES
                                      </th>
                                    <td>{{ responseDatas.availableBedSpaces}}</td>
                                  </tr>
                                   <tr v-for="(services, index) in responseDatas.services" :key="index" class="">
                                    <th scope="row">
                                      SERVICE {{ index + 1 }}
                                    </th>
                                    <td>{{ services | capitalize }}</td>
                                  </tr>
                                  <tr v-for="(image, index) in responseDatas.galleryImages" :key="index" class="">
                                    <th scope="row">
                                      IMAGE {{ index + 1 }}
                                    </th>
                                    <td><img style="width: 150px; height:150px;" :src="image"></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
  filters: {
    capitalize (value) {
      value = value.toString()
      return value.toUpperCase()
    }
  },
  data () {
    return {
      isLoading: true,
      hospital: this.$store.state.hospitalInitData._id,
      responseDatas: []
    }
  },
  async mounted () {
    console.log(this.hospital)
    const res = await apiService.request(true, urls.GETHOSPITAL + this.hospital)
    const result = await res.json()
    if (result.statuscode === 200) {
      this.responseDatas = result.data
      apiService.getToken(this.tokenKey)
      console.log(result)
    } else if (result.statuscode === 400) {
      console.log(result)
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
