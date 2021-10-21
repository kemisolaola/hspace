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
      <span @click.stop="toggleNavbar()"><img src="/menu.png">  </span>
    </button>

    <!-- Brand -->
    <a class="navbar-brand">
      <img
        src="/Hspace.png"
        class="navbar-brand-img
          mx-auto"
        alt="..."
      >
    </a>
    <!-- Collapse -->
    <div id="sidebarCollapse" :class="{ 'show': show }" class="collapse navbar-collapse">
      <!-- Navigation -->
      <ul style="color: #013c78" class="navbar-nav">
        <li class="nav-item">
          <nuxt-link
            to="/hspace/hospitals"
            class="nav-link"
            aria-controls="sidebarDashboards"
          >
            <i class="fe fe-home" />Hospitals
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link
            to="/hspace/laboratory"
            class="nav-link"
            aria-controls="sidebarDashboards"
          >
            <i class="fe fe-home" /> Laboratories
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link
            to="/hspace/pharmacy"
            class="nav-link"
            aria-controls="sidebarPages"
          >
            <i class="fe fe-file" />Pharmacy
          </nuxt-link>
        </li>
        <li class="nav-item" @click="logout()">
          <a
            style="cursor: pointer;"
            class="nav-link"
            aria-controls="sidebarPages"
          >
            <i class="fe fe-file" />Logout
          </a>
        </li>
      </ul>
    </div> <!-- / .navbar-collapse -->
  </div>
</template>

<script>
import apiService from '~/api/apiservice'
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
    },
    logout () {
      apiService.logOut('SUPERADMIN_TOKEN')
      this.$router.replace('/hspace/signin')
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
