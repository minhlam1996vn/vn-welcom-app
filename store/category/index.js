export const state = () => {
    return {
        categoriesParent: [],
        categoriesPopular: [],
    };
};

export const mutations = {
    SET_CATEGORIES_PARENTS(state, data) {
        state.categoriesParent = data;
    },
    SET_CATEGORIES_POPULAR(state, data) {
        state.categoriesPopular = data;
    }
};

export const getters = {
    getCategoriesParent(state) {
        return state.categoriesParent;
    },
    getCategoriesPopular(state) {
        return state.categoriesPopular;
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
};
