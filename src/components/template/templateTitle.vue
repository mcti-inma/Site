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

<script>
export default {
  props: {
    conf: {
      type: Object,
    },
    elements: {
      type: Array,
    },
  },

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

<style>
</style>