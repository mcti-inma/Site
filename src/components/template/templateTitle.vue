<template>
  <div class="section background-white full-width text-center "> <!-- headline -->
		<h2 class="headline text-thin text-s-size-30" 
			:style="fontSize()">
			<span v-for="title in elements" :key="title.title"
				:class="classTitle(title.primary)"
			>
				{{title.title}}
			</span> 
		</h2>
	</div>
</template>

<style scoped>

</style>

<script>
export default {
  props: ['conf', 'elements'],

  methods: {
		fontSize(){
			return `font-size: ${this.conf.fontSize}`
		},
    classTitle(primary) {
      if (primary) {
        return "text-primary";
      }
      return "text-normal-person";
    },
  },
};
</script>