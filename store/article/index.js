export const state = () => {
    return {
        articlesPopular: [],
        articlesNew: [],
        articlesDetail: {},
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
    }
};
