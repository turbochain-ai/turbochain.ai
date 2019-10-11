<template>
    <div class="solution" style="color: white;margin: 0 auto; padding: 0px;margin-top: 64px;">
        <div class="introduce">
            <div class="introduce_box">
                <div class="left">
                    <img  class="Rotation rotation_style"  src="../assets/solution_title_bg.png">
                    <div class="title">SOLUTION</div>
                    <div class="subtitle">{{$t("solution.educationTitle")}}</div>
                </div>
                <div class="right">
                    <p>
                        区块链教育是基于区块链为底层的教育服务平台。
                        <br>将区块链和教育兼容相结合，利用区块链去中心化，开放性，信息不可篡改性，时间戳，匿名性的特性，解决教育领域中出现的几大难题。
                        进而推进教育行业的发展。
                    </p>
                </div>
              <!--  <a class="more" href="">
                    <span>查看更多</span>
                </a>-->
            </div>
        </div>
        <div class="demand">
            <div class="title-box">
                <div class="title">BUSINESS CHALLENGES</div>
                <div class="subtitle">业务痛点及需求</div>
            </div>
            <div class="content">
                <div class="item">
                    <img src="../assets/BlockchainEducation_pic1.png" alt="" class="img">
                    <p class="subtitle">学术领域问题</p>
                    <p class="text">在学术领域中，存在着学术造假，论文造假，实验数据造假等现象，如何确权，成为学术领域亟待解决的问题</p>
                </div>
                <div class="item">
                    <img src="../assets/BlockchainEducation_pic2.png" alt="" class="img">
                    <p class="subtitle">教育资源问题</p>
                    <p class="text">教育资源分布不均，师资、教研成果无法共享，很难实现全球教育资源的共享配置，教育受到地域、经济条件等客观活主观因素限制</p>
                </div>
                <div class="item">
                    <img src="../assets/BlockchainEducation_pic3.png" alt="" class="img">
                    <p class="subtitle">学信体系问题</p>
                    <p class="text">现阶段由于各方面因素，导致学生信用体系存在信息不完整，证书造假、缺乏验证手段等痛点，即使有国家统一的学信网存在，依然无法杜绝学历造假现象。</p>
                </div>
            </div>
        </div>
        <div class="summarize">
            <div class="title-box">
                <div class="title">TURBOCHAIN</div>
                <div class="subtitle">方案概述</div>
            </div>
            <ul class="list">
                <li class="item">
                    <img src="../assets/solution_education_icon_01.png">
                    <p class="message">区块链教育利用区块链非对称加密算法保护的安全性和可靠性能够加强对资源版权的保护，同时利用区块链透明性的特点，可对学术资源的创建信息查询、追踪和获取，进而能够从源头上杜绝剽窃事件的发生。</p>
                </li>
                <li class="item">
                    <img src="../assets/solution_education_icon_02.png">
                    <p class="message">区块链教育使用区块链为知识的共享提供去中心化的验证和分布式的存储，在保障发布者的权益的同时，又构建出一个更为灵活而自由的全球开放知识库</p>
                </li>
                <li class="item">
                    <img src="../assets/solution_education_icon_03.png">
                    <p class="message">区块链教育利用区块链的去中心化的、可验证的、防篡改的存储系统，将学位证等文凭放到链上，保证其真实性</p>
                </li>
            </ul>
        </div>
        <div class="advantage bag1">
            <div class="title-box">
                <div class="title">ADVANTAGES</div>
                <div class="subtitle">优&nbsp;&nbsp;势</div>
            </div>
            <div class="content ">
                <div class="item">
                    <div class="subtitle">
                        <img src="../assets/sample_icon.png">
                        <p>溯源确权</p>
                    </div>
                    <p class="text">基于区块链技术，将学术资料、论文、实验数据等关键信息上链，保证原创者的知识产权</p>
                </div>
                <div class="item border_lr">
                    <div class="subtitle">
                        <img src="../assets/sample_icon.png">
                        <p>资源共享</p>
                    </div>
                    <p class="text">基于区块链技术，将教育资源上链，在保证原创者权限的同时，构建灵活而自由的知识库</p>
                </div>
                <div class="item">
                    <div class="subtitle">
                        <img src="../assets/sample_icon.png">
                        <p>高效接入</p>
                    </div>
                    <p class="text">平台采用BaaS化设计，可支持快速对接，费用低廉</p>
                </div>
            </div>

        </div>
        <div class="contrast">
            <table>
                <tbody>
                <tr>
                    <th>
                        <p>对比项</p>
                    </th>
                    <th>
                        <p>TURBOCHAIN解决方案</p>
                    </th>
                    <th>
                        <p>传统教育行业</p>
                    </th>
                </tr>
                <tr>
                    <td class="border_tb list_01">
                        <p>版权保障</p>
                    </td>
                    <td class="border_tb list_02">
                        <p>可快速溯源确权</p>
                    </td>
                    <td class="border_tb list_03">
                        <p>信息混乱，耗时，耗力，无法确权</p>
                    </td>
                </tr>
                <tr>
                    <td class="list_11">
                        <p>学信体系</p>
                    </td>
                    <td class="list_12">
                        <p>保障信息真实性</p>
                    </td>
                    <td class="list_13">
                        <p>信息不完善，存在学历造假现象</p>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <!--    <div class="case">成功案例</div>-->
    </div>
</template>

<script>
    export default {
        name: "BlockchainEducation"
    }
</script>

<style scoped lang="scss">
    @-webkit-keyframes rotation {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
        }
    }
    .Rotation {
        -webkit-transform: rotate(360deg);
        animation: rotation 24s linear infinite;
        -moz-animation: rotation 24s linear infinite;
        -webkit-animation: rotation 24s linear infinite;
        -o-animation: rotation 24s linear infinite;
    }
    .rotation_style{
        width: 100%;
        position: absolute;
        margin-top: -34%;
    }
    .introduce{
        display: flex;
        height: 90vh;
        background:url("./../assets/images/Solution_bg3.jpg") no-repeat center;
        position: relative;
        .introduce_box{
            position: relative;
            min-width:1000px;
            margin: 0 auto;
            .more{
                position: absolute;
                bottom: 10vh;
                right: 2vw;
                color: #ffffff;
                display: block;
                width: 197px;
                height: 56px;
                line-height: 56px;
                /*border: 1px solid #ffffff;*/
                background: url("./../assets/btn_bg.png") no-repeat center;
                span{
                    display: block;
                    text-align: center;
                }
                span:after{
                    content: "";
                    display: inline-block;
                    margin-left: 12px;
                    width: 7px;
                    height: 11px;
                    background: url("./../assets/arrow_right.png") no-repeat center;
                }
            }
            .left{
                width: 50%;
                position: absolute;
                /* top: 30vh;
                 left: 10vh;*/
                height: 60%;
               /* background:url("./../assets/solution_title_bg.png") no-repeat center;*/
                background-size: 500px;
                padding-top: 36vh;
                .title{
                    font-size: 80px;
                    font-family: 'Oswald_font';
                }
                .subtitle{
                    font-size: 30px;
                    color: #ffffff;
                }
            }
            .right{
                width: 410px;
                position: absolute;
                right: 0;
                top: 25vh;
                padding: 1vh;
                /* border: 1px solid rgba(255,255,255,0.5);*/
                p{
                    font-size: 20px;
                    text-align: justify;
                }
            }
            .right:before{
                content: "";
                position: absolute;
                z-index: 1;
                top: -12px;
                left: 1vh;
                width: 43px;
                height: 4px;
                background-color: #58baf9;
            }
        }
        .title_bg{
            position: absolute;
        }
    }
    .summarize, .advantage, .demand, .contrast{
        width: 70vw;
        margin: 0 auto;
        padding: 0px;
        margin-top: 15vh;
    }
    .bag1 {
        margin: 0 auto;
        margin-top: 15vh;
        padding-bottom: 6vh;
        /* background:url("./../assets/banner_carbon.191829f.png") no-repeat left;*/
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)), url("./../assets/advantage_bg.png");
        background-position: center;
        border-radius: 1vh;
    }
    .title{
        font-size: 3rem;
        font-family: 'Oswald_font';
        font-weight: bold;
        color: #ffffff;
        text-align: center;
        margin: 0 auto;
        padding: 0px;
        margin-bottom: 2vh;

    }
    .subtitle{
        font-size: 2rem;
        text-align: center;
        margin: 0 auto;
        padding: 0px;
        color:#bebfc0;
    }
    .title-box{
        margin-bottom: 6vh;
    }
    .advantage{
        .content{
            .subtitle {
                img{
                    width: 3vh;
                    float: left;
                }
                p{
                    text-align: left;
                    padding-left: 4vh;
                    font-size: 1.2rem;
                }
            }
            .border_lr{
                border-left: 1px solid rgba(255,255,255,0.3);
                border-right: 1px solid rgba(255,255,255,0.3);
            }
        }
        .title-box{
            padding-top: 6vh;
        }
    }
    .content{
        display: flex;
        .subtitle{
            font-size: 1rem;
            margin-top: 1vh;
            font-weight: bold;
            color: #ffffff;
            margin-bottom: 2vh;
        }
        .item{
            width: 30%;
            display: inline-block;
            padding: 0 1.5%;
            img{
                width: 100%;
            }
            .content_text{
                background-color: #423a3a;
                padding-bottom: 2vh;
                padding: 2vh;
            }
        }
    }
    .list{
        display: flex;
        .item{
            width: 28%;
            display: inline-block;
            padding: 2.5vh;
            background-color: #143049;
            border-radius: 1vh;
            img{
                height: 35vh;
                margin: 0 auto;
                padding: 0;
                display: block;
            }
            .message{
                margin-top: 2vh;
            }
        }
    }
    .contrast{
        line-height: 8vh;
        background-color: #143049;
        border-radius: 1vh;
        margin-bottom: 15vh;
        table{
            width: 100%;
            padding: 1vh 4vh;
            th{
                width: 30%;
            }
            .border_tb{
                border-top: 1px solid #000000;
                border-bottom: 1px solid #000000;
            }
            td{
                padding: 2vh 0;
                line-height: 4vh;
                p{
                    padding-left: 6vh;
                }
            }
            .list_01{
                background:url("./../assets/list_01.png") no-repeat left;
            }
            .list_11{
                background:url("./../assets/list_11.png") no-repeat left;
            }
            .list_02,  .list_12{
                background:url("./../assets/correct.png") no-repeat left;
            }
            .list_03, .list_13{
                background:url("./../assets/wrong.png") no-repeat left;
            }
        }
    }

</style>