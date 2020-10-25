import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//variáveis
		loading: true,
		search:"",
		highlight:"rere"
  },
  mutations: { //metodos que manipulam as variáveis
		loadingStatus(){
			this.state.loading = !this.state.loading
		},
		setHighlight(){
			this.state.highlight = 'highlight'
		},
		setSearch(search){
			this.state.highlight = 'highlight'
		}
	},
	getters:{
		getHighlight: state => state.highlight,
		search: state => state.search,
		loading: state => state.loading,
	},
	actions: { //ações
		search({commit},value){
			commit("loadingStatus")
			this.state.search = value
			this.commit("loadingStatus")
		}
  },
	modules: { //modulos de processo.
		
  }
})
