<template>
  <section>
    <!-- section-feature -->
    <section>
      <SectionCover :articles-cover="articlesCover" />
      <div class="container pt-1">
        <SectionThreeRow />
      </div>
    </section>

    <!-- section article -->
    <!-- <section>
      <div class="container py-4 py-md-5 border-bottom">
        <b-row>
          <b-col cols="12" md="9">
            <SectionColumn />
          </b-col>
          <b-col cols="12" md="3" class="mt-md-0 mt-4">
            <aside class="position-sticky z-1 custom__top-5">
              <SectionBanner />
            </aside>
          </b-col>
        </b-row>
      </div>
    </section> -->

    <!-- Category 1 -->
    <!-- <section>
      <div class="container py-4 py-md-5 border-bottom">
        <SectionCategoryFirst />
      </div>
    </section> -->

    <!-- Category 2 -->
    <!-- <section>
      <div class="container py-4 py-md-5">
        <SectionCategorySecond />
      </div>
    </section> -->
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import SectionCover from "../components/section/SectionCover.vue";
import SectionThreeRow from "../components/section/SectionThreeRow.vue";
import SectionColumn from "../components/section/SectionColumn.vue";
import SectionBanner from "../components/section/SectionBanner.vue";
import SectionCategoryFirst from "../components/section/SectionCategoryFirst.vue";
import SectionCategorySecond from "../components/section/SectionCategorySecond.vue";

export default {
  components: {
    SectionCover,
    SectionThreeRow,
    SectionColumn,
    SectionBanner,
    SectionCategoryFirst,
    SectionCategorySecond,
  },
  computed: {
    ...mapGetters({
      articlesCover: "article/getArticlesCover",
    }),
  },
  async asyncData({ params, store }) {
    await Promise.all([
      store.dispatch("category/getListCategoriesParent"),
      store.dispatch("category/getListCategoriesPopular"),
      store.dispatch("article/getListArticlesPopular"),
      store.dispatch("article/getListArticlesNew"),
    ]);
  },
};
</script>
