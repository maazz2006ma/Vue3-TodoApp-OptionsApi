<template>
  <base-card>
    <nav>
      <ul>
        <li>
          <base-button to="/AddATask" mode="outline" :link="true">Add a task</base-button>
        </li>
        <li>
          <base-button to="/ViewTheTask" mode="outline" :link="true">Daily Task</base-button>
        </li>
      </ul>
    </nav>
  </base-card>
</template>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
li {
  margin: 0 2rem;
}
</style>
