<template>
	<div class="view">
		<input
			type="checkbox" class="toggle"
			:value="todo.completed"
			:checked="todo.completed"
			@input="onInput({todo: todo, completed: !todo.completed})"
		>
			<label>{{todo.title}}</label>
		<button
			class="destroy"
			@click="removeTodo(todo)">
		</button>
	</div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
	name: 'TodoItem',
	props: {
		todo: Object
	},
	methods: mapMutations({
		removeTodo: 'removeTodo',
		onInput: 'done'
	})
}
</script>
