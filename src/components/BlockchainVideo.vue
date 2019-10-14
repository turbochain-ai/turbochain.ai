<template>
    <div class="solution" style="color: white;margin: 0 auto; padding: 0px;margin-top: 64px;">
        <div class="introduce">
            <div class="introduce_box">
                <div class="left">
                        <img  class="Rotation rotation_style"  src="../assets/solution_title_bg.png">
                        <div class="title">SOLUTION</div>
                        <div class="subtitle">{{$t("solution.videoTitle")}}</div>
                </div>
                <div class="right">
                    <p>
                        区块链影视是基于区块链为底层的全球影视产业链条智能化的合作应用平台。
                        <br>将区块链和影视链相结合，利用区块链交易透明化、去中心化、交易不可篡改等特性，
                        支持开支公开化、盈利公开化、分红公开化、流通去中心、资产去中心化，人人都可参与，改变了传统的融资方式，解决了出品方的资金问题。
                    </p>
                </div>
                <a class="more" href="http://springislandlove.openserver.cn/" target="_blank">
                    <span>查看更多</span>
                </a>
            </div>
        </div>
               <div class="demand" >
            <div class="title-box">
                <div class="title">BUSINESS CHALLENGES</div>
                <div class="subtitle">业务痛点及需求</div>
            </div>
            <div class="content">
                <div class="item">
                    <img src="../assets/movie_pic_01.png" alt="" class="img">
                    <!--  <div class="content_text">   </div>-->
                    <p class="subtitle">门槛高、风险大</p>
                    <p class="text">传统影视行业投资成本高，但无法提前锁定观众，确保影片的票房或收视率，随之带来的就是高风险</p>

                </div>
                <div class="item">
                    <img src="../assets/movie_pic_02.png" alt="" class="img">
                    <p class="subtitle">资源分布不均</p>
                    <p class="text">大型影视公司市场资源垄断、中小型影视企业渠道少、资本匮乏、原创人员缺乏作品输出平台，导致好的内容频频流失</p>
                </div>
                <div class="item">
                    <img src="../assets/movie_pic_03.png" alt="" class="img">
                    <p class="subtitle">IP侵权</p>
                    <p class="text">现在影视行业随着IP改编的不断开发，出现了大量的抄袭。更令人尴尬的是，侵权成本低、维权成本高，造成行业侵权成风的乱象</p>
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
                    <img src="../assets/movie_icon_01.png">
                    <p class="message">区块链影视基于影视链的流通，数字资产的特性，和数字钱包货币之间建立一座互通互利的桥梁。</p>
                </li>
                <li class="item">
                    <img src="../assets/movie_icon_02.png">
                    <p class="message">用户可以在区块链影视中交易存储数字资产、进而交易与投资，处理银行业务、进行投资、办理金融、进行影视生产交易，版权成本保护，影视合作共赢等等。</p>
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
                        <p>安全可靠</p>
                    </div>
                    <p class="text">基于区块链技术，将关键信息、资产、资金上链，防止恶意篡改</p>
                </div>
                <div class="item border_lr">
                    <div class="subtitle">
                        <img src="../assets/sample_icon.png">
                        <p>全民参与</p>
                    </div>
                    <p class="text">人人都可参与，改变了传统影视行业融资的方式，在一定程度上解决了出品方资金的问题，在一定程度上可提前锁定票房。</p>
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
                        <p>传统影视行业</p>
                    </th>
                </tr>
                <tr>
                    <td class="border_tb list_01">
                        <p>参与群体</p>
                    </td>
                    <td class="border_tb list_02">
                        <p>人人都可参与</p>
                    </td>
                    <td class="border_tb list_03">
                        <p>大中小型影视公司</p>
                    </td>
                </tr>
                <tr>
                    <td class="list_11">
                        <p>交易信息透明程度</p>
                    </td>
                    <td class="list_12">
                        <p>收支信息公开化，透明程度高</p>
                    </td>
                    <td class="list_13">
                        <p>收支信息不公开，透明程度低</p>
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
        name: "BlockchainVideo"
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
        height: auto;
        min-height: 100vh;
        background:url("./../assets/images/Solution_bg5.jpg") no-repeat center;
        position: relative;
        background-size: cover;
        .introduce_box{
            position: relative;
            width:1000px;
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
                /*background:url("./../assets/solution_title_bg.png") no-repeat center;*/
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
        width: 1200px;
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
                    padding-left: 32px;
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

    @media screen and (max-width: 900px) {
        .rotation_style{
            width: 60%;
            margin-top: -20%;
            margin-left: -7%;
        }
        .summarize, .advantage, .demand, .contrast{
            width: 85vw;
        }

        .summarize{
            .list{
                display: block;
                .item{
                    width: 80vw;
                    padding: 0 2.5vw;
                    margin-bottom: 4vh;
                    .message{
                        width: 90%;
                        margin-bottom: 4vh;
                    }
                }
            }
        }
        .advantage{
            .content{
                .border_lr{
                    border: none;
                }
            }
        }
        .content{
            margin: 0 auto;
            display: block;

            .item{
                width: 100%;
                margin-bottom: 8vh;
            }
        }
        .introduce {
            .introduce_box {
                width: auto;
                .left {
                    width: 85vw;
                    position: relative;
                    margin: 0 auto;
                    padding-top: 15vh;
                    height: auto;
                    .title {
                        text-align:left;
                    }
                    .subtitle {
                        text-align:left;
                    }
                }
                .right {
                    width: 85vw;
                    top: 12vh;
                    position: relative;
                }
            }
        }
    }
</style>
