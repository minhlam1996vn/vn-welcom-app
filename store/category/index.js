export const state = () => {
    return {
        categoriesParent: [],
        categoriesPopular: [],
        categoryDetail: {},
    };
};

export const mutations = {
    SET_CATEGORIES_PARENTS(state, data) {
        state.categoriesParent = data;
    },
    SET_CATEGORIES_POPULAR(state, data) {
        state.categoriesPopular = data;
    },
    SET_CATEGORY_DETAIL(state, data) {
        state.categoryDetail = data;
    }
};

export const getters = {
    getCategoriesParent(state) {
        return state.categoriesParent;
    },
    getCategoriesPopular(state) {
        return state.categoriesPopular;
    },
    getCategoryDetail(state) {
        return state.categoryDetail;
    }
};

export const actions = {
    async getListCategoriesParent({ commit }) {
        const { data } = await this.$axios.get("/category/categories-parent");
        commit("SET_CATEGORIES_PARENTS", data);
    },
    async getListCategoriesPopular({ commit }) {
        const { data } = await this.$axios.get("/category/categories-popular");
        commit("SET_CATEGORIES_POPULAR", data);
    },
    async getCategoryDetail({ commit }, categorySlug) {
        const { data } = await this.$axios.get(`/category/detail/${categorySlug}`);
        commit("SET_CATEGORY_DETAIL", data);
    },
};
