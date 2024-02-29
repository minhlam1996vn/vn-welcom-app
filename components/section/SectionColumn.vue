<template>
  <ul class="ps-0 mb-0">
    <li
      class="pb-4"
      :class="{
        'border-bottom': index !== articlesNew.length - 1,
        'mb-4': index !== articlesNew.length - 1,
      }"
      v-for="(article, index) in articlesNew"
      :key="article.id"
    >
      <div class="row">
        <div class="col-12 col-md-4 pe-md-2">
          <nuxt-link
            class="mb-3 mb-sm-0 d-block ratio ratio-16x9 overflow-hidden rounded-3 shadow-lg"
            :to="`/${article.category.category_slug}/${article.article_slug}.html`"
          >
            <img
              class="w-100 object-fit-cover"
              :src="article.article_thumbnail"
              :alt="article.article_title"
            />
          </nuxt-link>
        </div>
        <div class="col-12 col-md-8">
          <h3 class="h5">
            <nuxt-link
              class="text-line-clamp-2 text-dark text-decoration-none text-hover"
              :to="`/${article.category.category_slug}/${article.article_slug}.html`"
            >
              {{ article.article_title }}
            </nuxt-link>
          </h3>
          <p class="text-line-clamp-2">
            {{ article.article_description }}
          </p>
          <nuxt-link
            class="d-block text-muted text-decoration-none"
            :to="`/${article.category.category_slug}`"
          >
            {{ article.category.category_name }}
          </nuxt-link>
        </div>
      </div>
    </li>
    <li class="d-sm-none border-bottom"></li>
  </ul>
</template>

<script>
export default {
  props: {
    articlesNew: {
      type: Array,
      default: [],
    },
  },
};
</script>
