import './index.html';
import './style.css';
import Vue from 'vue/dist/vue.js';

new Vue({

  el: "#app",
  data: {
    upLikes: 0,
    downLikes: 0,
  },

  methods: {
    like() {
      this.upLikes += 1;
    },
    dislike() {
      this.downLikes += 1;
    }
  },
});