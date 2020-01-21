<template>
  <div id="app">
    <div id="app" class="container">
      <header class="header">Vuex Todo-List</header>

      <div class="input-group input-height">
        <div class="input-group-prepend">
          <span class="input-group-text theme-bgc" id="basic-addon1">
            <i class="far fa-sticky-note"></i>
            <span class="ml-1">待辦事項</span>
          </span>
        </div>
        <input
          type="text"
          class="form-control input-height"
          placeholder="準備要做的任務"
          v-model="newTodo"
          @keyup.enter="addTodo"
        />
        <div class="input-group-append">
          <button class="btn btn-color theme-text" type="button" @click="addTodo">
            <i class="fas fa-plus-square"></i>
            新增
          </button>
        </div>
      </div>
      <div class="card text-center">
        <div class="card-header theme-bgc">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a
                class="nav-link theme-text"
                :class="{'active': visibility == 'all'}"
                @click="visibility = 'all'"
                href="#"
              >全部</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link theme-text"
                :class="{'active': visibility == 'undone'}"
                @click="visibility = 'undone'"
                href="#"
              >進行中</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link theme-text"
                :class="{'active': visibility == 'done'}"
                @click="visibility = 'done'"
                href="#"
              >已完成</a>
            </li>
          </ul>
        </div>
        <ul class="list-group list-group-flush text-left">
          <li
            class="list-group-item"
            v-for="(item, key) in filteredTodos"
            @dblclick="editTodo(item)"
            :key="key"
          > 
            <div class="d-flex" v-if="item.id !== cacheTodo.id">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  v-model="item.completed"
                  :id="item.id"
                  @change="saveList()"
                />
                <label
                  class="form-check-label"
                  :class="{completed: item.completed}"
                  :for="item.id"
                >{{ item.title }}</label>
              </div>
              <button
                type="button"
                class="close ml-auto"
                @click="removeTodo(item)"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <input
              type="text"
              class="form-control"
              v-model="cacheTitle"
              @keyup.esc="cancelEdit()"
              @keyup.enter="doneEdit(item)"
              v-if="item.id === cacheTodo.id"
            />
          </li>
        </ul>
        <div class="card-footer d-flex justify-content-between theme-bgc">
          <span>
            還有
            <span>{{ undoneNum }}</span>
            筆任務未完成
          </span>
          <a class="clear-btn" href="#" v-on:click.prevent="clearAll()">
            <i class="fas fa-trash-alt"></i>
            清除所有任務
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSweetalert2 from "vue-sweetalert2";
import swal from "sweetalert2/dist/sweetalert2.all.min.js";
import storage from "./store/storage.js";
import { mapGetters, mapActions} from 'vuex';

export default {
  // el: '#app',
  name: "app",
  data() {
    return {
    };
  },
  methods: {
    saveList: function(){
      storage.set("todoList", this.todoList);
    },//在checkbox切換時亦可以寫入localstorage
    clearAll() {
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
    },
    ...mapActions(['addTodo', 'removeTodo', 'editTodo', 'cancelEdit', 'doneEdit'])
  },
  computed: {
    newTodo: {
      get () {
        return this.$store.state.newTodo;
      },
      set (value) {
        this.$store.commit('UPDATENEWTODO', value)
      },
    },
    todoList: {
      get () {
        return this.$store.state.todoList;
      },
      set (value) {
        this.$store.commit('UPDATETODOLIST', value)
      },
    },
    visibility: {
      get () {
        return this.$store.state.visibility;
      },
      set (value) {
        this.$store.commit('UPDATEVISIBILITY', value)
      },
    },
    cacheTitle: {
      get () {
        return this.$store.state.cacheTitle;
      },
      set (value) {
        this.$store.commit('UPDATECATCHETITLE', value)
      },
    },
    ...mapGetters(['cacheTodo', 'filteredTodos', 'undoneNum']),
  },
  mounted() {
    // const todoList = storage.get("todoList");
    // if (todoList) {
    //   this.todoList = todoList;
    // }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .completed {
    text-decoration: line-through;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
