<template>
  <section>
    <o-sidebar :fullwidth="fullwidth">
      <o-button v-if="fullwidth" icon-left="times" label="Close" />
      <img width="128" src="https://avatars2.githubusercontent.com/u/66300512?s=200&v=4" alt="Lightweight UI components for Vue.js" />
      <h3>Example</h3>
    </o-sidebar>
   
    
    <br />

  
  </section>
</template>

<script>
  export default {
    data() {
      return {
        
        overlay: false,
        fullheight: true,
        fullwidth: false,
        right: false
      }
    }
  }
</script>
<style>
  .sidebar-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
  }
  .sidebar-layout {
    display: flex;
    flex-direction: row;
    min-height: 100%;
  }
</style>