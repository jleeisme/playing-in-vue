Vue.component('tasks', {
  props: ['list'],
  template: '#tasks-template',
  methods: {
    toggleCompleted: function(task) {
      task.completed = !task.completed;
    }
  }
});

new Vue({
  el: '#app',
  data: {
    tasks: [
      { body: 'Go to store', completed: false },
      { body: 'Go to bank', completed: false },
      { body: 'Go to doctor', completed: false }
    ]
  },
})