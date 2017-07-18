<template>
  <div id="app">
    <div class="ui container middle aligned center aligned grid">
      <div class="column">
        <h1 class="ui teal header"><router-link :to="{ name: 'home' }">Home</router-link></h1>
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
  body {
    background: rgba(0, 0, 0, 0.25);
  }
</style>
