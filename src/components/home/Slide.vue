<template>
  <div>
    <section class="section background-dark">
        <div class="line">
          <!-- <div class="carousel-fade-transition owl-carousel carousel-main carousel-nav-white carousel-wide-arrows">
            <div class="item">
              <div class="s-12 center">
                <img src="@/assets/img/01-boxed.jpg" alt="">
                <div class="carousel-content">
                  <div class="padding-2x">
                    <div class="s-12 m-12 l-8">
                      <p class="text-white text-s-size-20 text-m-size-40 text-l-size-60 margin-bottom-40 text-thin text-line-height-1">
												Rede de Compartilhamento Mata Atlântica do Espírito Santo 
											</p>
                      <p class="text-white text-size-16 margin-bottom-40">
												Promover a educação ambiental e difusão científica 
												com o tema “Mata Atlântica”, contribuindo para a formação
												de cidadãos conscientes
											</p>  
                    </div>                  
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="s-12 center">
                <img class="img-size" src="@/assets/img/box-03.jpg" alt="">
                <div class="carousel-content">
                  <div class="padding-2x">
                    <div class="s-12 m-12 l-8">
                      <p class="text-white text-s-size-20 text-m-size-40 text-l-size-60 margin-bottom-40 text-thin text-line-height-1">
												INMA/FAPES/SEAMA
											</p>
                      <p class="text-white text-size-16 margin-bottom-30">
												Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
											</p>    
                    </div>                  
                  </div>
                </div>
              </div>
            </div>
          </div>   -->
        
				
				<template>
					<v-carousel :show-arrows="false">
						<v-carousel-item
							v-for="(item,i) in items"
							:key="i"
							:src="item.src"
							reverse-transition="fade-transition"
							transition="fade-transition"
						>
							<!-- <v-row
									class="fill-height"
									align="center"
									justify="center"
								> -->

								<div class="padding-2x">
									<div class="backgound_title">
										<p class="text-white text-s-size-30 text-m-size-40 text-l-size-60 margin-bottom-40 text-thin text-line-height-1">
											Rede de Compartilhamento Mata Atlântica do Espírito Santo 
										</p>
										<p class="text-white text-size-16 margin-bottom-40">
											Promover a educação ambiental e difusão científica 
											com o tema “Mata Atlântica”, contribuindo para a formação
											de cidadãos conscientes
										</p>  
									</div>                  
								</div>

							<!-- </v-row> -->

						</v-carousel-item>
					</v-carousel>
				</template>
			
				</div>
    </section>
  </div>
</template>

<style scoped>
	.img-size{
		height:390px;
	}
</style>

<script>
  export default {
    data () {
      return {
        items: [
					{
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: require('@/assets/img/01-boxed.jpg'),
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
        ],
      }
    },
  }
</script>
