<template>
  <Header/>
  
  
  
</template>


<script>
import Header from "./views/Header.vue";

export default {
  components: { 
    Header
  
  },
  computed: {
    loaded() {
      return this.$store.state.loadState == "loaded";
    }
  }
};
</script> 



<style>

</style>
