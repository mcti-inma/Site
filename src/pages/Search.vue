<template>
	<div>
		<Cards class="justify-center" :conf="conf" :elements="elements"/>
		<br>
	</div>
</template>

<script>
import Cards from "@/components/home/Cards.vue";

export default {
  components: {
    Cards,
  },

  data() {
    return {
      conf: {
        title: "Resultados",
      },
      elements: [
        {
          description: "teste",
          link: "",
        },
      ],
    };
  },
};
</script>

<style>
</style>