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
    <ul>
      
      <li :class="{ 'completed': task.completed }"
        v-for="task in list"
        @click="toggleCompleted(task)">
        <!-- @click="task.completed = !task.completed" inline alternative-->

        {{ task.body }}
      </li>
      
    </ul>
  </template>

  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <script src="render-lists/main.js"></script> 
  
  <script>
  
  </script>

</body>