<template>
  <div id="app">

    <NavBar></NavBar>

    <main role="main">
      <router-view/>   
    </main>

    <Footer/>

  </div>
</template>

<style>
	@import url('http://fonts.googleapis.com/css?family=Open+Sans:400,300,700,800&subset=latin,latin-ext');
	
	@font-face {
	font-family: 'mfg';
    src: local("assets"), url('assets/font/mfglabsiconset-webfont.eot');
    src: local("assets"), url('assets/font/mfglabsiconset-webfont.svg#mfg_labs_iconsetregular') format('svg'),
   		   url('assets/font/mfglabsiconset-webfont.eot?#iefix') format('embedded-opentype'),
         url('assets/font/mfglabsiconset-webfont.woff') format('woff'),
         url('assets/font/mfglabsiconset-webfont.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
  font-family: 'sli';
  src: local("assets"), url('assets/font/Simple-Line-Icons.eot?v=2.2.2');
	src: local("assets"), url('assets/font/Simple-Line-Icons.eot?v=2.2.2#iefix') format('embedded-opentype'), 
			 url('assets/font/Simple-Line-Icons.ttf?v=2.2.2') format('truetype'), 
			 url('assets/font/Simple-Line-Icons.woff?v=2.2.2') format('woff'), 
			 url('assets/font/Simple-Line-Icons.svg?v=2.2.2#simple-line-icons') format('svg');
  font-weight: normal;
  font-style: normal; 
}
</style>

<script>
// @ is an alias to /src
import NavBar from '@/components/template/NavBar.vue'
import Footer from '@/components/template/Footer.vue'

// alert(this.$globalConf)

export default {
	//  mounted() {
  //     let recaptchaScript = document.createElement('script')
  //     recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js')
  //     document.head.appendChild(recaptchaScript)
  //   },

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

