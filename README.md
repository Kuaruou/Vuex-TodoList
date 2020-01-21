# Vuex-TodoList

### [[網站連結]](https://kuaruou.github.io/Vuex-TodoList/#/) ###

![image](https://github.com/Kuaruou/Vue-TodoList/blob/master/TodoList.gif)

*簡略說明

1. 使用Vue-Cli建立專案。

2. 裝置VueSweetalert2套件在按下全部清除按鈕後提示使用人做確認，避免誤觸使得資料被清空。

3. 使用Vuex管理各項資料以及功能。

*Vuex

本專案在於練習使用Vuex，直接挪用先前練習的Vue-TodoList改寫，關於各項Vue功能請參考 [[這裡]](https://github.com/Kuaruou/Vue-TodoList)。
    
1. state: 相當於Vue裡面的Data部分，儲存資料原始的狀態。

```javascript
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
```

2. actions: Vuex中非同步的執行，Action 提交（commit）的是 mutations，而不是直接變更 state。Action 函數接受一個與 store 實例具有相同方法和屬性的 context 物件，因此可以調用 context.commit 提交一個 mutation，或是透過 context.state 或 context.getters 來取得 state 和 getters 。

```javascript
addTodo(context, status) {
      context.commit('ADDTODO', status);
    },
```

3. mutations: 提交 mutations 是改變 Vuex 中 store 的唯一方式。 mutations 非常類似於組件中的事件（event），每個 mutation 都有一個字串的事件類型 (type) 和一個回調函數 (handler)， handler 就是我們實際進行狀態更改的地方，並且他會接受 state 作為第一個參數。

```javascript
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
```

4. getters: 類似組件中的 computed ， getters 的返回值會根據他依賴的關係被緩存起來，只有當他依賴的值發生改變才會重新被計算。

```javascript
newTodo(state) {
      return state.newTodo;
    },
    // newTodo: state => state.newTodo,
```

5. v-model: 因為 Vuex 不能在 Mutation 以外的地方修改 State ，所以也就不能直接使用 v-model 去綁定，一般人會想到其中一個解法是分別給 <input> 用v-bind 綁定 value 和用 v-on 監聽 input 或 change 事件，在事件回調中調用 action 。官方提供另一種可以直接雙向綁定的方法，使用 Compute 的 Getter 與 Setter 去分開處理 v-model 的讀取與賦予， 比上一段更簡潔好用。

```javascript
newTodo: {
      get () {
        return this.$store.state.newTodo;
      },
      set (value) {
        this.$store.commit('UPDATENEWTODO', value)
      },
    },
```

```javascript
UPDATENEWTODO (state, newTodo) {
      state.newTodo = newTodo;
    },
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

