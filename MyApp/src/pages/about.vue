<template>
  <v-layout id="about" column justify-center align-center>
    <v-flex
            fluid
            style="min-height: 0;text-align:center"
            grid-list-lg
    >
      <v-card style="width:630px;">
        <v-card-title primary-title style="justify-content:center">
          <div>
            <app-logo/>
            <h1>NUXT</h1>

            <h2>
              Vue.js Web Apps
            </h2>

            <p>
              Nuxt is an opinionated structured framework for rapidly developing Web Applications utilizing developer-friendly 
              <a href="https://vuejs.org/v2/guide/single-file-components.html">Vue Single Page Components</a>
              and its built-in Hot module replacement to enable a highly productive development experience.
            </p>
            <p>
              Nuxt also enables the development of high-performance responsive Web Apps by employing advanced packaging techniques like 
              automatic code spliting, link prefetching, SPA navigation of statically-generated cacheable assets 
              and integrated support for ES6/7 transpilation and js/css bundling and minification.
            </p>
            <ul>
              <li>
                <a href="https://nuxtjs.org/guide/installation" target="_blank" class="button button--green">
                  get started
                </a>
              </li>
              <li>
                <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button button--grey">
                  GitHub
                </a>
              </li>
            </ul>            
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
};
</script>

<style>
#about li {
    display: inline-block;
    padding: 15px;
    padding-bottom: 0;  
}
#about .button {
    position: relative;
    display: inline-block;
    color: #4e5156!important;
    font-size: 16px;
    font-weight: 600;
    padding: 14px 42px;
    padding-top: 13px;
    min-width: 150px;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    background-color: #fff;
    border-radius: 4px;
    letter-spacing: 1px;
    border: 1px solid #75818b;
}
#about .button--green {
    color: #fff !important;
    border-color: #3b8070 !important;
    background-color: #3b8070 !important;
}
#about .button--grey {
    color: #fff!important;
    border-color: #35495e;
    background-color: #35495e;
}
#about p {
  text-align: left;
  margin: 30px 10px;
}
</style>
