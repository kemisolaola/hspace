<template>
  <div class="main-container">
    <div>
      <!-- MODALS
    ================================================== -->

      <!-- Modal: Demo -->
      <div id="modalDemo" class="modal fade fixed-right" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-vertical" role="document">
          <form id="demoForm" class="modal-content">
            <div class="modal-body">
              <!-- Close -->
              <a class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </a>
            </div>
            <div class="modal-footer border-0">
              <!-- Button -->
              <button type="submit" class="btn btn-block btn-primary mt-auto">
                Preview
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- NAVIGATION
    ================================================== -->

      <nav id="sidebar" v-bind:class=" { 'navbarOpen': show }" class="navbar navbar-vertical fixed-left navbar-expand-md ">
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
                      <!-- Title -->
                      <h1 class="header-title">
                        All Hospital
                      </h1>
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
                        ID
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
                  <tbody>
                    <tr v-for="(responseData,index) in sortedArray" :key="index">
                      <th scope="row">
                        {{ responseData.hospitalID }}
                      </th>
                      <th>{{ responseData.name | capitalize }}</th>
                      <th>{{ responseData.address.state | capitalize }}</th>
                      <th>{{ responseData.address.city | capitalize }}</th>
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
            </div>
          </div> <!-- / .row -->
        </div>
      </div> <!-- / .main-content -->
    </div>
  </div>
</template>

<script>
import apiService from '../api/apiservice'
import urls from '../api/apiUrl'
import Sidebar from '../components/Sidebar'
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
      responseDatas: []
    }
  },
  computed: {
    sortedArray () {
      return this.responseDatas.slice().sort(function (a, b) {
        return (a.name > b.name) ? 1 : -1
      })
    }
  },
  async mounted () {
    const res = await apiService.request(false, urls.HOSPITAL, {}, 'GET')
    const result = await res.json()
    if (result.statuscode === 200) {
      this.responseDatas = result.data
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
    },
    async deleted (getData) {
      const res = await apiService.request(true, urls.GETHOSPITAL + getData, {}, 'DELETE')
      const result = await res.json()
      if (result.statuscode === 200) {
        console.log(result)
        window.location.reload()
        alert(result.message)
      } else if (result.statuscode === 400) {
        alert(result.message)
      }
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
