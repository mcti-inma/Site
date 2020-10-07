<template>
  <div>
    <Slide/>
    <ImageDescription :conf="mission.conf" :elements="mission.elements"/>
		<Cards :conf="objectives.conf" :elements="objectives.elements"/>
    <!-- <Banner>
			<span slot="title">Rede de Compartilhamento de Dados e Divulgação da Mata Atlântica do Espírito Santo </span>
		</Banner> -->
    <!-- <SlideCard/> -->
		<br>
  </div>
</template>

<script>
import Slide from "@/components/home/Slide.vue";
import Cards from "@/components/home/Cards.vue";
// import Banner from "@/components/template/Banner.vue";
import ImageDescription from "@/components/home/ImageDescription.vue";
// import SlideCard from "@/components/home/SlideCard.vue";
// import Description from "@/components/home/Description.vue";

export default {
  components: {
    Slide,
    Cards,
    // Banner,
    ImageDescription,
		// SlideCard,
		// Description
  },

  data() {
    return {
			//(imageDescription) Missão do preojeto
			mission:{
				conf:{
					description:"Sistema de compartilhamento de dados sobre a Mata Atlântica do Espírito Santo, com ênfase nas Unidades de Conservação, visando disponibilizá-las para cientistas, público leigo e tomadores de decisão. Promovendo a educação ambiental e difusão científica com o tema “Mata Atlântica”, contribuindo para a formação de cidadãos conscientes de suas responsabilidades sociais e da importância da biodiversidade para a manutenção de um ambiente equilibrado."
				},
				elements:[
					{
						title:"Missão",
						primary:true
					},
					{
						title:"do projeto",
						primary:false
					}
				]
			},	
			objectives:{
				conf:{
					title:[
						{
							title:"PROJETO RIMA"					
						}
					]
				},
				elements:[
					{
						img:require("@/assets/img/unnamed.jpg"),
						title:"Primeiro objetivo",
						description:"Implantar um sistema de compartilhamento de dados sobre a Mata Atlântica do Espírito Santo, com ênfase nas Unidades de Conservação, visando disponibilizá-las para cientistas, público leigo e tomadores de decisão .",
					},
					{
						img:require("@/assets/img/unnamed_2.jpg"),
						title:"Segundo objetivo",
						description:"Promover a educação ambiental e difusão científica com o tema “Mata Atlântica”, contribuindo para a formação de cidadãos conscientes de suas responsabilidades sociais e da importância da biodiversidade para a manutenção de um ambiente equilibrado.",
						link:""
					},
					{
						img:require("@/assets/img/unnamed_3.jpg"),
						title:"Síntese do Projeto",
						description:"Síntese da Biodiversidade em 20 Unidades de Conservação no estado do Espírito Santo, desenvolvida pelo projeto RIMA .",
						link:""
					},
					// {
					// 	img:"https://lh3.googleusercontent.com/IqdBVxQmjobQGwpHj0uA_2LwFH06-Kp-YkP-vpG-0yObaQiXh_H-mUFow676Ce0vfk41P-5FLJuY2SO9sxdHbsAZ6cpRoQ3Opql21G_C2fQgC3ct6Q=w1280",
					// 	title:"Mapas Interativos",
					// 	description:"Registros de fauna e flora da Mata Atlântica em UCs do Espírito Santo mapeadas em coleções biológicas.",
					// 	link:""
					// }
				]
			},
		};
  },
};
</script>
