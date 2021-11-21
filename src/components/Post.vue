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
        <br><br>
        <span class="date"> {{ post.date }}</span>
        <h3 class="title">{{ post.title }}</h3>
        <p class="text">{{ post.text }}</p>
        <img :src="post.image" alt="postPic" v-if="post.image" width="700" />
        <br><br>

        <div>
        Like this post: <button id="close-image" v-on:click="post.likes++">
            <img
                :src="require('/src/assets/like-button-black.png')"
                alt="like"
                width="30"
                height="30"
            />
        </button>
        <p>This post has been liked {{ post.likes }} times.</p>
        </div>
        
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
  components: {},
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
  padding-bottom: 75px;
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