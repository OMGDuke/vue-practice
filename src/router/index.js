import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Home from '@/components/Home';
import Sing from '@/components/Sing';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/search-artist/:artist',
      name: 'searchArtist',
      component: Home,
    },
    {
      path: '/search-song/:song',
      name: 'searchSong',
      component: Home,
    },
    {
      path: '/search/:artist/:song',
      name: 'search',
      component: Home,
    },
    {
      path: '/sing/:videoId',
      name: 'sing',
      component: Sing,
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
    },
  ],
});
