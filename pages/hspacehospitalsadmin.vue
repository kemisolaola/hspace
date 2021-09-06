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
                        Hspace
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
                      S/N
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
                  </tr>
                </thead>
                <!-- <div class="spinner-border" style="width: 2rem; text-align: center; height: 2rem;" role="status">
                            <span v-if="isLoading" class="visually-hidden"></span>
                        </div> -->
                <tbody>
                  <tr v-for="(responseData,index) in sortedArray" :key="index">
                    <th scope="row">
                      {{ index + 1 }}
                    </th>
                    <td>{{ responseData.name }}</td>
                    <td>{{ responseData.address.state }}</td>
                    <td>{{ responseData.address.city }}</td>
                    <td>{{ responseData.address.street }}</td>
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
                        Hspace
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
                      S/N
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
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(responseData,index) in sortedArray2" :key="index">
                    <th scope="row">
                      {{ index + 1 }}
                    </th>
                    <td>{{ responseData.name }}</td>
                    <td>{{ responseData.address.state }}</td>
                    <td>{{ responseData.address.city }}</td>
                    <td>{{ responseData.address.street }}</td>
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
  computed: {
    sortedArray () {
      if (this.searchQuery) {
        return this.mostPopularHospital.filter((item) => {
          return this.searchQuery.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
        })
      } else {
        return this.mostPopularHospital
      }
    },
    sortedArray2 () {
      return this.recentlyAddedHospital.slice().sort(function (a, b) {
        return (a.name > b.name) ? 1 : -1
      })
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
  }
}
</script>

<style>
.table tbody tr td {
  white-space: pre-wrap
}
</style>
