<template>
  <div class="counter">
    <h2>{{ title }}</h2>
    <div>
      <span
        >Counter: <span>{{ $store.state.counter.count }}</span>
      </span>
      <button v-on:click="$store.commit('counter/increment')">+1</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      title: 'Counter'
    }
  }
}
</script>
