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
		searchWork(text) { console.log("text")
			if (text.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1) {
				return true
			} else {
				return false;
			}
		},
		search({commit},value){
			commit("loadingStatus")
			this.state.search = value
			this.commit("loadingStatus")
		}
  },
	modules: { //modulos de processo.
		
  }
})
