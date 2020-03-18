import Vue from 'vue';
import Vuex from 'vuex';

import storage from "./storage.js";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    newTodo: "",
    todoList: [
      {
        id: "1",
        title: "test 1",
        completed: false
      },
      {
        id: "2",
        title: "test 2",
        completed: true
      },
    ],
    cacheTodo: {},
    cacheTitle: "",
    visibility: "all"
  },
  actions: {
    addTodo(context, status) {
      context.commit('ADDTODO', status);
      // this.$store.dispatch('saveList');
    },
    removeTodo(context, status) {
      context.commit('REMOVETODO', status);
      // this.$store.dispatch('saveList');
    },
    editTodo(context, status) {
      context.commit('EDITTODO', status);
    },
    cancelEdit(context, status) {
      context.commit('CANCELEDIT', status);
    },
    doneEdit: function(context, status) {
      context.commit('DONEEDIT', status);
      // saveList();
    },
  },
  mutations: {
    UPDATENEWTODO (state, newTodo) {
      state.newTodo = newTodo;
    },
    UPDATETODOLIST (state, todoList) {
      state.todoList = todoList;
    },
    UPDATEVISIBILITY (state, visibility) {
      state.visibility = visibility;
    },
    UPDATECATCHETITLE (state, cacheTitle) {
      state.cacheTitle = cacheTitle;
    },
    ADDTODO(state) {
      const value = state.newTodo.trim();
      const timestamp = Math.floor(Date.now());
      if (!value) {
        return;
      }
      state.todoList.push({
        id: timestamp,
        title: value,
        completed: false
      });
      state.newTodo = "";
      // $store.dispatch('saveList');
    },
    REMOVETODO(state, todo) {
      // const vm = this;
      const newIndex = state.todoList.findIndex(function(item, key) {
        return todo.id === item.id;
      });
      state.todoList.splice(newIndex, 1);
      // $store.dispatch('saveList');
    },
    EDITTODO(state, item) {
      console.log(item);
      state.cacheTodo = item;
      state.cacheTitle = item.title;
    },
    CANCELEDIT(state) {
      state.cacheTodo = {};
    },
    DONEEDIT(state, item) {
      item.title = state.cacheTitle;
      state.cacheTitle = "";
      state.cacheTodo = {};
      // saveList();
    },
  },
  getters: {
    newTodo(state) {
      return state.newTodo;
    },
    // newTodo: state => state.newTodo,
    todoList: state => state.todoList,
    cacheTodo: state => state.cacheTodo,
    cacheTitle: state => state.cacheTitle,
    visibility: state => state.visibility,
    filteredTodos(state) {
      if (state.visibility == "all") {
        return state.todoList;
      } else if (state.visibility == "undone") {
        const newTodos = [];
        state.todoList.forEach(function(item) {
          if (!item.completed) {
            newTodos.push(item);
          }
        });
        return newTodos;
      } else if (state.visibility == "done") {
        const newTodos = [];
        state.todoList.forEach(function(item) {
          if (item.completed) {
            newTodos.push(item);
          }
        });
        return newTodos;
      }
      return [];
    },
    undoneNum(state) {
      return state.todoList.filter(function(item) {
        return !item.completed;
      }).length;
    },
  },
})