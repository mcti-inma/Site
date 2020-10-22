<template>
  <div>

		<template v-if="!$route.query.page">
			<Banner>
				<span slot="title">Síntese da Biodiversidade em 20 Unidades de Conservação do Estado do Espírito Santo</span>
			</Banner>
			
			<Description v-for="(topics, index) in $config.topics" :key="index">
				<span slot="title">
					<div v-for="(topic, i) in topics" :key="i">
						<br>
						<router-link :class="`title ${getStyleHighlight(topic.title)}`" @click.native="$scrollToTop" :to="`?synthesis=${index}&page=${i}`">
						<!-- @click="toSynthesis(index,i)" -->
							{{topic.title}}
						</router-link>
					</div>
				</span>
			</Description>

		</template>

		<template v-else>
			<template v-if="$config.topics[$route.query.synthesis] && $config.topics[$route.query.synthesis][$route.query.page]">
				<Banner>
					<span slot="title">{{ $config.topics[$route.query.synthesis][$route.query.page].title }}</span>
				</Banner>

				<div v-for="desc in $config.topics[$route.query.synthesis][$route.query.page].texts" :key="desc.title">
					<template v-if="desc.title">
						<br>
					</template>
					<Description>
						<span slot="title" :class="getStyleHighlight(desc.title)">{{ desc.title }}</span>
						<p slot="text" id="search" :class="`text ${getStyleHighlight(desc.text)}`" :style="ident(desc.ident)">
							{{ desc.text }}
						</p>
						<template v-if="desc.img">
							<div slot="img">
								<img class="img" :src="desc.img" :style="{width: desc.width, height: desc.height}" alt="">
								<label :class="`text label ${getStyleHighlight('Figura '+desc.imgNumber+' '+desc.imgDesc)}`" for="img"> 
									<strong>Figura {{desc.imgNumber}}.</strong> {{desc.imgDesc}} 
								</label>
							</div>
						</template>
						<template v-else-if="desc.frame">
							<div slot="img">
								<label :class="`text label ${getStyleHighlight(desc.frameNumber+' '+desc.frameDesc)}`" for="img"> 
									<strong>{{desc.frameNumber}}.</strong> {{desc.frameDesc}} 
								</label>
								<img class="img" :src="desc.frame" alt=""> <br>
							</div>
						</template>

					</Description>
				</div>

				<br>
				<Cards :conf="cards.conf" :elements="cards.elements"/>
				<br>
			</template>
		</template>
  
	</div>
</template>

<style scoped>
	.title:hover{
		cursor: pointer;
		color: #49BF4C;
	}
</style>

<script>
import Description from "@/components/template/Description.vue";
import Banner from "@/components/template/Banner.vue";
import Cards from "@/components/home/Cards.vue"

export default {
	components: {
    Description,
		Banner,
		Cards
  },

	data(){
		return{
			search:"Mata Atlântica",
			page: 0,
			title:"",
			texts:"",
			topic:0,
			topicPage:0,
			cards:{conf:{title:"Mais"},elements:[]}
		}
	},

	mounted() {
		this.getSearch(this.$config.search.value)

		if( this.$route.query.synthesis ){
			this.nextTopic()
		}
	},

	watch:{
		'$config.search.value'(value){
			console.log( value )
		}
	},

	methods:{
		getSearch(value){
			if( value && value != ""){
				this.search = this.$config.search.value
			}
		},
		getStyleHighlight(text){
			return this.$config.methods.getStyleHighlight(text, this.search)
		},
		nextTopic(){
			this.topic = parseInt(this.$route.query.synthesis)
			this.topicPage = parseInt(this.$route.query.page)
			let next = this.topicPage+(1)
			if(next <= this.$config.topics[this.topic].length){
				if(this.$config.topics[this.topic][next]){
					this.cards.elements.push({
						title:this.$config.topics[this.topic][next].title, 
						link:`synthesis?synthesis=${this.topic}&page=${next}`
					})
				}else{
					next = this.topic+(1)
					if(next < this.$config.topics.length){
						this.cards.elements.push({
							title:this.$config.topics[next][0].title, 
							link:`synthesis?synthesis=${next}&page=${0}`
						})
					}
				}
			}
		},

		toSynthesis(synthesis, page) {
			this.$router.push(
				{
					path: '/synthesis',
					query: { synthesis: synthesis, page: page },
				}
			).catch(err => {})
		},

		ident(ident){
			if(ident != "no"){
				return "text-indent: 35pt"
			} return ""
		}
	},
};
</script>