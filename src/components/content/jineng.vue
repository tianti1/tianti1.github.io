<template>
 <div class="jineng">

    <el-row>
      <el-col
        v-for="(item, index) in jineng"
        :key="item"
        :span="10"
        :offset="index > 0&&index%2!=0 ? 2 : 0"
      >
        <el-card shadow="hover" :body-style="{ padding: '0px' }" style="background-color: #290e05 ;border: 0px;  ">

            <el-row :gutter="20">
    <el-col :span="24">
        <img class="jinengimage" :src=item.imgurl /></el-col>
    <el-col :span="24">
        <div style="padding: 0px">
            <div class="bottom">
              <!-- <el-button text class="button">Operating</el-button> -->
              <a :href=item.url class="set_1_btn Vbtn-4" style="padding-bottom:10px">{{item.juese}}</a> 
            </div>
          </div></el-col>
  </el-row>
         
        
        </el-card>
      </el-col>
    </el-row>

    
</div>
  </template>
  <style>
  .time {
    font-size: 12px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .button {
    padding: 0;
    min-height: auto;
    display: flex;
  align-items: center;
  justify-content: center;
  }
  
  .jinengimage {
    width: 100%;
    height: 100%;
    display:flex;
    /* box-shadow:10px; */
    border-radius: 10px;
    /* border-bottom: #e8d6d6;
    border: 10px; */
  }
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
.set_1_btn {
	color:#e8d6d6;
	cursor: pointer;
	display: block;
	font-size: 16px;
	font-weight: 400;
	line-height: 45px;
	margin-right: 2em;
	text-align: center;
	max-width: 160px;
	position:relative;
	text-decoration: none;
	text-transform: uppercase;
	vertical-align: middle;
	width: 100%;
    font-family: yg2;
}
.set_1_btn:hover {
	text-decoration: none;
}
Vbtn-4 {
	letter-spacing: 0;
	transition: all 150ms linear 0s;
	float:left;
}
.Vbtn-4:hover, .Vbtn-4:active {
	letter-spacing: 5px;
	transition: all 150ms linear 0s;
}
.Vbtn-4:after, .Vbtn-4:before {
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	border: 1px solid rgba(255, 255, 255, 0);
	bottom: 0px;
	content: " ";
	display: block;
	margin: 0 auto;
	position: relative;
	-webkit-transition: all 280ms ease-in-out;
	transition: all 280ms ease-in-out;
	width: 0;
}
.Vbtn-4:hover:after, .Vbtn-4:hover:before {
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	border-color: #666;
	-webkit-transition: width 350ms ease-in-out;
	transition: width 350ms ease-in-out;
	width: 70%;
}
.Vbtn-4:hover:before {
	bottom: auto;
	top: 0;
	width: 70%;
}

  </style>

<script>
export default {
 data() {
    return {
    //图片数据
      jineng:[
       {
        imgurl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180120%2Fa426d83a587a4afa844615963bd7f493.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673082528&t=a36d66b82b5b6f2f0245f912eb7ab131",
        juese:'钢琴',
        url:'https://video.weibo.com/show?fid=1034:4825660145991718',
    },
        {
        imgurl:'https://wx4.sinaimg.cn/mw1024/0076IMQYgy1h74nbvu3yqg30k00bakjx.gif',
        juese:'射箭',
        url:'https://video.weibo.com/show?fid=1034:4395483368495743',

        },
        {
        imgurl:'https://wx4.sinaimg.cn/mw1024/005yAz8jly1h3a6l86kaag30k00qohe2.gif',
        juese:'篮球',
        url:'https://video.weibo.com/show?fid=1034:4308047766747952',

        },
        {
        imgurl:'https://wx2.sinaimg.cn/mw1024/008dJqI8ly1h8fiu5d26hg30k00qox6u.gif',
        juese:'英语',
        url:"https://weibo.com/tv/show/1034:4406363498159754?from=old_pc_videoshow",

        }
      ],
    
    };
  },
   
  }
  </script>