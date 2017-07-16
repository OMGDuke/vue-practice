<template>
  <div>
    <h1>Home</h1>
    <form v-on:submit.prevent="httpRequest">
      <label for="search">Search for song:</label>
    <input type="text" ref="search" v-model="searchTerm">
    <button type="submit">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
      results: [],
    };
  },
  methods: {
    httpRequest() {
      const API_KEY = this.$env.get('YOUTUBE_API');
      this.$http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${this.searchTerm}&key=${API_KEY}`)
      .then(this.requestSuccessCallback, this.requestErrorCallback);
    },
    requestSuccessCallback(response) {
      this.results = response.body.items;
      console.log(this.results);
    },
    requestErrorCallback(error) {
      console.log(error);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
