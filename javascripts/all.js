var app = new Vue({
    el: '#app',
    data: {
      newTodo: '',
      todoList: [
        {
          id: '',
          title: 'test 1',
          completed: false,
        },
        {
          id: '',
          title: 'test 2',
          completed: true,
        },
      ],
      cacheTodo: {},
      cacheTitle: '',
      visibility:'all'
    },
    methods: {
      addTodo: function() {
        var value = this.newTodo.trim();
        var timestamp = Math.floor(Date.now());
        if (!value) {
          return;
        }
        this.todoList.push({
          id: timestamp,
          title: value,
          completed: false,
        });
        this.newTodo = '';
      },
      removeTodo: function(todo) {
        var vm = this;
        var newIndex = vm.todoList.findIndex(function(item, key) {
          return todo.id === item.id;          
        })
        this.todoList.splice(newIndex, 1)
      },
      editTodo: function(item) {
        console.log(item);
        this.cacheTodo = item;
        this.cacheTitle = item.title;
      },
      cancelEdit: function() {
        this.cacheTodo = {}
      },
      doneEdit: function(item) {
        item.title = this.cacheTitle;
        this.cacheTitle = '';
        this.cacheTodo = {};
      },
      clearAll: function() {
        this.todoList =[];
      }
    },
    computed: {
      filteredTodos: function() {
        if (this.visibility == 'all') {
          return this.todoList;
        } else if (this.visibility == 'undone') {
          var newTodos = [];
          this.todoList.forEach(function (item){
            if (!item.completed) {
              newTodos.push(item);
            }
          })
          return newTodos;
        } else if (this.visibility == 'completed') {
          var newTodos = [];
          this.todoList.forEach(function (item) {
            if (item.completed) {
              newTodos.push(item);
            }
          })
          return newTodos;
        }
        return [];
      },
      undoneNum: function () {
       return this.todoList.filter(function (item) {
         return !item.completed;
       }).length;
    },
  }
  });