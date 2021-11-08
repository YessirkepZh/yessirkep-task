<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer" :mini-variant="miniVariant"
      :clipped="clipped" fixed app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items" :key="i"
          :to="item.to" router exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped" fixed app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Main',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Widgets',
          to: '/widget',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Benford`s Law',
          to: '/benford',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Python Stack Trace Interpretation',
          to: '/stack',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Yessirkep`s Answers',
    };
  },
};
</script>
