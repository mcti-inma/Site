<template>
  <div>
    <footer>
      <!-- Social -->
      <div class="background-primary text-center">
				<v-row
            class="fill-height"
            align="center"
            justify="center"
          >
					<a class="footer-icon" href="http://inma.gov.br" target="_blank">
						<img class="border" src="@/assets/icons/inma.png" alt="">
					</a>
					<a class="footer-icon" href="https://iema.es.gov.br" target="_blank">
						<img class="border" src="@/assets/icons/iema.png" alt="">
					</a>
					<a class="footer-icon" href="https://fapes.es.gov.br" target="_blank">
						<img class="border" src="@/assets/icons/fapes.png" alt="">
					</a>
        </v-row>
				<!-- <a href="/"><i class="icon-facebook_circle icon2x text-white"></i></a> 
        <a href="/"><i class="icon-twitter_circle icon2x text-white"></i></a>
        <a href="/"><i class="icon-google_plus_circle icon2x text-white"></i></a>
        <a href="/"><i class="icon-instagram_circle icon2x text-white"></i></a>                                                                         -->
      </div>
      
      <!-- Main Footer -->
      <section class="section background-dark">
        <div class="line">
          <div class="margin">
            <!-- Collumn 1 -->
            <!-- <div class="s-12 m-12 l-4 margin-m-bottom-2x">
              <h4 class="text-uppercase text-strong">Our Philosophy</h4>
              <p class="text-size-20"><em>"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt."</em><p>
                            
              <div class="line">
                <h4 class="text-uppercase text-strong margin-top-30">About Our Company</h4>
                <div class="margin">
                  <div class="s-12 m-12 l-4 margin-m-bottom">
                    <a class="image-hover-zoom" href="/"><img src="img/blog-04.jpg" alt=""></a>
                  </div>
                  <div class="s-12 m-12 l-8 margin-m-bottom">
                    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
                    <a class="text-more-info text-primary-hover" href="/">Read more</a>
                  </div>
                </div>
              </div>
            </div> -->
            
            <!-- Collumn 2 -->
            <div class="s-12 m-12 l-4 margin-m-bottom-2x">
              <h4 class="text-uppercase text-strong">Contato</h4>
              
							<div class="line">
                <div class="s-1 m-1 l-1 text-center">
                  <i class="icon-globe_black text-primary text-size-12"></i>
                </div>
                <div class="s-11 m-11 l-11 margin-bottom-10">
                  <p><b>Instituição:</b> <a href="http://inma.gov.br" target="_blank">Instituto Nacional da Mata Atlântica (INMA)</a></p>
                </div>
              </div>

							<div class="line">
                <div class="s-1 m-1 l-1 text-center">
                  <i class="icon-placepin text-primary text-size-12"></i>
                </div>
                <div class="s-11 m-11 l-11 margin-bottom-10">
                  <p><b>Endereço:</b> Av. José Ruschi, Nº 4, Santa Teresa - ES - Cep: 29.650-000</p>
                </div>
              </div>

              <div class="line">
                <div class="s-1 m-1 l-1 text-center">
                  <i class="icon-mail text-primary text-size-12"></i>
                </div>
                <div class="s-11 m-11 l-11 margin-bottom-10">
                  <p><a href="mailto:contato@inma.gov.br?subject=Hello%20again" class="text-primary-hover"><b>E-mail:</b> contato@inma.gov.br</a></p>
                </div>
              </div>

              <div class="line">
                <div class="s-1 m-1 l-1 text-center">
                  <i class="icon-smartphone text-primary text-size-12"></i>
                </div>
                <div class="s-11 m-11 l-11 margin-bottom-10">
                  <p><b>Telefone:</b> (27) 3259-1182 / 3259-1696 / 3259-2100</p>
                </div>
              </div>
							
              <!-- <div class="line">
                <div class="s-1 m-1 l-1 text-center">
                  <i class="icon-twitter text-primary text-size-12"></i>
                </div>
                <div class="s-11 m-11 l-11 margin-bottom-10">
                  <p><a href="/" class="text-primary-hover"><b>Twitter</b></a></p>
                </div>
              </div>
              <div class="line">
                <div class="s-1 m-1 l-1 text-center">
                  <i class="icon-facebook text-primary text-size-12"></i>
                </div>
                <div class="s-11 m-11 l-11">
                  <p><a href="/" class="text-primary-hover"><b>Facebook</b></a></p>
                </div>
              </div> -->
            </div>
            
            <!-- Collumn 3 -->
            <!-- <div class="s-12 m-12 l-4">
              <h4 class="text-uppercase text-strong">Leave a Message</h4>
              <form class="customform text-white">
                <div class="line">
                  <div class="margin">
                    <div class="s-12 m-12 l-6">
                      <input name="email" class="required email border-radius" placeholder="Your e-mail" title="Your e-mail" type="text" />
                    </div>
                    <div class="s-12 m-12 l-6">
                      <input name="name" class="name border-radius" placeholder="Your name" title="Your name" type="text" />
                    </div>
                  </div>
                </div>
                <div class="s-12">
                  <textarea name="message" class="required message border-radius" placeholder="Your message" rows="3"></textarea>
                </div>
                <div class="s-12"><button class="submit-form button background-primary border-radius text-white" type="submit">Submit Button</button></div> 
              </form>
            </div> -->

          </div>
        </div>
      </section>
      <hr class="break margin-top-bottom-0" style="border-color: rgba(0, 38, 51, 0.80);">
    </footer> 
  </div>
</template>

<style scoped>
	.flex{
		display:flex;
	}
	.footer-icon{
		padding:5px;
		width: 200px;
		margin: auto !important;
	}
	.border{
		border-radius: 10px;
	}
</style>