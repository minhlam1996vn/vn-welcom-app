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
    <div class="row mb-4">
      <div
        v-if="categoryInfo.articles[0]"
        class="col-12 col-md mb-md-0 mb-4 d-none d-sm-block"
      >
        <div
          class="h-100 bg-secondary position-relative rounded-3 overflow-hidden shadow-lg"
        >
          <img
            class="w-100 h-100 rounded position-absolute object-fit-cover"
            :src="categoryInfo.articles[0].article_thumbnail"
            :alt="categoryInfo.articles[0].article_title"
          />
          <div class="p-3 p-md-4 z-3 position-absolute bottom-0">
            <h2>
              <nuxt-link
                class="text-line-clamp-2 shadow-lg text-light text-decoration-none fw-bold text-hover"
                :to="`/${categoryInfo.category_slug}/${categoryInfo.articles[0].article_slug}.html`"
              >
                {{ categoryInfo.articles[0].article_title }}
              </nuxt-link>
            </h2>
            <nuxt-link
              class="shadow-lg text-light text-decoration-none fw-bold"
              :to="`/${categoryInfo.category_slug}`"
            >
              {{ categoryInfo.category_name }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="col-12 col-md mb-md-0 mb-4">
        <ul class="ps-0 mb-0">
          <li v-if="categoryInfo.articles[1]" class="mb-4">
            <div class="border-bottom">
              <nuxt-link
                class="d-block ratio ratio-16x9 overflow-hidden mb-3 rounded-3 shadow-lg"
                :to="`/${categoryInfo.articles[1].article_slug}.html`"
              >
                <img
                  class="w-100 object-fit-cover"
                  :src="categoryInfo.articles[1].article_thumbnail"
                  :alt="categoryInfo.articles[1].article_title"
                />
              </nuxt-link>
              <h3 class="h5">
                <nuxt-link
                  class="text-line-clamp-2 text-dark text-decoration-none text-hover"
                  :to="`/${categoryInfo.articles[1].article_slug}.html`"
                >
                  {{ categoryInfo.articles[1].article_title }}
                </nuxt-link>
              </h3>
              <nuxt-link
                class="d-block mb-3 text-muted text-decoration-none"
                :to="`/${categoryInfo.category_slug}`"
              >
                {{ categoryInfo.category_name }}
              </nuxt-link>
            </div>
          </li>
          <li v-if="categoryInfo.articles[2]" class="mb-4">
            <div class="row">
              <div class="col-6 col-md-4 pe-0 pe-md-2 mb-3">
                <nuxt-link
                  class="d-block ratio ratio-16x9 overflow-hidden rounded-3 shadow-lg"
                  :to="`/${categoryInfo.articles[2].article_slug}.html`"
                >
                  <img
                    class="w-100 object-fit-cover"
                    :src="categoryInfo.articles[2].article_thumbnail"
                    :alt="categoryInfo.articles[2].article_title"
                  />
                </nuxt-link>
              </div>
              <div class="col-6 col-md-8">
                <h3 class="h5">
                  <nuxt-link
                    class="text-line-clamp-2 text-dark text-decoration-none text-hover"
                    :to="`/${categoryInfo.articles[2].article_slug}.html`"
                  >
                    {{ categoryInfo.articles[2].article_title }}
                  </nuxt-link>
                </h3>
                <nuxt-link
                  class="d-block mb-3 text-muted text-decoration-none"
                  :to="`/${categoryInfo.category_slug}`"
                >
                  {{ categoryInfo.category_name }}
                </nuxt-link>
              </div>
              <div class="col-12">
                <div class="border-bottom"></div>
              </div>
            </div>
          </li>
          <li v-if="categoryInfo.articles[3]">
            <div class="row">
              <div class="col-6 col-md-4 pe-0 pe-md-2 mb-3">
                <nuxt-link
                  class="d-block ratio ratio-16x9 overflow-hidden rounded-3 shadow-lg"
                  :to="`/${categoryInfo.articles[3].article_slug}.html`"
                >
                  <img
                    class="w-100 object-fit-cover"
                    :src="categoryInfo.articles[3].article_thumbnail"
                    :alt="categoryInfo.articles[3].article_title"
                  />
                </nuxt-link>
              </div>
              <div class="col-6 col-md-8">
                <h3 class="h5">
                  <nuxt-link
                    class="text-line-clamp-2 text-dark text-decoration-none text-hover"
                    :to="`/${categoryInfo.articles[3].article_slug}.html`"
                  >
                    {{ categoryInfo.articles[3].article_title }}
                  </nuxt-link>
                </h3>
                <nuxt-link
                  class="d-block mb-3 text-muted text-decoration-none"
                  :to="`/${categoryInfo.category_slug}`"
                >
                  {{ categoryInfo.category_name }}
                </nuxt-link>
              </div>
              <div class="d-block d-sm-none col-12">
                <div class="border-bottom"></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="col-12 col-md">
        <ul class="ps-0 mb-0">
          <li v-if="categoryInfo.articles[4]" class="mb-4">
            <div class="border-bottom">
              <nuxt-link
                class="d-block ratio ratio-16x9 overflow-hidden mb-3 rounded-3 shadow-lg"
                :to="`/${categoryInfo.articles[4].article_slug}.html`"
              >
                <img
                  class="w-100 object-fit-cover"
                  :src="categoryInfo.articles[4].article_thumbnail"
                  :alt="categoryInfo.articles[4].article_title"
                />
              </nuxt-link>
              <h3 class="h5">
                <nuxt-link
                  class="text-line-clamp-2 text-dark text-decoration-none text-hover"
                  :to="`/${categoryInfo.articles[4].article_slug}.html`"
                >
                  {{ categoryInfo.articles[4].article_title }}
                </nuxt-link>
              </h3>
              <nuxt-link
                class="d-block mb-3 text-muted text-decoration-none"
                :to="`/${categoryInfo.category_slug}`"
              >
                {{ categoryInfo.category_name }}
              </nuxt-link>
            </div>
          </li>
          <li v-if="categoryInfo.articles[5]" class="mb-4">
            <div class="row">
              <div class="col-6 col-md-4 pe-0 pe-md-2 mb-3">
                <nuxt-link
                  class="d-block ratio ratio-16x9 overflow-hidden rounded-3 shadow-lg"
                  :to="`/${categoryInfo.articles[5].article_slug}.html`"
                >
                  <img
                    class="w-100 object-fit-cover"
                    :src="categoryInfo.articles[5].article_thumbnail"
                    :alt="categoryInfo.articles[5].article_title"
                  />
                </nuxt-link>
              </div>
              <div class="col-6 col-md-8">
                <h3 class="h5">
                  <nuxt-link
                    class="text-line-clamp-2 text-dark text-decoration-none text-hover"
                    :to="`/${categoryInfo.articles[5].article_slug}.html`"
                  >
                    {{ categoryInfo.articles[5].article_title }}
                  </nuxt-link>
                </h3>
                <nuxt-link
                  class="d-block mb-3 text-muted text-decoration-none"
                  :to="`/${categoryInfo.category_slug}`"
                >
                  {{ categoryInfo.category_name }}
                </nuxt-link>
              </div>
              <div class="col-12">
                <div class="border-bottom"></div>
              </div>
            </div>
          </li>
          <li v-if="categoryInfo.articles[6]">
            <div class="row">
              <div class="col-6 col-md-4 pe-0 pe-md-2 mb-3">
                <nuxt-link
                  class="d-block ratio ratio-16x9 overflow-hidden rounded-3 shadow-lg"
                  :to="`/${categoryInfo.articles[6].article_slug}.html`"
                >
                  <img
                    class="w-100 object-fit-cover"
                    :src="categoryInfo.articles[6].article_thumbnail"
                    :alt="categoryInfo.articles[6].article_title"
                  />
                </nuxt-link>
              </div>
              <div class="col-6 col-md-8">
                <h3 class="h5">
                  <nuxt-link
                    class="text-line-clamp-2 text-dark text-decoration-none text-hover"
                    :to="`/${categoryInfo.articles[6].article_slug}.html`"
                  >
                    {{ categoryInfo.articles[6].article_title }}
                  </nuxt-link>
                </h3>
                <nuxt-link
                  class="d-block mb-3 text-muted text-decoration-none"
                  :to="`/${categoryInfo.category_slug}`"
                >
                  {{ categoryInfo.category_name }}
                </nuxt-link>
              </div>
              <div class="d-block d-sm-none col-12">
                <div class="border-bottom"></div>
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
    categoryInfo: {
      type: Object,
      default: {},
    },
  },
};
</script>
