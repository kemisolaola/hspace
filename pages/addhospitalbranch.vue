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
                      <!-- Pretitle -->
                      <h6 class="header-pretitle">
                        Add
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
                        placeholder="Hospital,Pharmacy or Laboratory "
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
                        Bed Spaces
                      </label>
                      <!-- Input -->
                      <input
                        v-model="input.bedSpaces"
                        class="form-select form-control"
                        aria-label="Default select example"
                      >
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <!-- Birthday -->
                    <div class="form-group">
                      <!-- Label -->
                      <label>
                        Available Bed Spaces
                      </label>
                      <!-- Input -->
                      <input
                        v-model="input.availableBedSpaces"
                        class="form-select form-control"
                        aria-label="Default select example"
                      >
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
                      <input
                        v-model="input.openingHours"
                        placeholder="12AM - 3PM"
                        required
                        type="text"
                        class="form-control"
                        data-toggle="flatpickr"
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
                  <div v-for="(i, index) in servicesOption" :key="index" class="col-12 col-md-6">
                    <!-- Birthday -->
                    <div class="form-group">
                      <!-- Label -->
                      <label>
                        Services
                      </label>
                      <!-- Input -->
                      <input
                        v-model="servicesOption[index]"
                        class="form-control"
                        data-toggle="flatpickr"
                      >
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <!-- Birthday -->
                    <div class="form-group" />
                  </div>
                </div> <!-- / .row -->
                <!-- Button -->
                <button type="button" class="btn btn-lg btn-block btn-secondary" @click="addServices()">
                  Add More Services
                </button>
                <button type="button" class="btn btn-lg btn-block btn-secondary" @click="addImages()">
                  Add More Images
                </button>
                <button v-if="!isLoading" type="submit" class="btn btn-lg btn-block btn-primary mb-3" @click="addHospital()">
                  Add Hospital
                </button>
                <button v-if="isLoading" type="button" class="btn btn-lg btn-block btn-primary mb-3">
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                  Add Hospital
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
import Sidebar from '../components/Sidebar.vue'
import apiService from '../api/apiservice'
import urls from '../api/apiUrl'
import '../assets/css/theme-dark.min.css'
export default {
  components: {
    Sidebar
  },
  data () {
    return {
      image: '',
      responseDatas: [],
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
        category: 'HOSPITAL',
        openingHours: '',
        services: []
      },
      servicesOption: [],
      imagesOption: [],
      bedSpaces: '',
      availableBedSpaces: '',
      parentHospital: ''
    }
  },
  async mounted () {
    this.servicesOption.push('')
    this.imagesOption.push('')
    const res = await apiService.request(true, urls.HOSPITAL, {}, 'GET', 'ADMIN_TOKEN')
    const result = await res.json()
    if (result.statuscode === 200) {
      this.responseDatas = result.data
      apiService.getToken(this.tokenKey)
    } else if (result.statuscode === 400) {
      alert(result.message)
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
      const imageUrl = instance.secure_url
      // this.input.galleryImages.push(...imageUrl)
      this.input.galleryImages.push(imageUrl)
    },
    async addHospital () {
      this.isLoading = true
      this.input.services = this.servicesOption
      const res = await apiService.request(true, urls.ADDHOSPITALBRANCH, this.input, 'POST')
      const result = await res.json()
      if (result.statuscode === 200) {
        this.$router.replace('/hospital')
      } else if (result.statuscode === 400) {
        this.isLoading = false
        alert(result.message)
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
