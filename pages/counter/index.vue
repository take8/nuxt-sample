<template>
  <div class="container">
    <ul>
      <li><counter /></li>
      <li><counter /></li>
      <li><counter /></li>
    </ul>
  </div>
</template>

<script>
import Counter from '~/components/Counter'

export default {
  components: {
    Counter
  }
}
</script>

<style>
ul {
  padding: 0;
}
li {
  list-style: none;
}

li {
  border-bottom: 2px solid #999;
}
li:last-of-type {
  border-bottom: none;
}
</style>
