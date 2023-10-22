import { defineStore } from 'pinia';

/* 定义容器 */
export const useMainStore = defineStore('main', {
	state: () => ({
		likes: [0],
	}),
	persist: {
		storage: localStorage,
	},

	getters: {},

	actions: {
		newLike(id: number) {
			this.likes.push(id);
		},
	},
});

export default useMainStore;
