<template>
	<section class="main" v-show="todos.length" v-cloak>
		<input
			id="toggle-all"
			class="toggle-all"
			type="checkbox"
			:value="allDone"
			:checked="allDone"
			@change="onInput"
		>
		<label for="toggle-all" />
		<ul class="todo-list">
			<li
				v-for="todo in filteredTodos"
				:class="{completed: todo.completed, editing: todo === editedTodo}"
				:key="todo.id"
			>
				<todo-item
					:todo="todo" />
				<todo-edit
					:todo="todo" />
			</li>
		</ul>
	</section>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
import TodoItem from './TodoItem.vue';
import TodoEdit from './TodoEdit.vue';
export default {
	name: 'TodoList',
	components: {
		TodoItem,
		TodoEdit
	},
	computed: {
		...mapState([
			'todos',
			'editedTodo'
		]),
		...mapGetters([
			'filteredTodos'
		]),
		allDone: {
			get() {
				return this.$store.getters.allDone;
			},
			set(value) {
				this.$store.commit('setAllDone', value);
			}
		}
	},
	methods: {
		onInput() {
			this.allDone = !this.allDone;
		}
	}
};
</script>

<style scoped>
[v-cloak] {
	display: none;
}
</style>
