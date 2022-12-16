<template>
   
    <div class="h-7" />
    <router-view>
    <el-menu
      :default-active="this.$router.path"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#251004"
      text-color="#fff"
      active-text-color="#ffd04b"
      justify-content: center
      router
    >
       <!-- <el-menu-item index="0" ><el-icon class="el-icon-ali-icon-xingxing2"> </el-icon>丞星</el-menu-item> -->
       <el-menu-item index="0"></el-menu-item>
       <el-menu-item index="0"></el-menu-item>
       <el-menu-item index="0"></el-menu-item>

   
      <el-menu-item index="/"><el-icon class="el-icon-ali-shouye1"> </el-icon>首页 </el-menu-item>
      <el-sub-menu index="2">
        <template #title><el-icon class="el-icon-ali-changge"></el-icon>演艺经历</template>
        <el-menu-item index="/TV">影视</el-menu-item>
        <!-- <el-menu-item index="2-1">电影</el-menu-item> -->
        <el-menu-item index="/SHOW">综艺</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>舞台</template>
          <el-menu-item index="/WUTAI">绝美舞台</el-menu-item>
          <el-menu-item index="2-4-2">待解锁</el-menu-item>
          <el-menu-item index="2-4-3">待解锁</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="/honor" ><el-icon class="el-icon-ali-icon"></el-icon>获奖记录</el-menu-item>
      <el-menu-item index="/gengxin"><el-icon class="el-icon-ali-shouye2"></el-icon>精彩剪辑视频</el-menu-item>
      <el-menu-item index="/gengxin"><el-icon class="el-icon-ali-zhaopian"></el-icon>照片墙</el-menu-item>
      <el-menu-item index="/gengxin"><el-icon class="el-icon-ali-listziyouhuodong"> </el-icon>社会活动</el-menu-item>
      <el-menu-item index="/gengxin"  ><el-icon class="el-icon-ali-pengyou"> </el-icon>人物关系</el-menu-item>
      <el-menu-item index="/gengxin"><el-icon class="el-icon-ali-liuyan"></el-icon>在线留言</el-menu-item>
  
    </el-menu>
  </router-view>
  </template>
  
  <!-- <script lang="ts" setup>
  import { ref } from 'vue'
  
  const activeIndex = ref('1')
  const activeIndex2 = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script> -->
  
  