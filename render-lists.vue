<head>
  <style>
    
    .completed {
      text-decoration: line-through;
    }

  </style>
</head>
<body>

  <div id="app">
  <!-- : binds the props 'list' to what's stored in the model called tasks -->
    <tasks :list="tasks"></tasks> 
  </div>

  <template id="tasks-template">
  <div>
    <h1>
      Tasks
      <!-- if there's something in remaining to be computed, it shows, otherwise it's not -->
      <span v-show="remaining">{{ remaining }}</span> 
    </h1>
    <!-- vue1 could use v-show with a following v-else -->
    <ul v-if="list.length">

      <li :class="{ 'completed': task.completed }"
        v-for="task in list"
        @click="toggleCompleted(task)">
        <!-- @click="task.completed = !task.completed" inline alternative-->

        {{ task.body }}
        <strong @click="deleteTask(task)">X</strong>
      </li>
      
    </ul>
    <p v-else>No tasks!</p>
    <button @click="clearCompleted">Clear completed</button>
    </div>
  </template>

  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <script src="render-lists/main.js"></script> 
  
  <script>
  
  </script>

</body>