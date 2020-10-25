export default {
	methods:{
		isEmpty(value){
			if(value){
				return (value.length === 0 || !value.trim());
			} return true
		},
		isNotEmpty(value){
			if(value){
				return !(value.length === 0 || !value.trim());
			} return false
		},
	}
}