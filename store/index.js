export const state = () => {
	return {
		category: {},
		categories: [],
	};
};

export const mutations = {
	SET_CATEGORIES(state, data) {
		state.categories = data.categories;
	},
};

export const getters = {
	getCategories(state) {
		return state;
	},
};

export const actions = {
	async getListCategories({ commit }) {
		const { data } = await this.$axios.get("");
		commit("SET_CATEGORIES", data);
	},
};
