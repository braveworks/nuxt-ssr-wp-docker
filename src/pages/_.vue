<template lang="pug">
section
  div.container
    article
      h1.title {{ page.title.rendered }}
      time {{ page.date.slice(0, 10) }}
      div(v-html="page.content.rendered")
    p
      nuxt-link(to="/")
        | index
</template>

<script>
export default {
  data() {
    return { article: '' }
  },
  head() {
    return {
      title: this.page.title.rendered,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.yoast_wpseo_metadesc || ''
        }
      ]
    }
  },
  computed: {
    page() {
      return this.$store.state.page
    }
  },
  async asyncData({ app, store, params, error, payload }) {
    const page = await app.$axios.get(
      `${store.state.wordpressAPI}/wp/v2/pages?slug=${params.pathMatch}&_embed`
    )
    store.commit('setPage', page.data[0])
  }
}
</script>
