<template>
  <div>
		<GovernmentBar/>
    <header role="banner">    
      <!-- Top Navigation -->
      <nav class="background-white background-primary-hightlight">
        <div class="line">
          <div class="s-12 l-2">
            <a href="/" class="logo">
              <img class="inma-logo" src="http://inma.gov.br/wp-content/themes/portalpadrao/img/logo.jpg" alt="logo INMA">
            </a>
          </div>
          <div class="top-nav s-12 l-10">
            <p class="nav-text"></p>
            <ul class="right chevron center-auto">
              <li><a href="/" >Home</a></li>
              <!-- <li><a href="#">Products</a></li> -->
              <li><a>Síntese</a>
                <ul>
                  <!-- <li><a>Menu</a>
                    <ul>
                      <li><a>Teste 1</a></li>
                      <li><a>Teste 2</a></li>
                    </ul>
                  </li> -->
									<li><a @click="toSynthesis()">Mata Atlântica</a></li>
                  <li><a>Unidades de Conservação</a></li>
									<li><a>Biodiversidade das Universidades de Concervação Capixabas</a></li>
								</ul>
              </li>
              <li><a href="about">About</a></li>
              <li><a href="members">Members</a></li>
              <li><a href="contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<style scoped>
	a{
		background-color: white;
	}
  .inma-logo{
    width: 170px;
    height: 70px;
  }
  .center-auto{
    margin-top: 12px;
  }
</style>

<script>
import GovernmentBar from '@/components/template/GovernmentBar.vue'

export default {
	components:{
		GovernmentBar
	},

	methods:{
		toSynthesis(){
			this.$router.push({ name: 'Synthesis', query: { option: '1' } })
		}
	}
}
</script>
