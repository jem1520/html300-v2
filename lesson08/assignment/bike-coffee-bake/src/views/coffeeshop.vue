<template>
  <!-- coffeeshop html and bootstrap classes for page styling-->
  <div class="coffeeshop">
    <h2 class="text-center display-4 p-4">{{coffeepagehead}}</h2>
    <div class="row lead pl-5 pt-3 pb-3 ml-5">
      <!--v-for loop for page content from object -->
      <div class="col-xl-4 col-md-6 col-sm-12 mb-4" v-for="item in items" :key="item.id">
        <h5>{{item.menusection}}</h5>
        <ul>
          <li>{{item.menuitemone}}</li>
          <li>{{item.menuitemtwo}}</li>
          <li>{{item.menuitemthree}}</li>
          <li>{{item.menuitemfour}}</li>
          <li>{{item.menuitemfive}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//setting up page content in object and variables
export default {
  name: 'coffeeshop',
  data(){
    return {
      coffeepagehead: 'Welcome to our coffeeshop! Check out our menu.',
      items: [
        {menusection:'Hot Coffee', menuitemone:'Housedrip $3', menuitemtwo:'Craft Pourovers $5', menuitemthree:'Single Origin Pourovers $6', menuitemfour:'Chemex for Two $8', menuitemfive:'French Press $4 | $8'},
        {menusection:'Espresso', menuitemone:'Americano $4', menuitemtwo:'Latte $5', menuitemthree:'Cappuccino $5', menuitemfour:'Single Shot $3', menuitemfive:'Double Shot $5'},
        {menusection:'Cold Coffee', menuitemone:'Slow Drip Iced $5', menuitemtwo:'Chemex Flash for Two $10', menuitemthree:'Iced Americano $4', menuitemfour:'Iced Latte $5', menuitemfive:'Affogato $6'}
         ]
    }
  }
}
</script>

<style>

</style>
