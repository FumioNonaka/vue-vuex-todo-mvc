<template>
	<input
		class="new-todo" autofocus autocomplete="off"
		placeholder="What needs to be done?"
		v-model="newTodo"
        @keypress.enter="addTodo">
</template>

<script>
export default {
	name: 'TodoInput',
	data() {
		return {
			newTodo: ''
		};
	},
	methods: {
		addTodo() {
			this.$emit('add-todo', this.newTodo);
			this.newTodo = '';
		}
	}
}
</script>
