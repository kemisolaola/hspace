<template>
     <div class="container-fluid">
          <!-- Toggler -->
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#sidebarCollapse"
            aria-controls="sidebarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span @click.stop="toggleNavbar()"><img src="menu.png"/>  </span>
          </button>

          <!-- Brand -->
          <a class="navbar-brand">
            <img
              src="Hspace.png"
              class="navbar-brand-img
          mx-auto"
              alt="..."
            >
          </a>
          <!-- Collapse -->
          <div  v-bind:class="{ 'show': show }" id="sidebarCollapse" class="collapse navbar-collapse">
            <!-- Navigation -->
            <ul style="color: #013c78" class="navbar-nav">
              <li style="color: #013c78" class="nav-item">
                <nuxt-link
                  to="homeadmin"
                  class="nav-link"
                >
                  <i class="fe fe-file" />All Hospitals
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to="addhospital"
                  class="nav-link"
                >
                  <i class="fe fe-file" />Add Hospitals
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to="/addadmin"
                  class="nav-link"
                  aria-controls="sidebarDashboards"
                >
                  <i class="fe fe-home" /> Add Admin
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to="/hspacehospitals"
                  class="nav-link"
                  aria-controls="sidebarDashboards"
                >
                  <i class="fe fe-home" /> Hspace Hospital
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to="/laboratory"
                  class="nav-link"
                  aria-controls="sidebarDashboards"
                >
                  <i class="fe fe-home" /> Laboratories
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to="/pharmacy"
                  class="nav-link"
                  aria-controls="sidebarPages"
                >
                  <i class="fe fe-file" />Pharmacy
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to="/signupadmin"
                  class="nav-link"
                  href="#sidebarPages"
                  aria-controls="sidebarPages"
                >
                  <i class="fe fe-file" /> Register Super Admin
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to="/updateprofile"
                  class="nav-link"
                  href="#sidebarPages"
                  aria-controls="sidebarPages"
                >
                  <i class="fe fe-file" /> Update Profile
                </nuxt-link>
              </li>
            </ul>
          </div> <!-- / .navbar-collapse -->
        </div>
</template>

<script>
import '../assets/css/theme-dark.min.css'
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    toggleNavbar () {
      this.show = !this.show
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
