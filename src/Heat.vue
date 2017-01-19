<style>
#heat {
  font-family: 'Avenir', Helvetica, Arial, sans-serif, 'Microsoft Yahei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
.header{
  display:flex;
  flex-direction:row;
  padding-top:1rem;
  align-items:center;
}
.reback img{
  width:50px;
  height:50px;
  flex:1;
}
.title{
  flex:4;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
}
.title div{
  background-color:#444545;
  color:#fff;
  padding:0.5rem 2rem;
  border-radius: 1rem;
}
</style>
<template>
  <div id="heat">
  <div class="header">
    <div class="reback"><img src="/static/imgs/reback.png" alt="返回按钮" @click="backHome" /></div>
    <div class="title"><div>今天吃什么？</div></div>
  </div>
  <div> 待完成：热度推荐</div>
  </div>

</template>

<script>
var Api = require('./api.js');
export default {
  name: 'heat',
  components: {

  },
  data:function(){
    return{

    }
  },
  methods:{
    backHome:function(){
      this.$router.push('/home');
    }
  } 
}
</script>


