<template>
  <div class="ui card">
    <div class="image video-image">
       <img :src="thumbnail" v-on:click="goToSong()"> 

    </div>
    <div class="content">
      <div class="header">
        <a v-on:click="goToSong()">{{title}}</a>
      </div>
      <div class="meta">
        <a>{{channel}}</a>
      </div>
      <div class="description">
        {{description}}
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        {{formatDate(published)}}
      </span>
      <span>
        <i class="user icon"></i>
        75 Friends
      </span>
    </div>
  </div>
  
</template>

<script>
export default {
  props: ['result'],
  data() {
    return {
      title: this.result.snippet.title,
      videoId: this.result.id.videoId,
      channel: this.result.snippet.channelTitle,
      description: this.result.snippet.description,
      published: new Date(this.result.snippet.publishedAt),
      thumbnail: this.result.snippet.thumbnails.default.url,
    };
  },
  methods: {
    formatDate(date) {
      let month = String(date.getMonth() + 1);
      let day = String(date.getDate());
      const year = String(date.getFullYear());

      if (month.length < 2) month = `0${month}`;
      if (day.length < 2) day = `0${day}`;
      return `${day}/${month}/${year}`;
    },
    goToSong() {
      console.log('test');
      this.$router.push({ name: 'sing', params: { videoId: this.videoId, title: this.title } });
    },
  },
};
</script>

<style scoped>
.video-image {
  cursor: pointer;
}
</style>

