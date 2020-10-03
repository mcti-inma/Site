<template>
  <div>
    <!-- Section 2 -->
      <section class="section background-primary text-center">
        <div class="line">
          <div class="s-12 m-10 l-8 center">
            <h2 class="headline text-thin text-s-size-30">
							<slot name="title"></slot>
						</h2>
            <p class="text-size-20">
							<slot name="description"></slot>
						</p>
          </div>
        </div>  
      </section>
  </div>
</template>