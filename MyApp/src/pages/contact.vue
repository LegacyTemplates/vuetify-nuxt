<template>
  <v-layout id="contact" column>
    <v-flex
            fluid
            style="min-height: 0"
            grid-list-lg
    >
      <v-card style="width:630px;">
        <v-card-title primary-title>
          <div style="margin:0 10px;">
            <h1>Contact</h1>

            <a href="https://vuetifyjs.com" target="_blank"><img src="../static/img/v.png" alt="Vuetify.js" style="position:absolute;margin:0 0 0 250px"/></a>

            <h3 style="margin: 10px 0">ServiceStack Links</h3>

            <ul>
              <li v-for="(url, name) in links" :key="name">
                <a :href="url">{{name}}</a>
              </li>
            </ul>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters([
    'links'
  ]),

  mounted() {
    //initially render with Vuex state then refresh with latest data from server
    this.$store.dispatch('getLinks') //comment line to view stale data
  }
}

</script>

<style>
#contact ul {
  margin: 0 0 0 20px;
  list-style-type: square;
}
</style>