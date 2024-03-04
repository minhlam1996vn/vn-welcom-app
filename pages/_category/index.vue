<template>
  <div>
    <section class="pt-sm-4 pt-3">
      <SectionArticleByCategory
        :articles="articlesByCategory.articles"
        :category="categoryDetail"
      />
      <div class="container pb-4">
        <div class="border-bottom"></div>
      </div>
    </section>

    <section v-if="articlesByCategory.articles.length >= 4">
      <div class="container mb-5">
        <div class="row">
          <div class="col-12 col-md-9">
            <SectionArticleByCategoryColumn
              class="mb-4"
              :articles-new="
                articlesByCategory.articles.slice(
                  3,
                  articlesByCategory.articles.length
                )
              "
            />
            <div
              class="w-100 text-center"
              v-if="
                articlesByCategory.pager.current_page !==
                articlesByCategory.pager.last_page
              "
            >
              <!-- PC -->
              <div class="d-none d-sm-block">
                <button
                  type="button"
                  @click="
                    loadMoreArticles(articlesByCategory.pager.current_page + 1)
                  "
                  class="btn btn-outline-success rounded-0"
                >
                  Xem thêm
                </button>
              </div>
              <!-- Mobile -->
              <div class="d-sm-none d-block">
                <button
                  type="button"
                  @click="
                    loadMoreArticles(articlesByCategory.pager.current_page + 1)
                  "
                  class="btn border-success text-success rounded-0 w-100"
                >
                  Xem thêm
                </button>
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
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import SectionBanner from "../../components/section/SectionBanner.vue";
import SectionArticleByCategory from "../../components/section/SectionArticleByCategory.vue";
import SectionArticleByCategoryColumn from "../../components/section/SectionArticleByCategoryColumn.vue";

export default {
  validate({ params, query }) {
    // if (!params.slug || !params.slug.trim()) {
    //   return false;
    // }
    return true;
  },
  components: {
    SectionArticleByCategory,
    SectionArticleByCategoryColumn,
    SectionBanner,
  },
  computed: {
    ...mapGetters({
      articlesByCategory: "article/getArticlesByCategory",
      categoryDetail: "category/getCategoryDetail",
    }),
  },
  methods: {
    loadMoreArticles(page) {
      this.$store.dispatch("article/getListArticlesByCategory", {
        category_slug: this.$route.params.category,
        page: page,
      });
    },
  },
  async asyncData({ params, store }) {
    await Promise.all([
      store.dispatch("category/getListCategoriesParent"),
      store.dispatch("article/getListArticlesByCategory", {
        category_slug: params.category,
      }),
      store.dispatch("category/getCategoryDetail", params.category),
    ]);
  },
};
</script>
