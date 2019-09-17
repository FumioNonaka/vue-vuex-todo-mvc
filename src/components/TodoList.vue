<template>
	<section class="main" v-show="todos.length" v-cloak>
		<input class="toggle-all" type="checkbox">
		<ul class="todo-list">
			<li v-for="todo in filteredTodos"
				class="todo"
				:key="todo.id">
				<todo-item
					:todo="todo">
				</todo-item>
			</li>
		</ul>
	</section>
</template>

<script>
import TodoItem from './TodoItem.vue';
export default {
	name: 'TodoList',
	components: {
		TodoItem
	},
	props: {
		todos: Array,
		filteredTodos: Array
	}
}
</script>

<style scoped>
[v-cloak] {
	display: none;
}
</style>
