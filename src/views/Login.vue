<template>
  <div class="login">
    <h3>赶紧登录吧~</h3>
    <form>
      <div class="form-item">
        <input class="input" type="text" v-model="form.userName" placeholder="用户名" />
      </div>
      <div class="form-item">
        <input class="input" type="text" v-model="form.pwd" placeholder="密码" />
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
      form:{
        userName:'',
        pwd:'',
      }
    }
  },
  watch: {},
  computed: {},
  methods: {
    submit(){
      this.$http({
        url:'http://localhost:2000/login',
        params:{
          userName:this.form.userName,
          pwd:this.form.pwd
        }
      }).then(res=>{
        if(res.code === 0){
         this.$store.commit({
           type:'saveUser',
           userName :this.form.userName,
           pwd:this.form.pwd
         }) 
          // success
          this.$router.push({
            name:'home'
          })
        }else{
          // failed
          alert(res.message)
        }
      })
    }
  },
  created() {},
  mounted() {}
}
</script>
<style scoped lang="scss">
.login{
  padding: 15px 30px;
}
.login h3{
  text-align:center;
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
.tips{
  padding:5px 0;
  text-align:right;
  font-size:12px;
  color:#ccc;
}
</style>