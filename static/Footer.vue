<template>
  <v-footer class="mt-10 footer-container white">
    <div class="pl-10">
      <router-link to="./">
        <v-img max-width="250" src="nilelogo.png" />
      </router-link>
    </div>
    <v-row align="center" class="mt-4" justify="center">
      <v-col cols="12" md="5">
        <p>
          Our mission is to create a sustainable bridge between consumer goods and employment opportunities across
          all sectors, thereby making Africa a global marketplace.
        </p>
        <v-row class="mt-5">
          <v-col cols="2">
            <v-img width="25" src="facebook.png" />
          </v-col>
          <v-col cols="2">
            <v-img width="25" src="twitter.png" />
          </v-col>
          <v-col cols="2">
            <v-img width="25" src="instagram.png" />
          </v-col>
          <v-col cols="2">
            <v-img width="25" src="linkedin.png" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6" md="3" class="text-left">
        <ul>
          <p class="footer-head">
            Navigation
          </p>
          <li v-for="link in navLinks" :key="link.route" class="links">
            <router-link :to="{path:link.route}">
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </v-col>
      <v-col cols="6" md="3" class="text-left">
        <ul>
          <p class="footer-head">
            Information
          </p>
          <li v-for="link in infoLinks" :key="link.route" class="links">
            <router-link :to="{path:link.route}">
              {{ link.name }}
            </router-link>
          </li>
          <li style="color: white;">
            hjbhj
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      navLinks: [
        { name: 'Home', route: './' },
        { name: 'Categories', route: './seller' },
        { name: 'Services', route: './' },
        { name: 'About Us', route: './' }
      ],
      infoLinks: [
        { name: 'Contacts', route: './contacts' },
        { name: 'Terms of use', route: './seller' },
        { name: 'Privacy', route: './' },
        { name: '', route: './' }
      ]
    }
  }
}
</script>

<style scoped>
.footer-container {
  padding-left: 13%;
}
ul{
    list-style: none;
}
.links {
  font-family: 'Gotham', sans-serif;
font-size: 12px;
font-style: normal;
font-weight: 350;
line-height: 26px;
letter-spacing: 0em;
text-align: left;
color: #5b5b5b;

}
li a {
  text-decoration: none;
  color: #5b5b5b;
  text-transform: uppercase;
   font-family: 'Gotham', sans-serif;
font-size: 12px;
font-style: normal;
font-weight: 350;
line-height: 26px;
letter-spacing: 0em;
text-align: left;
color: #5b5b5b;
}
v-footer {
  font-family: 'Gotham', sans-serif;
}
.footer-head{
  font-family: 'Gotham', sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 700;
line-height: 15.6px;
letter-spacing: 0em;
text-align: left;
color: #181B22;
text-transform: uppercase;
}
</style>
