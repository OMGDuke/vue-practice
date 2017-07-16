<template>
  <div class="ui container middle aligned center aligned grid">
    <div class="column">
      <h1 class="ui teal header">Home</h1>
      <form class="ui large four form" v-on:submit.prevent="searchForSong">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui icon input">
              <input placeholder="Artist..." type="text" ref="artist" v-model="searchTermArtist">
              <i class="user icon"></i>
            </div>
            <div class="ui icon input">
              <input placeholder="Song..." type="text" ref="song" v-model="searchTermSong">
              <i class="music icon"></i>
            </div>
          </div>
          <button class="ui large teal submit button" type="submit">Search</button>
        </div>
      </form>
      <result-list v-bind:results="this.results"></result-list>
    </div>
  </div>
</template>

<script>
  import ResultList from './ResultList';

  export default {
    components: {
      ResultList,
    },
    data() {
      return {
        searchTermArtist: this.$route.params.artist || undefined,
        searchTermSong: this.$route.params.song || undefined,
        results: undefined,
      };
    },
    created() {
      this.checkForParams();
    },
    methods: {
      checkForParams() {
        if (this.$route.params.artist || this.$route.params.song) {
          this.searchForSong();
        }
      },
      searchForSong() {
        this.results = [];
        const API_KEY = this.$env.get('YOUTUBE_API');
        const artist = this.searchTermArtist ? `${this.searchTermArtist}%20` : '';
        const song = this.searchTermSong ? `%20${this.searchTermSong}%20` : '';
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${artist}${song}karaoke&key=${API_KEY}`;
        this.httpRequest(url);
      },
      httpRequest(url) {
        this.$http.get(url)
        .then(this.requestSuccessCallback, this.requestErrorCallback);
      },
      requestSuccessCallback(response) {
        const searchParams = {
          artist: this.searchTermArtist,
          song: this.searchTermSong,
        };
        this.$router.push({ name: 'Search', params: searchParams });
        this.results = response.body.items;
      },
      requestErrorCallback(error) {
        return error;
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
