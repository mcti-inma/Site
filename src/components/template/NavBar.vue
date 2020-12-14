<template>
  <div>
    <GovernmentBar/>
    <header role="banner">
      <!-- Top Navigation -->
      <nav class="background-white background-primary-hightlight">
        <div class="line">
          <div class="s-12 l-2">
            <a href="/">
              <TemplateTitle :conf="{ fontSize: '33px' }" :elements="title" />
              <!-- <img class="inma-logo" src="http://inma.gov.br/wp-content/themes/portalpadrao/img/logo.jpg" alt="logo INMA"> -->
            </a>
          </div>		

          <div class="top-nav s-12 l-10">
            <p class="nav-text"></p>
            <ul class="right chevron center-auto">
							
							<li>
								<Search class="search"/>
							</li>

              <li><router-link to="/">Home</router-link></li> 
							<li><router-link to="/synthesis">Síntese</router-link></li>
		
							<li><a target="_blank" href="http://rede.inma.gov.br/dokuwiki/doku.php">Wiki-Rima</a></li>
							
							<li><a target="_blank" href="http://rede.inma.gov.br/mapas/mapa_filtro_fauna.html">Mapa Fauna</a></li>
							<li><a target="_blank" href="http://rede.inma.gov.br/mapas/mapa_filtro_fauna.html">Mapa Fauna</a></li>
              <!-- <li><router-link to="members">Equipe</router-link></li> -->

            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<style scoped>
.search{
	/* margin-top:2px; */
	margin-right:10px;
}

a {
  background-color: white;
}
.inma-logo {
  width: 170px;
  height: 70px;
}
.center-auto {
  margin-top: 12px;
}
.section {
	padding: 0px;
	margin: 0px;
	padding-top: 11px;
}
nav{
	padding-top: 14px;
	padding-bottom: 5px;
}
</style>

<script>
import GovernmentBar from "@/components/template/GovernmentBar.vue";
import TemplateTitle from "@/components/template/templateTitle.vue";
import Search from "@/components/template/Search.vue"


export default {
	mounted(){
		// this.$store.dispatch('search', "testefffffgg")
		// console.log( this.$store.getters.getHighlight )
	},


  components: {
    GovernmentBar,
		TemplateTitle,
		Search
  },

  data() {
    return {
      title: [{ title: "Projeto" }, { title: "RIMA", primary: true }],
			arraySearch:["teste"] 
		}
  },

  methods: {
    toSynthesis(synthesis, page) {
			this.$router.push(
				{
					path: '/synthesis',
					query: { synthesis: synthesis, page: page },
					}
			).catch(err => {})
		},
  },
};
</script>
