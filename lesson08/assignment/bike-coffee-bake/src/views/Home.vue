<template>
  <!-- homepage html and bootstrap classes for page styling-->
  <div class="homepage">
    <p class="lead m-5">{{filltext}}</p>
    <!-- Jumbotron on page -->
    <div class="container">
      <div class="jumbotron">
        <h1>{{ homepageheader }}</h1>
        <h5 class="mb-4">{{homesubheader}}</h5>
        <ul>
          <li v-for="service in services" :key="service.id">
            {{service}}
          </li>
        </ul>
      </div>
    </div>
    <!-- Like our business button and likes counter -->
    <div class="container text-center">
      <p class="lead m-5">{{filltext}}</p>
      <p v-if="show" class="lead m-5">{{like}}</p>
      <p v-else class="lead m-5" >{{thanks}}</p>
      <button type="button" class="btn btn-success" v-on:click="show = !show, counter += 1">Like!</button>
      <p class="lead m-5">{{likes}}{{counter}}</p>
   </div>
  </div>
</template>

<!-- homepage content from variables and array -->
<script>


export default {
  name: 'homepage',
  data(){
    return {
        show: true,
        services:['Full Bike Service', 'Craft Pourovers + Coldbrew','Fresh Pastries Daily'],
        homepageheader: "Best Coffee & Bike Shop",
        homesubheader: "Rated BEST by Winston Living 2021",
        filltext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        like: 'Like Our Business!',
        thanks: 'Thanks!',
        counter: 0,
        likes: 'likes '
      }
    },
  }


</script>

<style>

</style>
