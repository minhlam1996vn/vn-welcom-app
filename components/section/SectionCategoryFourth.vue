<template>
  <div>
    <div class="mb-4">
      <div class="d-flex gap-4 align-items-center">
        <h2 class="fw-bold mb-0 text-nowrap">
          <font-awesome-icon :icon="['fas', 'box']" />
          <a href="#!" class="text-decoration-none text-dark">
            {{ categoryInfo.category_name }}
          </a>
        </h2>
        <nav
          v-if="categoryInfo.categoriesChild.length !== 0"
          class="d-none d-sm-block overflow-x-auto overflow-y-hidden"
        >
          <ul class="d-flex gap-3 align-items-center h5 ps-0 mb-0 custom__fw-5">
            <li class="text-nowrap">
              <a href="#!" class="text-decoration-none text-muted">
                Made by FPT
              </a>
            </li>
            <li class="text-nowrap">
              <a href="#!" class="text-decoration-none text-muted">
                Chuyển đổi số
              </a>
            </li>
            <li class="text-nowrap">
              <a href="#!" class="text-decoration-none text-muted">
                Công nghệ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <ul class="row mb-0 p-0">
      <li
        class="col-md col-12 mb-sm-0"
        :class="{ 'mb-4': index !== 2 }"
        v-for="(article, index) in categoryInfo.articles.slice(0, 3)"
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
          <p class="text-line-clamp-2">
            {{ article.article_description }}
          </p>
          <nuxt-link
            class="d-block mb-3 text-muted text-decoration-none"
            :to="`/${article.category.category_slug}`"
          >
            {{ article.category.category_name }}
          </nuxt-link>
          <div
            class="d-sm-none"
            :class="{ 'border-bottom': index !== 2 }"
          ></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    categoryInfo: {
      type: Object,
      default: {},
    },
  },
};
</script>
