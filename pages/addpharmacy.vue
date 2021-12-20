<template>
  <div class="main-container">
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
            <div class="col-12 col-lg-10 col-xl-8">
              <!-- Header -->
              <div class="header mt-md-5">
                <div class="header-body">
                  <div class="row align-items-center">
                    <div class="col">
                      <div v-if="errorMessage" class="alert alert-light mt-2" role="alert">
                        Ensure all field are filled.
                      </div>
                      <!-- Pretitle -->
                      <h6 class="header-pretitle">
                        Add
                      </h6>

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
                        Pharmacy Name
                      </label>

                      <!-- Input -->
                      <input v-model="input.name" required type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <!-- Last name -->
                    <div class="form-group">
                      <!-- Label -->
                      <label>
                        State
                      </label>
                      <!-- Input -->
                      <input v-model="input.address.state" required type="text" class="form-control">
                    </div>
                  </div><div class="col-12 col-md-6">
                    <!-- Last name -->
                    <div class="form-group">
                      <!-- Label -->
                      <label>
                        City
                      </label>
                      <!-- Input -->
                      <input v-model="input.address.city" required type="text" class="form-control">
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
                      <input v-model="input.address.street" required type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <!-- Email address -->
                    <div class="form-group">
                      <!-- Label -->
                      <label class="mb-1">
                        Email address
                      </label>
                      <!-- Input -->
                      <input v-model="input.email" required type="email" class="form-control">
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
                      <input v-model="input.phone" required type="text" class="form-control" data-mask="(000) 000-0000">
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <!-- Birthday -->
                    <div class="form-group">
                      <!-- Label -->
                      <label>
                        Website
                      </label>
                      <!-- Input -->
                      <input v-model="input.website" required type="text" class="form-control" data-toggle="flatpickr">
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <!-- Birthday -->
                    <div class="form-group">
                      <!-- Label -->
                      <label>
                        Category
                      </label>
                      <!-- Input -->
                      <input
                        v-model="input.category"
                        class="form-select form-control"
                        aria-label="Default select example"
                        @input="input.category=$event.target.value.toUpperCase()"
                      >
                      <!-- <input
                        v-model="input.category"
                        required
                        type="text"
                        class="form-control"
                        data-toggle="flatpickr"
                        @input="input.category=$event.target.value.toUpperCase()"
                      > -->
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <!-- Birthday -->
                    <div class="form-group">
                      <!-- Label -->
                      <label>
                        Opening Hours
                      </label>
                      <!-- Input -->
                      <input v-model="input.openingHours" required type="text" class="form-control" data-toggle="flatpickr">
                    </div>
                  </div>
                  <div v-for="(i, index) in imagesOption.length" :key="index" class="col-12 col-md-6">
                    <!-- Birthday -->
                    <div class="form-group">
                      <!-- Label -->
                      <label>
                        Gallery Images
                      </label>
                      <!-- Input -->
                      <input
                        accept=".jpeg,.jpg,.png,image/jpeg,image/png"
                        placeholder="Enter Image url"
                        class="form-control"
                        data-toggle="flatpickr"
                        type="file"
                        @change="addImage"
                      >
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <!-- Birthday -->
                    <div class="form-group" />
                  </div>
                </div> <!-- / .row -->
                <!-- Button -->
                 <small v-if="errorMessage" class="text-center" style="color:red">
              {{ errorText }}
            </small>
                <button type="button" class="btn btn-lg btn-block btn-secondary" @click="addImages()">
                  Add Images
                </button>
                <button v-if="!isLoading" type="submit" class="btn btn-lg btn-block btn-primary mb-3" @click="addHospital()">
                  Add Pharmacy
                </button>
                <button v-if="isLoading" type="button" class="btn btn-lg btn-block btn-primary mb-3">
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                  Add Pharmacy
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
import { mapActions, mapState } from 'vuex'
import Sidebar from '../components/Sidebar.vue'
import apiService from '../api/apiservice'
import urls from '../api/apiUrl'
export default {
  components: {
    Sidebar
  },
  data () {
    return {
      errorMessage: false,
      errorText: 'Ensure all fields are filled.',
      image: '',
      isLoading: false,
      input: {
        name: '',
        phone: [],
        address: {
          street: '',
          city: '',
          state: ''
        },
        website: '',
        email: '',
        galleryImages: [],
        category: 'PHARMACY',
        openingHours: ''
      },
      imagesOption: []
    }
  },
  computed: {
    ...mapState([
      'addedPharm'
    ])
  },
  mounted () {
    this.imagesOption.push('')
  },
  methods: {
    ...mapActions([
      'showAddPharm'
    ]),
    toggleAdd (boolean) {
      this.showAddPharm(boolean)
    },
    settimeout (setcondition) {
      setTimeout(() => {
        this.toggleAdd(setcondition)
      }, 6000)
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
      const imageUrl = instance.secure_url
      // this.input.galleryImages.push(...imageUrl)
      this.input.galleryImages.push(imageUrl)
    },
    async addHospital () {
      this.isLoading = true
      this.input.galleryImages.push(...this.imagesOption)
      const res = await apiService.request(true, urls.ADDHOSPITAL, this.input, 'POST', 'ADMIN_TOKEN')
      const result = await res.json()
      if (result.statuscode === 200) {
        this.toggleAdd(true)
        this.settimeout(false)
        this.$router.push('/pharmacy')
      } else if (result.statuscode === 400) {
        this.isLoading = false
        this.errorMessage = true
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
