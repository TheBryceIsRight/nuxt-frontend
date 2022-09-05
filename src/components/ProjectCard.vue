<script setup>

const { response } = await useFetch('https://portfolio-backend-vc1t.onrender.com/api/projects/?populate=*');
const { $store } = useNuxtApp();
$store.commit('setProjects', response.data.data);
console.log("Response from API:\n\n", response.data.data)
</script>

<template >
    <div class="container">
      <v-col no-gutters class="profile-card"
        v-for="project in projects" :key="project.attributes.Order"
        :cols="project.attributes.flex" >
        <nuxt-link :to="project.attributes.route" style="text-decoration: none; color: inherit;">
        <v-card v-ripple>
            <v-img
            :src= "project.attributes.Image.data.attributes.caption"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="400px"
            :alt= "project.attributes.Alt"
            cover
            >
            <div class="profile-info">
            <v-card-title class="text-white d-flex justify-start font-weight-regular text-left profile-title" v-text="project.attributes.Name"></v-card-title>
            <v-card-text class="text-white font-weight-bold d-flex justify-start text-left profile-subtitle" v-text="project.attributes.Role"></v-card-text>
            <v-card-text class="text-white text-left profile-description" v-text="project.attributes.Description"></v-card-text>
            </div>
            </v-img>
        </v-card>
        </nuxt-link>
      </v-col>
    </div>
    </template>
    
    <script>    
    export default {
      computed: {
        projects: function() { return $store.getters.getProjects },
      }
    }
    </script>
    
    <style>
    .profile-card {
      border-radius: 4px;
      padding: 6px;
    }
    
    .container {
        display: flex;
        align-content: center;
        flex-wrap: wrap;
        margin: 0px;
    }
    
    .profile-info {
      width: 100%;
      margin: auto;
    }
    
    .profile-title{
      color: #004D78;
      font-size: 1.2em;
      display: flex;
      align-content: flex-start;
      text-align: left;
    }
    .profile-subtitle {
      margin: 10px 0;
      font-size: 1em;
      color: #004D78;
      display: flex;
      align-content: flex-start;
      text-align: left;
    
    }
    .profile-description {
      line-height: 150%;
      color: #004D78;
      text-align: left;
    }
    </style>