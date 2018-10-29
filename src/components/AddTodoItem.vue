<template>
  <ion-app>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Add Item</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="content">
      <ion-item>
        <ion-input :value="name" ref="newTodoItem" @input="updateTodoName" placeholder="Todo Name"></ion-input>
      </ion-item>

      <ion-fab-button class="todo-fab" @click="addTodo">
        <ion-icon name="checkmark"></ion-icon>
      </ion-fab-button>

    </ion-content>
  </ion-app>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    addTodo() {
      const newTodo = { name: this.name };
      axios.post("http://localhost:3001/todos", newTodo).then(res => {
        console.log(res);
        this.$router.push({ path: "/todos" });
      });
    },
    updateTodoName() {
      this.name = this.$refs.newTodoItem.value;
    }
  }
};
</script>
