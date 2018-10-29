import Vue from "vue";
import Router from "vue-router";
import TodoList from "./components/TodoList.vue";
import AddTodoItem from "./components/AddTodoItem.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/todos"
    },
    {
      path: "/todos",
      name: "todos",
      component: TodoList
    },
    {
      path: "/todos/add",
      name: "addTodo",
      component: AddTodoItem
    }
  ]
});
