<template>
  <div class="ui cards">
    <result v-for="result in results" :key="'result'" v-bind:result="result"></result>
  </div>
</template>

<script>
import Result from './Result';

export default {
  props: ['results'],
  components: {
    Result,
  },
  methods: {
  },
};
</script>

<style>

</style>