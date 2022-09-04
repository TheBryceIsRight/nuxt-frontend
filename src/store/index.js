export const state = () => ({
  count: 0,
  projects: [],
  functionize_article: [],
  devportal_article: [],
  cdc_article: [],
  outages_article: [],
  allvoices_article: [],
})

export const getters = {
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
  }
}

export const mutations = {
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
}

export const actions = {
  async fetchDevPortal({ state }) {
    const res = await axios.get(`${process.env.VUE_APP_API_ENDPOINT}api/articles/1?populate=*`);
    state.devportal_article = res.data.data.attributes;
  },
  async fetchCDCProject({ state }) {
    const res = await axios.get(`${process.env.VUE_APP_API_ENDPOINT}api/articles/5?populate=*`);
    state.cdc_article = res.data.data.attributes;
  },
  async fetchSystemOutage({ state }) {
    const res = await axios.get(`${process.env.VUE_APP_API_ENDPOINT}api/articles/3?populate=*`);
    state.outages_article = res.data.data.attributes;
  },
  async fetchFunctionize({ state }) {
    const res = await axios.get(`${process.env.VUE_APP_API_ENDPOINT}api/articles/4?populate=*`);
    state.functionize_article = res.data.data.attributes;
  },
  async fetchAllVoices({ state }) {
    const res = await axios.get(`${process.env.VUE_APP_API_ENDPOINT}api/articles/2?populate=*`);
    state.allvoices_article = res.data.data.attributes;
  }
}