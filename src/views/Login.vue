<template>
  <div class="login">
    <h3>赶紧登录吧~</h3>
    <form>
      <div class="form-item">
        <label for>用户名</label>
        <span class="error">{{userNameMsg}}</span>
        <input
          class="input"
          type="text"
          @blur="checkInput('userName')"
          v-model="form.userName"
          placeholder="用户名"
        />
      </div>
      <div class="form-item">
        <label for>密码</label>
        <span class="error">{{pwdMsg}}</span>
        <input
          class="input"
          type="text"
          @blur="checkInput('pwd')"
          v-model="form.pwd"
          placeholder="密码"
        />
      </div>
      <div class="form-item">
        <button type="button" class="btn login" @click="submit">登录</button>
        <div class="tips">
          <router-link :to="{name:'register'}">没有账号,立即注册</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      form: {
        userName: '',
        pwd: ''
      },
      userNameMsg: '', // 用户名错误消息
      pwdMsg: '' // 密码错误消息
    }
  },
  watch: {},
  computed: {
    isValid(){
      if(!this.userNameMsg&&!this.pwdMsg){
        return true
      }else{
        return false
      }
    }
  },
  methods: {
    submit() {
      this.checkInput('userName')
      this.checkInput('pwd')
      if(!this.isValid)return
      this.$http({
        url: 'http://localhost:2000/login',
        params: {
          userName: this.form.userName,
          pwd: this.form.pwd
        }
      }).then(res => {
        if (res.code === 0) {
          this.$store.commit({
            type: 'saveUser',
            userName: this.form.userName,
            pwd: this.form.pwd
          })
          // success
          this.$router.push({
            name: 'home'
          })
        } else {
          // failed
          alert(res.message)
        }
      })
    },
    checkInput(type) {
      if (type === 'userName') {
        if (this.form.userName === '') {
          this.userNameMsg = '用户名不能为空'
          return
        }
        this.userNameMsg = ''
      }
      if (type === 'pwd') {
        if (this.form.pwd === '') {
          this.pwdMsg = '密码不能为空'
          return
        }
        if (this.form.pwd.length < 6) {
          this.pwdMsg = '密码长度不能小于6位'
          return
        }
        this.pwdMsg = ''
      }
    }
  },
  created() {},
  mounted() {}
}
</script>
<style scoped lang="scss">
.login {
  padding: 15px 30px;
}
.login h3 {
  text-align: center;
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
  padding: 5px 0;
  text-align: right;
  font-size: 12px;
  color: #ccc;
}
.error{
  color:red;
}
</style>