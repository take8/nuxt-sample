<template>
  <div class="container">
    <h1>{{ message }}</h1>
    <div>id: {{ this.$route.params.id }}</div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      message: '/users/_id.vueを表示中'
    }
  }
}
</script>
