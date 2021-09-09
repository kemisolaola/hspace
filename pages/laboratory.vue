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
                        Laboratory
                      </h1>
                    </div>
                    <div class="col text-right"><nuxt-link to="/addlaboratory">
                       <button class="btn btn-secondary">
                         Add Laboratory
                       </button>
                       </nuxt-link>
                      </div>
                  </div> <!-- / .row -->
                  <div class="row align-items-center">
                    <div class="col" />
                  </div>
                </div>
              </div>
              <br><br>
              <div class="table-responsive">
                <table class="table table-sm table-hover table-nowrap card-table">
                  <thead>
                    <tr>
                      <th scope="col">
                        Lab ID
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
                        Laboratory Info
                      </th>
                      <th scope="col">
                        Update
                      </th>
                      <!-- <th scope="col">
                        Details
                      </th> -->
                    </tr>
                  </thead>
                  <!-- <div class="spinner-border" style="width: 2rem; text-align: center; height: 2rem;" role="status">
                                                <span v-if="isLoading" class="visually-hidden"></span>
                                            </div> -->
                  <tbody>
                    <tr v-for="(responseData,index) in mostPopularLaboratory" :key="index">
                      <th scope="row">
                        {{ responseData.hospitalID }}
                      </th>
                      <td>{{ responseData.name }}</td>
                      <td>{{ responseData.address.state }}</td>
                      <td>{{ responseData.address.city }}</td>
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
                          Laboratory
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
                        Lab ID
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
                        Laboratory Info
                      </th>
                      <th scope="col">
                        Update
                      </th>
                      <!-- <th scope="col">
                        Details
                      </th> -->
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(responseData,index) in recentlyAddedLaboratory" :key="index">
                      <th scope="row">
                        {{ index + 1 }}
                      </th>
                      <td>{{ responseData.name }}</td>
                      <td>{{ responseData.address.state }}</td>
                      <td>{{ responseData.address.city }}</td>
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
      isLoading: true,
      responseDatas: [],
      mostPopularLaboratory: [],
      recentlyAddedLaboratory: []
    }
  },
  async mounted () {
    const res = await apiService.request(true, urls.LABORATORY, {}, 'GET')
    const result = await res.json()
    if (result.statuscode === 200) {
      this.mostPopularLaboratory = result.data.mostPopular
      this.recentlyAddedLaboratory = result.data.randomPicks
      apiService.getToken(this.tokenKey)
      console.log(result)
    } else if (result.statuscode === 400) {
      alert(result.message)
      console.log(result)
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

<style scoped>
.main-container {
  background: white
}
a {
  color: #013c78
}
</style>
