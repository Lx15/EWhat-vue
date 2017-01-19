
<style>
#invite {
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
.inviteImgs{
  display:flex;
  flex-direction:row;
  justify-content:center;
}
.inviteImgs img{
  width:80%;
  height:250px;
  border-radius:30px;
  margin:70px;
}
.choseBtn{
  display:flex;
  flex-direction:row;
  justify-content:center;
}
.choseBtn button{
  width:60%;
  height:50px;
  border:none;
  outline:none;
  background-color:tomato;
  color:#fff;
  border-radius:10px;
  font-size:1.5rem;
  
}
#menuDiv{
  position:absolute;
  top:0;
  right:0;
  background-color:rgba(0,0,0,0.6);
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}
.showImg{
  width:80%;
  height:50%;
  border-radius:30px;
}
.showText{
   font-size:3rem;
   color: #fff;
}
</style>
<template>
  <div id="invite">
  <div class="header">
    <div class="reback"><img src="/static/imgs/reback.png" alt="返回按钮" @click="backHome" /></div>
    <div class="title"><div>今天我请客</div></div>
  </div>
  <div class="inviteImgs"><img :src="choseImg" alt="选择图片"></div>
  <div class="choseBtn">
     <button @click="choseBtn">{{btnVal}}</button>
  </div>
    <div class="modal" v-if="showMenu" id="menuDiv"  @click="hideMenu">
        <img class="showImg" :src="onShowImg" />
        <div  class="showText">{{onShowTitle}}</div>
    </div>
  </div>

</template>

<script>
var Api = require('./api.js');
export default {
  name: 'invite',
  components: {
  },
  data:function(){
    return{
       choseImg:"/static/imgs/img1.png",
       invitImgs:[
         "/static/imgs/img1.png",
         "/static/imgs/img2.png",
         "/static/imgs/img3.png",
         "/static/imgs/img4.png",
         "/static/imgs/img5.png",
         "/static/imgs/img6.png",
         "/static/imgs/img7.png",
         "/static/imgs/img8.png",
         "/static/imgs/img9.png",
         "/static/imgs/img10.png",
       ],
       btnVal:"开始选择",
       choseFlag:false,
       timer:null,
       showMenu:false,
       onShowImg:"",
       onShowTitle:""

    }
  },
  watch:{

  },
  methods:{
    backHome:function(){
      this.$router.push('/home');
    },
   choseBtn:function(){
     var self= this;
     if(!self.choseFlag){
       self.btnVal ="停";
       self.choseFlag =true;
       self.timer = setInterval(function(){
         var num = Math.floor(Math.random() * self.invitImgs.length); 
         self.choseImg = self.invitImgs[num];
       },300);
     }else{
     var msg={};
         msg.condition='';
    Api.postData(Api.apiURL.baseurl+Api.apiURL.getInvite,msg,function(retdata){
         var data = retdata.data;
        self.onShowImg=Api.apiURL.baseurl+'/images/db/' + data.foodList[0].image[0];
        self.onShowTitle=data.foodList[0].name; 
    },function(){});

       self.btnVal="开始选择";
       self.showMenu =true;
       self.choseFlag =false;
       clearInterval(self.timer);
     }

   },
   hideMenu:function(){
     this.showMenu =false;
   }
  },
  created:function(){
  }

}
</script>


