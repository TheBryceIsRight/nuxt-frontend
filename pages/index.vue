<script setup lang="ts">
  import GTLogo from '../src/assets/GTLogo.svg';
  import AllVoicesLogo from '../src/assets/AllVoicesLogo.svg';
  import HomePageIllustration from '../src/assets/HomePageIllustration.svg';
  import Strapi from '../src/assets/Strapi.svg';
  import Undraw from '../src/assets/Undraw.svg';
  import Vue from '../src/assets/Vue.svg';
  import Vuetify from '../src/assets/Vuetify.svg';
</script>

<template>
  <v-app>
    <Nav/>
    <v-row class="text-center">
      <!-- Introduction -->
      <v-col class="mb-4">
        <br/>
        <br/>
        <br/>
        <h1 class="display-2 font-weight-light mb-3 text-xs-h3 text-md-h4 text-lg-h3">
          Hi! I'm Bryce
        </h1>
        <br/>
        <br/> 
        <div class="text-center d-flex align-center justify-center">
        <p style="width:160px" class="subheading font-weight-regular text-xs-body-2 text-md-body-1 text-lg-body-1">
          Product Designer at
        </p>
        <!-- Current Job Wordmark -->
        <v-btn href="https://www.allvoices.co/" target="_blank" elevation="0" height="100px">
        <AllVoicesLogo/>
        </v-btn>
        </div>
        <div class="text-center d-flex align-center justify-center">

        <p style="width:180px" class="subheading font-weight-regular text-xs-body-2 text-md-body-1 text-lg-body-1">
          Undergrad in CS from
        </p>
        <!-- Georgia Tech wordmark -->
        <v-btn href="https://www.gatech.edu/" target="_blank" elevation="0" height="100px">
        <GTLogo class="w-5 h-5"/>
        </v-btn>
        </div>
        <br/>
        <br/>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      > 
        <h2 class="headline font-weight-regular mb-5 text-xs-h6 text-md-h5 text-lg-h4">
          My projects
        </h2>
        <!-- List of Projects -->
        <br/>
        <!-- <Suspense>
          <template #default>
            <ProjectCard />
          </template>
          <template #pending>
            <ProjectCardSkeleton />
          </template>
          <template #fallback>
            <ProjectCardSkeleton />
          </template>
        </Suspense> -->
        <br/>
      </v-col>
      <v-col
        class="mb-5"
        cols="12"
      >
        <!-- Another illustration -->
        <HomePageIllustration/>
        <br/>
        <br/>
        <br/>
        <h2 class="headline font-weight-regular mb-5 text-xs-h6 text-md-h5 text-lg-h4">
          Made with ❤️ thanks to the open source community
        </h2>
        <!-- Strapi -->
        <v-btn href="https://strapi.io/" elevation="0" target="_blank" style="width:25%; height: 200px;">
          <Strapi/>
        </v-btn>
        <!-- Vuetify -->
        <v-btn href="https://next.vuetifyjs.com/en/" elevation="0" target="_blank" style="width:25%; height: 200px;">  
          <Vuetify/>
        </v-btn>
        <!-- Vue -->
        <v-btn href="https://vuejs.org/" elevation="0" target="_blank" style="width:25%; height: 200px;" >                 
          <Vue/>
        </v-btn> 
        <!-- Undraw -->
        <v-btn href= "https://undraw.co/" elevation="0" target="_blank" style="width:25%; height: 200px;">
          <Undraw/>
        </v-btn>
      </v-col>
    </v-row>
    <br/>
    <br/>
    <br/>
    <br/>
    <p class='caption text-center'>© {{currentDate()}} · Bryce Watson · All rights reserved</p>
  </v-app>
</template>

<script lang="ts">
import ProjectCard from '../src/components/ProjectCard.vue'
import ProjectCardSkeleton from '../src/components/ProjectCardSkeleton.vue'
import Nav from '../src/components/Nav.vue';

export default {
  name: 'HelloWorld',
  title: 'Portfolio',

  data: () => ({

    blogs: [],
    images: [],
    error: null,
    loading: false,

  }),
  components: {
    ProjectCard,
    ProjectCardSkeleton,
    Nav
},
//   computed: {
//     projects: function() { return this.$store.getters.getProjects },
//   },
//   watch: {
//   '$store.getters.getProjects': function() {
//     console.log(this.$store.state.drawer)
//   }
//   },
  methods: {
    currentDate() {
      const current = new Date();
      const date = `${current.getFullYear()}`;
      return date;
    }
  }
}
</script>
