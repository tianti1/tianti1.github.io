<template>
  <el-container class="home_container">
    <!-- 头部区域 -->
    <el-header>
      <TVhead></TVhead>
      <el-button type="info" style="background-color: #855c54;" @click="logout">返回首页</el-button>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px':'200px'" >
        <div class="toggle-button" @click="toggleCollapse">
        <svg t="1670590728688" style=" font-size:30px;margin: 0px 0px 0px 0px ;opacity: 75% ;display:inline;" class="icon" viewBox="0 0 1044 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2344" width="200" height="200">
          <path d="M422.138776 902.914766v58.391356a41.795918 41.795918 0 0 0 41.304201 41.795919h117.028572a41.795918 41.795918 0 0 0 42.779351-41.795919v-58.391356z m-20.89796-20.897959h242.416327v79.289315a62.693878 62.693878 0 0 1-62.693878 62.693878H463.442977a62.693878 62.693878 0 0 1-62.693877-62.693878z" fill="#3F4951" p-id="2345"></path><path d="M422.138776 902.914766H623.2509v58.391356a41.795918 41.795918 0 0 1-41.795918 41.795919h-118.012005a41.795918 41.795918 0 0 1-41.795918-41.795919z" fill="#AED2F0" p-id="2346"></path><path d="M522.44898 842.802401c243.768547 0 441.315726-184.393758 441.315726-410.952221S766.217527 20.897959 522.44898 20.897959 81.133253 205.291717 81.133253 431.85018s197.915966 410.952221 441.315727 410.952221z m0 20.897959c-254.955102 0-462.213685-192.9988-462.213686-431.85018S267.493878 0 522.44898 0s462.213685 192.9988 462.213685 431.85018-207.258583 431.85018-462.213685 431.85018z" fill="#534341" p-id="2347"></path><path d="M81.133253 431.85018a441.315726 410.952221 0 1 0 882.631453 0 441.315726 410.952221 0 1 0-882.631453 0Z" fill="#FFFFFF" p-id="2348"></path><path d="M281.753661 333.87563a100.310204 100.310204 0 1 1 100.310205-100.187275 100.187275 100.187275 0 0 1-100.310205 100.187275z m481.390637 0a100.310204 100.310204 0 1 1 100.310204-100.187275 100.310204 100.310204 0 0 1-100.310204 100.187275z" fill="#FDC6B2" p-id="2349"></path><path d="M462.213685 141.122689a20.037455 20.037455 0 0 1 20.160385 20.160384v19.422809a20.160384 20.160384 0 1 1-40.19784 0v-19.422809a20.037455 20.037455 0 0 1 20.037455-20.160384z m120.470589 0a20.037455 20.037455 0 0 1 20.037455 20.160384v19.422809a20.160384 20.160384 0 1 1-40.197839 0v-19.422809a20.037455 20.037455 0 0 1 20.160384-20.160384z" fill="#534A41" p-id="2350"></path><path d="M351.454502 201.357983a10.44898 10.44898 0 0 1 20.897959 0c0 88.754862 67.365186 160.545498 150.096519 160.545498s149.973589-71.790636 149.973589-160.545498a10.44898 10.44898 0 1 1 20.897959 0c0 100.064346-76.461945 181.443457-170.994478 181.443458s-170.871549-81.379112-170.871548-181.443458z" fill="#534A41" p-id="2351"></path><path d="M20.897959 438.857143a501.55102 501.55102 0 0 0 1003.102041 0zM0 417.959184h1044.897959v20.897959a522.44898 522.44898 0 0 1-1044.897959 0z" fill="#3F4951" p-id="2352"></path><path d="M20.897959 438.857143h1003.102041a501.55102 501.55102 0 0 1-1003.102041 0z" fill="#AED2F0" p-id="2353"></path></svg>
          <svg :display="isCollapse ? 'inline':'none'" t="1670590945470"  style=" font-size:30px;margin: 0px 0px 0px 0px ;opacity: 75%; display: inline;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2491" width="200" height="200">
            <path d="M192.037 287.953h640.124c17.673 0 32-14.327 32-32s-14.327-32-32-32H192.037c-17.673 0-32 14.327-32 32s14.327 32 32 32zM832.161 479.169H438.553c-17.673 0-32 14.327-32 32s14.327 32 32 32h393.608c17.673 0 32-14.327 32-32s-14.327-32-32-32zM832.161 735.802H192.037c-17.673 0-32 14.327-32 32s14.327 32 32 32h640.124c17.673 0 32-14.327 32-32s-14.327-32-32-32zM319.028 351.594l-160 160 160 160z" fill="" p-id="2492"></path></svg>
        <!-- <span style="font-family:yg2; font-size: 16px;  display: flex;">点击</span> -->
          </div>
        <!-- 侧边栏菜单区域 -->
        <el-menu active-text-color="#409Eff"
        background-color="#290e05"
        text-color="#fff" unique-opened :collapse="isCollapse" :collapse-transition="false"
        default-active="/lingyu"
        @open="handleOpen"
        @close="handleClose"
        router
        >
        <!-- 一级菜单 -->
        <el-sub-menu :index="item.id+''" v-for="item in menulist" :key="item.id">
          <!-- 一级菜单模板区域 -->
          <template #title>
            <!-- {{iconsObj[item.id]}} -->
            <el-icon :class="iconsObj[item.id]"></el-icon>
            <span>{{item.authName}}</span>
          </template>
          <!-- 二级菜单 -->
          <el-menu-item :index=subItem.key v-for="subItem in item.children" :key="subItem.id">
          <template #title>
            <el-icon class='el-icon-ali-arrow_right_fat'></el-icon>
            <span>{{subItem.authName}}</span>
          </template>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
      </el-aside>
      <!-- 右侧内容主体区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import TVhead from "@/components/content/TVhead.vue";
import lingyu from "@/components/content/lingyu.vue";
export default {
  components: {
       TVhead,
       lingyu,
      },
  data () {
    return {
      // 左侧菜单数据对象
      menulist: [
        {
          id:1,
          authName:"电视剧",
          children:[
              {
                key:'/lingyu',
                id:11,
          authName:"灵域"

        },
        {
          key:'/shiguang',
          id:12,
          authName:"被遗忘的时光"
        },
        {
          key:'/yuanwang',
          id:13,
          authName:"致命愿望"
        },
        {
          key:'/cengshaonian',
          id:14,
          authName:"曾少年"
        },
        {
          key:'/zuojian',
          id:15,
          authName:"左肩有你"
        },
          ]
        },
        {
          id:2,
          authName:"电影",
          children:[
              {
                key:'/mengsuo',
                id:21,
          authName:"门锁"
        },
        {
          key:'/yewan',
          id:22,
          authName:"了不起的夜晚"
        },
        {
          key:'/rensheng',
          id:23,
          authName:"人生路不熟"
        },
        {
          key:'/saohei',
          id:24,
          authName:"  扫黑·拨云见日"
        },
      
          ]
        },
        {
          id:3,
          authName:"短片",
          children:[
              {
                key:'/zaiyiqi',
                id:31,
          authName:"我要我们在一起"
        },
        {
          key:'/banjing',
          id:32,
          authName:"半镜"
        }
       
          ]
        }
    
    ],
      // 字体图标对象
      iconsObj: {
        3: 'el-icon-ali-ai239',
        2: 'el-icon-ali-dianyingzhiye-dianyingbang',
        1: 'el-icon-ali-dianshiju1',
        102: 'iconfont icon-danju',
        145: 'iconfont icon-baobiao'
      },
      // 是否折叠
      isCollapse: false,
    }
  },
  // created () {
  //   this.getMenuList()
  // },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/')
    },
    // // 获取所有的菜单数据
    // async  getMenuList () {
    //   const { data: res } = await this.$http.get('menus')
    //   if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
    //   // 成功了，进行赋值
    //   this.menulist = res.data
    //   console.log(res)
    // },
    // 点击按钮，切换菜单的折叠与展开
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goTo(path) {
      this.$router.replace(path);
    }
  }
}
</script>
<style lang="less" scoped>
.home_container {
  height: 100vh;
  border-bottom:1px solid #eee
}
.el-header {
  background-color: #290e05;
  // 给头部设置一下弹性布局
  display: flex;
  // 让它贴标左右对齐
  justify-content: space-between;
  // 清空图片左侧padding
  padding-left: 0;
  // 按钮居中
  align-items: center;
  // 文本颜色
  color:#e0cdac;
  // 设置文本字体大小
  font-size: 20px;
  // 嵌套
  > div {
    // 弹性布局
    display: flex;
    // 纵向上居中对齐
    align-items: center;
    // 给文本和图片添加间距，使用类选择器
    span {
      margin-left: 15px;
    }
   
  }
}
.el-aside {
  background-color:#411608;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: #e9edf1;
}
.iconfont{
  margin-right: 10px;
}
.toggle-button{
 // 添加背景颜色
 background-color:#562d1f;
 // 设置文本大小
 font-size:10px;
 // 设置文本行高
 line-height:24px;
 // 设置文本颜色
 color:#fff;
 // 设置文本居中
 text-align: center;
 // 设置文本间距
 letter-spacing: 0.2em;
 // 设置鼠标悬浮变小手效果
 cursor:pointer;
}
</style>