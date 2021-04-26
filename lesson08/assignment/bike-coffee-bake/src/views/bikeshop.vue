<template>
  <!-- bikepage html and bootstrap classes for page styling-->
  <div class="bikeshop">
    <section v-if="images">
       <imagepost
        v-for="image in images"
        v-bind:image="image"
        v-bind:key="image.id">
      </imagepost>
    </section>
    <p class="display-4 text-center m-4">{{itemtext}}</p>
    <div class="container display-4 text-center mb-5">
      <p class="d-inline">{{onward}}</p>
      <!-- Bootstrap tooltip on page-->
      <a class="d-inline" v-bind:href="fblink" data-toggle="tooltip" data-placement="top" title="Join us on Saturday afternoons for a group ride. 3PM start in front of the shop. More info on our Facebok page.">{{linktext}}</a>
    </div>
  </div>
</template>

<script>
//import image component
import imagepost from '../components/bikeshop-page-images.vue';
//import images for page
import pageimgone from "../assets/Bikes.jpg"
import pageimgtwo from "../assets/Bikes2.jpg"
import pageimgthree from "../assets/BikeFast.jpg"
import pageimgfour from "../assets/BikeTeam.jpg"

//setting up page content in object and variables
export default {
  name: 'bikeshop',
  components: {
    imagepost
  },
  data(){
    return {
      images: [
        {id: 1, item:'We offer tire repairs and full bike tune ups, to keep you broken down less and cycling more.', image: pageimgone, imgtext:'banner image of two bikes leaning on a railing'},
        {id: 2, item:'Quality namebrand components and custom upgrades.', image: pageimgtwo, imgtext:'image of bike components'},
        {id: 3, item:'We want you to fly.', image: pageimgthree, imgtext:'image of man biking fast'},
        {id: 4, item:'Your creative bike service team.', image: pageimgfour, imgtext:'profite image of team members biking'}
      ],
      itemtext: 'Come visit us soon. We want to keep you on the road/trail/gravel.',
      onward: "Onward >>>>>",
      fblink: "https://www.facebook.com",
      linktext: "Cycle More",
    }
  }
}
</script>

<style>

</style>
