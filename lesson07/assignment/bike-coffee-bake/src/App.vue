<template>
 <!-- setting up main app html and including bootstrap classes for page styling-->
  <div id="app">
    <!-- Header with logo image -->
    <h1 class="display-1 text-center">{{ header }}</h1>
    <img :src="logoimage" class="mx-auto d-block" :alt="logoimgtext" style="width:40%;">
    <h3 class="display-4 text-center mb-3">{{ subheader }}</h3>
    <!-- Responsive navigation menu -->
    <div id="nav">
      <nav class="navbar text-uppercase navbar-expand-lg navbar-light bg-primary">
        <div class="container">
          <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span class="navbar-toggler-icon"></span></button>
          <div id="navbarNav" class="collapse	navbar-collapse">
            <div class="navbar-nav">
              <router-link to="/" class="nav-link nav-item ml-5">Home</router-link>
              <router-link to="/bikeshop" class="nav-link nav-item ml-5">Bikeshop</router-link>
              <router-link to="/coffeeshop" class="nav-link nav-item ml-5">Coffeeshop</router-link>
              <router-link to="/bakeshop" class="nav-link nav-item ml-5">Bakeshop</router-link>
            </div>
          </div>
        </div>
      </nav>
      <router-view></router-view>
    </div>
    <!-- app views content shows up here -->
    <!-- Responsive footer elements with additional nav menu -->
    <img :src="footerimage" class="img-fluid" :alt="footerimgtext">
    <div id="nav">
      <nav class="navbar text-uppercase navbar-expand-sm bg-dark">
        <div class="container">
          <div class="navbar-nav">
            <router-link to="/" class="nav-link nav-item ml-5">Home</router-link>
            <router-link to="/bikeshop" class="nav-link nav-item ml-5">Bikeshop</router-link>
            <router-link to="/coffeeshop" class="nav-link nav-item ml-5">Coffeeshop</router-link>
            <router-link to="/bakeshop" class="nav-link nav-item ml-5">Bakeshop</router-link>
          </div>
        </div>
      </nav>
      <p class="text-center mt-2">{{ footertext }}</p>
    </div>
  </div>
</template>


<script>
// importing image assets for main app content
import logoimage from "./assets/BCBLogo3-01.svg"
import footerimage from "./assets/BCBBanner.jpg"

// main app header and footer content
export default {
  name: 'app',
  data(){
    return {
      header: "Bike Coffee Bake",
      logoimage: logoimage,
      logoimgtext: "logo of bike wheel, chemex and bread",
      footerimgtext: "banner image of bikes, coffee and baked goods",
      footerimage: footerimage,
      subheader: "Est. 2021",
      footertext: "2021 BCB"
    }
  }
}

</script>
<style>

</style>
