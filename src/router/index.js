import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/views/Main.vue"
import TV from "@/views/TV.vue"
import SHOW from "@/views/SHOW.vue"
import WUTAI from "@/views/WUTAI.vue"
import honor from "@/views/honor.vue"
import gengxin from "@/views/gengxin.vue"
import lingyu from "@/components/content/lingyu.vue";
import shiguang from "@/components/content/shiguang.vue";
import yuanwang from "@/components/content/yuanwang.vue";
import mengsuo from "@/components/content/mengsuo.vue";
import cengshaonian from "@/components/content/cengshaonian.vue";
import yewan from "@/components/content/yewan.vue";
import rensheng from "@/components/content/rensheng.vue";
import zuojian from "@/components/content/zuojian.vue";
import saohei from "@/components/content/saohei.vue";
import banjing from "@/components/content/banjing.vue";
import zaiyiqi from "@/components/content/zaiyiqi.vue";
import SHOWtime from "@/components/content/SHOWtime.vue";
import WUTAItime from "@/components/content/WUTAItime.vue";
import honortime from "@/components/content/honortime.vue";

const routes = [
  
  {
    path:'/',
    component:Main,
  },
  {
    path:'/gengxin',
    name:'gengxin',
    component:gengxin,
  },
  {
    path:'/TV',
    name:'TV',
    component:TV,
    redirect:'/lingyu' ,
    children:[{
    path:'/lingyu',
    name:'lingyu',
    component:lingyu
    },
    {
      path:'/shiguang',
      name:'shiguang',
      component:shiguang
    },
    {
      path:'/yuanwang',
      name:'yuanwang',
      component:yuanwang
    },
    {
      path:'/mengsuo',
      name:'mengsuo',
      component:mengsuo
    },
    {
      path:'/cengshaonian',
      name:'cengshaonian',
      component:cengshaonian
    },
    {
      path:'/yewan',
      name:'yewan',
      component:yewan,
    },
    {
      path:'/rensheng',
      name:'rensheng',
      component:rensheng,
    },
    {
      path:'/zuojian',
      name:'zuojian',
      component:zuojian,
    },
    {
      path:'/saohei',
      name:'saohei',
      component:saohei,
    },
    {
      path:'/zaiyiqi',
      name:'zaiyiqi',
      component:zaiyiqi,
    },
    {
      path:'/banjing',
      name:'banjing',
      component:banjing,
    },
 

    ]
  },
  {
    path:'/SHOW',
    name:'SHOW',
    component:SHOW,
    redirect:'/SHOWtime' ,
    children:[{
    path:'/SHOWtime',
    name:'SHOWtime',
    component:SHOWtime
    }
    ]
  },
    {
      path:'/WUTAI',
      name:'WUTAI',
      component:WUTAI,
      redirect:'/WUTAItime' ,
      children:[{
      path:'/WUTAItime',
      name:'WUTAItime',
      component:WUTAItime
      },
     
    ]
  },
  {
    path:'/honor',
    name:'honor',
    component:honor,
    redirect:'/honortime' ,
    children:[{
    path:'/honortime',
    name:'honortime',
    component:honortime
    },]
  }, 
  
]

const router = createRouter({
  history:createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
