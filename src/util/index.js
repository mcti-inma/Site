export default {
	methods:{
		isEmpty(value){
			return (value.length === 0 || !value.trim());
		},
		isNotEmpty(value){
			return !(value.length === 0 || !value.trim());
		},
	}
}