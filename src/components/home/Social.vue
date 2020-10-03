<template>
  <div class="row tiger-center">
    <center>
        <h1 class="subtitle is-5">{{ conf.title }}</h1>
        <a v-for="social in elements" 
           :key="social.name" 
           :class="getClassButton(social.name)"
           :href="social.link">
          <span class="icon">
            <i :class="getClassIcon(social.name)"></i>
          </span>
        </a>
    </center>
  </div>
</template>

<script>
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bulma-social/bin/bulma-social.min.css";

export default {
  props: {
    conf: {
      type: Object,
    },
    elements: {
      type: Array,
    },
  },

  data() {
    return {};
  },

  methods: {
    getClassButton(socialName){
      return `button is-medium is-${socialName}`
    },
    getClassIcon(socialName){ 
      return `fab fa-${socialName} fa-lg`
    }
  },
};
</script>

<style scoped>
.button {
  margin: 10px;
}
</style>

Lista de redes sociais

is-apple
is-bitbucket
is-dropbox
is-facebook
is-flickr
is-foursquare
is-github
is-instagram
is-linkedin
is-microsoft
is-odnoklassniki
is-openid
is-pinterest
is-reddit
is-soundcloud
is-tumblr
is-twitter
is-vimeo
is-vk
is-yahoo
is-youtube
