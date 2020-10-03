<template>
  <div>
    <!-- Section 3 -->
      <section class="section background-white">
        <div class="full-width text-center">
					<template v-if="conf.img">
						<img class="center margin-bottom-30" style="margin-top: -210px;" :src="conf.img" alt="">
					</template>
					<div class="line">
            
						<!-- <h2 class="headline text-thin text-s-size-30">		
							<span :class="classTitle(title.primary)" v-for="title in elements" :key="title.title">
								{{title.title}}
							</span> 
						</h2> -->

						<TemplateTitle :conf="{fontSize:'45px'}" :elements="elements"/>

            <p class="text-size-20 text-s-size-16 text-thin">
							{{ conf.description }}
						</p>
            
          </div>  
        </div>  
      </section>
  </div>
</template>

<script>
	import TemplateTitle from "@/components/template/templateTitle.vue"

	export default {
		props:{
			conf:{
				type: Object,
			},
			elements:{
				type: Array,
			}
		},

		components:{
			TemplateTitle
		},

		methods:{
			classTitle(primary){
				if(primary){
					return "text-primary"
				}
				return "text-normal-person"
			}
		}
	}
</script>
