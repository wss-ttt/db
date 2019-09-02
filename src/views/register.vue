<template>
  <div class="register">
    <h3>赶紧注册吧~</h3>
    <form>
      <div class="form-item">
        <label for>用户名</label>
        <span class="error">{{userNameMsg}}</span>
        <input
          type="text"
          v-model="form.userName"
          @blur="checkInput('userName')"
          class="input"
          placeholder="用户名"
        />
      </div>
      <div class="form-item">
        <label for>密码</label>
        <span class="error">{{pwdMsg}}</span>
        <input
          type="password"
          v-model="form.pwd"
          @blur="checkInput('pwd')"
          class="input"
          placeholder="密码"
        />
      </div>
      <div class="form-item">
        <label for>确认密码</label>
        <span class="error">{{rePwdMsg}}</span>
        <input
          type="password"
          v-model="form.rePwd"
          @blur="checkInput('rePwd')"
          class="input"
          placeholder="确认密码"
        />
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
        rePwd: '', // 确认密码
        userName: '' // 用户名
      },
      userNameMsg: '', // 用户名错误提示
      pwdMsg: '', // 密码错误提示
      rePwdMsg: '' // 确认密码错误提示
      // isValid: false // 校验是否全部通过
    }
  },
  watch: {},
  computed: {
    ...mapState(['user']),
    isValid() {
      if (!this.userNameMsg && !this.pwdMsg && !this.rePwdMsg) return true
      else false
    }
  },
  methods: {
    register() {
      // 在点击按钮前，也不需要做一次校验
      this.checkInput('userName')
      this.checkInput('pwd')
      this.checkInput('rePwd')
      if (!this.isValid) return // 校验没有通过,点击注册是没有反应的
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
            type: 'saveUser',
            userName: this.form.userName,
            pwd: this.form.pwd
          })
          this.$router.push({
            name: 'home'
          })
        }
      })
    },
    // 表单校验
    checkInput(type) {
      if (type === 'userName') {
        if (this.form.userName === '') {
          this.userNameMsg = '用户性不能为空'
          return
        }
        this.userNameMsg = ''
        console.log('userName')
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
        console.log('pwd')
      }
      if (type === 'rePwd') {
        if (this.form.rePwd === '') {
          this.rePwdMsg = '确认密码不能为空'
          return
        }
        if (this.form.rePwd !== this.form.pwd) {
          this.rePwdMsg = '两次密码不一样'
          return
        }
        this.rePwdMsg = ''
        console.log('确认密码')
      }
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
.form-item label {
  padding: 5px 0;
  display: inline-block;
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
.error {
  color: red;
}
</style>