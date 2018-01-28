<template>
  <v-layout column justify-center align-center>
    <v-flex
      fluid
      style="min-height: 0"
      grid-list-lg
    >
      <v-card style="width:630px;">
        <v-card-title primary-title style="justify-content:center">
          <div>
            <h2 v-if="!post && loading" class="svg-icon loading">Loading Post {{id}} ...</h2>
            <h2 v-else-if="post">{{post.title}}</h2>
          </div>
        </v-card-title>
        <v-card-text>
            <div v-if="post" class="description">{{ post.description }}</div>          
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  validate({ params }) {   
    return /^\d+$/.test(params.id); // Must be a number
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    post(){
      return this.$store.getters.getPost(this.id);
    },
    ...mapGetters(['loading'])
  },
  mounted() {
    this.$store.dispatch("getPost", this.id);
  }
};
</script>
