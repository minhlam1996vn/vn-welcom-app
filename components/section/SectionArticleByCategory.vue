<template>
  <div>
    <div class="mb-sm-4 mb-3">
      <div class="container">
        <div class="d-flex gap-4 align-items-center">
          <h2 class="fw-bold mb-0 text-nowrap">
            <font-awesome-icon
              :icon="['fas', 'pager']"
              class="text-success me-1"
            />
            <nuxt-link
              class="text-decoration-none text-dark text-hover"
              :to="`/${category.category_slug}`"
            >
              {{ category.category_name }}
            </nuxt-link>
          </h2>
          <nav
            v-if="category.categoriesChild.length !== 0"
            class="overflow-x-auto overflow-y-hidden"
          >
            <ul
              class="d-flex gap-3 align-items-center h5 ps-0 mb-0 custom__fw-5"
            >
              <li
                class="text-nowrap"
                v-for="categoryChild in category.categoriesChild"
                :key="categoryChild.id"
              >
                <nuxt-link
                  class="text-decoration-none text-muted text-hover"
                  :to="`/${categoryChild.category_slug}`"
                >
                  {{ categoryChild.category_name }}
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <!-- PC -->
    <div class="container d-none d-sm-block">
      <div class="row">
        <div class="col-12 col-md-8 mb-md-0 mb-4">
          <div>
            <nuxt-link
              class="d-block ratio ratio-16x9 overflow-hidden mb-3 rounded-3 shadow-lg"
              :to="`/${articles[0].category.category_slug}/${articles[0].article_slug}.html`"
            >
              <img
                class="w-100 object-fit-cover"
                :src="articles[0].article_thumbnail"
                :alt="articles[0].article_title"
              />
            </nuxt-link>
            <h3 class="h5">
              <nuxt-link
                class="text-line-clamp-2 text-dark text-decoration-none text-hover"
                :to="`/${articles[0].category.category_slug}/${articles[0].article_slug}.html`"
              >
                {{ articles[0].article_title }}
              </nuxt-link>
            </h3>
            <p class="text-line-clamp-2">
              {{ articles[0].article_description }}
            </p>
            <nuxt-link
              class="d-block mb-3 text-muted text-decoration-none text-hover"
              :to="`/${articles[0].category.category_slug}`"
            >
              {{ articles[0].category.category_name }}
            </nuxt-link>
          </div>
          <div class="border-bottom d-block d-sm-none"></div>
        </div>
        <div class="col-12 col-md-4">
          <ul class="ps-0">
            <li
              class="mb-4"
              :class="{ 'border-bottom': index !== 1 }"
              v-for="(article, index) in articles.slice(1, 3)"
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
                  class="d-block mb-3 text-muted text-decoration-none text-hover"
                  :to="`/${article.category.category_slug}`"
                >
                  {{ article.category.category_name }}
                </nuxt-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Mobile -->
    <div class="d-block d-sm-none">
      <div class="mb-4">
        <div>
          <nuxt-link
            class="d-block ratio ratio-16x9 overflow-hidden mb-3 shadow-lg"
            :to="`/${articles[0].category.category_slug}/${articles[0].article_slug}.html`"
          >
            <img
              class="w-100 object-fit-cover"
              :src="articles[0].article_thumbnail"
              :alt="articles[0].article_title"
            />
          </nuxt-link>
          <div class="container">
            <h3 class="h5">
              <nuxt-link
                class="text-line-clamp-2 text-dark text-decoration-none text-hover"
                :to="`/${articles[0].category.category_slug}/${articles[0].article_slug}.html`"
              >
                {{ articles[0].article_title }}
              </nuxt-link>
            </h3>
            <nuxt-link
              class="d-block mb-3 text-muted text-decoration-none"
              :to="`/${articles[0].category.category_slug}`"
            >
              {{ articles[0].category.category_name }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="container">
        <ul class="row p-0 mb-0">
          <li
            class="col-6"
            v-for="article in articles.slice(1, 3)"
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
              <nuxt-link
                class="d-block mb-3 text-muted text-decoration-none"
                :to="`/${article.category.category_slug}.html`"
              >
                {{ article.category.category_name }}
              </nuxt-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      default: [],
    },
    category: {
      type: Object,
      default: {},
    },
  },
};
</script>
