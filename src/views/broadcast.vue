<template>
  <div class="broadcast has-header">
    <card-item v-for="(item,index) in 10" :key="index"></card-item>
  </div>
</template>

<script>
import CardItem from '@/components/CardItem.vue'
export default {
  components: {
    CardItem
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
.broadcast{
  padding: 0 15px;
}
</style>