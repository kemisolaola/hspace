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
                      <!-- Title -->
                      <div v-if="updatedHospital" class="alert alert-light mt-2" role="alert">
                            Hospital Updated Successfully....
                        </div>
                        <div v-if="addedHospital" class="alert alert-light mt-2" role="alert">
                            Hospital Added Successfully....
                        </div>
                      <h1 class="header-title">
                        Hospital
                      </h1>
                    </div>
                    <div class="col text-right">
                      <nuxt-link to="/addhospitalbranch">
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
                <tbody v-if="!loader">
                  <tr v-for="(responseData,index) in hospitalResponseDatas" :key="index">
                    <th scope="row">
                      {{ responseData.hospitalID }}
                    </th>
                    <td>{{ responseData.name | Upper }}</td>
                    <td v-if="responseData.address">
                      {{ responseData.address.state }}
                    </td>
                    <td v-if="responseData.address">
                      {{ responseData.address.city }}
                    </td>
                    <th>
                      <button type="button" class="btn btn-lg btn-block btn-primary" @click="details(responseData)">
                        View
                      </button>
                    </th>
                    <th>
                      <button type="button" class="btn btn-lg btn-block btn-primary" @click="edit(responseData, 'hospital')">
                        Edit
                      </button>
                    </th>
                    <!-- <th>
                        <button type="button" class="btn btn-lg btn-block btn-primary" @click="del(responseData._id)">
                          del
                        </button>
                      </th> -->
                  </tr>
                </tbody>
                <tbody v-if="loader" class=" loader-spin">
                  <div class="text-center">
                    <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                      <span class="visually-hidden" />
                    </div>
                  </div>
                </tbody>
                <tbody v-if="!loader && hospitalResponseDatas.length == 0" class="loader-spin">
                  <p>No Registered Hospital</p>
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
      responseDatas: [],
      isLoading: false,
      loader: true
    }
  },
  computed: {
    hospitalResponseDatas () {
      return this.responseDatas.filter(responseData => (responseData.category === 'HOSPITAL'))
    },
    ...mapState([
      'updatedHospital',
      'addedHospital'
    ])
  },
  filters: {
    Upper (value) {
      return value.toUpperCase()
    }
  },
  async mounted () {
    this.loader = true
    this.isLoading = false
    const res = await apiService.request(true, urls.HOSPITAL, {}, 'GET', 'ADMIN_TOKEN')
    const result = await res.json()
    this.responseDatas = result.data
    this.isLoading = false
    if (result.statuscode === 200) {
      this.isLoading = false
      this.loader = false
    } else if (result.statuscode === 400) {
      alert(result.message)
      this.isLoading = true
    }
  },
  methods: {
    // async del (id) {
    //   this.isLoading = false
    //   const res = await apiService.request(true, urls.GETHOSPITAL + id, {}, 'DELETE')
    //   const result = await res.json()
    //   this.responseDatas = result.data
    //   this.isLoading = false
    //   if (result.statuscode === 200) {
    //     this.isLoading = false
    //     console.log(result)
    //   } else if (result.statuscode === 400) {
    //     alert(result.message)
    //     console.log(result)
    //     this.isLoading = true
    //   }
    // },
    details (getData) {
      const storeObj = {}
      storeObj._id = getData._id
      this.$store.commit('saveHospitalData', storeObj)
      if (this.$store.state.hospitalInitData.hospitalID !== '') {
        this.$router.push('/details')
      }
    },
    edit (getData, facility) {
      const storeObj = {}
      storeObj._id = getData._id
      storeObj.facility = facility
      this.$store.commit('saveHospitalData', storeObj)
      if (this.$store.state.hospitalInitData.hospitalID !== '') {
        this.$router.push('/updatehospital')
      }
    }
    // update (getData) {
    //   console.log(getData.hospitalID)
    //   const storeObj = {}
    //   storeObj._id = getData._id
    //   storeObj.address = getData.address
    //   storeObj.services = getData.services
    //   storeObj.bedSpaces = getData.bedSpaces
    //   storeObj.website = getData.website
    //   storeObj.category = getData.category
    //   storeObj.galleryImages = getData.galleryImages
    //   storeObj.parentHospital = getData.parentHospital
    //   storeObj.openingHours = getData.openingHours
    //   storeObj.phone = getData.phone
    //   this.$store.commit('saveHospitalData', storeObj)
    //   if (this.$store.state.hospitalInitData.hospitalID !== '') {
    //     this.$router.push('/updatehospital')
    //   }
    // }
  }
}
</script>

<style>
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
