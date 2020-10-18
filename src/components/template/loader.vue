<template>
	<div class="loader" :style="getColors()">
	</div>
</template>

<script>
export default {
	props:['size','borderSize','time','colors'],

	data(){
		return{
			borders:['top','bottom','left','right'],		
		}
	},

	methods:{
		getColors(){
			let style = `width: ${this.size}px;height: ${this.size}px;`
			style+= `border: ${this.borderSize}px solid #f3f3f3;`
			for(let i=0;i<this.colors.length;i++){
				if(this.colors[i]){
					style += `border-${this.borders[i]}:${this.borderSize}px solid ${this.colors[i]};`
				}
			}

			if(this.time){
				style+=`animation: spin ${this.time}s linear infinite;`
			}

			if(this.style){
				style += this.style
			}
			return style
		}
	}
}
</script>

<style>
.loader {
	border-radius: 50%;
	animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>