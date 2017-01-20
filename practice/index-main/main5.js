Vue.component('task-list', {
  template: `
    <div>
      <task v-for="task in tasks">{{ task.task }}</task>
    </div>
    `, 


  data() {
    return {
      tasks: [
        { task: 'task one', complete: true },
        { task: 'task two', complete: false },
        { task: 'task three', complete: true },
        { task: 'task four', complete: false }
      ]
    }
  }
});


Vue.component('task', {
  template: '<li><slot></slot></li>'
});

new Vue({
  el: '#root'
});