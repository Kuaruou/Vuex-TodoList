# todolist-vue-cli

![image](https://github.com/Kuaruou/Vue-TodoList/blob/master/TodoList.gif)

*簡略說明

1. 使用Vue-Cli建立專案。

2. 裝置VueSweetalert2套件在按下全部清除按鈕後提示使用人做確認，避免誤觸使得資料被清空。

3. 將資料寫入LocalStorage之中避免資料在重新整理或重新開啟後流失。

*Vue
<pre class="prettyprint">
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
</pre>    
    
1. addTodo: 宣告newTodo作為新增資料的變數以儲存新增的值，且用timestamp作為id，預設completed為false未完成。且以trim()和if(!value)刪去多餘空格和避免未填寫而儲存空的值。

2. removeTodo: 將todo(陣列的索引位置)在刪除時回傳至function，使用findIndex回傳(todo.id === item.id)的結果，用splice(newIndex, 1)帶入key刪除陣列上目標存在位置的一筆資料。

3. editTodo: 用dblclick觸發先將原本todo的內容傳進來，先用cacheTodo和cacheTitle將內容暫存，在欲修改處雙擊後出現的input寫入內容。若待辦事項中todos的id不等於cacheTodo的id時(v-if="item.id !== cacheTodo.id")將繼續顯示，相同時則隱藏避免與修改內容處(input)重複。修改完畢後按下enter鍵儲存(觸發doneEdit)，按下esc鍵則取消編輯(觸發cancelEdit)。

4. filterTodos: 利用visibility(all, undone, done)回傳todos的不同內容。all回傳全部資料，undone回傳(!item.completed)未完成資料，done回傳(item.completed)已完成資料。

5. clearAll: 將todoList設為空陣列即可清除已經儲存的所有內容，配合VueSweetalert2的提示效果避免不小心刪除。

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
