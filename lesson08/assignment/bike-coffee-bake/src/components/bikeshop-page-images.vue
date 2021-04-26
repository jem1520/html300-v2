<template>
  <div class="container">
    <section class="image">
      <p class="display-4 text-center m-4">{{image.item}}</p>
      <div id='myapp'>
      <div class="div" v-bind:class="[isActive ? 'none' : 'border rounded border-success']" @click="toggleClass()">
       <img :src="image.image" class="img-fluid rounded mx-auto d-block m-5" :alt="image.imgtext">
      </div>
      </div>
    </section>
  </div>
</template>

<script>
import clickMixin from '../mixins/clickMixins.js'

export default {
  name: 'image',
  props: ['image'],
  type: Object,
  default: function () {
        return { message: 'okay' }
      },
  mixins: [clickMixin],
};


</script>

<style lang="scss">




</style>
