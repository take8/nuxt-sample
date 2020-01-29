<template>
  <div class="container">
    <h1>/users/index</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.id }}, {{ user.name }}, {{ user.company.name }}
      </li>
    </ul>
  </div>
</template>

<script>
const axios = require('axios')
const url = 'https://jsonplaceholder.typicode.com/users'

export default {
  asyncData({ params, error }) {
    return axios
      .get(url)
      .then((res) => {
        return { users: res.data }
      })
      .catch((e) => {
        // console.log(e.response.status)
        error({ users: e.response.status, message: e.message })
      })
  }
}
</script>
