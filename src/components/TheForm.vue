<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <label for="task">Task:</label>
      <input type="text" v-model="task" />
      <label for="description">Description:</label>
      <textarea v-model="description"></textarea>
      <base-button type="submit" mode="outline">Add a Task</base-button>
    </form>
  </base-card>
</template>
<script>
export default {
  data() {
    return {
      task: "",
      description: "",
    };
  },
  methods: {
    submitForm() {
      const data = {
        id: new Date().toString(),
        taks: this.task,
        description: this.description,
      };
      this.$store.dispatch("addTask", data);
      this.task = ""
      this.description = ""
    },
  },
};
</script>
<style scoped>
label {
  padding: 0.5rem 0.5rem;
  display: flex;
  align-items: flex-start;
}
input,
textarea {
  margin: 0.5rem 0.5rem;
}
form {
  display: grid;
  /* grid-auto-columns: auto; */
}
</style>
