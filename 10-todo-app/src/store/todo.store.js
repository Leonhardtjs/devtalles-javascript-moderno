import { Todo } from "../todos/models/todo.model";

export const Filters = {
  All: "all",
  Completed: "Completed",
  Pending: "Pending",
};

const state = {
  todos: [
    new Todo("Piedra del alma"),
    new Todo("Piedra del infinito"),
    new Todo("Piedra del tiempo"),
    new Todo("Piedra del poder"),
    new Todo("Piedra del realidad"),
  ],
  filter: Filters.All,
};

const initStore = () => {
  loadStore();
  console.log("InitStore 🥑");
};

/**
 * Cargar store
 */
const loadStore = () => {
  if(!localStorage.getItem('state')) return;

  const {todos, filter = Filters.All } = JSON.parse(localStorage.getItem('state'));
  state.todos = todos;
  state.filter = filter;
};

const saveStateToLocalStorage = () => {
  localStorage.setItem('state', JSON.stringify(state));
}

/**
 * Obtiene los todos del store
 * @param {String} filter
 */
const getTodos = (filter = Filters.All) => {
  switch (filter) {
    case Filters.All:
      return [...state.todos];
    case Filters.Completed:
      return state.todos.filter((todo) => todo.done);
    case Filters.Pending:
      return state.todos.filter((todo) => !todo.done);
    default:
      throw new Error(`Option ${filter} is not valid`);
  }
};

/**
 * Añadir un Todo
 * @param {String} description
 */
const addTodo = (description) => {
  if (!description) throw new Error("Description is required");
  state.todos.push(new Todo(description));

  saveStateToLocalStorage();
};

/**
 * Cambia de estado del todo
 * @param {String} todoId
 */
const toggleTodo = (todoId) => {
  state.todos = state.todos.map((todo) => {
    if (todo.id === todoId) {
        todo.done = !todo.done
    }
    return todo;
  });

  saveStateToLocalStorage();
};

/**
 * Elimina un todo del store
 * @param {*} todoId
 */
const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
  saveStateToLocalStorage();
};

/**
 * Elimina todos los completados
 */
const deleteCompleted = () => {
  state.todos = state.todos.filter((todo) => !todo.done);
  saveStateToLocalStorage();
};

/**
 * Selecciona un filtro
 * @param {Filters} newFilter
 */
const setFilter = (newFilter = Filters.All) => {
  state.filter = newFilter;
  saveStateToLocalStorage();
};

/**
 * Obtiene el filtro actual
 */
const getCurrentFilter = () => {
  return state.filter;
};

export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  getTodos,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
};
