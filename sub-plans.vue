<body>
  <head>
    <style>
      
      #app {
        width: 30%;
        margin: 0 auto;
      }
    
      .Plan__price {
        float: right;
      }

    </style>
  </head>
  
  <div id="app">
  <pre>
    {{ $data }}
  </pre>

    <!-- plans being in the vue instance -->
    <div v-for="plan in plans">
    <!-- :binds, @is a change, a modifier -->
      <plan :plan="plan" @activate="setActive" :active="active"></plan>
    </div>
  </div>

  <template id="plan-template">

    <div>
      <span class="Plan__name">{{ plan.name }}</span>
      <span class="Plan__price">{{ plan.price }}/month</span>
      <!-- if not active - plans are activated by clicks, chosen by either upgrade or downgrade - otherwise, it's selected -->
      <button v-if="!isActive" @click="setPlan">{{ isUpgrade ? 'Upgrade' : 'Downgrade' }}</button>
      <span v-else>Selected</span>
    </div>

  </template>

  <script src="https://unpkg.com/vue/dist/vue.js"></script>

  <script>

    Vue.component('plan', {//doesn't need to be global

      template: '#plan-template',

      props: ['plan', 'active'],//must be explicit about the props...being the two custom props that were made: plan and active
      computed: {
        isUpgrade: function() {
          return this.plan.price > this.active.price
        },
        isActive: function() {
          return this.plan.price === this.active.price;
        }
      },
      methods: {
        setPlan: function() {
          this.$emit('activate', this.plan);
        }
      }
    });

    new Vue({
      el: '#app',
      data: {//can be used in a <pre> in a <div> as $data to visualize what happens
        active: {},
        plans: [
          { name: 'Enterprise', price: 100 },
          { name: 'Pro', price: 50 },
          { name: 'Personal', price: 10 },
          { name: 'Free', price: 0 },
        ],
      },
      methods: {
        setActive: function(plan) {
          this.active = plan;
        }
      }
    });

  </script>

</body>