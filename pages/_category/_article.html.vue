<template>
  <div style="background-color: #f0f0f0">
    <!-- PC -->
    <div class="d-none d-sm-block">
      <div class="container py-sm-4">
        <div class="row">
          <div class="col-12 col-md-9">
            <div class="card rounded-0 border-0 px-4">
              <div class="card-header pt-3 pb-0 border-0 bg-white">
                <div class="card-title mb-0">
                  <nav aria-label="breadcrumb">
                    <ol class="m-0 p-0">
                      <li>
                        <nuxt-link
                          class="text-decoration-none text-muted text-hover"
                          :to="`/${articleDetail.category.category_slug}`"
                        >
                          {{ articleDetail.category.category_name }}
                        </nuxt-link>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div class="card-body">
                <h1 class="h3 fw-bold">
                  {{ articleDetail.article_title }}
                </h1>
                <span class="text-muted">
                  {{ articleDetail.publication_date }}
                </span>
                <div class="border-bottom my-3"></div>
                <p class="fw-bold">
                  {{ articleDetail.article_description }}
                </p>
                <div
                  class="ck-content"
                  v-html="articleDetail.article_content"
                ></div>
              </div>

              <div class="card-footer pb-3 pt-0 border-0 bg-white">
                <div class="border-bottom mb-3"></div>
                <div v-if="articleDetail.tags.length !== 0">
                  <span>Tags: </span>
                  <span
                    v-for="tag in articleDetail.tags"
                    :key="tag.id"
                    class="btn btn-sm rounded-4 border border-success text-success mx-1"
                  >
                    #{{ tag.tag_name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="d-none d-sm-block col-12 col-md-3 mt-md-0 mt-4">
            <aside class="position-sticky z-1 custom__top-5">
              <SectionBanner />
            </aside>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="d-block d-sm-none">
      <div class="card rounded-0 border-0">
        <div class="card-header py-2 border-0 bg-light">
          <div class="card-title mb-0">
            <nav aria-label="breadcrumb">
              <ol class="m-0 p-0">
                <li>
                  <nuxt-link
                    class="text-decoration-none text-muted text-hover"
                    :to="`/${articleDetail.category.category_slug}`"
                  >
                    {{ articleDetail.category.category_name }}
                  </nuxt-link>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="card-body">
          <h1 class="h3 fw-bold">
            {{ articleDetail.article_title }}
          </h1>
          <span class="text-muted">
            {{ articleDetail.publication_date }}
          </span>
          <div class="border-bottom my-3"></div>
          <p class="fw-bold">
            {{ articleDetail.article_description }}
          </p>
          <div class="ck-content" v-html="articleDetail.article_content"></div>
        </div>

        <div class="card-footer pb-3 pt-0 border-0 bg-white">
          <div class="border-bottom mb-3"></div>
          <div v-if="articleDetail.tags.length !== 0">
            <span>Tags: </span>
            <span
              v-for="tag in articleDetail.tags"
              :key="tag.id"
              class="btn btn-sm rounded-4 border border-success text-success mx-1"
            >
              #{{ tag.tag_name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import SectionBanner from "../../components/section/SectionBanner.vue";

export default {
  validate({ params, query }) {
    console.log(params);
    // if (!params.slug || !params.slug.trim()) {
    //   return false;
    // }
    return true;
  },
  components: {
    SectionBanner,
  },
  computed: {
    ...mapGetters({
      articleDetail: "article/getArticleDetail",
    }),
  },
  async asyncData({ params, store }) {
    await Promise.all([
      store.dispatch("category/getListCategoriesParent"),
      store.dispatch("article/getArticleDetail", params.article),
    ]);
  },
};
</script>
