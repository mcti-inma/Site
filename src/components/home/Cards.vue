conf:{
	title,
},
elements:[
	{
		title, 
		img, 
		link
	}
]
<template>
  <div>
		<TemplateTitle :conf="{fontSize:'45px'}" :elements="conf.title"/>
    <!-- Section 1 -->
      <section class="section background-white"> 
        <div class="line">
          <div class="margin">
						
            <div v-for="card in elements" :key="card.title"
							class="s-12 m-6 l-4 margin-m-bottom row">	
							<router-link v-if="card.link" @click.native="$scrollToTop"
								class="text-more-info text-primary-hover" :to="card.link">
								<img class="img-size margin-bottom" :src="card.img" alt="">
								<h2 class="text-thin">{{ card.title }}</h2>
								<p>{{ card.description }}</p> 
								Ler Mais
							</router-link>                
            </div>  
          </div>
        </div>
      </section>
  </div>
</template>

<style scoped>
.section{
	margin-bottom: -40px;
}

.img-size {
  width: 250px;
	margin-left:auto;
	margin-right:auto;
}

.margin {
	margin-top: -30px;
}

.margin-m-bottom {
  /* margin-bottom: 100px !important; */
}
</style>

<script>
import TemplateTitle from "@/components/template/templateTitle.vue"

export default {
	mounted(){
		// console.log(this.elements)
	},

	components:{
		TemplateTitle
	},

  props: ['conf', 'elements'],

  methods: {
    classTitle(primary) {
      if (primary) {
        return "text-primary";
      }
      return "text-normal-person";
    },
  },
};
</script>