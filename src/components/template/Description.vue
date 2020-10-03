<template>
  <div>
    <article>
      <div class="section background-white">
        <div class="line">
          <h2 class="text-size-30">
						<slot name="title"></slot>
					</h2>
          <slot class="text" name="text"></slot>
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped>
	.section{
		padding-top: 0px !important;
		padding-bottom: 0px !important;
	}
	.text{
		margin-left: 0 !important;
		margin-right: 0 !important;
		padding-left: 0 !important;
		text-align: justify !important;
		text-indent: 35pt !important;
		white-space: normal !important;
		word-wrap: break-word !important;
		vertical-align: baseline !important;
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