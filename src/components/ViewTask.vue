<template>
  <input
    type="text"
    v-model="searchString"
    @input="filterArray()"
    @blur="fetchAgain()"
  />
  <base-card v-for="task in filteredTasks" :key="task.id">
    <div>
      {{ task.taks }}
    </div>
    <div>
      {{ task.description }}
    </div>
    <base-button @click="handleDeletion(task.id)">Delete</base-button>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      searchString: "",
    };
  },
  methods: {
    handleDeletion(taskId) {
      this.$store.dispatch("deleteTask", { id: taskId });
    },
    
    fetchAgain() {
      this.tasks = this.$store.getters.getTask;
    },
    filterArray() {
      this.$nextTick(() => {
        this.tasks = this.$store.getters.getTask;
      });
    },
  },
  computed: {
    filteredTasks() {
      return this.tasks.filter(
        (task) =>
          task.taks.includes(this.searchString.toLowerCase()) ||
          task.description.toLowerCase().includes(this.searchString.toLowerCase())
      );
    },
  },
  mounted() {
    this.tasks = this.$store.getters.getTask;
  }
};
</script>
<style scoped></style>
