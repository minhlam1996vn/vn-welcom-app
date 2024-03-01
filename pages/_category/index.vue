<template>
  <div>
    <h1>Danh mục bài viết</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import SectionCover from "../../components/section/SectionCover.vue";
import SectionThreeRow from "../../components/section/SectionThreeRow.vue";
import SectionColumn from "../../components/section/SectionColumn.vue";
import SectionBanner from "../../components/section/SectionBanner.vue";
import SectionCategoryFirst from "../../components/section/SectionCategoryFirst.vue";
import SectionCategorySecond from "../../components/section/SectionCategorySecond.vue";
import SectionCategoryThird from "../../components/section/SectionCategoryThird.vue";
import SectionCategoryFourth from "../../components/section/SectionCategoryFourth.vue";

export default {
  validate({ params, query }) {
    console.log(params);
    // if (!params.slug || !params.slug.trim()) {
    //   return false;
    // }
    return true;
  },
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
    // await Promise.all([
    //   store.dispatch("category/getListCategoriesParent"),
    //   store.dispatch("category/getListCategoriesPopular"),
    //   store.dispatch("article/getListArticlesNew"),
    // ]);
  },
};
</script>
