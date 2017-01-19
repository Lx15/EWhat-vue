<template>
	<div @click="clickfunc">{{text}}</div>
</template>
<script>
	export default{
		props:['fromFather'],
		data:function(){
			return {
				text:"lalal"
			}
		},
		methods:{
			clickfunc:function(){
				alert(this.fromFather);
				this.$emit("tellFather",this.text)
			}
		}
	}
</script>