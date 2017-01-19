
<style>
#custom-result {
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
  padding:0.5rem 1rem;
  border-radius: 1rem;
}
.navigator{
  position:fixed;
  bottom:0;
  background-color:#444545;
  opacity:0.6;
  width:100%;
  height:3.5rem;
  display:flex;
  justify-content:space-around;
  align-items:center;
}
.navigator button{
  width: 5.5rem;
  height: 2.5rem;
  border:none;
  border-radius:0.5rem;
  outline:none;
  color:#fff;
  font-size:16px;
}
.active{
  background-color:red ;
}
.noactive{
  background-color:#111;
}
#custom-result .img{
  margin:1rem 2rem;
  height:13rem;
  width:90%;
}
#custom-result .img img{
  width:100%;
  height:100%;
}
#custom-result .imgdescribe{
  background-color:#111;
  opacity:0.4;
  margin:0rem 2rem;
  padding:1rem;
  color:#fff;
  border-radius:2rem;
  font-size:16px;
  line-height:20px;
  height:15rem;
}
.imgdescribe .describe-title{
  font-weight:bold;
  font-size:1rem;
  padding-bottom:0.5rem;
}
 .describe-content,.describe-benefit{
   display:flex;
   flex-direction:column;
   align-items:flex-start;
   justify-content:flex-start;
 }
</style>
<template>
  <div id="custom-result">
  <div class="header">
    <div class="reback"><img src="/static/imgs/reback.png" alt="返回按钮" @click="backHome" /></div>
    <div class="title"><div>看来今天要吃这些</div></div>
  </div>
  <div class="body">
     <div class="img"><img :src="baseImgUrl+results[activeNum].image[0]" alt=""></div>
     <div class="imgdescribe">
       <div class="describe-title">{{results[activeNum].name}}</div>
       <div class="describe-content">{{results[activeNum].describe}}<br/><br/></div>
       <div class="describe-benefit">{{results[activeNum].benefit}}</div>
     </div>
  </div>
  <div class="navigator" @click="navigate">
   <button class="firstBtn"  :class="{active:isBtnActive[0],noactive:!isBtnActive[0]}">首选</button>
   <button class="secondBtn" :class="{active:isBtnActive[1],noactive:!isBtnActive[1]}">其次</button>
   <button class="thirdBtn"  :class="{active:isBtnActive[2],noactive:!isBtnActive[2]}">最后的纠结</button>
  </div>
  </div>

</template>

<script>
var Api = require('./api.js');
export default {
  name: 'custom-result',
  components: {
  },
  data:function(){
    return{
      results:[{
        name:"",
        describe:"",
        benefit:"",
        image:[]
      }],
      isBtnActive:[true,false,false],
      activeNum: 0,
      baseImgUrl:Api.apiURL.baseurl+'/images/db/'
    }
  },
  methods:{
    backHome:function(){
      this.$router.push('/home');
    },
    navigate :function(event){
      var btn = event.target.className.split(" ")[0];
      switch(btn){
        case 'firstBtn': this.isBtnActive =[true,false,false]; this.activeNum=0;break;
        case 'secondBtn': this.isBtnActive =[false,true,false]; this.activeNum=1;break;
        case 'thirdBtn': this.isBtnActive =[false,false,true]; this.activeNum=2;break;
      }

    }
  },
  created:function(){
    var self =this;
     self.results = Api.fetchItem("results") ;
  } 
}
</script>


