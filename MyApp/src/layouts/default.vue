<template>
  <v-app>
    <v-navigation-drawer fixed :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Application</v-list-item-title>
          <v-list-item-subtitle>subtext</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item router :to="item.to" :key="i" v-for="(item, i) in items" exact>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-app-bar fixed app :clipped-left="clipped">
      <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'mdi-chevron-right' : 'mdi-chevron-left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text to="/" exact>Home</v-btn>
        <v-btn text to="/about" exact>About</v-btn>
        <v-btn text to="/contact" exact>Contact</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <nuxt />
        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" class="d-flex justify-center">
      <div style="margin:10px">
        <div>
          <img
            src="../static/svg/svg-icons/logo.svg?fill=%23212529"
            height="32"
            style="vertical-align:middle;margin-right:5px;"
          />
          <a
            href="https://servicestack.net/vs-templates/vuetify-nuxt"
          >Learn about this Nuxt.js Vuetify VS.NET template</a>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: "mdi-home", title: "Home", to: "/" },
        { icon: "mdi-chart-bubble", title: "About", to: "/about" },
        { icon: "mdi-contacts", title: "Contact", to: "/contact" },
        { icon: "mdi-message", title: "Post 1", to: "/posts/1" },
        { icon: "mdi-message", title: "Post 2", to: "/posts/2" },
        { icon: "mdi-message", title: "Post 3", to: "/posts/3" },
        { icon: "mdi-message", title: "Post 4", to: "/posts/4" },
        { icon: "mdi-message", title: "Post 5", to: "/posts/5" }
      ],
      miniVariant: false,
      right: true,
      title: "MyApp"
    };
  }
};
</script>
