<template>
  <div>
    <div>
      <!-- MODALS
    ================================================== -->

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
            <div class="col-12">
              <!-- Header -->
              <div class="header mt-md-5">
                <div class="header-body">
                  <div class="row align-items-center">
                    <div class="col">
                       <div v-if="updatedHospital" class="alert alert-light mt-2" role="alert">
                            Pharmacy Updated Successfully....
                        </div>
                        <div v-if="addedPharm" class="alert alert-light mt-2" role="alert">
                            Pharmacy Added Successfully....
                        </div>
                      <h1 class="header-title">
                        Pharmacy
                      </h1>
                    </div>
                    <div class="col text-right">
                      <nuxt-link to="/addpharmacy">
                        <button class="btn btn-secondary">
                          Add Pharmacy
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
                      Pharmacy ID
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
                      Pharmacy Info
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
                <tbody v-if="!loader">
                  <tr v-for="(responseData,index) in pharmResponseDatas" :key="index">
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
                      <button type="button" class="btn btn-lg btn-block btn-primary" @click="update(responseData, 'pharmacy')">
                        Edit
                      </button>
                    </th>
                    <!-- <td>
                        <button type="button" class="btn btn-primary btn-sm">
                          View
                        </button>
                      </td> -->
                  </tr>
                </tbody>
                <tbody v-if="loader" class=" loader-spin">
                  <div class="text-center">
                    <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                      <span class="visually-hidden" />
                    </div>
                  </div>
                </tbody>
                <tbody class="loader-spin" v-if="!loader && pharmResponseDatas.length == 0">
                  <p>No Registered Pharmacy</p>
                </tbody>
              </table>
            </div>
          </div> <!-- / .row -->
        </div>
      </div> <!-- / .main-content -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sidebar from '../components/Sidebar'
import apiService from '../api/apiservice'
import urls from '../api/apiUrl'
export default {
  components: {
    Sidebar
  },
  data () {
    return {
      isLoading: true,
      responseDatas: [],
      loader: true
    }
  },
  computed: {
    pharmResponseDatas () {
      return this.responseDatas.filter(responseData => (responseData.category === 'PHARMACY'))
    },
    ...mapState([
      'updatedHospital',
      'addedPharm'
    ])
  },
  async mounted () {
    this.loader = true
    const res = await apiService.request(true, urls.HOSPITAL, {}, 'GET', 'ADMIN_TOKEN')
    const result = await res.json()
    if (result.statuscode === 200) {
      this.responseDatas = result.data
      this.loader = false
      apiService.getToken(this.tokenKey)
    } else if (result.statuscode === 400) {
      alert(result.message)
    }
  },
  methods: {
    updateServices (e) {
      this.$store.commit('updateServices', e.target.value)
    },
    details (getData) {
      const storeObj = {}
      storeObj._id = getData._id
      this.$store.commit('saveHospitalData', storeObj)
      if (this.$store.state.hospitalInitData.hospitalID !== '') {
        this.$router.push('/details')
      }
    },
    update (getData, facility) {
      const storeObj = {}
      storeObj._id = getData._id
      storeObj.facility = facility
      this.$store.commit('saveHospitalData', storeObj)
      if (this.$store.state.hospitalInitData.hospitalID !== '') {
        this.$router.push('/updatehospital')
      }
    }
  }
}
</script>

<style scoped>
.table tbody tr td {
  white-space: pre-wrap
}
.main-container {
  background: white
}
.loader-spin {
  position: relative;
  left: 40%;
  top: 70px;
}
</style>
