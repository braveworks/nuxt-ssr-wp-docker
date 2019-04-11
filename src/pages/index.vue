<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        app
      </h1>
      <h2 class="subtitle">
        My dazzling Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green"
          >Documentation</a
        >
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
          >GitHub</a
        >
        <a href="http://localhost:5000" target="_blank" class="button--grey"
          >test</a
        >
      </div>
      <div>
        <article v-for="post in posts" :key="post.id" class="article">
          <h1 class="title">
            <nuxt-link
              :to="{ path: `/posts/${post.id}/`, params: { id: post.id } }"
            >
              {{ post.title.rendered }}
            </nuxt-link>
          </h1>
          <time>{{ post.date.slice(0, 10) }}</time>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return { posts: [] }
  },
  async asyncData({ app, store, params }) {
    const posts = await app.$axios.get(
      `${store.state.wordpressAPI}/wp/v2/posts?orderby=date&per_page=10&_embed`
    )
    return { posts: posts.data }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
