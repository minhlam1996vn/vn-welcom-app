<template>
  <div>
    <!-- section-feature -->
    <section class="pt-sm-4">
      <SectionCover :articles-cover="articlesCover" />
      <div class="container">
        <SectionThreeRow :articles-three="articlesThree" />
        <div class="d-none d-sm-block border-bottom"></div>
      </div>
    </section>

    <!-- section article -->
    <section>
      <div class="container py-4">
        <div class="row">
          <div class="col-12 col-md-9">
            <SectionColumn :articles-new="articlesNew" />
          </div>
          <div class="d-none d-sm-block col-12 col-md-3 mt-md-0 mt-4">
            <aside class="position-sticky z-1 custom__top-5">
              <SectionBanner />
            </aside>
          </div>
        </div>
      </div>
      <div class="d-none d-sm-block container pb-4">
        <div class="border-bottom"></div>
      </div>
    </section>

    <!-- Category 1 -->
    <section>
      <div class="container">
        <SectionCategoryFirst :category-info="categoriesPopular[0]" />
      </div>
      <div class="container pb-4">
        <div class="border-bottom"></div>
      </div>
    </section>

    <!-- Category 2 -->
    <section>
      <div class="container">
        <SectionCategorySecond :category-info="categoriesPopular[1]" />
      </div>
      <div class="d-none d-sm-block container pb-4">
        <div class="border-bottom"></div>
      </div>
    </section>

    <!-- Category 3 -->
    <section>
      <div class="container">
        <SectionCategoryThird :category-info="categoriesPopular[2]" />
      </div>
      <div class="d-none d-sm-block container pb-4">
        <div class="border-bottom"></div>
      </div>
    </section>

    <!-- Category 4 -->
    <section>
      <div class="container">
        <SectionCategoryFourth :category-info="categoriesPopular[3]" />
      </div>
      <div class="pb-4"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import SectionCover from "../components/section/SectionCover.vue";
import SectionThreeRow from "../components/section/SectionThreeRow.vue";
import SectionColumn from "../components/section/SectionColumn.vue";
import SectionBanner from "../components/section/SectionBanner.vue";
import SectionCategoryFirst from "../components/section/SectionCategoryFirst.vue";
import SectionCategorySecond from "../components/section/SectionCategorySecond.vue";
import SectionCategoryThird from "../components/section/SectionCategoryThird.vue";
import SectionCategoryFourth from "../components/section/SectionCategoryFourth.vue";

export default {
  components: {
    SectionCover,
    SectionThreeRow,
    SectionColumn,
    SectionBanner,
    SectionCategoryFirst,
    SectionCategorySecond,
    SectionCategoryThird,
    SectionCategoryFourth,
  },
  computed: {
    ...mapGetters({
      articlesCover: "article/getArticlesCover",
      articlesThree: "article/getArticlesThree",
      articlesNew: "article/getArticlesNew",
      categoriesPopular: "category/getCategoriesPopular",
    }),
  },
  async asyncData({ params, store }) {
    await Promise.all([
      store.dispatch("category/getListCategoriesParent"),
      store.dispatch("category/getListCategoriesPopular"),
      store.dispatch("article/getListArticlesNew"),
    ]);
  },
};
</script>
