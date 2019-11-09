<template>
	<input id="edit" class="edit" type="text"
		:value="todo.title"
		@input="onInput"
		@keypress.enter="doneEdit"
		@keyup.esc="cancelEdit">
</template>

<script>
export default {
	name: 'TodoEdit',
	props: {
		todo: Object
	},
	data() {
		return {
			editedTitle: null
		};
	},
	methods: {
		onInput(event) {
			this.editedTitle = event.target.value;
		},
		doneEdit(event) {
			this.editedTitle = event.target.value;
			this.$store.commit('doneEdit', this.editedTitle);
		},
		cancelEdit(event) {
			event.target.value = this.todo.title;
			this.$store.commit('cancelEdit');
		}
	}
};
</script>
