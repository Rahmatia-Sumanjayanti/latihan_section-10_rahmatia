<template>
  <v-app id="inspire">
    <v-app-bar color="primary" dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- judul halaman -->
      <v-toolbar-title>News App</v-toolbar-title>
        <v-spacer></v-spacer>

      <!-- icon search -->
      <v-btn icon class="mr-6">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

    </v-app-bar>

    <!-- Row membagi dua halaman -->
    <v-row>
    <!-- row pertama -->
    <v-col cols="3">

      <!-- side bar -->
      <v-navigation-drawer 
      v-model="drawer" color="info" dark absolute>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
        
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>

        </v-list-item-content>
      </v-list-item>

    <v-divider></v-divider>

        <v-list
            dense
            nav
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link>
            <v-list-item-icon>

                <!-- icon lingkaran -->
                <v-avatar
                  color="secondary"
                  size="30">
                  A
                </v-avatar>
            </v-list-item-icon>

            <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>

          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-col>

    <!-- row kedua -->
    <v-col cols="9">
      <v-main>
          
      <!-- Dropdown Kategori -->
      <div class="mt-4" >
      <v-menu>
      <template v-slot:activator="{ on: menu, attrs }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">

            <!-- Tombol Category -->
            <v-btn
              color="white"
              light
              depressed
              append-icon="mdi-chevron-down"
              v-bind="attrs"
              v-on="{ ...tooltip, ...menu }">Category 
            </v-btn>

          </template>
              
              <span>Choose the category</span>

        </v-tooltip>
      </template>

          <v-list>
            <v-list-item
            v-for="(item, index) in items"
            :key="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <!-- Menu Bar -->
      <api-path/>

    </v-main>
  </v-col>
  </v-row>

    

    <!-- Footer -->
    <v-footer 
      dark
      padless
      fixed>
      <v-col
        class="text-left"
        cols="12">
      Made by <v-icon class="red--text">mdi-heart</v-icon> with <a class="white--text"  target="_blank" href="https://vuetifyjs.com">Vuetify</a> and Rahmatia Sumanjayanti
      </v-col>
    </v-footer>
  </v-app>

</template>

<script>
import apiPath from './components/Page.vue'

  export default {
    components: {
      apiPath,
    },
    data: () => ({ 
      drawer: null,
      items: [
        { title: 'Business'},
        { title: 'Entertainment'},
        { title: 'Science' },
        { title: 'Soprts' },
        { title: 'Technology' },
        { title: 'Healthy' },
        { title: 'General' },
      ],

     }),
     mounted(){
        this.fetchApi();
    },
  }
</script>

