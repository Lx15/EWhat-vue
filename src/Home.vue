<style>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif, 'Microsoft Yahei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.header{
  display:flex;
  justify-content:flex-start;
  padding-top:1rem;
  font-size:30px;
  font-style:italic;
}
.weather{
 display :flex;
 flex-direction:row;
 justify-content:center;
 align-items:center;
 background-color:#fff;
   margin:0 0.5rem;
  padding:1rem 0;
}
.city{
  margin-right:2rem;

}
.day{
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  line-height:2rem;
}
.models{
  display:flex;
  flex-direction:column;
  justify-content:center;
  margin:1rem 0.5rem;
  background-color:#fff;
  padding:5px;
}
.models button{
  font-size:1.5rem;
  color:#fff;
  background-color:tomato;
  outline:none;
  border:none;
  width:60%;
  height:45px;
  border-radius:10px;
  margin:10px auto;
  font-family:'home2';
}
</style>
<template>
  <div id="home">
    <div class="header">
    今天吃什么？
    </div>
    <div class="slider"  @click="heat">
      <slider :pages="pages" :sliderinit="sliderinit" @click="heat"></slider>
    </div>
    <div class="weather">
    <div class="city">城市:  {{weather.city}}</div>
    <div class="day">
       <div class="dayone">温度:{{weather.daywen}}~{{weather.nightwen}}</div>
       <div class="daytwo">天气: {{weather.dayweather}}{{weather.nightweather}}</div>
    </div>

    </div>
     <div class="models">
     <button  @click="random">随机推荐</button>
     <button  @click="mydev">自定义</button>
     <button  @click="invite">请客模式</button>
    </div>
  </div>

</template>

<script>
import Slider from 'components/slider.vue';
var Api = require('./api.js') ;
export default {
  name: 'home',
  components: {
    Slider
  },
  data:function(){
    return{
     weather:{
       city:"正在定位...",
       daywen:"loading",
       nightwen:"loading",
       dayweather:"loading",
       nightweather:"loading"
     },
     pages:[{
       title:"",
       style:{
         background:'url(./static/imgs/slider1.png)'
       }
     },{
       title:"",
       style:{
         background:'url(./static/imgs/slider2.png)'
       }
     },{
       title:"",
       style:{
         background:'url(./static/imgs/slider3.png)'
       }
     }],
    sliderinit:{
          currentPage: 0,//当前页码
          thresholdDistance: 5000,//滑动判定距离
          thresholdTime: 1000,//滑动判定时间
          autoplay:2000,//自动滚动[ms]
          // loop:true,//循环滚动
          loop:false,//循环滚动
          direction:'horizontal'//方向设置，垂直滚动
    }
    }
  },
  watch:{

  },
  methods:{
    random:function(){
      this.$router.push('/home/random');
    },
    mydev:function(){
     this.$router.push('/home/custom-peer');
    },
    invite:function(){
      this.$router.push('/home/invite');
    },
    heat:function(){
      this.$router.push('/home/heat');
    }
  },
  created:function(){
    var self = this;
     navigator.geolocation.getCurrentPosition(function(e){
                var msg={};
                msg.lng=e.coords.longitude;
                msg.lat=e.coords.latitude;
                Api.getData(Api.apiURL.getWeather+'&lng='+msg.lng+'&lat='+msg.lat,function(retdata){
                	var data= retdata.data;
                	self.weather.city=data.showapi_res_body.cityInfo.c3;
                	self.weather.daywen=data.showapi_res_body.f1.day_air_temperature+'度';
                	self.weather.nightwen=data.showapi_res_body.f1.night_air_temperature+'度';
                	self.weather.dayweather=data.showapi_res_body.f1.day_weather+'转';
                	self.weather.nightweather=data.showapi_res_body.f1.night_weather;
                  Api.saveItem("weather",self.weather);
                })
     },function(){

     });
  }

}
</script>


