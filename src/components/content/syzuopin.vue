<template>


  <el-tabs :tab-position="'top'" style="height: 200px ,padding:20px,stretch=true" class="demo-tabs">
    
    <el-tab-pane label="影视"><yingshi></yingshi></el-tab-pane>
    <el-tab-pane label="音乐"><music></music></el-tab-pane>
    <el-tab-pane label="综艺"><zongyi></zongyi></el-tab-pane>
    <el-tab-pane label="舞台"><wutai></wutai></el-tab-pane>
  </el-tabs>
 <el-row> 
  
  
</el-row>
</template>

<style >

</style>

<!-- 
<script>
    import yingshi from "@/components/content/yingshi.vue";
    export default {
      components: {
       yingshi, 
      }
    
};
</script> -->
<script>
 
    import yingshi from "@/components/content/yingshi.vue";
    import music from "@/components/content/music.vue";
    import zongyi from "@/components/content/zongyi.vue";
    import wutai from "@/components/content/wutai.vue";
    export default {

      components: {
       yingshi,
       music,
       zongyi,
       wutai,
      }
    
};
</script>
