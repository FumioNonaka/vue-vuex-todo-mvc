<template>
	<div class="view">
		<input
			type="checkbox" class="toggle">
		<label>{{todo.title}}</label>
		<button
			class="destroy">
		</button>
	</div>
</template>

<script>
export default {
	name: 'TodoItem',
	props: {
		todo: Object
	}
}
</script>
