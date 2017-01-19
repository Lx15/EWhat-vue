
<style>
#custom-time {
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
#custom-time .body{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color:#fff;
  margin:1rem 0.5rem;
  padding:0.5rem 0;
}
#custom-time .imgs{
  margin:0.5rem;
  width:95%;
  height:5rem;
}
#custom-time .imgs img{
  width:100%;
  height:100%;
}
</style>
<template>
  <div id="custom-time">
  <div class="header">
    <div class="reback"><img src="/static/imgs/reback.png" alt="返回按钮" @click="backHome" /></div>
    <div class="title"><div>选择你的口味</div></div>
  </div>
  <div class="body">
    <div class="imgs" v-for="(item,index) in timeImgs" @click="choseTime(index)" ><img :src="item" alt="图片" /></div>
  </div>
  </div>

</template>

<script>
var Api = require('./api.js');
export default {
  name: 'custom-time',
  components: {
  },
  data:function(){
    return{
     timeImgs:[
       '/static/imgs/time-zao.png',
       '/static/imgs/time-wu.png',
       '/static/imgs/time-xia.png',
       '/static/imgs/time-wan.png',
       '/static/imgs/time-ye.png',
     ]
    }
  },
  watch:{

  },
  methods:{
    backHome:function(){
      this.$router.push('/home/custom-peer');
    },
    choseTime:function(index){
      var self =this;
      var  tem ="morning";
      switch(index){
          case 1: tem="morning";break;
          case 2: tem ="midday" ; break;
          case 3: tem ="pm"; break;
          case 4: tem ="evening" ; break;
          case 5: tem ="night" ; break;
      }
     var msg={};
        msg.condition={};
        msg.condition.num = Api.fetchItem("peer");
        msg.condition.flavor = Api.fetchItem("flavor");
        msg.condition.health = Api.fetchItem("health");
        msg.condition.time = tem; 
    Api.postData(Api.apiURL.baseurl+Api.apiURL.getResult,msg,function(retdata){
          var results = retdata.data.foodList;
          Api.saveItem("results",results);
      self.$router.push('/home/custom-peer/custom-health/custom-time/custom-result');
    },function(e){});
    }
  } 
}
</script>


