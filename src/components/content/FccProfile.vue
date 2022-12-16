<template>
 <div class="content" >
<div class="left" style="background:#290e05; color:#FFF">
  <img src="@/assets/img/fcc1.jpg" style="margin-left:15px; margin-top:20px; width: 50%;height:30%; box-sizing: border-box;border-style:outset; border-radius: 16px;"> 
<h3><strong>范丞丞</strong> <br>
  <strong>中国内地男歌手、演员</strong><br>
  <strong>出生地：</strong>山东省青岛市 <br>
  <strong>出生日期：</strong>2000年6月16日<br> 
  <strong>性别：</strong>男 <br>
  <strong>星座：</strong>双子座 <br>
  <strong>身高：</strong>185cm </h3>
  </div>


<div class="right">
  <el-tabs v-model="activeTab" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="近日行程" name="first">
    <el-timeline>
      <el-timeline-item center timestamp="12月9日" placement="top">
        <el-card>
          <h4>9:08  丞丞直发tvc</h4>
          <h4>10:00 来伊份直发kvc</h4>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="11月11日" placement="top">
        <el-card>
          <h4>11号出席阿里片单推介会 ​​​</h4>
          <h4>12号随《人生路不熟》出席金鸡节红毯 </h4>
        </el-card>
      </el-timeline-item>
      <el-timeline-item center timestamp="2022/11/19" placement="top">
        <div style="color:#edf3ff">《人生路不熟》官宣</div>
      </el-timeline-item>
      <el-timeline-item timestamp="2022/10/25" placement="top">
        <div style="color:#edf3ff">《了不起的夜晚》海报</div>

      </el-timeline-item>
    </el-timeline>

    </el-tab-pane>
    <el-tab-pane label="人物评价" name="second">
    
   <judge></judge>
    </el-tab-pane>
    <el-tab-pane label="主要作品" name="third">
      <syzuopin></syzuopin>
    </el-tab-pane>
    <el-tab-pane label="技能汇总" name="fourth">
      <jineng></jineng>
    </el-tab-pane>
  </el-tabs>
  

</div>
</div>
<div class="clearit"></div>

</template>




<script>
    import judge from "@/components/content/judge.vue";
    import syzuopin from "@/components/content/syzuopin.vue";
    import jineng from "@/components/content/jineng.vue";
    export default {
      data(){
        return{
        activeTab: 'first',
        }
      },
      components: {
       judge, 
       syzuopin,
       jineng,
      }
    
};
</script>



<style>

.content{width:1000px;
         margin-top:20px;
         color:"#251004";}

.left{width:300px;
      float:left;
	  /* border:solid #666 1px; */
   }

.left h3{font-size:12px;
         font-weight:normal;
		 margin:10px 40px;
		 line-height:30px;}
		 
.right{width:700px;
       /* float:right; */
       background-color:"#251004";}

.right h2{line-height:30px;
          background:#9598a3;
          background-color:"#251004";
		  color:#FFF;
		  text-indent:2em;
		  margin:0 10px;}

.right h3{font-size:12px;
          margin:10px 16px;
		  line-height:34px;
		  font-weight:normal;}

.foot{width:1000px;
      margin-top:16px;
	  background:#9598a3;}

.foot h3{font-size:12px;
         font-weight:normal;
		 line-height:36px;
		 text-align:center;
		 color:#FFF;}

</style>

<style lang="less" scoped>
/deep/.el-tabs__item {
  padding: 0 20px;
  padding-top: 0px;
  padding-right: 20px;
  padding-bottom: 0px;
  padding-left: 20px;
  color:azure;
}
</style>
