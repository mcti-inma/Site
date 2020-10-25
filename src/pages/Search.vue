<template>
	<div>
		<!-- <template v-if="$route.query.search"> $store.getters.search -->
			<Cards class="justify-center" :conf="{title: ''}" :elements="mountSearch($config.topics)"/>
		<!-- </template> -->

		<!-- <template v-if="$util.isEmpty($route.query.search)"> -->
			<!-- <TemplateTitle :conf="{fontSize:'30px'}" :elements="[{title:'Parâmetro de pesquisar vazio'}]"/> -->
			<TemplateTitle :conf="{fontSize:'25px'}" :elements="[{title:'Resultados da pesquisa'}]"/>
		<!-- </template> -->
		<br>
	</div>
</template>

<script>
import Cards from "@/components/home/Cards.vue";
import TemplateTitle from "@/components/template/templateTitle.vue"

export default {
  components: {
		Cards,
		TemplateTitle
	},
	
	methods:{
		mountSearch(topics){
			if(this.$util.isEmpty( this.$store.getters.search )){
				return
			}
			var results = []
			this.findSynthesis(topics, results)
			return results
		},
		
		//criando
		// findEquipe(results){
		// 	for(let element of $config.members){
		// 		this.findWork(element.description, i, j, results)
		// 	}
		// },

		findSynthesis(topics, results){
			for(let i=0;i<topics.length;i++){
				for(let j=0;j<topics[i].length;j++){
					//this.findWork(this.$config.topics[i][j].title, i, j)
					for(let element of topics[i][j].texts){
						this.findWork(element.text, i, j, results)
					}
				}
			}
		},

		findWork(text, topic, page, results){
			if(this.$util.isNotEmpty( text )){ 
				if(this.$config.methods.searchWork(text, this.$store.getters.search)){
					this.setFind(text, topic, page, results)
				}
			}
		},

		setFind(text, topic, page, results){
			if(text.length > 100){
				text = text.substring(0,99)
			}
			results.push({ link:`synthesis?synthesis=${topic}&page=${page}`, description: text })
		}
	},

};
</script>

<style>
</style>