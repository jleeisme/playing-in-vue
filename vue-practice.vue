<head>
  <body>
    <!-- <h1 id="skills">Skill: {{ skill }}</h1>
    <input type="text" v-model="points"> -->
    <div id="div">
      <h1> {{ fullName }}</h1>
      <input type="text" v-model="first" placeholder="First Name">
      <input type="text" v-model="last" placeholder="Last Name">
    </div>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script>
      new Vue ({
        el: '#div',
        data: {
          first: 'Jason',
          last: "Lee"
        },

        computed: {
          fullName: function() {
            return this.first + ' ' + this.last;
          }
        }

        // watch: {
        //   first: function(first) {
        //     this.fullName = first + ' ' + this.last;
        //   },
        //   last: function(last) {
        //     this.fullName = this.first + ' ' + last;
        //   }
        // }
        // data: {
        //   points: 50,
        // },
        // computed: {
        //   skill: function() {
        //     if (this.points <= 100) {
        //       return 'Beginner';
        //     }
        //     return 'Advanced';
        //   }
        // }
      });
    </script>

  </body>
</head>