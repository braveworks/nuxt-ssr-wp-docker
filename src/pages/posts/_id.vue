<template lang="pug">
section
  div.container
    article
      h1.title(v-html="article.title.rendered")
      time(v-html="article.date.slice(0, 10)")
      div(v-html="article.content.rendered")
    p
      nuxt-link(to="/")
        | index
</template>

<script>
export default {
  head() {
    return {
      title: this.article.title.rendered || '',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.yoast_wpseo_metadesc || ''
        }
      ]
    }
  },
  computed: {
    article() {
      return this.$store.state.article
    }
  },
  async asyncData({ app, params, store, error, payload }) {
    const article = await app.$axios.get(
      `${store.state.wordpressAPI}/wp/v2/posts/${params.id}?_embed`
    )
    store.commit('setArticle', article.data)
  }
}
</script>
