<template>
  <div>
    <!-- Display on PC -->
    <div class="d-none d-sm-block container">
      <div class="row mb-4">
        <div class="col-12 col-md-8 mb-md-0 mb-4">
          <div
            class="h-100 bg-secondary position-relative rounded-3 overflow-hidden shadow-lg image__cover"
          >
            <img
              class="w-100 h-100 rounded position-absolute object-fit-cover"
              :src="articlesCover[0].article_thumbnail"
              :alt="articlesCover[0].article_title"
            />
            <div class="p-3 p-md-4 z-3 position-absolute bottom-0">
              <h2>
                <nuxt-link
                  class="text-line-clamp-2 text-light text-decoration-none fw-bold text-hover"
                  :to="`/${articlesCover[0].category.category_slug}/${articlesCover[0].article_slug}.html`"
                >
                  {{ articlesCover[0].article_title }}
                </nuxt-link>
              </h2>
              <nuxt-link
                class="text-light text-decoration-none fw-bold"
                :to="`/${articlesCover[0].category.category_slug}`"
              >
                {{ articlesCover[0].category.category_name }}
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <ul class="p-0 mb-0">
            <li
              class="mb-4"
              :class="{ 'border-bottom': index !== 3 }"
              v-for="(article, index) in articlesCover.slice(1)"
              :key="article.id"
            >
              <div>
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

    <!-- Display on Mobile -->
    <div class="d-block d-sm-none">
      <div class="mb-4">
        <div class="mb-4">
          <div>
            <nuxt-link
              class="d-block ratio ratio-16x9 overflow-hidden mb-3 shadow-lg"
              :to="`/${articlesCover[0].category.category_slug}/${articlesCover[0].article_slug}.html`"
            >
              <img
                class="w-100 object-fit-cover"
                :src="articlesCover[0].article_thumbnail"
                :alt="articlesCover[0].article_title"
              />
            </nuxt-link>
            <div class="container">
              <div class="border-bottom">
                <h3 class="h4">
                  <nuxt-link
                    class="text-line-clamp-2 text-dark text-decoration-none text-hover"
                    :to="`/${articlesCover[0].category.category_slug}/${articlesCover[0].article_slug}.html`"
                  >
                    {{ articlesCover[0].article_title }}
                  </nuxt-link>
                </h3>
                <p class="text-line-clamp-2">
                  {{ articlesCover[0].article_description }}
                </p>
                <nuxt-link
                  class="d-block mb-3 text-muted text-decoration-none"
                  :to="`/${articlesCover[0].category.category_slug}`"
                >
                  {{ articlesCover[0].category.category_name }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <ul class="mb-0 container">
          <li
            class="mb-4"
            v-for="article in articlesCover.slice(1)"
            :key="article.id"
          >
            <div class="border-bottom">
              <div class="row">
                <div class="col-5 pe-0">
                  <nuxt-link
                    class="d-block mb-3 ratio ratio-16x9 overflow-hidden rounded-3 shadow-lg"
                    :to="`/${article.category.category_slug}/${article.article_slug}.html`"
                  >
                    <img
                      class="w-100 object-fit-cover"
                      :src="article.article_thumbnail"
                      :alt="article.article_title"
                    />
                  </nuxt-link>
                </div>
                <div class="col-7">
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
                    :to="`/${article.category.category_slug}`"
                  >
                    {{ article.category.category_name }}
                  </nuxt-link>
                </div>
              </div>
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
    articlesCover: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
.image__cover {
  min-height: 30rem;
}
</style>
