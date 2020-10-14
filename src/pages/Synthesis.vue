<template>
  <div>
		<Banner>
			<span slot="title">{{ $config.synthesis[$route.params.id].title }}</span>
		</Banner>

		<div v-for="desc in $config.synthesis[$route.params.id].texts" :key="desc.title">
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
		// this.page = this.$route.params.id
		// this.title = this.$config.synthesis[this.page].title
		// this.texts = this.$config.synthesis[this.page].texts
		console.log(this.$route.params.id);
		// console.log(this.$config.synthesis[this.page]);
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