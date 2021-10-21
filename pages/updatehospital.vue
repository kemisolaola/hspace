<template>
  <div>
    <div>
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
                        Update
                      </h6>

                      <!-- Title -->
                      <h1 class="header-title">
                        Account
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
                      <input v-model="input.name" required type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <label>
                        State
                      </label>
                      <input v-model="state" type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <label>
                        City
                      </label>
                      <input v-model="city" type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-12  col-md-6">
                    <div class="form-group">
                      <label>
                        Street
                      </label>
                      <input v-model="street" type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <label>
                        Phone Number
                      </label>
                      <input v-model="input.phone" type="text" class="form-control" data-mask="(000) 000-0000">
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <label>
                        Website
                      </label>
                      <input v-model="input.website" type="text" class="form-control" data-mask="(000) 000-0000">
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <label>
                        Category
                      </label>
                      <input
                        v-model="input.category"
                        type="text"
                        class="form-control"
                        data-mask="(000) 000-0000"
                        @input="input.category=$event.target.value.toUpperCase()"
                      >
                    </div>
                  </div>
                  <div v-if="input.category == 'HOSPITAL'" class="col-12 col-md-6">
                    <div class="form-group">
                      <label>
                        No of Bed Spaces
                      </label>
                      <input v-model="input.bedSpaces" type="number" class="form-control">
                    </div>
                  </div>
                  <div v-if="input.category == 'HOSPITAL'" class="col-12 col-md-6">
                    <div class="form-group">
                      <label>
                        Available Bed Spaces
                      </label>
                      <input v-model="input.availableBedSpaces" type="number" class="form-control" data-mask="(000) 000-0000">
                    </div>
                  </div>
                  <!-- <div v-if="input.category == 'HOSPITAL'" class="col-12 col-md-6">
                    <div class="form-group">
                      <label>
                        Available Bed Spaces
                      </label>
                      <input v-model="input.availableBedSpaces" type="text" class="form-control" data-mask="(000) 000-0000">
                    </div>
                  </div> -->
                  <div v-for="(galleryImage, index) in input.galleryImages" :key="galleryImage" class="col-12 col-md-6">
                    <div class="form-group">
                      <label>
                        Gallery Image
                      </label>
                      <input :value="input.galleryImages[index]" type="text" class="form-control">
                    </div>
                  </div>
                  <div v-for="(imagesOpt, index) in imagesOption" :key="index" class="col-12 col-md-6">
                    <div class="form-group">
                      <label>
                        Gallery Image
                      </label>
                      <input
                        accept=".jpeg,.jpg,.png,image/jpeg,image/png"
                        class="form-control"
                        data-toggle="flatpickr"
                        type="file"
                        @change="addImage"
                      >
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <label>
                        Parent Hospital
                      </label>
                      <select v-model="input.parentHospital" class="form-select form-control" style="width: 100%; height: 35px" aria-label="Default select example">
                        <option selected>
                          Open this select menu
                        </option>
                        <option v-for="(name, index) in responseDatas" :key="index" :value="name._id">
                          {{ name.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <label>
                        Opening Hours
                      </label>
                      <input v-model="input.openingHours" type="text" class="form-control" data-mask="">
                    </div>
                  </div>
                  <div v-for="(service, index) in input.services" :key="index" class="col-12 col-md-6">
                    <div v-if="input.services.length > 0" class="form-group">
                      <label>
                        Services
                      </label>
                      <input
                        v-model="input.services[index]"
                        type="text"
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div v-for="(servicesOpt, index) in servicesOption" :key="index" class="col-12 col-md-6">
                    <div class="form-group">
                      <label>
                        Services
                      </label>
                      <input
                        v-model="servicesOption[index]"
                        class="form-control"
                      >
                    </div>
                  </div>
                </div>
                <!-- / .row -->
                <!-- Button -->
                <button type="button" class="btn btn-lg btn-block btn-secondary" @click="addServices()">
                  Add Services
                </button>
                <button type="button" class="btn btn-lg btn-block btn-secondary" @click="addImages()">
                  Add Images
                </button>
                <button v-if="!isLoading" type="button" class="btn btn-lg btn-block btn-primary mb-3" @click="update()">
                  Update
                </button>
                <button v-if="isLoading" type="button" class="btn btn-lg btn-block btn-primary mb-3">
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                  Update
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
      tokenKey: '',
      responseDatas: [],
      hospital: this.$store.state.hospitalInitData._id,
      input: [],
      city: '',
      state: '',
      street: '',
      isLoading: false,
      servicesOption: [],
      imagesOption: [],
      imagesurl: '',
      address: {}
    }
  },
  // created () {
  //   this.servicesOption.push('')
  // },
  async mounted () {
    const response = await apiService.request(true, urls.HOSPITAL, {}, 'GET', 'ADMIN_TOKEN')
    const resultResponse = await response.json()
    if (resultResponse.statuscode === 200) {
      this.responseDatas = resultResponse.data
    }
    const res = await apiService.request(true, urls.GETHOSPITAL + this.hospital, {}, 'GET', 'ADMIN_TOKEN')
    const result = await res.json()
    if (result.statuscode === 200) {
      this.input = result.data
      this.city = this.input.address.city
      this.street = this.input.address.street
      this.state = this.input.address.state
      apiService.getToken(this.tokenKey)
    }
  },
  methods: {
    addServices () {
      this.servicesOption.push('')
    },
    addImages () {
      this.imagesOption.push('')
    },
    async addImage (e) {
      const file = e.target.files[0]
      /* Make sure file exists */
      if (!file) {
        return
      }
      /* create a reader */
      const readData = f => new Promise((resolve) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.readAsDataURL(f)
      })
      /* Read data */
      const data = await readData(file)
      /* upload the converted data */
      const instance = await this.$cloudinary.upload(data, {
        folder: 'upload-examples',
        uploadPreset: 'hspace'
      })
      this.imagesurl = instance.secure_url
      this.galleryImages.push(this.galleryImages)
    },
    async update () {
      this.isLoading = true
      // this.address.push(this.city, this.street, this.state)
      this.input.services = this.input.services.concat(this.servicesOption)
      this.input.address.state = this.state
      this.input.address.city = this.city
      this.input.address.street = this.city
      const res = await apiService.request(true, urls.UPDATEHOSPITAL + this.hospital, this.input, 'PUT', 'ADMIN_TOKEN')
      const result = await res.json()
      result.data.address = this.address
      if (result.statuscode === 200) {
        this.isLoading = false
        this.$router.replace('/hospital')
      } else if (result.statuscode === 400) {
        this.isLoading = false
        alert(result.message)
      }
    }
  }
}
</script>

<style>
a {
  color: #013c78
}
</style>
