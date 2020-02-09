<template>
  <div class="header  top">
    <h1>{{ text }}</h1>
    </div>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style scoped>
  a {
    color: #42b983;
  }
  .top {
    margin: 5px;
}
  h3 {
  margin: 20px 0 0;
}
</style>
