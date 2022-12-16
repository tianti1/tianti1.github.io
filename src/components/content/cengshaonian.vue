<template>
    <div style="background-color:#c3b4ac70 ;height:100%">
    <el-row :gutter="20">
      <el-col :span="12">
    <h1 style="font-family:yg2 ;text-align:left; margin: 10px; color:#33333382; font-size: 80px;">曾少年</h1>
    <h2 style="font-family:yg2 ;text-align:left; margin: 10px 10px 10px 10px; font-size: 20px; padding-left:160px">-幸好，曾经的我爱过年少的你</h2>
    </el-col>
    <!-- <el-col :span="1">
      <div style="font-family:yg2 ; text-align:left; margin:10px 0px 0px 0px; color:#c09077; font-size: 25px;">主<br>题<br>曲<br>
          <el-icon class="el-icon-ali-caret-right"></el-icon>
        </div>
        </el-col>
        <el-col :span="2">
      <div style="font-family:yg2 ; text-align:left; margin:10px 10px 10px 10px; color:#713f26; font-size: 40px;">醉<br>墨<br>
        </div>
        </el-col> -->
           
        <!-- <el-col :span="3">
          <a href="https://m.weibo.cn/1653255165/4591421648803251">
          <el-image style=" margin:10px;text-align:left;width: 120%; height: 80% ;border-radius: 20px;border-style:double;border-width: 3px; border-color: #713f26;" src="https://img0.baidu.com/it/u=3264322534,1594229971&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=343" ></el-image>   
        </a>
        </el-col> -->
        <el-col :span="5">
       
      </el-col>
      <el-col :span="1">
        <!-- <el-image style="width: 60%; height: auto ;margin:10px" :src="require('@/assets/img/mangguo.png')"></el-image>   -->
        <h2 style="font-family:'yg2'; text-align:left; margin: 10px 10px 10px 10px; font-size: 20px; padding-left:160px">待播作品</h2>
      </el-col>
      <el-col :span="2">
        <!-- <el-image style="width: 60%; height: auto ;margin:10px" :src="require('@/assets/img/mangguo.png')"></el-image>   -->
        <h2 style="font-family:'yg2'; text-align:left; margin: 10px 10px 10px 10px; font-size: 20px; padding-left:160px">敬请期待</h2>
      </el-col>
    </el-row>
    <el-row :gutter="20">
  
      <el-col :span="1">
        <div style="font-family:yg2 ; text-align:left; margin:50px 10px 10px 20px; color:#c09077; font-size: 40px;">探班日记
          <el-icon class="el-icon-ali-caret-right"></el-icon>
        </div>
        <!-- <div style="font-family:yg2 ; text-align:left; margin:90px 0px 0px 0px; color:#c09077; font-size: 25px;">战<br>报<br>
          <el-icon class="el-icon-ali-caret-right"></el-icon>
        </div> -->
      </el-col>
      <el-col :span="5">
        
        <el-image style=" margin:0px 10px 10px 50px; width: 100%; height: auto;border-radius: 20px;border-style: dashed;border-width: 3px; border-color: #d69e82;text-align: left" src="https://wx1.sinaimg.cn/orj360/005Q6c0Fly1gsf62aalfxj31o02yohe0.jpg" :fit="fit"/>
    </el-col>
    <el-col :span="6">
        
        <br><el-link  style=" padding-left:20px; padding-top:50px;font-family:yg ;color:#c09077; font-size: 30px; margin: 5px; text-align:left;"
      href="https://weibo.com/6993746357/Kb9pMiBGh" target="_blank">【小曾探班记】&nbsp;</el-link>
      <el-link  style="padding-left:20px; font-family:yg ;color:#c09077; font-size: 30px; text-align:left;  margin: 5px;"
      href="https://weibo.com/6993746357/KcdpbaMDq" target="_blank">片场交通类道具爱好者&nbsp;</el-link>
      <el-link  style="padding-left:20px; font-family:yg ;color:#c09077; font-size: 30px; text-align:left;  margin: 5px;"
      href="https://weibo.com/6993746357/KfpnK5Ksh" target="_blank">曾少年天团全员三岁&nbsp;</el-link>
      <el-link  style="padding-left:20px; font-family:yg ;color:#c09077; font-size: 30px; text-align:left;  margin: 5px;"
      href="https://weibo.com/6993746357/KkJkWy8S2" target="_blank">康康八倍镜抓（tou）拍～ ​​​&nbsp;</el-link>
      <!-- <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/7502359889/4803060835029656" target="_blank">花絮5&nbsp;</el-link>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/1809436135/4801410585071627" target="blank">花絮6&nbsp;</el-link>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/7502359889/4800586362388569" target="_blank">花絮7&nbsp;</el-link> -->
</el-col>
<el-col :span="1">
        <div style="font-family:yg2 ; text-align:left; margin:50px 10px 10px 20px; color:#c09077; font-size: 40px;">官宣杀青
          <el-icon class="el-icon-ali-caret-right"></el-icon>
        </div>
        <!-- <div style="font-family:yg2 ; text-align:left; margin:90px 0px 0px 0px; color:#c09077; font-size: 25px;">战<br>报<br>
          <el-icon class="el-icon-ali-caret-right"></el-icon>
        </div> -->
      </el-col>
<el-col :span="5">
      <el-image style="margin:30px;width: 100%; height: auto;border-radius: 20px;border-style: dashed;border-width: 3px; border-color: #d69e82;text-align: center" src="https://wx2.sinaimg.cn/mw690/007Dj2UBly1gqpvdz8a2hj322o340npd.jpg" :fit="fit"/>
        <br>
    </el-col>
    <el-col :span="6">
        
        <br><el-link  style=" padding-left:20px; padding-top:50px;font-family:yg ;color:#c09077; font-size: 30px; margin: 5px; text-align:left;"
      href="https://weibo.com/6993746357/K4bTEr9oo" target="_blank">【开机】&nbsp;</el-link>
      <br><el-link  style="padding-left:20px; font-family:yg ;color:#c09077; font-size: 30px; text-align:left;  margin: 5px;"
      href="https://weibo.com/5350509769/Lma5isYTB" target="_blank">又见杨澄&nbsp;</el-link>
      <br><el-link  style="padding-left:20px; font-family:yg ;color:#c09077; font-size: 30px; text-align:left;  margin: 5px;"
      href="https://weibo.com/6993746357/KowqP7Q7U" target="_blank">【杀青】&nbsp;</el-link>
      <!-- <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/7502359889/4803060835029656" target="_blank">花絮5&nbsp;</el-link>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/1809436135/4801410585071627" target="blank">花絮6&nbsp;</el-link>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/7502359889/4800586362388569" target="_blank">花絮7&nbsp;</el-link> -->
</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
         <!-- <el-image style="width: 50%; height: 60%;border-radius: 20px;border-style: dashed;border-width: 3px; border-color: #d69e82;" src="https://wx4.sinaimg.cn/orj360/007CYAYnly1h74p6r9fnyj30qo12mq5t.jpg" :fit="fit"/> -->
      </el-col>
      <el-col :span="10"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
    </el-row>
</div>
  </template>
  
  <script> 
  import VideoPlay from "@/components/content/VideoPlay.vue";
 export default {
  
components: {
   VideoPlay,

},
  data() {
     return {
     //图片数据
       movie:[
        {name:"青春环游记",
         imgurl:'https://wx3.sinaimg.cn/mw1024/ab207d7aly1h5wy5k9sn9g20u00u01l9.gif',
         juese:'点击观看可爱福西西'
     },
         {
           name:"嗨放派2",
         imgurl:'https://wx4.sinaimg.cn/mw1024/005zb7kZly1h82oiawt9ig30k00k0kjt.gif',
         juese:'裘文东'
 
         },
         {
           name:"偶像练习生",
         imgurl:'https://wx1.sinaimg.cn/mw1024/007blzxMly1h5wy20poc3g30qo0jy4qs.gif',
         juese:'秦烈'
 
         }
       ],
       urls : [
 'https://wx1.sinaimg.cn/mw1024/006ggYr4gy1guv54q7w2oj61e00xce8102.jpg',
 'https://wx1.sinaimg.cn/thumb150/007cV2x2gy1h7tjidt57tj31jk2bcnpe.jpg',
 'https://wx4.sinaimg.cn/thumb150/d1491f1dly1ghuna0aw6lj21wk2jf1l0.jpg',
 'https://wx3.sinaimg.cn/orj360/006e6nosly1h5y1ov7acdj30k00t3gnj.jpg',
 'https://wx2.sinaimg.cn/orj360/006e6nosly1h5y1cpdmqej30xc1dw47l.jpg',
 'https://wx4.sinaimg.cn/thumb150/0076tPlJly1guzl1543u4j62bc1jk4qq02.jpg',
 'https://wx1.sinaimg.cn/thumb150/008gAMKWgy1guxtv0p784j60qo0zkdhg02.jpg',
], 
   listimgs:[
   "https://wx4.sinaimg.cn/mw1024/007axTYfly1gv5k41332hg60k00qob2l02.gif",
   "https://wx3.sinaimg.cn/mw1024/ab207d7aly1h5wy5k9sn9g20u00u01l9.gif",
   "https://wx4.sinaimg.cn/mw1024/007enAuwly1gz9l2502t5g30p40p41l4.gif",
   "https://wx3.sinaimg.cn/mw1024/007enAuwly1gz9l09t3rjg30bw0bwb2e.gif",
   "https://wx3.sinaimg.cn/mw1024/007w9L6ngy1gta922q9grg30m80m8he0.gif",
   "https://wx4.sinaimg.cn/mw1024/006z10jCly1gn3s57hhnrg30ie0hghe3.gif",

   ],
     
     };
   },
    
   }
   </script>
  <style>
  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  </style>
  