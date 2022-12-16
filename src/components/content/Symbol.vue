<template>

    <div class="#back" style="text-align: center; margin:  0px 0px 0px 0px ;">
        <!-- <h1 style="color:#E6A23C; margin-top: 30px">新人xxx自我介绍</h1> -->
        <h3 style="color:#FFFFFF">长按解锁多种身份</h3>

        <el-row >
            <el-col :span="8" v-for="(value,index) in introduction" :key="index" >
                <el-card :body-style="{ padding: '0px 0px 0px 0px'}"  >
                    <div class="re-item" style="text-align: center">
                        <div class="re-item-front" :style="randomRgb()" ref="card-front">
                            <h2 style="color:#FFFFFF">{{value.question}}</h2>
                        </div>
                        <div class="re-item-back" :style="randomRgb()" ref="card-back">
                            <el-image :src="value.src" :fit="fill"></el-image>
                            <!-- <p style="color:#FFFFFF">{{value.src}}</p> -->
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>

</template>

<style>


    .re-item {
        width: 140px;
        /* width: auto; */
        margin: 0px 0px 0px 15px;
        height: 140px;
        cursor: pointer;
        position: relative;
        perspective: 500;
        -webkit-perspective: 500;
        color: #290e05;
        background-color: #290e05;
    }

    .re-item img {
        max-width: 500px;
    }

    .re-item-front,
    .re-item-back {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        text-align: center;
        -webkit-perspective: 1000;
        backface-visibility: hidden;
        -webkit-transition: all 2s;
        -moz-transition: all 2s;
        -ms-transition: all 2s;
        -o-transition: all 2s;
        box-shadow: rgba(50, 50, 50, 0.2) 0 0 15px;
        overflow: hidden;
    }

    .re-item-back {
        position: relative;
        transform: rotateY(-180deg);
        -webkit-transform: rotateY(-180deg);
    }

    .re-item:active .re-item-front {
        transform: rotateY(-180deg);
        -webkit-transform: rotateY(-180deg);
    }

    .allRotated-front {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        text-align: center;
        background-color: rgb(131, 91, 91);
        -webkit-perspective: 1000;
        backface-visibility: hidden;
        -webkit-transition: all 2s;
        -moz-transition: all 2s;
        -ms-transition: all 2s;
        -o-transition: all 2s;
        box-shadow: rgba(50, 50, 50, 0.2) 0 0 15px;
        overflow: hidden;
        transform: rotateY(-180deg);
        -webkit-transform: rotateY(-180deg);
    }

    .allRotated-back {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        text-align: center;
        background-color: rgb(179, 82, 82);
        -webkit-perspective: 1000;
        backface-visibility: hidden;
        -webkit-transition: all 2s;
        -moz-transition: all 2s;
        -ms-transition: all 2s;
        -o-transition: all 2s;
        box-shadow: rgba(50, 50, 50, 0.2) 0 0 15px;
        overflow: hidden;
        transform: rotateY(-360deg);
        -webkit-transform: rotateY(-360deg);
    }

    .re-item:active .re-item-back {
        transform: rotateY(-360deg);
        -webkit-transform: rotateY(-360deg);
    }

    .re-box .re-item dd {
        text-align: center;
        font-family: "微软雅黑";
        
    }

    .re-item .re-item-job {
   
        font-size: 1 0px;
        color:#290e05;
        line-height: 40px;
        
    }

    .re-item .re-item-des {
        padding: 0 12px;
        font-size: 14px;
        color: #939393;

    }
   

</style>
<style scoped>
   /deep/ .el-card {
    /* border-radius: 2.64rem !important; */
    background-color:#290e05;
    border:0px;
  }
</style>


<script>
import { fill } from 'lodash';

    export default {
        data() {
            return {
                rotateAll: false,
                // src: require('./assets/photo.png'),
                // src: require('@/assets/img/fcc6.jpg'),
                introduction: [{
                    question: '范丞丞',
                    src:require('@/assets/img/fcc1.jpg'),
                    rgb:'rgb(1 ,140 ,163)'
                }, {
                    question: '范泽言',
                    src:require('@/assets/img/fcc10.jpg'),
                    rgb:' rgba(50, 50, 50, 0.2)'
            
                }, {
                    question: '福西西',
                    src:require('@/assets/img/fcc3.jpg'),
                     rgb:' rgba(50, 50, 50, 0.2)'
                    
                
            //     }, {
            //         question: '性别',
            //         answer: '男'
            //     }, {
            //         question: '岗位',
            //         answer: '实习开发工程师'
            //     },
            //    {
            //         question: 'p的我妈都不认识的证件照',
            //         answer: '翠花，上照片'
                }]
            };
        },
        methods: {
            randomRgb() {
                let R = Math.floor(Math.random() * 255);
                let G = Math.floor(Math.random() * 255);
                let B = Math.floor(Math.random() * 255);
                return {
                    background: 'rgb(' + R + ',' + G + ',' + B + ')'
                    // background: introduction.rgb
                };
            },
            lastAddPicture(index, len) {
                console.log(index + ":" + len)
                if (index !== len - 1) {
                    return {
                        display: 'none'
                    }
                }
            }
        }
    }
</script>
