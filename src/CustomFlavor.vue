
<style>
#custom-flavor {
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
#custom-flavor .body{
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:space-around;
  align-items:flex-end;
  background-color:#fff;
  margin:1rem 0.5rem;
}
#custom-flavor .imgs{
  width:9rem;
  height:9rem;
  margin-top:1rem;
}
#custom-flavor .imgs img{
  width:100%;
  height:100%;
}
</style>
<template>
  <div id="custom-flavor">
  <div class="header">
    <div class="reback"><img src="/static/imgs/reback.png" alt="返回按钮" @click="backHome" /></div>
    <div class="title"><div>选择你的口味</div></div>
  </div>
  <div class="body">
    <div class="imgs" v-for="(item,index) in peerImgs" @click="choseFlavor(index)" ><img :src="item" alt="图片" /></div>
  </div>
  </div>

</template>

<script>
var Api = require('./api.js');
export default {
  name: 'custom-flavor',
  components: {
  },
  data:function(){
    return{
     peerImgs:[
       '/static/imgs/suan.png',
       '/static/imgs/tian.png',
       '/static/imgs/la.png',
       '/static/imgs/xian.png',
       '/static/imgs/suibian.png',
     ]
    }
  },
  watch:{

  },
  methods:{
    backHome:function(){
      this.$router.push('/home/custom-peer');
    },
    choseFlavor:function(index){
      switch(index){
          case 1: Api.saveItem('flavor','acid');break;
          case 2: Api.saveItem('flavor','sweet');break;
          case 3: Api.saveItem('flavor','hot');break;
          case 4: Api.saveItem('flavor','salty');break;
          case 5: Api.saveItem('flavor','all');break;
      }
      this.$router.push('/home/custom-peer/custom-health');
    }
  } 
}
</script>


