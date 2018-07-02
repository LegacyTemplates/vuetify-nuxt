<template>
  <v-app>
    <v-navigation-drawer
      fixed
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/" exact>Home</v-btn>
        <v-btn flat to="/about" exact>About</v-btn>
        <v-btn flat to="/contact" exact>Contact</v-btn>
      </v-toolbar-items>

    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">

          <v-layout column align-center>
            <nuxt/>
          </v-layout>

        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app style="justify-content:center">
      <div style="text-align:center;margin:10px">
        <div>
            <img src="../static/img/logo.svg" height="32" style="vertical-align:middle;margin-right:5px;" />
            <a href="https://servicestack.net/vs-templates/vuetify-nuxt">Learn about this Nuxt.js Vuetify VS.NET template</a>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'home', title: 'Home', to: '/' },
          { icon: 'bubble_chart', title: 'About', to: '/about' },
          { icon: 'contacts', title: 'Contact', to: '/contact' },
          { icon: 'message', title: 'Post 1', to: '/posts/1' },
          { icon: 'message', title: 'Post 2', to: '/posts/2' },
          { icon: 'message', title: 'Post 3', to: '/posts/3' },
          { icon: 'message', title: 'Post 4', to: '/posts/4' },
          { icon: 'message', title: 'Post 5', to: '/posts/5' },
        ],
        miniVariant: false,
        right: true,
        title: 'MyApp'
      }
    }
  }
</script>
