<template>
	<section id="app" class="todoapp">
		<header class="header">
			<h1>todos</h1>
			<todo-input
				class="new-todo" autofocus autocomplete="off"
				placeholder="What needs to be done?"
			/>
		</header>
		<todo-list />
	</section>
</template>

<script>
import store from './store';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
export default {
	name: 'app',
	store,
	components: {
		TodoInput,
		TodoList
	}
}
</script>

<style>
@import url("https://unpkg.com/todomvc-app-css@2.2.0/index.css");
</style>
