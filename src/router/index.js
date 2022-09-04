import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Functionize from "../views/Functionize.vue";
import DevPortal from "../views/DevPortal.vue";
import SystemOutages from "../views/SystemOutages.vue";
import CDCProject from "../views/CDCProject.vue";
import ContactMe from "../views/ContactMe.vue";
import NotFound from "../views/NotFound.vue";
import AboutMe from "../views/AboutMe.vue";
import AllVoices from "../views/AllVoices.vue";

const routes = [
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home Page',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of my portfolio.'
        },
        {
          property: 'og:description',
          content: 'The home page of my portfolio.'
        }
      ]
    }
  },
  {
    path: "/aboutme",
    name: "About Me",
    component: AboutMe,
    meta: {
      title: 'About Me',
      metaTags: [
        {
          name: 'description',
          content: 'The about me page of my portfolio.'
        },
        {
          property: 'og:description',
          content: 'The about me page of my portfolio.'
        }
      ]
    }
  },
  {
    path: "/fze",
    name: "Functionize",
    component: Functionize,
    meta: {
      title: 'Functionize',
      metaTags: [
        {
          name: 'description',
          content: 'The functionize page of my portfolio.'
        },
        {
          property: 'og:description',
          content: 'The functionize page of my portfolio.'
        }
      ]
    },
  },
  {
    path: "/*",
    name: "404PageNotFound",
    component: NotFound,
    meta: {
      title: 'Page Not Found',
      metaTags: [
        {
          name: 'description',
          content: 'This page could not be found.'
        },
        {
          property: 'og:description',
          content: 'This page could not be found.'
        }
      ]
    },
  },
  {
    path: "/elavon",
    name: "DevPortal",
    component: DevPortal,
    meta: {
      title: 'Dev Portal',
      metaTags: [
        {
          name: 'description',
          content: 'The Developer Portal page of my portfolio.'
        },
        {
          property: 'og:description',
          content: 'The Developer Portal of my portfolio.'
        }
      ]
    },
  },
  {
    path: "/status",
    name: "SystemOutages",
    component: SystemOutages,
    meta: {
      title: 'System Outages',
      metaTags: [
        {
          name: 'description',
          content: 'The system outages page of my portfolio.'
        },
        {
          property: 'og:description',
          content: 'The system outages page of my portfolio.'
        }
      ]
    },
    
  },
  {
    path: "/contact",
    name: "ContactMe",
    component: ContactMe,
    meta: {
      title: 'Contact Me',
      metaTags: [
        {
          name: 'description',
          content: 'The contact me page of my portfolio.'
        },
        {
          property: 'og:description',
          content: 'The contact me page of my portfolio.'
        }
      ]
    },
    
  },
  {
    path: "/AllVoices",
    name: "AllVoices",
    component: AllVoices,
    meta: {
      title: 'AllVoices',
      metaTags: [
        {
          name: 'description',
          content: 'The AllVoices page of my portfolio.'
        },
        {
          property: 'og:description',
          content: 'The AllVoices page of my portfolio.'
        }
      ]
    },
    
  },
  {
    path: "/cdcproject",
    name: "CDCProject",
    component: CDCProject,
    meta: {
      title: 'CDC Project',
      metaTags: [
        {
          name: 'description',
          content: 'The air toxcity page of my portfolio.'
        },
        {
          property: 'og:description',
          content: 'The air toxcity page of my portfolio.'
        }
      ]
    },
  },
  // { path: "*", component: Home }
];



const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;