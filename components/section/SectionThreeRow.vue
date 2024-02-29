<template>
  <ul class="row mb-0 p-0">
    <li
      class="col-md col-12 mb-sm-0"
      :class="{ 'mb-4': index !== 2 }"
      v-for="(article, index) in articlesThree"
      :key="article.id"
    >
      <div>
        <nuxt-link
          class="d-block ratio ratio-16x9 overflow-hidden mb-3 rounded-3 shadow-lg"
          :to="`/${article.category.category_slug}/${article.article_slug}.html`"
        >
          <img
            class="w-100 object-fit-cover"
            :src="article.article_thumbnail"
            :alt="article.article_title"
          />
        </nuxt-link>
        <h3 class="h5">
          <nuxt-link
            class="text-line-clamp-2 text-dark text-decoration-none text-hover"
            :to="`/${article.category.category_slug}/${article.article_slug}.html`"
          >
            {{ article.article_title }}
          </nuxt-link>
        </h3>
        <p class="d-sm-none text-line-clamp-2">
          {{ article.article_description }}
        </p>
        <nuxt-link
          class="d-block mb-3 text-muted text-decoration-none"
          :to="`/${article.category.category_slug}`"
        >
          {{ article.category.category_name }}
        </nuxt-link>
        <div class="d-sm-none border-bottom"></div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    articlesThree: {
      type: Array,
      default: [],
    },
  },
};
</script>
