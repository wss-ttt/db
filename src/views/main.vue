<template>
  <div class="wrapper">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import vHeader from '@/components/header.vue'
export default {
  components: {
    vHeader
  },
  props: {},
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
}
</script>
<style scoped lang="scss">
.wrapper{
  width: 100%;
  background: #ccc;
}
</style>