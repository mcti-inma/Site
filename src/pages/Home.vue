<template>
  <div>
    <Slide/>
    <ImageDescription :conf="mission.conf" :elements="mission.elements"/>
		<Cards :conf="objectives.conf" :elements="objectives.elements"/>
    <Banner/>
    <SlideCard/>
  </div>
</template>

<script>
import Slide from "@/components/home/Slide.vue";
import Cards from "@/components/home/Cards.vue";
import Banner from "@/components/home/Banner.vue";
import ImageDescription from "@/components/home/ImageDescription.vue";
import SlideCard from "@/components/home/SlideCard.vue";
// import Description from "@/components/home/Description.vue";

export default {
  components: {
    Slide,
    Cards,
    Banner,
    ImageDescription,
		SlideCard,
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
							title:"Rede de Compartilhamento de Dados e Divulgação da Mata Atlântica do Espírito Santo"					
						}
					]
				},
				elements:[
					{
						img:"https://lh4.googleusercontent.com/sfYiuskDDccE2t0cj7btUct12SviuQiqNEKBp5o3BFviWBYIdfyEzBJLhJjhXKly4148VK2fbDxt3ZGMdzR4L1ltKpXqMePKAH8pm6_z0fDKpt7l9JB0=w1280",
						title:"Primeiro objetivo",
						description:"Implantar um sistema de compartilhamento de dados sobre a Mata Atlântica do Espírito Santo, com ênfase nas Unidades de Conservação, visando disponibilizá-las para cientistas, público leigo e tomadores de decisão .",
					},
					{
						img:"https://lh5.googleusercontent.com/BljqYvqegCNcfIdqsMHJT-W0Qa9MxwakAtTWFByuIOw46oIR7sCXfN7DOEqu8lnHglsI8yX6Q9S8rVBuqmN0Q7LjQiQLlnrVYjjwsIo7MiBUPWPh34j9=w1280",
						title:"Segundo objetivo",
						description:"Promover a educação ambiental e difusão científica com o tema “Mata Atlântica”, contribuindo para a formação de cidadãos conscientes de suas responsabilidades sociais e da importância da biodiversidade para a manutenção de um ambiente equilibrado.",
						link:""
					},
					{
						img:"https://lh3.googleusercontent.com/tWqDNsOkxNNK3h_V6e9fAgK8dXyibczhziXfE2ZpfoK2tL6d55t71YczquYS6VtEAk2SpEtmzm1SbnBpT0rx2iE4JhLpZq7M1ZrICd2lIXbgP95vG4Pf=w1280",
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
