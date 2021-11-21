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
button{
  box-shadow: 5px 7px 5px rgb(159, 158, 158);
  border-radius: 200px;
  cursor: pointer;
}
button:hover {
  color: rgb(7, 7, 7);
  box-shadow: 4px 4px 5px rgb(99, 98, 98);
  opacity: .85;
}
</style>