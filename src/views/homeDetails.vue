<template>
  <div class="details has-header">
    <ul>
      <li>
        <span>标签:</span>
        <span>
          {{home.eventItem.tags}}
        </span>
      </li>
      <li>
        <span>地址:</span>
        <span>
          {{home.eventItem.address}}
        </span>
      </li>
      <li>
        <span>时间:</span>
        <span>
          {{home.eventItem.begin_time}}
        </span>
      </li>
      <li>
        <span>内容:</span>
        <div v-html="home.eventItem.content"></div>
      </li>
    </ul>
    <p v-html="home.eventItem.content"></p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {},
  props: {},
  data() {
    return {
      id: ''
    }
  },
  watch: {},
  computed: {
    ...mapState(['home'])
  },
  methods: {},
  created() {},
  mounted() {
    let id = this.$route.params.id
    console.log(id)
    this.id = id
    this.$store.dispatch({
      type: 'getDetails',
      id: this.id
    })
  }
}
</script>
<style scoped>
.details{
  padding: 5px;
}
</style>