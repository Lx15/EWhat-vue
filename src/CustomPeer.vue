
<style>
#custom-peer {
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
.body{
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:space-around;
  align-items:flex-end;
}
.imgs{
  width:10rem;
  height:12rem;
  margin-top:3rem;
}
.imgs img{
  width:100%;
  height:100%;
}
</style>
<template>
  <div id="custom-peer">
  <div class="header">
    <div class="reback"><img src="/static/imgs/reback.png" alt="返回按钮" @click="backHome" /></div>
    <div class="title"><div>选择吃饭人数</div></div>
  </div>
  <div class="body">
    <div class="imgs" v-for="(item,index) in peerImgs" @click="chosePeer(index)" ><img :src="item" alt="图片" /></div>
  </div>
  </div>

</template>

<script>
var Api = require('./api.js');
export default {
  name: 'custom-peer',
  components: {
  },
  data:function(){
    return{
     peerImgs:[
       '/static/imgs/one.png',
       '/static/imgs/two.png',
       '/static/imgs/three.png',
       '/static/imgs/more.png',
     ]
    }
  },
  watch:{

  },
  methods:{
    backHome:function(){
      this.$router.push('/home');
    },
    chosePeer:function(index){
      index++;
      if(index==4){
        Api.saveItem("peer","more");
      }else{
        Api.saveItem("peer",index.toString());
      }
     
      if(index==1){
        this.$router.push('/home/custom-peer/custom-flavor');
      }else{
        this.$router.push('/home/custom-peer/custom-health');
      }
    }
  } 
}
</script>


