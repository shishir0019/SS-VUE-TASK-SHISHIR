<template>
  <!-- App.vue -->
  <v-app>
    <v-navigation-drawer color="primary" v-model="drawer" :rail="rail" @click="rail = false" permanent app>
      <v-list-item title="Stuff management" nav>
          <template v-slot:append>
            <v-btn variant="text" icon="mdi-menu" @click.stop="rail = !rail"></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item exact v-for="(menu, index) in items" :key="index" :prepend-icon="menu.icon" :title="menu.title" :to="menu.url"></v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data(){
    return {
      drawer: true,
        items: [
          { title: 'Dashboard', icon: 'mdi-desktop-mac-dashboard', url: '/application' },
          { title: 'Stuff List', icon: 'mdi-account-group-outline', url: '/application/stuffs' },
          { title: 'Admin List', icon: 'mdi-account-cowboy-hat', url: '/application/admins' },
        ],
        rail: false,
    }
  }
});
</script>
