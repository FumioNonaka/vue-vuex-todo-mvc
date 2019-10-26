<template>
	<input
		v-model="newTodo"
		class="new-todo" autofocus autocomplete="off"
		placeholder="What needs to be done?"
		@keypress.enter="addTodo"
	>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
	name: 'TodoInput',
	data() {
		return {
			newTodo: ''
		};
	},
	methods: mapMutations({
			addTodo(commit) {
				commit('addTodo', this.newTodo);
				this.newTodo = '';
			}
		})
};
</script>
