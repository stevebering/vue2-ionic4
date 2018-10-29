<template>
  <ion-app>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>TodoList</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      
      <ion-list>
        <ion-item-sliding v-for="todo in todos" :key="todo.id">
          <ion-item>
            {{todo.name}}
          </ion-item>
          <ion-item-options side="end">
            <ion-item-option @click="favorite(todo)">Favorite</ion-item-option>
            <ion-item-option @click="deleteItem(todo)" color="danger">Delete</ion-item-option>
          </ion-item-options> 
        </ion-item-sliding>
      </ion-list>

      <ion-fab-button class="todo.fab" @click="addTodo">
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>

    </ion-content>
  </ion-app>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addTodo() {
      this.$router.push({ path: "/todos/add" });
    },
    favorite(todo) {
      console.log("Favorite", todo);
    },
    deleteItem(todo) {
      console.log("Delete item", todo);
    }
  },
  created() {
    axios
      .get("http://localhost:3001/todos")
      .then(res => (this.todos = res.data));
  }
};
</script>
