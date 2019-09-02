<template>
  <div class="register">
    <h3>赶紧注册吧~</h3>
    <form>
      <div class="form-item">
        <input type="text" v-model="form.userName" class="input" placeholder="用户名" />
      </div>
      <div class="form-item">
        <input type="password" v-model="form.pwd" class="input" placeholder="密码" />
      </div>
      <div class="form-item">
        <input type="password" v-model="form.rePwd" class="input" placeholder="确认密码" />
      </div>
      <div class="form-item">
        <button type="button" class="btn" @click="register">注册</button>
        <div class="tips">
          <router-link :to="{name:'login'}">去登录</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import QS from 'qs'
export default {
  components: {},
  props: {},
  data() {
    return {
      form: {
        pwd: '', // 密码
        rePwd:'',    // 确认密码
        userName: '' // 用户名
      }
    }
  },
  watch: {},
  computed: {
    ...mapState(['user'])
  },
  methods: {
    register() {
      this.$http({
        url: 'http://localhost:2000/register',
        method: 'post',
        // 设置请求头信息  此处要设置请求信息
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        // 后端为node,这里需要序列化
        data: QS.stringify({
          userName: this.form.userName,
          pwd: this.form.pwd
        })
      }).then(res => {
        if (res.code === 0) {
          alert('注册成功')
          this.$store.commit({
            type:'saveUser',
            userName:this.form.userName,
            pwd:this.form.pwd
          })
          this.$router.push({
            name:'home'
          })
        }
      })
    }
  },
  created() {},
  mounted() {}
}
</script>
<style scoped lang="scss">
.register {
  padding: 15px 30px;
  h3 {
    text-align: center;
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
.form-item .btn {
  width: 100%;
  height: 40px;
  background-color: #17aa52;
  outline: none;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}
.tips {
  text-align: center;
  font-size: 12px;
  color: #ccc;
}
</style>