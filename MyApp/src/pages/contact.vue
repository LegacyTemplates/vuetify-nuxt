<template>
  <v-row class="d-flex flex-column" align="center" justify="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title primary-title>
          <div>
            <h1>Contact</h1>
            <h3>ServiceStack Links</h3>
          </div>
          <a href="https://vuetifyjs.com" target="_blank">
            <img src="../static/img/v.png" alt="Vuetify.js" style="max-height:80px;" />
          </a>
        </v-card-title>
        <v-card-text>
          <ul>
            <li v-for="(url, name) in links" :key="name">
              <a :href="url">{{name}}</a>
            </li>
          </ul>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["links"]),

  mounted() {
    //initially render with Vuex state then refresh with latest data from server
    this.$store.dispatch("getLinks"); //comment line to view stale data
  }
};
</script>

<style>
#contact ul {
  margin: 0 0 0 20px;
  list-style-type: square;
}
</style>