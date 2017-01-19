<template>
  <div id="app">
    <img class="logo"src="../static/imgs/logo.png">
    <form class="loginform">
    <div class="item-input">
      <label for="username" >用户名: </label><input  name ="username" 
      v-model="user.username" @keyup.enter="onEnter" placeholder="请输入用户名" autofocus>
    </div>
    <div class="item-input">
      <label for="passwd">密  码: </label><input  name ="passwd"
       v-model="user.passwd" @keyup.enter="onEnter"placeholder="请输入密码" autofocus>
    </div>
    <div class="item-button">
      <button @click="login">登录</button>
      <button @click="signup">注册</button>
    </div>
    <div class="freebtn"  @click="freelog">
      免登录进入>>>
    </div>
    </form>
  </div>

</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data:function(){
    return{
      user:{
        username:"",
        passwd:""
      }
    }
  },
  watch:{
  },
  methods:{
    login:function(e){
      e.preventDefault();
      this.$router.push('/home');
    },
    signup:function(e){
     e.preventDefault();
    },
    freelog:function(){
      this.$router.push('/home');
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif, 'Microsoft Yahei',"微软雅黑";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.logo{
  margin-top:60px;
}
.loginform{
  display:flex;
  flex-direction:column;
}
.item-input{
  display:flex;
  flex-direction:row;
  justify-content:center;
  margin-top:20px;
}
.item-input label{
  flex:1;
  text-align:right;
  margin-right:20px;
  margin-top:5px;
  align-items:baseline;
}
.item-input input{
  flex:2;
  margin-right:20px;
  height:30px;
  outline:none;
  border:none;
}
.item-button{
  display:flex;
  flex-direction:column;
  margin-top:20px;
  justify-content:center;
  align-items:center;
}
.item-button button{
  width:150px;
  height:35px;
  background-color:tomato;
  outline:none;
  border-radius:5px;
  border:none;
  color:#fff;
  font-size:1rem;
  margin:10px 0;
}
.freebtn{
  position:absolute;
  right:0.5rem;
  bottom:1rem;
  font-size:20px;
  color:tomato;
  
}
</style>
