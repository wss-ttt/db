<template>
  <div class="home has-header">
    <v-homeList v-for="(item,index) in home.events" :item="item" :key="index"></v-homeList>
    <!-- <v-list v-for="(item,index) in home.users" :key="index" :item="item"></v-list> -->
    <infinite-loading
      :distance="distance"
      @infinite="infiniteHandler"
      ref="infiniteLoading"
      spinner="bubbles"
    >
      <!-- <v-loading slot="spinner"></v-loading> -->
      <div slot="no-more">已加载完毕!</div>
    </infinite-loading>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import vHomeList from '@/components/homeList.vue'
import vList from '@/components/list.vue'
import InfiniteLoading from 'vue-infinite-loading'
import vLoading from '@/components/loading.vue'
export default {
  components: {
    vHomeList,
    InfiniteLoading,
    vLoading,
    vList
  },
  props: {},
  data() {
    return {
      distance: 10
    }
  },
  watch: {},
  computed: {
    ...mapState(['home'])
  },
  methods: {
    ...mapActions(['loadMore','getUsers']), 
    infiniteHandler($state) {
      setTimeout(() => {
        this.loadMore()
        // this.getUsers()   // get Users
        $state.loaded()
      }, 1000)
    }
  },
  created() {},
  mounted() {
  }
}
</script>
<style scoped>
</style>