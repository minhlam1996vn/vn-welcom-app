<template>
  <div>
    <div class="mb-4">
      <div class="d-flex gap-4 align-items-center">
        <h2 class="fw-bold mb-0 text-nowrap">
          <font-awesome-icon
            :icon="['fas', 'pager']"
            class="text-success me-1"
          />
          <a href="#!" class="text-decoration-none text-dark text-hover">
            {{ categoryInfo.category_name }}
          </a>
        </h2>
        <nav
          v-if="categoryInfo.categoriesChild.length !== 0"
          class="d-none d-sm-block overflow-x-auto overflow-y-hidden"
        >
          <ul class="d-flex gap-3 align-items-center h5 ps-0 mb-0 custom__fw-5">
            <li
              class="text-nowrap"
              v-for="category in categoryInfo.categoriesChild"
              :key="category.id"
            >
              <nuxt-link
                class="text-decoration-none text-muted text-hover"
                :to="`/${categoryInfo.articles[0].category.category_slug}`"
              >
                {{ categoryInfo.articles[0].category.category_name }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-4">
        <ul class="ps-0">
          <li
            class="mb-4"
            :class="{ 'border-bottom': index !== 1 }"
            v-for="(article, index) in categoryInfo.articles.slice(1, 3)"
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
              <p class="text-line-clamp-2 d-block d-sm-none">
                {{ article.article_description }}
              </p>
              <nuxt-link
                class="d-block mb-3 text-muted text-decoration-none"
                :to="`/${article.category.category_slug}`"
              >
                {{ article.category.category_name }}
              </nuxt-link>
            </div>
            <div
              class="d-block d-sm-none"
              :class="{ 'border-bottom': index === 1 }"
            ></div>
          </li>
        </ul>
      </div>
      <div class="col-12 col-md-8 mb-md-0 mb-4">
        <div v-if="categoryInfo.articles[0]">
          <nuxt-link
            class="d-block ratio ratio-16x9 overflow-hidden mb-3 rounded-3 shadow-lg"
            :to="`/${categoryInfo.articles[0].category.category_slug}/${categoryInfo.articles[0].article_slug}.html`"
          >
            <img
              class="w-100 object-fit-cover"
              :src="categoryInfo.articles[0].article_thumbnail"
              :alt="categoryInfo.articles[0].article_title"
            />
          </nuxt-link>
          <h3 class="h5">
            <nuxt-link
              class="text-line-clamp-2 text-dark text-decoration-none text-hover"
              :to="`/${categoryInfo.articles[0].category.category_slug}/${categoryInfo.articles[0].article_slug}.html`"
            >
              {{ categoryInfo.articles[0].article_title }}
            </nuxt-link>
          </h3>
          <p class="text-line-clamp-2">
            {{ categoryInfo.articles[0].article_description }}
          </p>
          <nuxt-link
            class="d-block mb-3 text-muted text-decoration-none"
            :to="`/${categoryInfo.articles[0].category.category_slug}`"
          >
            {{ categoryInfo.articles[0].category.category_name }}
          </nuxt-link>
        </div>
        <div class="d-block d-sm-none border-bottom"></div>
      </div>
    </div>
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
