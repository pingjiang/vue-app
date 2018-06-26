<template>
  <div class="view-container">
    <Hello msg="hello"></Hello>
    <World msg="world"></World>

    <p>{{ 0.12 | percent }}</p>

    <Button @click="$wait.start('test')">Test loading</Button>
    <Spin v-if="$wait.is('test')"></Spin>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { actions, getApiData } from '../../../core/vuex-api'

export default {
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      // posts: {
      //   status: 'success', // can be 'loading' and 'error' depending on the request status
      //   resp: {...}, // the resp obj from axios request
      // }
      posts: getApiData('posts'),
    }),
  },
  methods: {
    fetchPosts() {
      this.$store.dispatch(actions.request, {
        baseURL: 'https://jsonplaceholder.typicode.com',
        method: 'GET',
        url: 'posts',
        keyPath: ['post'],
      });
    },
  },
};
</script>
