<template>
  <div>
      <div class="videoWrapper">
      <iframe id="ytplayer" type="text/html" allowfullscreen="allowfullscreen"  width="640" height="360"
              :src="`https://www.youtube.com/embed/${videoId}?autoplay=1`"
              frameborder="0"></iframe>
    </div>
    <h1>{{title}}</h1>
    <lyrics></lyrics>
</div>
</template>

<script>
  import Lyrics from './Lyrics';

  export default {
    components: {
      Lyrics,
    },
    data() {
      return {
        videoId: this.$route.params.videoId,
        title: this.$route.params.title,
      };
    },
  };
</script>

<style scoped>
  .videoWrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
  }
  .videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  lyrics {
    margin-top: 50px;
  }
</style>
