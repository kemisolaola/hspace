<template>
  <div>
    <div>
      <!-- MODALS
    ================================================== -->
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
            <div class="col-12">
              <!-- Header -->
              <div class="header mt-md-5">
                <div class="header-body">
                  <div class="row align-items-center">
                    <div class="col">
                      <h6 class="header-pretitle">
                        Most Popular
                      </h6>
                      <!-- Title -->
                      <h1 class="header-title">
                        Hospital
                      </h1>
                    </div>
                    <div class="col text-right"><nuxt-link to="/addhospitalbranch">
                       <button class="btn btn-secondary">
                         Add Hospital
                       </button>
                       </nuxt-link>
                      </div>
                  </div> <!-- / .row -->
                  <div class="row align-items-center">
                    <div class="col" />
                  </div>
                </div>
              </div>
              <table class="table table-sm table-hover table-nowrap card-table">
                <thead>
                  <tr>
                    <th scope="col">
                      Hospital ID
                    </th>
                    <th scope="col">
                      Name
                    </th>
                    <th scope="col">
                      State
                    </th>
                    <th scope="col">
                      City
                    </th>
                    <th scope="col">
                      Street
                    </th>
                    <th scope="col">
                        Hospital Info
                      </th>
                      <th scope="col">
                        Update
                      </th>
                  </tr>
                </thead>
                <!-- <div class="spinner-border" style="width: 2rem; text-align: center; height: 2rem;" role="status">
                            <span v-if="isLoading" class="visually-hidden"></span>
                        </div> -->
                <tbody>
                  <tr v-for="(responseData,index) in mostPopularHospital" :key="index">
                    <th scope="row">
                      {{responseData.hospitalID }}
                    </th>
                    <td>{{ responseData.name }}</td>
                    <td>{{ responseData.address.state }}</td>
                    <td>{{ responseData.address.city }}</td>
                    <td>{{ responseData.address.street }}</td>
                    <th>
                        <button type="button" class="btn btn-lg btn-block btn-primary" @click="details(responseData)">
                          View
                        </button>
                      </th>
                      <th>
                        <button type="button" class="btn btn-lg btn-block btn-primary" @click="update(responseData)">
                          Edit
                        </button>
                      </th>
                  </tr>
                </tbody>
              </table>
              <br><br>
            </div>
            <div class="col-12">
              <!-- Header -->
              <div class="header mt-md-5">
                <div class="header-body">
                  <div class="row align-items-center">
                    <div class="col">
                      <h6 class="header-pretitle">
                        Recently Added
                      </h6>
                      <!-- Title -->
                      <h1 class="header-title">
                        Hospital
                      </h1>
                    </div>
                  </div> <!-- / .row -->
                  <div class="row align-items-center">
                    <div class="col" />
                  </div>
                </div>
              </div>

              <table class="table table-sm table-hover table-nowrap card-table">
                <thead>
                  <tr>
                    <th scope="col">
                      Hospital ID
                    </th>
                    <th scope="col">
                      Name
                    </th>
                    <th scope="col">
                      State
                    </th>
                    <th scope="col">
                      City
                    </th>
                    <th scope="col">
                      Street
                    </th>
                    <th scope="col">
                        Hospital Info
                      </th>
                      <th scope="col">
                        Update
                      </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(responseData,index) in recentlyAddedHospital" :key="index">
                    <th scope="row">
                      {{ responseData.hospitalID }}
                    </th>
                    <td>{{ responseData.name }}</td>
                    <td>{{ responseData.address.state }}</td>
                    <td>{{ responseData.address.city }}</td>
                    <td>{{ responseData.address.street }}</td>
                    <th>
                        <button type="button" class="btn btn-lg btn-block btn-primary" @click="details(responseData)">
                          View
                        </button>
                      </th>
                      <th>
                        <button type="button" class="btn btn-lg btn-block btn-primary" @click="update(responseData)">
                          Edit
                        </button>
                      </th>
                  </tr>
                </tbody>
              </table>
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
      responseDatas: [],
      mostPopularHospital: [],
      recentlyAddedHospital: [],
      isLoading: false,
      searchQuery: null
    }
  },
  async mounted () {
    this.isLoading = false
    const res = await apiService.request(true, urls.HOME)
    const result = await res.json()
    this.responseDatas = result.data
    this.mostPopularHospital = result.data.mostPopular
    this.recentlyAddedHospital = result.data.recentlyAdded
    this.isLoading = false
    if (result.statuscode === 200) {
      this.isLoading = false
      console.log(result)
    } else if (result.statuscode === 400) {
      alert(result.message)
      console.log(result)
      this.isLoading = true
    }
  },
  methods: {
    details (getData) {
      console.log(getData.hospitalID)
      const storeObj = {}
      storeObj._id = getData._id
      this.$store.commit('saveHospitalData', storeObj)
      if (this.$store.state.hospitalInitData.hospitalID !== '') {
        this.$router.replace('/details')
      }
    },
    update (getData) {
      console.log(getData.hospitalID)
      const storeObj = {}
      storeObj._id = getData._id
      storeObj.address = getData.address
      storeObj.services = getData.services
      storeObj.bedSpaces = getData.bedSpaces
      storeObj.website = getData.website
      storeObj.category = getData.category
      storeObj.galleryImages = getData.galleryImages
      storeObj.parentHospital = getData.parentHospital
      storeObj.openingHours = getData.openingHours
      storeObj.phone = getData.phone
      this.$store.commit('saveHospitalData', storeObj)
      if (this.$store.state.hospitalInitData.hospitalID !== '') {
        this.$router.replace('/updatehospital')
      }
    }
  }
}
</script>

<style>
.table tbody tr td {
  white-space: pre-wrap
}
</style>
