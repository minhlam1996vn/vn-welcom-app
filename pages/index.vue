<template>
  <div>
    <!-- section-feature -->
    <section v-if="articlesCover.length !== 0" class="pt-sm-4 pb-sm-4">
      <SectionCover :articles-cover="articlesCover" />
      <div class="container">
        <SectionThreeRow
          v-if="articlesThree.length !== 0"
          :articles-three="articlesThree"
        />
        <div class="d-none d-sm-block border-bottom"></div>
      </div>
    </section>

    <!-- section article -->
    <section v-if="articlesNew.length !== 0">
      <div class="container py-4 pt-sm-0">
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
    <section
      v-if="categoriesPopular[0] && categoriesPopular[0].articles.length >= 3"
    >
      <div class="container">
        <SectionCategoryFirst :category-info="categoriesPopular[0]" />
      </div>
      <div class="container pb-4">
        <div class="border-bottom"></div>
      </div>
    </section>

    <!-- Category 2 -->
    <section
      v-if="categoriesPopular[1] && categoriesPopular[1].articles.length >= 7"
    >
      <div class="container">
        <SectionCategorySecond :category-info="categoriesPopular[1]" />
      </div>
      <div class="d-none d-sm-block container pb-4">
        <div class="border-bottom"></div>
      </div>
    </section>

    <!-- Category 3 -->
    <section
      v-if="categoriesPopular[2] && categoriesPopular[2].articles.length >= 3"
    >
      <div class="container">
        <SectionCategoryThird :category-info="categoriesPopular[2]" />
      </div>
      <div class="d-none d-sm-block container pb-4">
        <div class="border-bottom"></div>
      </div>
    </section>

    <!-- Category 4 -->
    <section
      v-if="categoriesPopular[3] && categoriesPopular[3].articles.length >= 3"
    >
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
