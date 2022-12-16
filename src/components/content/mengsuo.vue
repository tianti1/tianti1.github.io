<template>
    <div style="background-color:#c3b4ac70 ;height:100%">
    <el-row :gutter="0">
      <el-col :span="10">
    <h1 style="font-family:yg2 ;text-align:left; margin: 10px; color:#33333382; font-size: 80px;">门锁</h1>
    <!-- <h2 style="font-family:'Courier New' text-align:left; margin: 10px 10px 10px 10px; font-size: 20px; padding-left:160px">Wisher
    
    </h2> -->
   
    </el-col>
    
           
        <el-col :span="3">
         
          <el-image style=" margin:10px;text-align:left;width: 120%; height: 80% ;border-radius: 20px;border-style:double;border-width: 3px; border-color: #713f26;" src="https://wx4.sinaimg.cn/large/7cebaed8ly1h89pnr16oxj20u00jsafi.jpg" ></el-image>   
        </el-col>
        <el-col :span="5">
       
      </el-col>
      <el-col :span="4">
        <!-- <el-image style="width: 60%; height: auto ;margin:10px" :src="require('@/assets/img/aiqiyi.png')"></el-image>   -->
         <h2 style="font-family:'yg2'; text-align:left; margin: 10px 10px 10px 10px; font-size: 20px; padding-left:160px">上线电影
    
    </h2>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
      <h3 style="font-family:yg2 ;text-align:center; margin: 20px; color:#c09077; font-size: 25px;">精彩剪辑
      <el-icon class="el-icon-ali-xiangxia1"></el-icon>
      </h3>
      <el-image style="width: 50%; height: auto;border-radius: 20px;border-style: dashed;border-width: 3px; border-color: #d69e82;" src="https://wx3.sinaimg.cn/mw1024/006MQxl9ly1h8afueeymag30hs0qox6v.gif" :fit="fit"/>
     <div>
      <p style="font-family:hk ;color:#c09077; font-size: 20px; margin: 0px;">B站：</p>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://www.bilibili.com/video/BV1nF411h7Y2/?spm_id_from=333.337.search-card.all.click&vd_source=d7f1a48b6802756d7cf97f0e9e3fe536" target="_blank">从此以后，听不得他叫姐了@Ms_葵</el-link><br>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://www.bilibili.com/video/BV1Wr4y1S7sA/?spm_id_from=333.788.recommend_more_video.-1&vd_source=d7f1a48b6802756d7cf97f0e9e3fe536" target="_blank">救命！他真的好适合那种有点病的！ @旺仔牛奶糖Patrick</el-link><br>
      <!-- <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://www.bilibili.com/video/BV1SF411a72f/?spm_id_from=333.788.recommend_more_video.2&vd_source=d7f1a48b6802756d7cf97f0e9e3fe536" target="_blank">卧槽！这TM居然是范丞丞！ @是冉橙子</el-link> -->
      <p style="font-family:hk ;color:#c09077; font-size: 20px; margin: 0px;">微博：</p>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/status/47074901751264425" target="_blank">早知道姐姐喜欢野的 我就不装了¿ @小卓616次碎碎念</el-link>
      <!-- <br>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/status/4699582708321150" target="_blank">《致命愿望》✖️ #Grind Me Down@豹豹还在追星</el-link>
      <br>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/status/4702455051584770" target="_blank">      【范丞丞/文淇 | 裘文东x路里】退后 @与易歌-</el-link>
      <br> -->


     </div>


      </el-col>
      <el-col :span="8">
        <h3 style="font-family:yg2 ;text-align:center; margin: 20px; color:#c09077; font-size: 25px;">绝美图
      <el-icon class="el-icon-ali-xiangxia1"></el-icon>
      </h3>

      <el-image style="width: 50%; height: auto;border-radius: 20px;border-style: dashed;border-width: 3px; border-color: #d69e82;" src="https://wx3.sinaimg.cn/mw1024/006MQxl9ly1h8afucjnqrg30ng15o1l3.gif" :fit="fit"/>

      <p style="font-family:hk ;color:#c09077; font-size: 20px; margin: 0px;">动图：</p>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://weibo.com/6218582339/MfKnt4OHw" target="_blank">保安小吴1 </el-link>
      <br><el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/5381258680/4697249734726386" target="_blank">保安小吴2 </el-link>
      <br><el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/5832772172/4704096953043607" target="_blank">保安小吴3 </el-link>
      <!-- <p style="font-family:hk ;color:#c09077; font-size: 20px; margin: 0px;">照片：</p>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/status/4703751556040327" target="_blank">裘文东照片1</el-link>
      <br><el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/status/4702422998453107" target="_blank">裘文东照片2</el-link>
      <br><el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/status/4831792392048161" target="_blank">裘文东照片3</el-link> -->

      
      </el-col>
      <el-col :span="1">
        <div style="font-family:yg2 ; text-align:left; margin:50px 0px 0px 0px; color:#c09077; font-size: 25px;">花<br>絮<br>
          <el-icon class="el-icon-ali-caret-right"></el-icon>
        </div>
        <div style="font-family:yg2 ; text-align:left; margin:90px 0px 0px 0px; color:#c09077; font-size: 25px;">战<br>报<br>
          <el-icon class="el-icon-ali-caret-right"></el-icon>
        </div>
      </el-col>
      <el-col :span="5">
        
        <el-image style="width: 80%; height: auto;border-radius: 20px;border-style: dashed;border-width: 3px; border-color: #d69e82;text-align: left" src="https://wx1.sinaimg.cn/mw1024/006MQxl9ly1h8afuj1stmg30i00a4u15.gif" :fit="fit"/>
        <br><el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px; text-align:left;"
      href="https://m.weibo.cn/2125613987/4706428000933706" target="_blank">花絮1 &nbsp;</el-link>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/2095820504/4705913484610411" target="_blank">花絮2&nbsp;</el-link>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/5389953206/4709976016685119" target="_blank">花絮3&nbsp;</el-link>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/6872502526/4704456288240841" target="_blank">花絮4&nbsp;</el-link>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/5893481837/4704454840943157" target="_blank">花絮5&nbsp;</el-link>

      <!-- <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/7502359889/4800586362388569" target="_blank">花絮7&nbsp;</el-link> -->


      <el-image style="margin-top:30px;width: 80%; height: auto;border-radius: 20px;border-style: dashed;border-width: 3px; border-color: #d69e82;text-align: left" src="https://wx2.sinaimg.cn/mw1024/7cebaed8ly1h8aasgt41hj20u01c0h2f.jpg" :fit="fit"/>
        <br>
        
        <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px; text-align:left;"
      href="https://m.weibo.cn/5893481837/4709725222994622" target="_blank">官方战报&nbsp;</el-link>
      <!-- <br><el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://weibo.com/6872502526/M2PRcisEi?refer_flag=1001030103__" target="_blank">路小凡战报&nbsp;</el-link> -->
      <br> <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/5969653690/4705680038038214" target="_blank">路人评价&nbsp;</el-link>



    

        <!-- <h3 style="font-family:yg2 ;text-align:left; margin: 20px; color:#c09077; font-size: 25px;">精彩剪辑
      <el-icon class="el-icon-ali-caret-right"></el-icon>
      </h3> -->
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
  