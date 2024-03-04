<template>
  <div>
    <section class="pt-sm-4 pt-3">
      <!-- <div class="container"> -->
      <SectionArticleByCategory
        :articles="articlesByCategory.articles"
        :category="categoryDetail"
      />
      <!-- </div> -->
      <div class="container pb-4">
        <div class="border-bottom"></div>
      </div>
    </section>

    <section v-if="articlesByCategory.articles.length >= 4">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-9">
            <SectionColumn :articles-new="articlesByCategory.articles" />
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

import SectionColumn from "../../components/section/SectionColumn.vue";
import SectionBanner from "../../components/section/SectionBanner.vue";
import SectionArticleByCategory from "../../components/section/SectionArticleByCategory.vue";

export default {
  validate({ params, query }) {
    console.log(params);
    // if (!params.slug || !params.slug.trim()) {
    //   return false;
    // }
    return true;
  },
  components: {
    SectionArticleByCategory,
    SectionColumn,
    SectionBanner,
  },
  computed: {
    ...mapGetters({
      articlesByCategory: "article/getArticlesByCategory",
      categoryDetail: "category/getCategoryDetail",
    }),
  },
  async asyncData({ params, store }) {
    await Promise.all([
      store.dispatch("category/getListCategoriesParent"),
      store.dispatch("article/getListArticlesByCategory", params.category),
      store.dispatch("category/getCategoryDetail", params.category),
    ]);
  },
};
</script>
