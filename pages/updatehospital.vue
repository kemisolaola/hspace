<template>
  <div>
    <div>
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
                  <div class="col-12 col-md-6">
                    <!-- Last name -->
                    <div class="form-group">
                      <!-- Label -->
                      <label>
                        State
                      </label>
                      <!-- Input -->
                      <input v-model="input.address.state" type="text" class="form-control">
                    </div>
                  </div><div class="col-12 col-md-6">
                    <!-- Last name -->
                    <div class="form-group">
                      <!-- Label -->
                      <label>
                        City
                      </label>
                      <!-- Input -->
                      <input v-model="input.address.city" type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-12">
                    <!-- Last name -->
                    <div class="form-group">
                      <!-- Label -->
                      <label>
                        Street
                      </label>
                      <!-- Input -->
                      <input v-model="input.address.street" type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <!-- Phone -->
                    <div class="form-group">
                      <!-- Label -->
                      <label>
                        Phone Number
                      </label>
                      <!-- Input -->
                      <input v-model="input.phone" type="text" class="form-control" data-mask="(000) 000-0000">
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <!-- Phone -->
                    <div class="form-group">
                      <!-- Label -->
                      <label>
                        Website
                      </label>
                      <!-- Input -->
                      <input v-model="input.website" type="text" class="form-control" data-mask="(000) 000-0000">
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <!-- Phone -->
                    <div class="form-group">
                      <!-- Label -->
                      <label>
                        Category
                      </label>
                      <!-- Input -->
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
                    <!-- Phone -->
                    <div class="form-group">
                      <!-- Label -->
                      <label>
                        No of Bed Spaces
                      </label>
                      <!-- Input -->
                      <input v-model="input.bedSpaces" type="text" class="form-control" data-mask="(000) 000-0000">
                    </div>
                  </div>
                  <div v-if="input.category == 'HOSPITAL'" class="col-12 col-md-6">
                    <!-- Phone -->
                    <div class="form-group">
                      <!-- Label -->
                      <label>
                        Available Bed Spaces
                      </label>
                      <!-- Input -->
                      <input v-model="input.availableBedSpaces" type="text" class="form-control" data-mask="(000) 000-0000">
                    </div>
                  </div>
                  <div v-for="(i, index) in input.galleryImages.length" :key="index" class="col-12 col-md-6">
                    <!-- Phone -->
                    <div class="form-group">
                      <!-- Label -->
                      <label>
                        Gallery Image
                      </label>
                      <!-- Input -->
                      <input :value="input.galleryImages[i-1]" type="text" class="form-control" data-mask="(000) 000-0000">
                    </div>
                  </div>
                  <div v-for="(i, index) in imagesOption.length" :key="index" class="col-12 col-md-6">
                    <!-- Phone -->
                    <div class="form-group">
                      <!-- Label -->
                      <label>
                        Gallery Image
                      </label>
                      <!-- Input -->
                      <input
                        accept=".jpeg,.jpg,.png,image/jpeg,image/png"
                       @change="addImage"
                        placeholder="Enter Image url"
                        class="form-control"
                        data-toggle="flatpickr"
                        type="file"
                      >
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <!-- Phone -->
                    <div class="form-group">
                      <!-- Label -->
                      <label>
                        Parent Hospital
                      </label>
                      <!-- Input -->
                      <input v-model="input.parentHospital" type="text" class="form-control" data-mask="(000) 000-0000">
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <!-- Phone -->
                    <div class="form-group">
                      <!-- Label -->
                      <label>
                        Opening Hours
                      </label>
                      <!-- Input -->
                      <input v-model="input.openingHours" type="text" class="form-control" data-mask="(000) 000-0000">
                    </div>
                  </div>
                  <div v-for="(i, index) in input.services.length" :key="index" class="col-12 col-md-6">
                    <!-- Phone -->
                    <div class="form-group">
                      <!-- Label -->
                      <label>
                        Services
                      </label>
                      <!-- Input -->
                      <input
                        :value="input.services[i-1]"
                        type="text"
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div v-for="(i, index) in servicesOption.length" :key="index" class="col-12 col-md-6">
                    <!-- Phone -->
                    <div class="form-group">
                      <!-- Label -->
                      <label>
                        Services
                      </label>
                      <!-- Input -->
                      <input
                        v-model="servicesOption[i-1]"
                        type="text"
                        class="form-control"
                      >
                    </div>
                  </div>
                </div> <!-- / .row -->
                <!-- Button -->
                <button type="button" class="btn btn-lg btn-block btn-secondary" @click="addServices()">
                  Add Services
                </button>
                <button type="button" class="btn btn-lg btn-block btn-secondary" @click="addImages()">
                  Add Images
                </button>
                <button v-if="!isLoading" type="button" class="btn btn-lg btn-block btn-primary mb-3" @click="update()">
                  Update Hospital
                </button>
                <button v-if="isLoading" type="button" class="btn btn-lg btn-block btn-primary mb-3">
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                  Update Hospital
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
      hospital: this.$store.state.hospitalInitData._id,
      input: {
        address: {
          street: this.$store.state.hospitalInitData.address.street,
          state: this.$store.state.hospitalInitData.address.state,
          city: this.$store.state.hospitalInitData.address.city
        },
        services: this.$store.state.hospitalInitData.services,
        bedSpaces: this.$store.state.hospitalInitData.bedSpaces,
        category: this.$store.state.hospitalInitData.category,
        website: this.$store.state.hospitalInitData.website,
        openingHours: this.$store.state.hospitalInitData.openingHours,
        galleryImages: this.$store.state.hospitalInitData.galleryImages,
        parentHospital: this.$store.state.hospitalInitData.parentHospital,
        phone: this.$store.state.hospitalInitData.phone,
        availableBedSpaces: ''
      },
      isLoading: false,
      servicesOption: [],
      imagesOption: []
    }
  },
  mounted () {
    // this.servicesOption.push('')
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
      console.log(instance)
      console.log(instance.secure_url)
      const imageUrl = instance.secure_url
      console.log(imageUrl)
      // this.input.galleryImages.push(...imageUrl)
      this.input.galleryImages.push(imageUrl)
    },
    async update () {
      this.isLoading = true
      this.input.services.push(...this.servicesOption)
      this.input.galleryImages.push(...this.imagesOption)
      const res = await apiService.request(true, urls.UPDATEHOSPITAL + this.hospital, this.input, 'PUT')
      const result = await res.json()
      result.data.address = this.address
      if (result.statuscode === 200) {
        this.isLoading = false
        this.$router.replace('/homeadmin')
        console.log(result)
      } else if (result.statuscode === 400) {
        this.isLoading = false
        alert(result.message)
        console.log(result)
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
