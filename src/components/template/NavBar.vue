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

							<li>
								<a>Síntese</a>
								<ul>
									<li v-for="(topics, index) in $config.topics" :key="index">
										<!-- <a>{{topics[index].title}}</a> -->										
										<a v-for="(topic, i) in topics" :key="i"
											@click="toSynthesis(index,i)">
											{{topic.title}}
										</a>
										<!-- <ul>
											<li v-for="(topic, i) in topics" :key="topic.title">
												<a @click="toTopic(index,i)">{{topic.title}}</a>
											</li>
										</ul> -->

									</li>
								</ul>
							</li>

							<li><a href="maps">Mapas</a></li>
              <li><a href="members">Equipe</a></li>

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
