# Vuex-TodoList

### [[網站連結]](https://kuaruou.github.io/Vuex-TodoList/#/) ###

![image](https://github.com/Kuaruou/Vue-TodoList/blob/master/TodoList.gif)

*簡略說明

1. 使用Vue-Cli建立專案。

2. 裝置VueSweetalert2套件在按下全部清除按鈕後提示使用人做確認，避免誤觸使得資料被清空。

3. 使用Vuex管理各項資料以及功能。

*Vuex

本專案在於練習使用Vuex，直接挪用先前練習的Vue-TodoList改寫，關於各項Vue功能請參考[[這裡]](https://github.com/Kuaruou/Vue-TodoList)
    
1. addTodo: 宣告newTodo作為新增資料的變數以儲存新增的值，且用timestamp作為id，預設completed為false未完成。且以trim和if(!value)刪去多餘空格和避免未填寫而儲存空的值。

```javascript
addTodo: function() {
      const value = this.newTodo.trim();
      const timestamp = Math.floor(Date.now());
      if (!value) {
        return;
      }
      this.todoList.push({
        id: timestamp,
        title: value,
        completed: false
      });
      this.newTodo = "";
      storage.set("todoList", this.todoList);
    },
```

2. removeTodo: 將todo(陣列的索引位置)在刪除時回傳至function，使用findIndex回傳(todo.id === item.id)的結果，用splice(newIndex, 1)帶入key刪除陣列上目標存在位置的一筆資料。

```javascript
removeTodo: function(todo) {
      const vm = this;
      const newIndex = vm.todoList.findIndex(function(item, key) {
        return todo.id === item.id;
      });
      this.todoList.splice(newIndex, 1);
      storage.set("todoList", this.todoList);
    },
```

3. editTodo: 用dblclick觸發先將原本todo的內容傳進來，先用cacheTodo和cacheTitle將內容暫存，在欲修改處雙擊後出現的input寫入內容。若待辦事項中todos的id不等於cacheTodo的id時(v-if="item.id !== cacheTodo.id")將繼續顯示，相同時則隱藏避免與修改內容處(input)重複。修改完畢後按下enter鍵儲存(觸發doneEdit)，按下esc鍵則取消編輯(觸發cancelEdit)。

```javascript
editTodo: function(item) {
      console.log(item);
      this.cacheTodo = item;
      this.cacheTitle = item.title;
    },
```

4. filterTodos: 利用visibility(all, undone, done)回傳todos的不同內容。all回傳全部資料，undone回傳(!item.completed)未完成資料，done回傳(item.completed)已完成資料。

```javascript
filteredTodos: function() {
      if (this.visibility == "all") {
        return this.todoList;
      } else if (this.visibility == "undone") {
        const newTodos = [];
        this.todoList.forEach(function(item) {
          if (!item.completed) {
            newTodos.push(item);
          }
        });
        return newTodos;
      } else if (this.visibility == "done") {
        const newTodos = [];
        this.todoList.forEach(function(item) {
          if (item.completed) {
            newTodos.push(item);
          }
        });
        return newTodos;
      }
      return [];
    },
```

5. clearAll: 將todoList設為空陣列即可清除已經儲存的所有內容，配合VueSweetalert2的提示效果避免不小心刪除。

```javascript
clearAll: function() {
      const vm = this;
      console.log(this);
      vm.$swal({
        title: "確認刪除?",
        text: "刪除後檔案將無法恢復!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的，請刪除!",
        cancelButtonText: "不，請不要刪除!"
      }).then(result => {
        if (result.value) {
          swal.fire("已刪除!", "所有紀錄已清除。", "success");
          vm.todoList = []; 
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === swal.DismissReason.cancel
        ) {
          swal.fire("已取消！", "你的資料依然保存 :)", "error");
        }
      });
      storage.set("todoList", this.todoList);
    }
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

