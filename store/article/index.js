export const state = () => {
    return {
        articlesPopular: [],
        articlesNew: [],
    };
};

export const mutations = {
    SET_ARTICLES_POPULAR(state, data) {
        state.articlesPopular = data;
    },
    SET_ARTICLES_NEW(state, data) {
        state.articlesNew = data;
    },
};

export const getters = {
    getArticlesPopular(state) {
        return state.articlesPopular;
    },
    getArticlesNew(state) {
        return state.articlesNew;
    },
    getArticlesCover(state) {
        return state.articlesNew.slice(0, 5);
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
};
