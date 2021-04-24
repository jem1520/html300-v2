<template>
  <!-- bakeshop html and bootstrap classes for page styling-->
  <div class="bakeshop">
    <h2 class="display-3 text-center pt-5">{{bakeheadertext}}</h2>
    <div class="row lead m-4">
      <!--v-for loop for images from object -->
      <div class="col-xl-4 col-md-6 col-sm-12 mb-4" v-for="img in imgs" :key="img.id">
        <img :src="img.image" class="img-fluid rounded mx-auto d-block m-5" :alt="img.imgtext">
      </div>
   </div>
   <div id="accordion" class="m-4">
     <!--v-for loop for page content from object -->
      <div class="card m-4" v-for="tab in tabs" :key="tab.id">
        <div class="card-header">
          <h5 class="display-4 text-center m-2">
            <a :href="tab.menu" data-parent="#accordion" data-toggle="collapse" aria-expanded="true">{{tab.tablabel}}</a>
          </h5>
        </div>
        <div :id="tab.id" :class="tab.collapse">
          <div class="card-body">
            {{tab.tabcontent}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import images for page
import bagelimg from "../assets/Bagel.jpg"
import breadimg from "../assets/Bread.jpg"
import stickyimg from "../assets/StickyBuns.jpg"

//setting up page content in objects and variables
export default {
  name: 'bakeshop',
  data(){
    return {
      bakeheadertext: 'Welcome to Our Bakery',
      imgs: [
        {image: bagelimg, imgtext: 'image of fresh bagels'},
        {image: breadimg, imgtext: 'image of fresh rustic bread'},
        {image: stickyimg, imgtext: 'image of fresh sticky buns'}
      ],
      tabs: [
        {menu: '#menu', tablabel: 'Our Menu', tabcontent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', id: 'menu', collapse:'collapse show'},
        {menu: '#ingredients', tablabel: 'Our Ingredients', tabcontent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', id: 'ingredients', collapse:'collapse'},
        {menu: '#story', tablabel: 'Our Story', tabcontent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', id: 'story', collapse:'collapse'},
        ],
    }
  }
}

</script>
