new Vue({
  el: '#app',
  data: {
    tasks: [
      { body: 'Go to store', completed: false },
      { body: 'Go to bank', completed: false },
      { body: 'Go to doctor', completed: false }
    ]
  },

  methods: {
    toggleCompleted: function(task) {
      task.completed = !task.completed;
    }
  }
})