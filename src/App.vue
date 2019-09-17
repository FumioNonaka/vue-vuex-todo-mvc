<template>
	<section id="app" class="todoapp">
		<header class="header">
			<h1>todos</h1>
			<todo-input
				class="new-todo" autofocus autocomplete="off"
				placeholder="What needs to be done?"
				@add-todo="addTodo">
			</todo-input>
		</header>
		<todo-list
			:todos="todos"
			:filtered-todos="filteredTodos">
		</todo-list>
	</section>
</template>

<script>
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
	name: 'app',
	components: {
		TodoInput,
		TodoList
	},
	data() {
		return {
			todos: [],
			uid: 0
		}
	},
	computed: {
		filteredTodos() {
			return this.todos;
		}
	},
	methods: {
		addTodo(todoTitle) {
			const newTodo = todoTitle && todoTitle.trim();
			if (!newTodo) {
				return;
			}
			this.todos.push({
				id: this.uid++,
				title: newTodo,
				completed: false
			});
		}
	}
}
</script>

<style>
@import url("https://unpkg.com/todomvc-app-css@2.2.0/index.css");
</style>
