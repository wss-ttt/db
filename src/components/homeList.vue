<template>
  <div class="homeList">
    <router-link :to="{name:'details',params:{id:item.id}}">
      <div class="info">
        <div class="left">
          <div class="title">{{item.title}}</div>
          <div class="content">{{item.content | subStr}}</div>
        </div>
        <div class="right">
          <img :src="item.image_hlarge" alt />
        </div>
      </div>
      <div class="tips">
        <span>{{item.category_name}}</span>
        <span v-if="item.subcategory_name">{{item.subcategory_name}}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    item: {
      type: Object
    }
  },
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
  filters: {
    subStr: function(value) {
      let newVal = value.replace(/<.*?>/g, '')
      return newVal.slice(0, 30)
    }
  }
}
</script>
<style scoped lang="scss">
.homeList {
  padding: 15px;
  .info {
    display: flex;
    justify-content: space-between;
    .left {
      flex: 1;
      .title {
        font-size: 20px;
        padding: 10px 0;
      }
      .content {
        color: #ccc;
        font-size:14px;
      }
    }
    .right {
      img {
        width: 80px;
        height: 100px;
        margin-left: 10px;
      }
    }
  }
  .tips{
      display: flex;
      justify-content:space-between;
      span{
          color:#ccc;
          margin-top: 10px;
      }
  }
}
</style>