
<style>
#custom-health {
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
#custom-health .body{
  position:relative;
  background-color:#fff;
  margin:1rem 0.5rem;
  width:90%;
  height:90%;
}
#custom-health  .well{
  position:absolute;
  width:6rem;
  height:6rem;
  top:1rem;
  left:1rem;
}
#custom-health  img{
  width:100%;
  height:100%;
}
#custom-health  .dou{
  position:absolute;
  width:8rem;
  height:8rem;
  top:8rem;
  left:17rem;
}
#custom-health  .hung{
  position:absolute;
  width:10rem;
  height:10rem;
  top:15rem;
  left:0rem;
}
#custom-health .meat{
  position:absolute;
  width:12rem;
  height:12rem;
  top:5rem;
  left:5rem;
}
#custom-health  .love{
  position:absolute;
  width:10rem;
  height:10rem;
  top:18rem;
  left:15rem;
}
#custom-health  .heal{
  position:absolute;
  width:7rem;
  height:7rem;
  top:0rem;
  left:15rem;
}
</style>
<template>
  <div id="custom-health">
  <div class="header">
    <div class="reback"><img src="/static/imgs/reback.png" alt="返回按钮" @click="backHome" /></div>
    <div class="title"><div>选择你的口味</div></div>
  </div>
  <div class="body">
    <div class="imgs" v-for="(item,index) in peerImgs" @click="choseHealth(index)" :class="item.class"><img :src="item.src" alt="图片" /></div>
  </div>
  </div>

</template>

<script>
var Api = require('./api.js');
export default {
  name: 'custom-health',
  components: {
  },
  data:function(){
    return{
     peerImgs:[
      {
        class:"well",
        src:"/static/imgs/heal-well.png"
      },      {
        class:"dou",
        src:"/static/imgs/heal-dou.png"
      },      {
        class:"hung",
        src:"/static/imgs/heal-hung.png"
      },      {
        class:"meat",
        src:"/static/imgs/heal-meat.png"
      },      {
        class:"love",
        src:"/static/imgs/heal-love.png"
      },   {
        class:"heal",
        src:"/static/imgs/heal-heal.png"
      }
     ]
    }
  },
  watch:{

  },
  methods:{
    backHome:function(){
      var peer = Api.fetchItem("peer");
      if(peer==1){
       this.$router.push('/home/custom-peer/custom-flavor');
      }else{
       this.$router.push('/home/custom-peer');
      }
      
    },
    choseHealth:function(index){
      switch(index){
          case 1: Api.saveItem('health','great');break;
          case 2: Api.saveItem('health','cute');break;
          case 3: Api.saveItem('health','recover');break;
          case 4: Api.saveItem('health','meat');break;
          case 5: Api.saveItem('health','pox');break;
          case 6: Api.saveItem('health','hungry');break;
      }
      this.$router.push('/home/custom-peer/custom-health/custom-time');
    }
  } 
}
</script>


