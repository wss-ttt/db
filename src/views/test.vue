<template>
  <div class="home">
    <ul>
      <li v-for="(item,index) in home.users" :key="index">
        编号:{{item.id}}
        <br />
        姓名:{{item.name}}
      </li>
      <button @click="getData">请求</button>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  watch: {},
  computed: {
    ...mapState(['home'])
  },
  methods: {
    ...mapActions(['loadMore']), //  注意写法不要写错了
    getData(){
        this.$http({
            /* url:'https://api.douban.com/v2/event/list?loc=108288&start=0&count=3', */
            url:'/v2/event/list?loc=108288&start=0&count=3',
            method:'get'
        }).then((data)=>{
            console.log(data)
        })
    }
  },
  created() {},
  mounted() {
    // 执行该方法
    this.loadMore()
    console.log(this.home)
  }
}
</script>
<style scoped>
</style>