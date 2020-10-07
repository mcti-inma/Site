<template>
  <div>
    <article>
        <header class="section background-primary text-center">
          <h1 class="text-white margin-bottom-0 text-size-50 text-thin text-line-height-1">
            Members
          </h1>
        </header>
        <div class="section background-white"> 
          <div class="line">
            <div class="margin">

              <div v-for="member in $config.members" :key="member"
								class="s-12 m-6 l-3 border">
                <div class="image-with-hover-overlay image-hover-zoom margin-bottom member">
                  <div class="image-hover-overlay background-primary"> 
                    <div class="image-hover-overlay-content">
                      <p class="description">
												{{ member.description }}
                      </p>  
                    </div> 
                  </div> 
                  <img class="img-size" :src="member.img" :alt="member.name"/>
                </div>
                <p class="name">
									<span>{{ member.name }} </span>	
									<span class="text-primary">{{ member.lastName }}</span>
								</p>	
              </div>

            </div>  
          </div>
        </div> 
      </article>
  </div>
</template>

<style scoped>
	.img-size{
		display: block;
    width: 100%;
    object-fit: cover;
	}
  .description{
    width:190;
		height:190px;
		margin-left: auto;
		margin-right: auto;
		padding-left: 10px;
		padding-right: 10px;
		white-space: normal;
		overflow-y: auto;		
  }

  .name{
    margin-top: 10px;
    text-align: center;
    font-size: 20px;
  }

  .member{
    margin:auto;
    width:200px;
    height:200px;
    border-radius: 3px;
  }
</style>