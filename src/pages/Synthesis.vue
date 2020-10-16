<template>
  <div>
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
							<img class="img" :src="desc.img" alt=""> <br>
							<label for="img"> 
								<strong>Figura {{desc.imgNumber}}.</strong> {{desc.imgDescription}} 
							</label>
						</div>
					</template>
				</Description>
			</div>

			<br>
			
		</template>
  </div>
</template>

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
		if(!this.$config.topics[this.$route.query.synthesis] || !this.$config.topics[this.$route.query.synthesis][this.$route.query.page]){
			this.$router.push(
				{
					path: '/synthesis',
					query: { synthesis: 0, page: 0 },
				}
			).catch(err => {})
		}
	},

	data(){
		return{
			page: 0,
			title:"",
			texts:""
		}
	},

	methods:{
		ident(ident){
			if(ident != "no"){
				return "text-indent: 35pt"
			} return ""
		}
	},
};
</script>