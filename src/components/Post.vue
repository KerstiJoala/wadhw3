<template>
  <div id="post-list">
    <ul>
      <li class="post" v-for="post in postList" :key="post.id">
        <img
          :src="require('/src/assets/pngegg.png')"
          alt="profilePic"
          width="30"
          height="30"
        />
        <br>
        <span class="date"> {{ post.date }}</span>
        <h3 class="title">{{ post.title }}</h3>
        <p class="text">{{ post.text }}</p>
        <img :src="post.image" alt="postPic" v-if="post.image" width="700" />
        <br>
        <LikeButton></LikeButton>
      </li>
    </ul>
  </div>
</template>

<script>
  import LikeButton from './LikeButton.vue';

  export default {
  components: {LikeButton},
  name: "post",
  data: function () {
    return {};
  },

  computed: {
    postList() {
      return this.$store.state.postList;
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -mos-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-bottom: 150px;
}

.post{
  padding-top: 75px;
  padding-bottom: 75px;
  align-items: center;
  display: block;
  border-style: solid;
  width: 50%;
  margin: auto;
  outline: 25px solid gray;
}

</style>