<template>
	<footer class="footer" v-show="todos.length" v-cloak>
		<span class="todo-count">
			<strong>{{remaining}}</strong> {{remaining | pluralize}} left
		</span>
		<ul class="filters">
			<li v-for="(value, key) in filters" :key="key">
				<a
					:href="'#/' + key"
					:class="{selected: visibility === key}"
				>
					{{ key[0].toUpperCase() + key.substr(1) }}
				</a>
			</li>
		</ul>
	</footer>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
export default {
	name: 'TodoController',
	filters: {
		pluralize(n) {
			return n === 1 ? 'item' : 'items';
		}
	},
	computed: {
		...mapState([
			'todos',
			'visibility'
		]),
		...mapGetters([
			'remaining',
			'filters'
		])
	}
}
</script>
