export const state = () => {
  return {
    articlesPopular: [],
    articlesNew: [],
    articlesDetail: {},
    articlesByCategory: {},
  };
};

export const mutations = {
  SET_ARTICLES_POPULAR(state, data) {
    state.articlesPopular = data;
  },
  SET_ARTICLES_NEW(state, data) {
    state.articlesNew = data;
  },
  SET_ARTICLE_DETAIL(state, data) {
    state.articlesDetail = data;
  },
  SET_ARTICLES_BY_CATEGORY(state, data) {
    state.articlesByCategory = data;
  },
  APPEND_ARTICLES_BY_CATEGORY(state, data) {
    state.articlesByCategory.articles = state.articlesByCategory.articles.concat(data.articles);
    state.articlesByCategory.pager = data.pager;
  }
};

export const getters = {
  getArticlesPopular(state) {
    return state.articlesPopular;
  },
  getArticlesNew(state) {
    return state.articlesNew.slice(8, state.articlesNew.length);
  },
  getArticlesCover(state) {
    return state.articlesNew.slice(0, 5);
  },
  getArticlesThree(state) {
    return state.articlesNew.slice(5, 8);
  },
  getArticleDetail(state) {
    return state.articlesDetail;
  },
  getArticlesByCategory(state) {
    return state.articlesByCategory;
  }
};

export const actions = {
  async getListArticlesPopular({ commit }) {
    const { data } = await this.$axios.get("/article/articles-popular");
    commit("SET_ARTICLES_POPULAR", data);
  },

  async getListArticlesNew({ commit }) {
    const { data } = await this.$axios.get("/article/articles-new");
    commit("SET_ARTICLES_NEW", data);
  },

  async getArticleDetail({ commit }, articleSlug) {
    const { data } = await this.$axios.get(`/article/detail/${articleSlug}`);
    commit("SET_ARTICLE_DETAIL", data);
  },

  async getListArticlesByCategory({ commit }, query) {
    const { data } = await this.$axios.get(`/article/articles-by-category/${query.category_slug}?page=${query.page ? query.page : 1}`);

    if (query.page) {
      commit("APPEND_ARTICLES_BY_CATEGORY", data);
    } else {
      commit("SET_ARTICLES_BY_CATEGORY", data);
    }
  }
};
