<template>
  <v-layout column justify-center align-center>
    <v-flex
      fluid
      style="min-height: 0;text-align:center"
      grid-list-lg
    >
      <v-card>
        <v-card-title primary-title style="justify-content:center">
            <div>
                <app-logo/>

                <h3 class="headline mb-0">ServiceStack + Nuxt.js + Vuetify</h3>

                <v-form>
                    <v-text-field
                        label="Name"
                        v-model="name"
                        :counter="30"
                        required
                    ></v-text-field>
                </v-form>

                <h3 class="result">{{result}}</h3>
            </div>                  
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import { hello } from "~/shared/gateway";

export default {
  components: {
    AppLogo
  },
  
  data: () => ({ 
    name: '',
    result: ' '
  }),

  watch: {
    name: async function(newName) {
      this.result = newName
        ? await hello(newName)
        : '';
    }
  }
}
</script>

<style>
.splash {
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.result {
    height: 30px;
    line-height: 30px;
}
</style>
