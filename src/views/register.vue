<template>
  <div class="register">
      <h3>赶紧注册吧~</h3>
    <form>
      <div class="form-item">
          <input type="email" class="input" placeholder="邮箱" />
      </div>
      <div class="form-item">
          <input type="password" class="input" placeholder="密码" />
      </div>
      <div class="form-item">
          <input type="text" class="input" placeholder="用户名" />
      </div>
      <div class="form-item">
          <button class="btn">注册</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  components: {},
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
.register{
    padding: 15px 30px;
    h3{
        text-align:center;
    }
}
.form-item {
  width: 100%;
  margin: 20px auto;
  position: relative;
}
.form-item .input {
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
  box-sizing: border-box;
  padding: 0 15px;
}
.form-item .btn{
    width: 100%;
    height: 40px;
    background-color: #17AA52;
    outline: none;
    border:none;
    border-radius:4px;
    font-size:16px;
    color:#fff;
}
</style>