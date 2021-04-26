export default {

  data() {
    return {
      isActive: true
     }
   },
    methods: {
      toggleClass: function(){
         this.isActive = !this.isActive;
      }
    }
  };
