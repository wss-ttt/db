<template>
  <div class="register">
      <h3>赶紧注册吧~</h3>
    <form>
      <div class="form-item">
          <input type="email" v-model="email" class="input" placeholder="邮箱" />
      </div>
      <div class="form-item">
          <input type="password" v-model="pass" class="input" placeholder="密码" />
      </div>
      <div class="form-item">
          <input type="text" v-model="name" class="input" placeholder="用户名" />
      </div>
      <div class="form-item">
          <button class="btn" @click="register">注册</button>
      </div>
      <hr>
      <div class="user-info">
        用户名:{{user.name}}
        <br>
        邮箱:{{user.email}}
        <br>
        token:{{user.token}}
        <br>
      </div>
    </form>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  components: {},
  props: {},
  data() {
    return {
        email:'',  // 邮箱
        pass:'',   // 密码
        name:'',    // 用户名
    }
  },
  watch: {},
  computed: {
      ...mapState(['user'])
  },
  methods: {
      register(){
          this.$store.dispatch({
              type:'register',
              email:this.email,
              name:this.name,
              pass:this.pass
          }).then(data=>{
            // 登录成功
            alert('注册成功')
            console.log('返回的数据',data)
            this.$router.push({
              name:'home'
            })
          })
      }
  },
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
.user-info{
    display: none;
}
</style>