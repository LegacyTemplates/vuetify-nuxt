<template>
  <v-row class="d-flex flex-column" align="center" justify="center">
    <v-col cols="12" md="6">
      <v-card width="630px">
        <v-card-title primary-title class="d-flex justify-center">
          <div>
            <h2 v-if="!post && loading" class="svg-icon loading">Loading Post {{id}} ...</h2>
            <h2 v-else-if="post">{{post.title}}</h2>
          </div>
        </v-card-title>
        <v-card-text>
          <div v-if="post" class="description">{{ post.description }}</div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  validate({ params }) {
    return /^\d+$/.test(params.id); // Must be a number
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    post() {
      return this.$store.getters.getPost(this.id);
    },
    ...mapGetters(["loading"])
  },
  mounted() {
    this.$store.dispatch("getPost", this.id);
  }
};
</script>
