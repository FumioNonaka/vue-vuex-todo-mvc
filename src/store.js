import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const STORAGE_KEY = 'todos-vuejs-2.6';
const todoStorage = {
	fetch() {
		const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
		todos.forEach(function(todo, index) {
			todo.id = index;
		});
		todoStorage.uid = todos.length;
		return todos;
	},
	save(todos) {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
	}
};
const filters = {
	all(todos) {
		return todos;
	},
	active(todos) {
		return todos.filter((todo) =>
			!todo.completed
		);
	},
	completed(todos) {
		return todos.filter((todo) =>
			todo.completed
		);
	}
};
export default new Vuex.Store({
	state: {
		todos: todoStorage.fetch(),
		visibility: 'all',
		editedTodo: null
	},
	getters: {
		filteredTodos: (state) =>
			filters[state.visibility](state.todos),
		remaining: (state) => {
			const todos = state.todos.filter((todo) => !todo.completed);
			return todos.length;
		},
		filters: (state) => filters,
		allDone: (state, getters) => getters.remaining === 0
	},
	mutations: {
		addTodo(state, todoTitle) {
			const newTodo = todoTitle && todoTitle.trim();
			if (!newTodo) {
				return;
			}
			state.todos.push({
				id: todoStorage.uid++,
				title: newTodo,
				completed: false
			});
		},
		removeTodo(state, todo) {
			state.todos = state.todos.filter((item) => item !== todo);
		},
		done(state, {todo, completed}) {
			state.todos = state.todos.map((item) => {
				if(item === todo) {
					item.completed = completed
				}
				return item;
			});
		},
		save(state) {
			todoStorage.save(state.todos);
		},
		hashChange(state) {
			const visibility = window.location.hash.replace(/#\/?/, '');
			if (filters[visibility]) {
				state.visibility = visibility;
			}
		},
		setAllDone(state, value) {
			state.todos.forEach((todo) =>
				todo.completed = value
			);
		},
		removeCompleted(state) {
			state.todos = filters.active(state.todos);
		},
		editTodo(state, todo) {
			state.editedTodo = todo;
		},
		doneEdit(state, todoTitle) {
			if (!state.editedTodo) {
				return;
			}
			const title = todoTitle.trim();
			if (title) {
				state.editedTodo.title = title;
			} else {
				this.commit('removeTodo', state.editedTodo);
			}
			state.editedTodo = null;
		},
		cancelEdit(state) {
			state.editedTodo = null;
		}
	}
});
