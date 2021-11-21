<template>
    <div>
        Like this post: <button id="close-image" v-on:click="count++">
            <img
                :src="require('/src/assets/like-button-black.png')"
                alt="like"
                width="30"
                height="30"
            />
        </button>
        <p>This post has been liked {{ post.likes }} times.</p>
    </div>
</template>


<script>

  export default {
  name: "likes",
  data: function () {
    return {
      count: 0
    };
  },

  computed: {
    postList() {
      return this.$store.state.postList;
    },
  },

};

</script>

<style scoped>
.div {
  width: 30;
  height: 30;
}
</style>