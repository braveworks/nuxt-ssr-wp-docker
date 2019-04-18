export const actions = () => ({
  async nuxtServerInit({ commit, state }) {
    const meta = await this.$axios.get(state.wordpressAPI)
    commit('setMeta', meta.data)
  }
})

export const state = () => ({
  article: null,
  articles: [],
  page: null,
  pages: [],
  authorArticles: [],
  authors: null,
  indexInfiniteLoading: {
    enabled: true,
    page: 1
  },
  featuredArticles: [],
  featuredColor: {},
  featuredID: 194,
  meta: {
    description: '',
    name: ''
  },
  topicArticles: [],
  topics: null,
  wpTotalPages: 0,
  wordpressAPI: 'http://localhost:5000/wp-json'
})

export const mutations = {
  setArticle(state, data) {
    state.article = data
  },
  setArticles(state, data) {
    state.articles = state.articles.concat(data)
  },
  setPage(state, data) {
    state.page = data
  },
  setPages(state, data) {
    state.pages = state.pages.concat(data)
  },
  setAuthorArticles(state, data) {
    state.authorArticles.push(data)
  },
  setAuthors(state, data) {
    state.authors = data
  },
  setIndexInfiniteLoading(state, data) {
    state.indexInfiniteLoading = data
  },
  setIndexInfiniteLoadingPageCount(state, data) {
    state.indexInfiniteLoading.page = data
  },
  setFeaturedColor(state, data) {
    state.featuredColor = data
  },
  setFeaturedArticles(state, data) {
    state.featuredArticles = state.featuredArticles.concat(data)
  },
  setMeta(state, data) {
    state.meta = data
  },
  setTopicArticles(state, data) {
    state.topicArticles.push(data)
  },
  setTopics(state, data) {
    state.topics = data
  },
  setWpTotalPages(state, data) {
    state.wpTotalPages = data
  }
}
