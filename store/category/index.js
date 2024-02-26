export const state = () => {
    return {
        categoriesParent: [],
    };
};

export const mutations = {
    SET_CATEGORIES_PARENTS(state, data) {
        state.categoriesParent = data;
    },
};

export const getters = {
    getCategoriesParent(state) {
        return state.categoriesParent;
    },
};

export const actions = {
    async getListCategoriesParent({ commit }) {
        const { data } = await this.$axios.get("/category/categories-parent");
        commit("SET_CATEGORIES_PARENTS", data);
    },
};
