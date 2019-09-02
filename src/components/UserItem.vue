<template>
  <div class="user">
    <template v-if="user.name">
        <img src="../assets/avatar.png" alt />
        <!-- <span>{{user.name}},您好</span> -->
        <router-link>{{user.name}},您好</router-link>
    </template>
    <template v-else>
        <img src="../assets/user_normal.jpg" alt />
        <!-- <span>请登录</span> -->
        <router-link :to="{name:'login'}">请登录</router-link>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  watch: {},
  computed: {
    ...mapState(['user'])
  },
  methods: {},
  created() {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
.user {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 0 15px;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
}
</style>