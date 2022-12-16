<template>
    <el-carousel :interval="4000" type="card" height="200px" style="margin:20px ">
      <el-carousel-item v-for="item in listimg" :key="item">
        <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
        <img :src=item  width="260" height=""  alt=""/>
      </el-carousel-item>
    </el-carousel>
  </template>
  
  <style scoped>
  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  </style>
<script>
export default {
 data() {
    return {
    //图片数据
      listimg: [
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg11.51tietu.net%2Fpic%2F2019112115%2Fwyzg4l2rh5swyzg4l2rh5s.jpg&refer=http%3A%2F%2Fimg11.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672631546&t=84758bc5f4c7aec2f354e2a1ee8c9581",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202108%2F16%2F20210816121907_daf06.thumb.1000_0.png&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672631546&t=3d0c3e7df9eb2f64075809add0d7e708",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202007%2F04%2F20200704110707_ijjpm.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672631546&t=0f58e35a6d842cf55b4c41e712d17733",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F20%2F20210720135006_5b752.thumb.1000_0.png&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672631546&t=af281c01cc05dcf6ffeaa9ca167c7523",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F12%2F20210612090722_8c1ec.thumb.1000_0.png&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672631546&t=fccd096122bf8231b9cdc8c664935995"
      ],
    };
  },
   
  }
  </script>
