Vue.component('tasks', {
  props: ['list'],
  template: '#tasks-template',
  // having issue with creating a local mutable copy of the prop
  // wa wa wa
  data: function() {
    return { 
      list: this.list1
    }
  },
  computed: {
    remaining: function() {
      return this.list.filter(this.inProgress).length;
    }
    // initialList: function() {
    //   return JSON.parse(this.list);
    // }
  },
  methods: {
    toggleCompleted: function(task) {
      task.completed = !task.completed;
    },
    isComplete: function(task) {
      return task.completed;
    },
    inProgress: function(task) {
      return !this.isComplete(task);
    },
    deleteTask: function(task) {
      this.list.splice(this.list.indexOf(task), 1);
    },
    clearCompleted: function(task) {
      this.list = this.list.filter(this.inProgress);
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