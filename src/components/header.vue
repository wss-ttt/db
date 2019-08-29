<template>
    <div class="header">
       <div class="logo">
           <router-link :to="{name:'home'}">logo</router-link>
       </div> 
       <div class="btns">
           <router-link :to="{name:'movie'}">电影</router-link>
           <router-link :to="{name:'book'}">图书</router-link>
           <router-link :to="{name:'broadcast'}">广播</router-link>
           <router-link :to="{name:'group'}">小组</router-link>
       </div>
    </div>
</template>

<script>
  export default {
    components:{},
    props:{},
    data(){
      return {
          
      }
    },
    watch:{},
    computed:{},
    methods:{},
    created(){},
    mounted(){}
  }
</script>
<style scoped lang="scss">
.header{
    width: 100%;
    display: flex;
    justify-content:space-between;
    align-items: center;
    height: 50px;
    background-color: red;
    padding: 0 15px;
}
</style>