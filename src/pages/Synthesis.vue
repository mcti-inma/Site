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
						<a class="title" :href="`?synthesis=${index}&page=${i}`">
						<!-- @click="toSynthesis(index,i)" -->
							{{topic.title}}
						</a>
					</div>
				</span>
			</Description>

		</template>

		<template v-else>
			<template v-if="this.$config.topics[this.$route.query.synthesis] && this.$config.topics[this.$route.query.synthesis][this.$route.query.page]">
				<Banner>
					<span slot="title">{{ $config.topics[$route.query.synthesis][$route.query.page].title }}</span>
				</Banner>

				<div v-for="desc in $config.topics[$route.query.synthesis][$route.query.page].texts" :key="desc.title">
					<template v-if="desc.title">
						<br>
					</template>
					<Description>
						<span slot="title">{{ desc.title }}</span>
						<p class="text" slot="text" :style="ident(desc.ident)">
							{{ desc.text }}
						</p>
						<template v-if="desc.img">
							<div slot="img">
								<img class="img" :src="desc.img" :style="{width: desc.width, height: desc.height}" alt="">
								<label class="text label" for="img"> 
									<strong>Figura {{desc.imgNumber}}.</strong> {{desc.imgDesc}} 
								</label>
							</div>
						</template>
						<template v-if="desc.frame">
							<div slot="img">
								<label class="text label" for="img"> 
									<strong>{{desc.frameNumber}}.</strong> {{desc.frameDesc}} 
								</label>
								<img class="img" :src="desc.frame" alt=""> <br>
							</div>
						</template>

					</Description>
				</div>

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

export default {
	components: {
    Description,
    Banner,
  },
  mounted() {
		// console.log(this.$route.params.id);
		// console.log(this.$route.query.element);
		
		// if(!this.$config.topics[this.$route.query.synthesis] || !this.$config.topics[this.$route.query.synthesis][this.$route.query.page]){
		// 	this.$router.push(
		// 		{
		// 			path: '/synthesis',
		// 			query: { synthesis: 0, page: 0 },
		// 		}
		// 	).catch(err => {})
		// }

	},

	data(){
		return{
			page: 0,
			title:"",
			texts:""
		}
	},

	methods:{
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