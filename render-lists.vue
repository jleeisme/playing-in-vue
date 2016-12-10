<head>
  <style>
    
    .completed {
      text-decoration: line-through;
    }

  </style>
</head>
<body>
  <div id="app">
    <ul>
      
      <li :class="{ 'completed': task.completed }"
        v-for="task in tasks"
        @click="toggleCompleted(task)">
        <!-- @click="task.completed = !task.completed" inline alternative-->

        {{ task.body }}
      </li>
      
    </ul>
  </div>

  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <script src="render-lists/main.js"></script> 
  
  <script>
  
  </script>

</body>