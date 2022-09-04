import { createStore } from 'vuex'
// import VueAnalytics from 'vue-analytics';
import titleMixin from './mixins/titleMixin';

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
      projects: [],
      functionize_article: [],
      devportal_article: [],
      cdc_article: [],
      outages_article: [],
      allvoices_article: [],
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setProjects (state, projects) {
      state.projects = projects
    },
    setFZEProjects (state, functionize_article) {
      state.functionize_article = functionize_article
    },
    setDEVProjects (state, devportal_article ) {
      state.devportal_article = devportal_article
    },
    setCDCProjects (state, cdc_article) {
      state.cdc_article = cdc_article
    },
    setOUTProjects (state, outages_article) {
      state.outages_article = outages_article
    },
    setAVProjects (state, allvoices_article) {
      state.allvoices_article = allvoices_article
    },
  },
  getters: {
    getProjects (state) {
      return state.projects
    },
    getFZEProjects (state) {
      return state.functionize_article
    },
    getDEVProjects (state) {
      return state.devportal_article
    },
    getCDCProjects (state) {
      return state.cdc_article
    },
    getOUTProjects (state) {
      return state.outages_article
    },
    getAVProjects (state) {
      return state.allvoices_article
    },
    
}
})


app.use(store);