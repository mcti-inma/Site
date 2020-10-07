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
              <li><a href="/">Home</a></li>
              <!-- <li><a href="#">Products</a></li> -->
              <li>
                <a>Síntese</a>
                <ul>
                  <!-- <li><a>Menu</a>
                    <ul>
                      <li><a>Teste 1</a></li>
                      <li><a>Teste 2</a></li>
                    </ul>
                  </li> -->
                  <li><a @click="toSynthesis(0)">Mata Atlântica</a></li>
                  <li><a @click="toSynthesis(1)">Unidades de Conservação</a></li>
                  <li>
                    <a @click="toSynthesis(2)"
                      >Biodiversidade das Universidades de Concervação
                      Capixabas</a
                    >
                  </li>
                </ul>
              </li>
							<li><a href="mapas">Mapas</a></li>
              <li><a href="members">Membros</a></li>
              <!-- <li><a href="about">About</a></li>
              <li><a href="contact">Contact</a></li> -->
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<style scoped>
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

export default {
  components: {
    GovernmentBar,
    TemplateTitle,
  },

  data() {
    return {
      title: [{ title: "Projeto" }, { title: "RIMA", primary: true }],
    };
  },

  methods: {
    toSynthesis(param) {
			// if(this.$router.name == "synthesis"){
				this.$router.push(
					{
						path: '/synthesis',
						name: 'Synthesis',
						params: { id: param },
 					}
				).catch(err => {})
			// }else{
      // 	this.$router.push({ name: "Synthesis", params: { synthesis: param } });
			// }
		},
  },
};
</script>
