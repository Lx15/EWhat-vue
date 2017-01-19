
<style>
#random {
  font-family: 'invite1','Avenir', Helvetica, Arial, sans-serif, 'Microsoft Yahei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.header{
  display:flex;
  flex-direction:row;
  padding-top:1rem;
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
  margin-left: -3rem;
}
.randomLists{
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
}
.randomList{
  background-color:#fff;
  margin:1rem ;
  padding-top:1rem;
  width:90%;
  height:80%;
}
.randomList img{
  width:90%;
  height:35%;
}
.randomList div{
  font-weight:bold;
}
#menuDiv{
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  background-color:rgba(0,0,0,0.6);
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

}
.showImg{
  color:#fff;
  line-height:2rem;
}
.showText{
   font-size:3rem;
   color: #fff;
   margin-top:-5rem;
}
</style>
<template>
  <div id="random">
  <div class="header">
    <div class="reback"><img src="/static/imgs/reback.png" alt="返回按钮" @click="backHome" /></div>
    <div class="title"><div>今天吃什么？</div></div>
  </div>
  <div class="randomLists">
    <div class="randomList" v-for="(item,index) in randomLists" @click="openImg(index)">
      <img :src="item.imgUrl" alt="图片"/>
      <div class="randomList-title">{{item.title}}</div>
    </div>
  </div>
    <div class="modal" v-if="showMenu" id="menuDiv"  @click="hideMenu">
        <div class="showImg">{{onShowItem.content}}</div>
        <div  class="showText">{{onShowItem.title}}</div>
    </div>
  </div>

</template>

<script>
var Api = require('./api.js');
export default {
  name: 'random',
  components: {
  },
  data:function(){
    return{
       showMenu:false,
       onShowItem:{
       },
       onShowImg:"",
       onShowTitle:"",
       randomLists:[{
         imgUrl:"",
         title:"",
         content:"",
         content_id:""
       },{
         imgUrl:"",
         title:"",
         content:"",
         content_id:""
       }]

    }
  },
  watch:{

  },
  methods:{
    backHome:function(){
      this.$router.push('/home');
    },
   openImg:function(index){
      var self = this;
      self.onShowItem=self.randomLists[index];
      self.showMenu=true; 
   },
   hideMenu:function(){
     this.showMenu =false;
   }
  },
  created: function(){
    var  self =this;
    var weather = Api.fetchItem("weather");
    var msg={};
     msg.condition = weather;
     Api.postData(Api.apiURL.baseurl+Api.apiURL.getRandom,msg,function(retdata){
        var data = retdata.data;
        for(var i=0;i<2;i++){
            self.randomLists[i].title = data.foodList[i].name;
            self.randomLists[i].content = data.foodList[i].describe;
            self.randomLists[i].imgUrl = Api.apiURL.baseurl+'/images/db/' + data.foodList[i].image[0];
            self.randomLists[i].content_id=i;
        }
     },function(e){});

  }
}
</script>


