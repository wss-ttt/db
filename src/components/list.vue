<template>
    <div class="list">
       编号:{{item.id}} 
       <br>
       姓名:{{item.name}}
    </div>
</template>

<script>
  export default {
    components:{},
    props:{
        item:{
            type:Object
        }
    },
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
<style scoped>
.list{
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    padding: 30px;
    font-size:20px;
    text-align:center;
    margin:15px 0;
}
</style>