<template>
	<div class="flex">
		<input
			type="text"
			placeholder="Pesquisa"
			v-model="$store.state.search"
			v-on:keyup.enter="onSearch"
		/> 
		<router-link class="botton-search" :to="`/search?search=${$store.getters.search}`">
			Pesquisar
		</router-link>
	</div>
</template>

<style scoped>
.botton-search{
	background: #002633;
	/* background:white; */
	color: white !important;
	margin-left: 5px;
}
.botton-search:hover{
	background:#002633 !important;
}
.flex{
	display: flex;
}
input[type=text] {
  width: 100%;
  padding: 8px 10px;
  box-sizing: border-box;
  border: 2px solid #002633;
  border-radius: 5px;
}
</style>

<script>
export default {
	data(){
		return{
			search:"",
			sendSearch:null,
		}
	},

	methods:{
		onSearch(){ //v-on:keyup.enter="onSearch"
			if(this.$util.isNotEmpty(this.search)){
				// this.$store.dispatch('search', this.search)
				// this.$router.navigate(`/search?search=${this.$store.getters.search}`)
				// this.$router.push({ path: '/search' }).catch(()=>{})
			}
		}
	}
}
</script>