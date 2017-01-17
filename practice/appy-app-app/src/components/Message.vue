<template>
  <div class="box is-info">
    <h1>
      <slot></slot>
    </h1>
  </div>  
</template>

<script>
  export default {

  }
</script>

<style>
  .box {
    background: pink;
    padding: 10px;
    border: 1px solid cyan; 
  }
</style>