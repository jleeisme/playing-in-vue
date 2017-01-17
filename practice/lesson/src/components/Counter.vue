<template>
  <div>
    <h2>count is: {{ count }}</h2>
    <p>
      <button @click="count += 3">increment</button>
      <button @click="count -= 3">decrement</button>
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return { count: 0 }; 
    }
  }
</script>