<template>
  <div id="app">

    <NavBar></NavBar>

    <main role="main">
      <router-view/>   
    </main>

    <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/template/NavBar.vue'
import Footer from '@/components/template/Footer.vue'

// alert(this.$globalConf)

export default {
  data(){
    return{

    }
  },

  components: {
    NavBar, 
    Footer
  }
}
</script>

