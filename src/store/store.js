import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      tasks: [
        { id: 1, taks: "Do shopping", description: "lorem ispum" },
        { id: 2, taks: "Do hopping", description: "lorem ispum" },
        { id: 3, taks: "Do mopping", description: "lorem ispum" },
      ],
    };
  },
  mutations: {
    updateTask(state, payload) {
      state.tasks.push(payload);
    },
    deletion(state, payload){
      const indexOfTask = state.tasks.findIndex(task => payload.id === task.id)
      state.tasks.splice(indexOfTask,1)
    }
  },
  actions: {
    addTask(context, payload) {
      context.commit("updateTask", payload );
    },
    deleteTask(context, payload){
      context.commit("deletion", payload)
    }
  },
  getters: {
    getTask(state) {
      return state.tasks;
    },
  },
});
export default store;
