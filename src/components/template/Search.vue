<template>
	<div>
		<input
			name="search" 
			type="text"
			placeholder="Pesquisar"
			v-model="search"
			v-on:keyup.enter="onSearch"
		/> 
	</div>
</template>

<script>
export default {
	data(){
		return{
			search:""
		}
	},

	methods:{
		onSearch(){
			if(this.$util.isNotEmpty(this.search)){
				this.$store.dispatch('search', this.search)
				this.$router.push({ path: 'search' })
			}
		}
	}
}
</script>

<style>
input[type=text] {
  width: 100%;
  padding: 8px 10px;
  box-sizing: border-box;
  border: 2px solid #49BF4C;
  border-radius: 5px;
}
</style>