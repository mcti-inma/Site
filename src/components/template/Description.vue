<template>
  <div>
    <article>
      <div class="section background-white">
        <div class="line">
          <h2 class="text-size-30">
						<slot name="title"></slot>
					</h2>
          <slot class="text" name="text"></slot>
					<slot class="container" name="img"></slot>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
	props:["highlight"]
}
</script>

<style scoped>
	.img{
		margin: auto;
	}

	.text-size-30{
		padding-top: 0px;
		margin-top: 0px;
	}
	.section{
		padding-top: 0px !important;
		padding-bottom: 0px !important;
	}
	.text{
		/* padding-top: 0px !important;
		padding-bottom: 0px !important; */
		margin-left: 0 !important;
		margin-right: 0 !important;
		padding-left: 0 !important;
		text-align: justify !important;
		white-space: normal !important;
		word-wrap: break-word !important;
		vertical-align: baseline !important;
		font-size: 14px;
		/* text-indent: 35pt !important; */
	}
	.highlight{
		background-color: rgb(250, 255, 199) !important;
	}
	.label{
		position: relative;
		left: 5%;
		
	}
</style>

<script>
export default {
	props:{
		title:{
			type: String
		}
	}
}
</script>