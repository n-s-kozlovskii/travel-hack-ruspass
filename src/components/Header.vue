<template>
  <div class="top">
    <h3>{{ text }}</h3>
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
.top {
    margin: 5px;
}
h3 {
  margin: 20px 0 0;
}
a {
  color: #42b983;
}
</style>
