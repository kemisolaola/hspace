<template>
  <div>
    <div>
      <!-- MODALS
    ================================================== -->
      <!-- NAVIGATION
    ================================================== -->
      <nav id="sidebar" class="navbar navbar-vertical fixed-left navbar-expand-md ">
        <Hspacesidebar />
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
                        Pharmacy
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
                      Pharm ID
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
                      activate
                    </th>
                  </tr>
                </thead>
                <!-- <div class="spinner-border" style="width: 2rem; text-align: center; height: 2rem;" role="status">
                            <span v-if="isLoading" class="visually-hidden"></span>
                        </div> -->
                <tbody>
                  <tr v-for="(responseData,index) in pharmacyList" :key="index">
                    <th scope="row">
                      {{ responseData.hospitalID }}
                    </th>
                    <td>{{ responseData.name }}</td>
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
                      <button v-if="responseData.active == false && isLoading == false" type="button" class="btn btn-lg btn-block btn-primary" @click="activate(responseData._id)">
                        Activate
                      </button>
                      <button v-if="isLoading == true && responseData.active == false" type="button" class="btn btn-lg btn-block btn-primary">
                        Actiivate
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                      </button>
                      <button v-if="(responseData.active == true || activated == true)" type="button" class="btn btn-lg btn-block btn-secondary">
                        Activated
                      </button>
                    </th>
                    <!-- <th>
                        <button type="button" class="btn btn-lg btn-block btn-primary" @click="del(responseData._id)">
                          del
                        </button>
                      </th> -->
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
import Hspacesidebar from '~/components/Hspacesidebar'
import apiService from '~/api/apiservice'
import urls from '~/api/apiUrl'
import '~/assets/css/theme-dark.min.css'
export default {
  components: {
    Hspacesidebar
  },
  data () {
    return {
      responseDatas: [],
      mostPopularHospital: [],
      recentlyAddedHospital: [],
      isLoading: false,
      searchQuery: null,
      activated: false
    }
  },
  async mounted () {
    this.isLoading = false
    const res = await apiService.request(true, urls.GETALLHOSPITAL)
    const result = await res.json()
    this.responseDatas = result.data
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
    async activate (id) {
      this.isLoading = true
      const res = await apiService.request(true, urls.ACTIVATEHOSPITAL + id, {}, 'GET')
      const result = await res.json()
      this.responseDatas = result.data
      this.isLoading = false
      if (result.statuscode === 200) {
        this.isLoading = false
        this.activated = true
        this.$router.go()
        console.log(result)
      } else if (result.statuscode === 400) {
        alert(result.message)
        console.log(result)
        this.isLoading = true
      }
    },
    details (getData) {
      console.log(getData.hospitalID)
      const storeObj = {}
      storeObj._id = getData._id
      this.$store.commit('saveHospitalData', storeObj)
      if (this.$store.state.hospitalInitData.hospitalID !== '') {
        this.$router.replace('/hspace/details')
      }
    },
    edit (getData) {
      console.log(getData.hospitalID)
      const storeObj = {}
      storeObj._id = getData._id
      this.$store.commit('saveHospitalData', storeObj)
      if (this.$store.state.hospitalInitData.hospitalID !== '') {
        this.$router.replace('/updatehospital')
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
    //     this.$router.replace('/updatehospital')
    //   }
    // }
  },
  computed: {
    pharmacyList () {
      return this.responseDatas.filter(responseData => responseData.category === 'PHARMACY')
    }
  }
}
</script>

<style>
.table tbody tr td {
  white-space: pre-wrap
}
</style>
